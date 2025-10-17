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
  el.style.background = "transparent";
  el.style.zIndex = "2147483640"; // below potential interstitials
  el.style.display = "none";
  el.style.alignItems = "center";
  el.style.justifyContent = "center";
  el.style.pointerEvents = "none"; // don't block clicks
  el.style.opacity = "0"; // Start invisible
  el.style.transition = "opacity 0.2s ease-in-out"; // Smooth fade

  // Minimal loader indicator
  const dot = document.createElement("div");
  dot.style.width = "8px"; // Slightly smaller
  dot.style.height = "8px";
  dot.style.borderRadius = "9999px";
  dot.style.background = "#64748b"; // lighter slate for less intrusion
  dot.style.opacity = "0.4"; // More subtle
  dot.style.animation = "adzep-blink 1.5s infinite"; // Slower animation

  const style = document.createElement("style");
  style.textContent = `@keyframes adzep-blink{0%,100%{opacity:.15}50%{opacity:.5}}`; // More subtle animation
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
      // Trigger fade-in after a tiny delay to ensure transition works
      requestAnimationFrame(() => {
        el.style.opacity = "1";
      });
      overlayVisible = true;
    }
  } catch {}
}

export function hideOverlay(): void {
  if (overlayEl && overlayVisible) {
    // Fade out first
    overlayEl.style.opacity = "0";
    // Then hide after transition
    setTimeout(() => {
      if (overlayEl) {
        overlayEl.style.display = "none";
        overlayVisible = false;
      }
    }, 200); // Match transition duration
  }
}

export function destroyOverlay(): void {
  if (overlayEl) {
    overlayEl.remove();
    overlayEl = null;
    overlayVisible = false;
  }
}
