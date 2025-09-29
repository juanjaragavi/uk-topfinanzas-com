/**
 * Utilities to help with deferred loading of JavaScript resources
 * for improved performance, particularly to reduce JavaScript parse time
 * during initial page load.
 */

/**
 * Defers execution of a callback until after browser's "load" event
 * to avoid render-blocking operations during initial page load
 * @param callback The function to execute after page load
 */
export function executeAfterLoad(callback: () => void): void {
  if (typeof window === "undefined") return;

  if (document.readyState === "complete") {
    // If page is already loaded, run callback with minimal delay
    setTimeout(() => callback(), 0);
  } else {
    // Otherwise run after load event
    window.addEventListener("load", () => {
      setTimeout(() => callback(), 100); // Small delay to prioritize other load tasks
    });
  }
}

/**
 * Loads a script asynchronously at runtime to avoid parser blocking
 * @param src URL of the script to load
 * @param id Optional ID for the script tag
 * @param onLoad Optional callback when script loads
 * @param defer Whether to use defer attribute (default: true)
 */
export function loadScriptAsync(
  src: string,
  id?: string,
  onLoad?: () => void,
  defer: boolean = true,
): void {
  if (typeof window === "undefined") return;

  // Check if script already exists to avoid duplicates
  if (id && document.getElementById(id)) {
    if (onLoad) onLoad();
    return;
  }

  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  if (defer) script.defer = true;
  if (id) script.id = id;
  if (onLoad) script.onload = onLoad;

  document.body.appendChild(script);
}

/**
 * Loads a script after the page has fully loaded (combines both techniques)
 * @param src URL of the script to load
 * @param id Optional ID for the script tag
 * @param onLoad Optional callback when script loads
 */
export function loadScriptDeferred(
  src: string,
  id?: string,
  onLoad?: () => void,
): void {
  executeAfterLoad(() => loadScriptAsync(src, id, onLoad));
}
