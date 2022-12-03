function TwitterShare() {
var selectedText = window.getSelection().toString();
var currentUrl = encodeURIComponent(window.location.href);
var twitterUrl = "https://twitter.com/share?url=" + currentUrl + "&text=" + encodeURIComponent(selectedText) + "&via=<USERNAME>&hashtags=<HASHTAGS>";
window.open(twitterUrl, "_blank");
}
