function TwitterShare() {
var selectedText = window.getSelection().toString();
var currentUrl = encodeURIComponent(window.location.href);
const hashtags = generateHashtags(selectedText);

var twitterUrl = "https://twitter.com/share?url=" + currentUrl + "&text=" + encodeURIComponent(selectedText) + "&via=<USERNAME>&hashtags=<HASHTAGS>";
window.open(twitterUrl, "_blank");
}

// create a function that takes in a string of text
function generateHashtags(text) {
// split the text into individual words
const commonWords = ['the', 'and', 'a', 'to', 'of', 'in', 'for', 'on', 'with'];
const words = text.split(' ');
// create an empty array to store the hashtags
const hashtags = [];
// loop through the words
for (const word of words) {
// convert the word to lowercase and remove any punctuation
const cleanedWord = word.toLowerCase().replace(/[^\w\s]/g, '');
// check if the word is not empty or a common word (e.g. the, and, a, etc.)
if (cleanedWord && !commonWords.includes(cleanedWord)) {
// add the word as a hashtag to the array
hashtags.push(#${cleanedWord});
}
}
// return the array of hashtags
return hashtags;
}