function loadWebsite() {
    var urlInput = document.getElementById('urlInput').value;
    if (!urlInput.startsWith('http://') && !urlInput.startsWith('https://')) {
        urlInput = 'http://' + urlInput;
    }
    document.getElementById('webIframe').src = urlInput;
}
