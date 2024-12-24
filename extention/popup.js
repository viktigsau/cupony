document.addEventListener('DOMContentLoaded', () => {
    // Get the active tab
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        const activeTab = tabs[0];
        const url = new URL(activeTab.url); // Parse the URL
        const domain = url.hostname; // Get the domain

        const cuponsElement = document.getElementById("cupons");

        loadCupons(domain, cuponsElement);
    }).catch(error => {
        console.error('Error getting domain:', error);
    });
});