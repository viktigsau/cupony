let domain = null;

document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById("cupons");

    // Get the active tab
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        const url = new URL(tabs[0].url);
        domain = url.hostname;
        loadCupons(domain, element);
    });
});