const input = document.querySelector('div .signup-submit-wrap > #email');
const button = document.querySelector('div .signup-submit-wrap > button[data-testid=mr-form-sso-btn-signin-1]');

const emailAddress = chrome.storage.local.get(['miroEmailAddress'], (result) => result);

if (emailAddress && typeof emailAddress === 'string') {
    input.value = emailAddress;
    button.click();
}

console.log('Please enter an email address in options');

