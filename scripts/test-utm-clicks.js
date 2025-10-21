/**
 * UTM Click Handler Test Script
 *
 * This script tests the fix for the double-click issue when UTM parameters
 * are present in the URL.
 *
 * Usage:
 * 1. Open browser dev console
 * 2. Copy and paste this entire script
 * 3. Run the test by calling: testUTMClickHandling()
 * 4. Follow the on-screen instructions
 */

(function () {
  window.testUTMClickHandling = function () {
    console.log(
      "%c🧪 UTM Click Handler Test Started",
      "background: #4CAF50; color: white; padding: 5px 10px; border-radius: 3px;",
    );
    console.log("");

    // Test 1: Check if UTM parameters are present
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];
    const foundParams = utmParams.filter((param) => urlParams.has(param));

    console.log("📊 Test 1: UTM Parameters Detection");
    if (foundParams.length > 0) {
      console.log("✅ Found UTM parameters:", foundParams.join(", "));
      foundParams.forEach((param) => {
        console.log(`   - ${param}: ${urlParams.get(param)}`);
      });
    } else {
      console.log("⚠️ No UTM parameters found in URL");
      console.log(
        "   To test with UTM parameters, append to URL: ?utm_source=test&utm_medium=test",
      );
    }
    console.log("");

    // Test 2: Monitor click events
    let clickAttempts = 0;
    let successfulClicks = 0;
    const clickHandlers = new Map();

    console.log("🖱️ Test 2: Click Event Monitoring");
    console.log("Setting up click monitors on all interactive elements...");

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"]',
    );
    console.log(`Found ${interactiveElements.length} interactive elements`);
    console.log("");

    interactiveElements.forEach((element, index) => {
      const handler = function (e) {
        clickAttempts++;
        successfulClicks++;

        const elementInfo = {
          tag: element.tagName,
          text: element.textContent?.substring(0, 50)?.trim() || "(no text)",
          href: element.getAttribute("href") || "(no href)",
          id: element.id || "(no id)",
          class: element.className || "(no class)",
        };

        console.log(
          `✅ Click ${successfulClicks}/${clickAttempts}: ${elementInfo.tag} clicked successfully`,
        );
        console.log(`   Text: "${elementInfo.text}"`);
        console.log(`   Href: ${elementInfo.href}`);

        // Check if URL was modified during click
        setTimeout(() => {
          const currentParams = new URLSearchParams(window.location.search);
          const currentUTMs = utmParams.filter((param) =>
            currentParams.has(param),
          );
          if (currentUTMs.length > 0) {
            console.log(
              `   ℹ️ UTM parameters still present after click: ${currentUTMs.join(", ")}`,
            );
          }
        }, 50);
      };

      clickHandlers.set(element, handler);
      element.addEventListener("click", handler, {
        once: false,
        passive: true,
      });
    });

    console.log("✅ Click monitoring active");
    console.log("");
    console.log("📝 Instructions:");
    console.log("1. Click on any button or link on the page");
    console.log("2. Watch this console for click success messages");
    console.log(
      "3. Each element should respond to FIRST click (no double-click needed)",
    );
    console.log("4. Run stopUTMTest() to stop monitoring");
    console.log("");

    // Test 3: Check for URL replacement interference
    let urlChangeDetected = false;
    const originalUrl = window.location.href;

    const urlMonitor = setInterval(() => {
      if (window.location.href !== originalUrl && !urlChangeDetected) {
        urlChangeDetected = true;
        console.log("🔄 URL Change Detected");
        console.log(`   From: ${originalUrl}`);
        console.log(`   To: ${window.location.href}`);

        // Check if change happened during interaction
        if (window.userIsInteracting !== undefined) {
          console.log(`   User interacting: ${window.userIsInteracting}`);
        }
      }
    }, 100);

    // Store cleanup function
    window.stopUTMTest = function () {
      console.log("");
      console.log(
        "%c🛑 Stopping UTM Click Handler Test",
        "background: #f44336; color: white; padding: 5px 10px; border-radius: 3px;",
      );
      console.log("");
      console.log("📊 Test Results:");
      console.log(`   Total click attempts: ${clickAttempts}`);
      console.log(`   Successful clicks: ${successfulClicks}`);
      console.log(
        `   Success rate: ${clickAttempts > 0 ? Math.round((successfulClicks / clickAttempts) * 100) : 0}%`,
      );
      console.log(
        `   URL changes detected: ${urlChangeDetected ? "Yes" : "No"}`,
      );

      if (successfulClicks === clickAttempts && clickAttempts > 0) {
        console.log("");
        console.log("✅ All clicks successful on first attempt!");
      } else if (clickAttempts > 0) {
        console.log("");
        console.log("⚠️ Some clicks may have failed. Check logs above.");
      }

      // Cleanup
      interactiveElements.forEach((element) => {
        const handler = clickHandlers.get(element);
        if (handler) {
          element.removeEventListener("click", handler);
        }
      });

      clearInterval(urlMonitor);
      clickHandlers.clear();

      console.log("");
      console.log("Cleanup complete. Test monitoring stopped.");
    };

    console.log("");
    console.log(
      "💡 Tip: Open DevTools Network tab to see if router.replace() calls happen during clicks",
    );
    console.log("");
  };

  console.log(
    "%cUTM Click Handler Test Script Loaded",
    "background: #2196F3; color: white; padding: 5px 10px; border-radius: 3px;",
  );
  console.log("Run testUTMClickHandling() to start testing");
})();
