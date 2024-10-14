self.addEventListener("install", (event) => {
  console.log(event);
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log(event);
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  console.log(event);
});

chrome.runtime.onInstalled.addListener((reason) => {
  console.log(reason);
});
