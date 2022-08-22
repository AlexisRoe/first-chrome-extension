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

function storeData (event) {
    const { id, checked } = event.target;
    options[id] = checked;

    // set data if extension storage is available
    if (chrome?.storage?.local) {
        chrome.storage.local.set({ flags: options });
    }
}

function initiate() {

    // get data from extension storage if available
    if (chrome?.storage?.local) {
        chrome.storage.local.get(['flags'], function (result) {
            if (!inputElementMiro && inputElementRoomz) return;
            options = {
                miro: Boolean(result?.flags?.miro),
                roomz: Boolean(result?.flags?.roomz),
            }
        });
    }
    
    // set default states
    inputElementMiro.checked = options.miro;
    inputElementRoomz.checked = options.roomz;

    // event listener
    inputElementMiro.addEventListener('change', storeData);
    inputElementRoomz.addEventListener('change', storeData);
}

initiate();