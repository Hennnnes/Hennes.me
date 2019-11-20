var CACHE_NAME = "hennes.me-v3.1.1";
var urlsToCache = ["/", "/sw.js"];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
