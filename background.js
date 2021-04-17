console.log("background: nyaa addon");

const baseUrl = chrome.extension.getURL("html/index.html");
console.log(baseUrl);

chrome.storage.sync.set({ baseUrl }, function () {
  console.log("Value is set");
});