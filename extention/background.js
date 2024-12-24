// Listen for tab updates
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the URL has changed
    if (changeInfo.url) {
        const url = new URL(changeInfo.url);
        const domain = url.hostname; // Extract the domain
        console.log(`Tab ${tabId} navigated to domain: ${domain}`);
    }
});
