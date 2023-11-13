const form = document.getElementById("cleanerForm"); // define form to get data from
const longURL = form.elements["fullURL"]; // get url to shorten
const regex = /&\w+\[\w+]=(?=&)/g; // regex used to removed unsused parameters

// shorten url
function cleanURL() {
    const decodedURL = decodeURI(longURL.value); // decode url encoding
    const shortURL = decodedURL.replace(regex, ""); // remove unsued paramaters
    document.getElementById('URLResult').value = shortURL; // display result
}

// clear input
function clearInput() {
    document.getElementById('fullURL').value = "";
}

// copy short url to clipboard
function copyToClip() {
    var copiedText = document.getElementById("URLResult");
    copiedText.select();
    copiedText.setSelectionRange(0, 99999); // for mobile devices
    navigator.clipboard.writeText(copiedText.value);
}

// open short url in new tab
function openNewTab() {
    var shortURL = document.getElementById("URLResult");
    window.open(shortURL.value, "_blank").focus();
}