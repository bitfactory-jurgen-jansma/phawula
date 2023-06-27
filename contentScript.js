chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // listen for messages sent from background.js
        if (request.message === 'link-changed' && window.location.href.includes('https://portal.bitfactory.nl/ticket/')) {
            const button = document.querySelector('[data-action="COMMENT"]');

            if (button) {
                button.click();
            }
        }
    });

window.addEventListener("load", () => {
    if (window.location.href.includes('https://portal.bitfactory.nl/ticket/')) {
        const button = document.querySelector('[data-action="COMMENT"]');

        if (button) {
            button.click();
        }
    }
}, false);

