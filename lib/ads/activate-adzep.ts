// SPA-safe AdZep activation with retries and page readiness checks

import { adZepConfig } from "@/lib/ads/config";

// Global state (singleton per module instance)
const state = {
  activated: false,
  activationInProgress: false,
  lastActivation: 0,
  activationAttempts: 0,
};

export type ActivateOptions = {
  force?: boolean;
  timeout?: number; // ms to wait for window.AdZepActivateAds to appear
  retryAttempts?: number; // attempts for discovering the function
  retryDelay?: number; // delay between attempts
};

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export function pageHasAdUnits(): boolean {
  if (typeof document === "undefined") return false;
  return adZepConfig.containerSelectors.some((sel) =>
    document.querySelector(sel),
  );
}

export function waitForContainers(timeoutMs: number): Promise<boolean> {
  if (typeof document === "undefined") return Promise.resolve(false);
  const start = Date.now();

  return new Promise((resolve) => {
    if (pageHasAdUnits()) return resolve(true);

    const observer = new MutationObserver(() => {
      if (pageHasAdUnits()) {
        observer.disconnect();
        resolve(true);
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    const t = setTimeout(() => {
      observer.disconnect();
      resolve(pageHasAdUnits());
    }, timeoutMs);

    // Safety: if page becomes hidden and visible again, recheck
    document.addEventListener(
      "visibilitychange",
      () => {
        if (!document.hidden && pageHasAdUnits()) {
          observer.disconnect();
          clearTimeout(t);
          resolve(true);
        }
      },
      { once: true },
    );
  });
}

export function hasRenderedCreative(container: Element | null): boolean {
  if (!container) return false;
  // If container contains an iframe or non-empty element, treat as rendered
  const iframe = container.querySelector("iframe");
  if (iframe) return true;
  // non-empty children with size
  for (const child of Array.from(container.children)) {
    const el = child as HTMLElement;
    if (el && (el.childElementCount > 0 || el.textContent?.trim())) {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) return true;
    }
  }
  return false;
}

async function waitForAdZepFunction(
  options?: ActivateOptions,
): Promise<boolean> {
  const timeout = options?.timeout ?? adZepConfig.defaultActivationTimeoutMs;
  const attempts = options?.retryAttempts ?? adZepConfig.defaultRetryAttempts;
  const delay = options?.retryDelay ?? adZepConfig.defaultRetryDelayMs;

  const start = Date.now();
  let tries = 0;

  while (Date.now() - start < timeout + tries * delay) {
    if (
      typeof window !== "undefined" &&
      typeof window.AdZepActivateAds === "function"
    ) {
      return true;
    }
    if (tries >= attempts) break;
    tries += 1;
    await sleep(delay);
  }

  return (
    typeof window !== "undefined" &&
    typeof window.AdZepActivateAds === "function"
  );
}

// Serialize activations; if in progress, short-circuit unless force
export async function activateAdZep(options?: ActivateOptions): Promise<{
  success: boolean;
  reason?: string;
  attempts: number;
  startedAt: number;
  finishedAt: number;
}> {
  const startedAt = Date.now();

  if (state.activationInProgress) {
    if (options?.force) {
      // Wait a tiny bit to avoid immediate overlap
      await sleep(150);
    } else {
      return {
        success: false,
        reason: "activation-in-progress",
        attempts: state.activationAttempts,
        startedAt,
        finishedAt: Date.now(),
      };
    }
  }

  if (state.activated && !options?.force) {
    return {
      success: true,
      attempts: state.activationAttempts,
      startedAt,
      finishedAt: Date.now(),
      reason: "already-activated",
    };
  }

  state.activationInProgress = true;
  state.activationAttempts += 1;

  try {
    const found = await waitForAdZepFunction(options);
    if (!found) {
      return {
        success: false,
        reason: "adzep-fn-missing",
        attempts: state.activationAttempts,
        startedAt,
        finishedAt: Date.now(),
      };
    }

    try {
      window.AdZepActivateAds?.();
      state.activated = true;
      state.lastActivation = Date.now();
      return {
        success: true,
        attempts: state.activationAttempts,
        startedAt,
        finishedAt: Date.now(),
      };
    } catch (err) {
      return {
        success: false,
        reason: "adzep-call-error",
        attempts: state.activationAttempts,
        startedAt,
        finishedAt: Date.now(),
      };
    }
  } finally {
    state.activationInProgress = false;
  }
}
