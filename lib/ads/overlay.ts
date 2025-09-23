// Lightweight page overlay to guard article pages while ad units initialize.
// Designed to be unobtrusive and interstitial-friendly.

let overlayEl: HTMLDivElement | null = null;
let overlayVisible = false;

function buildOverlay(): HTMLDivElement {
  const el = document.createElement("div");
  el.id = "adzep-article-overlay";
  el.style.position = "fixed";
  el.style.bottom = "24px";
  el.style.right = "24px";
  el.style.width = "auto";
  el.style.height = "auto";
  el.style.background = "transparent"; // Remove white background
  el.style.zIndex = "2147483640"; // below potential interstitials that often use 2147483647
  el.style.display = "none";
  el.style.alignItems = "center";
  el.style.justifyContent = "center";
  el.style.pointerEvents = "none"; // don't block clicks; we only show as visual guard

  // Minimal loader indicator
  const dot = document.createElement("div");
  dot.style.width = "10px";
  dot.style.height = "10px";
  dot.style.borderRadius = "9999px";
  dot.style.background = "#1e293b"; // slate-800
  dot.style.opacity = "0.6";
  dot.style.animation = "adzep-blink 1s infinite";

  const style = document.createElement("style");
  style.textContent = `@keyframes adzep-blink{0%,100%{opacity:.2}50%{opacity:1}}`;
  el.appendChild(style);
  el.appendChild(dot);
  return el;
}

export function ensureOverlay(): HTMLDivElement {
  if (typeof window === "undefined" || typeof document === "undefined") {
    throw new Error("overlay must be used client-side");
  }
  if (!overlayEl) {
    overlayEl = buildOverlay();
    document.body.appendChild(overlayEl);
  }
  return overlayEl;
}

export function showOverlay(): void {
  try {
    const el = ensureOverlay();
    if (!overlayVisible) {
      el.style.display = "flex";
      overlayVisible = true;
    }
  } catch {}
}

export function hideOverlay(): void {
  if (overlayEl && overlayVisible) {
    overlayEl.style.display = "none";
    overlayVisible = false;
  }
}

export function destroyOverlay(): void {
  if (overlayEl) {
    overlayEl.remove();
    overlayEl = null;
    overlayVisible = false;
  }
}
