const CacheName = "Chrg-V-1.5";
const CacheList = [
    "Icons/144.png",
    "Icons/192.png",
    "Icons/512.png",
    "favicon.png",
];

//Installing Service Worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CacheName).then((cache) => {
            console.log("Checking Cache");
            return cache.addAll(CacheList);
        })
    );
});

//Fetching Service Worker
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

//Activating Service Worker
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CacheName) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});