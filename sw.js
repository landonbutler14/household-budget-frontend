// Minimal service worker: required for "Add to Home Screen" installability.
// Intentionally does no caching, since this app should always show live data.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", () => {});
