const microsoftImg = document.querySelector('a div img[alt="Sign in with Microsoft"]');
const microsoftLink = microsoftImg?.parentElement?.parentElement;

chrome.storage.local.get(['flags'], function (result) {
    if (!microsoftLink || result?.flags?.roomz !== true) return;
    microsoftLink.click();
});
