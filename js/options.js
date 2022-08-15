const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const button = document.getElementById('save_miro_address');
const emailInput = document.getElementById('miro_email');

emailInput.value = chrome.storage.local.get(['miroEmailAddress'], (result) => result);

button.addEventListener('click', () => {
    const emailAddress = emailInput.value;
    if (!emailRegex.test(emailAddress)) return;
    chrome.storage.local.set({ miroEmailAddress:  emailAddress });
});