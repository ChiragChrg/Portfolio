let hasLoadedEnhancements = false;

type IdleWindow = Window & {
    requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
    ) => number;
};

/**
 * Dynamically imports the script containing enhancements when the user interacts with the page or after a short delay, 
 * ensuring that the initial load is fast and that enhancements are loaded in a non-blocking manner.
 * The script is only loaded once, even if multiple events trigger the load function.
 */
function loadEnhancements() {
    if (hasLoadedEnhancements) return;

    hasLoadedEnhancements = true;
    void import("./script");
}

/**
 * Schedules the loading of enhancements using requestIdleCallback if available, or falls back to a setTimeout. 
 * This ensures that the enhancements are loaded during idle periods, improving the overall performance and user experience of the page.
 */
function scheduleEnhancementsLoad() {
    const idleWindow = window as IdleWindow;

    if (typeof idleWindow.requestIdleCallback === "function") {
        idleWindow.requestIdleCallback(() => {
            loadEnhancements();
        }, { timeout: 1500 });
        return;
    }

    window.setTimeout(() => {
        loadEnhancements();
    }, 1200);
}

// Load enhancements after the page has fully loaded or when the user interacts with the page, whichever comes first.
if (document.readyState === "complete") {
    scheduleEnhancementsLoad();
} else {
    window.addEventListener("load", scheduleEnhancementsLoad, { once: true });
}

// Also listen for user interactions to load enhancements sooner if the user engages with the page before the idle callback is triggered.
["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, loadEnhancements, {
        once: true,
        passive: true,
    });
});
