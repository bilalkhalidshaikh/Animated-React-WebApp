// sw.js

let cache_name = "SimiCart"; // The string used to identify our cache

self.addEventListener("install", (event) => {
  console.log("installing...");
  event.waitUntil(
    caches
      .open(cache_name)
      .then((cache) => {
        return cache.addAll(assets);
      })
      .catch((err) => console.log(err))
  );
});

// sw.js
self.addEventListener("fetch", (event) => {
  console.log("You fetched " + event.url);
});

self.addEventListener("fetch", (event) => {
  console.log("You fetched " + event.url);
});
