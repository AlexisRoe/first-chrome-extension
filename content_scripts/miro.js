const input = document.querySelector('#email');
const button = document.querySelector('button[data-testid=mr-form-sso-btn-signin-1]');

chrome.storage.local.get(['email', 'flags'], function (result) {
    if (!input || !button || result?.flags?.miro !== true) return;

    const { email } = result;
    if (!email || typeof email !== 'string') {
        console.log('Please enter an email address in options');
        return;
    };

    input.value = email;
    button.click()
});
