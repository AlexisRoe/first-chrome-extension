const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const button = document.getElementById('save_miro_address');
const emailInput = document.getElementById('miro_email');

chrome.storage.local.get(['email'], function (result) {
    const { email } = result;
    console.log('Value is currently ' + result);
    if (!email || typeof email !== 'string') return;
    emailInput.value =  email;
});

button.addEventListener('click', () => {
    const emailAddress = emailInput.value;
    if (!emailAddress || typeof emailAddress !== 'string' || !emailRegex.test(emailAddress)) return;
    chrome.storage.local.set({ email:  emailAddress });
});
