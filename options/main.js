const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const elements = {
    miro: 'miro',
    roomz: 'roomz'
}

let options = {
    [elements.miro]: false,
    [elements.roomz]: false,
};

// get inputElements
const inputElementMiro =  document.getElementById(elements.miro);
const inputElementRoomz =  document.getElementById(elements.roomz);
const button = document.getElementById('save_miro_address');
const emailInput = document.getElementById('miro_email');

chrome.storage.local.get(['email'], function (result) {
    if (!emailInput) return;
    const { email } = result;
    if (!email || typeof email !== 'string') return;
    emailInput.value =  email;
});

chrome.storage.local.get(['flags'], function (result) {
    if (!inputElementMiro && inputElementRoomz) return;
    options = {
        miro: Boolean(result?.flags?.miro),
        roomz: Boolean(result?.flags?.roomz),
    };
    inputElementMiro.checked = options.miro;
    inputElementRoomz.checked = options.roomz;
});

// event listener
function storeFlags (event) {
    const { id, checked } = event.target;
    options[id] = checked;
    chrome.storage.local.set({ flags: options });
}

inputElementMiro.addEventListener('change', storeFlags);
inputElementRoomz.addEventListener('change', storeFlags);

button.addEventListener('click', () => {
    const emailAddress = emailInput.value;
    if (!emailAddress || typeof emailAddress !== 'string' || !emailRegex.test(emailAddress)) return;
    chrome.storage.local.set({ email:  emailAddress });
});
