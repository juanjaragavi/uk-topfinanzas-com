// Lightweight page overlay to guard article pages while ad units initialize.
// Designed to be unobtrusive and interstitial-friendly.
// 
// ⚠️ OVERLAY FUNCTIONALITY DISABLED ⚠️
// The overlay was causing unsolicited blur that blocks page content.
// All functions are now no-ops to prevent any visual interference.
// AdZep activation continues to work normally without the overlay.

let overlayEl: HTMLDivElement | null = null;
let overlayVisible = false;

function buildOverlay(): HTMLDivElement {
  // DISABLED: Return empty div that will never be displayed
  const el = document.createElement("div");
  el.id = "adzep-article-overlay-disabled";
  el.style.display = "none";
  return el;
}

export function ensureOverlay(): HTMLDivElement {
  // DISABLED: No-op - returns dummy element
  if (typeof window === "undefined" || typeof document === "undefined") {
    const dummy = document.createElement("div");
    dummy.style.display = "none";
    return dummy;
  }
  if (!overlayEl) {
    overlayEl = buildOverlay();
  }
  return overlayEl;
}

export function showOverlay(): void {
  // DISABLED: No-op - overlay will never be shown
  // This function is intentionally empty to prevent overlay display
  return;
}

export function hideOverlay(): void {
  // DISABLED: No-op - nothing to hide
  // This function is intentionally empty
  return;
}

export function destroyOverlay(): void {
  // DISABLED: No-op - nothing to destroy
  if (overlayEl) {
    overlayEl.remove();
    overlayEl = null;
    overlayVisible = false;
  }
}
