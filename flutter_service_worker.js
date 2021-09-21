'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c9a410b39f1feccbed5c2b8f475c6009",
".git/config": "6e9e7ce479bf3f1815e71f3b0b4a46c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a131152afcc8de99781bcf2fb34b6aba",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "1eb5f20db5de2fbe1774859f6a6510a8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1774aee9717fcc99b1f453dece52863f",
".git/logs/refs/heads/master": "1774aee9717fcc99b1f453dece52863f",
".git/logs/refs/remotes/origin/HEAD": "d7c3cb83b793af675bd0f54696b8c874",
".git/logs/refs/remotes/origin/master": "5cffecb90025e0d6741819d254e5823e",
".git/objects/08/dde594a41979760746689ad42d8f71a6d66406": "8f24ea0db0883b074cde936ebe9ca8f2",
".git/objects/13/854399fdfdcfc75b94333bb025ca65e153a3b6": "e8d9aefecd240f1273e31e0af07eac05",
".git/objects/c3/44e9c361d995cea1fceb554cc1d3bb4254104b": "58927426688dedc9104734c1da89e49f",
".git/objects/f4/1f31a262c5eb39028f24615948e84466325154": "5a8ebd08892d889065b2b3e1f4c830d6",
".git/objects/fc/3dccb9c5d776de182f8536a1cc94ba7ffb1144": "25d362864486e6d128e0a5d6e95c87cb",
".git/objects/pack/pack-bab558b51c506b8c0a80d4ceb79bf3a6c12d788a.idx": "103d91d94c983145bf265a82695c3308",
".git/objects/pack/pack-bab558b51c506b8c0a80d4ceb79bf3a6c12d788a.pack": "90c04b05d17989d731f2bacc16787453",
".git/ORIG_HEAD": "9b06a60b451f84e248f9d8f48891bdfb",
".git/packed-refs": "eb3705740b88bb27a998763b3714866e",
".git/refs/heads/master": "9b06a60b451f84e248f9d8f48891bdfb",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "9b06a60b451f84e248f9d8f48891bdfb",
".git/sourcetreeconfig.json": "0b2a56d7f646cc94d04fd7c60f0fccb4",
"assets/AssetManifest.json": "bdfcdaed3087e18fee5a954605cda9a8",
"assets/assets/fonts/Rubik-Italic.ttf": "d8e3125b4c93f7591a5c1ad87ef7cd87",
"assets/assets/fonts/Rubik-Regular.ttf": "c8041f987a7c34d176ad7014374a29cf",
"assets/assets/fonts/WorkSans-Italic.ttf": "572bbe993a835da6881031b08ec32490",
"assets/assets/fonts/WorkSans-Regular.ttf": "3648344fc745a9f1c78bdac727bb40bc",
"assets/assets/images/chocolate.jpg": "a3731b883507ca0731408dd994bcc5a9",
"assets/assets/images/img123.jpg": "8a2d1f4b80691915067a6c3d6a021652",
"assets/assets/images/logo.jpg": "934b7b080607f68122f3772f27f92fad",
"assets/assets/images/profile.jpg": "8565663bc9007ed68ec6f4df34501708",
"assets/FontManifest.json": "2a40dcf6e2be62493d4e0f62f1840efb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0ea22bca5f746ffadd1cdad32b9c6ee5",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd414d843fabef893727061253c21776",
"/": "fd414d843fabef893727061253c21776",
"main.dart.js": "5f00aa76792402f3aae4be2e5cb54c14",
"manifest.json": "287015e56d3c65c0e1410c3e5b5bb8a3",
"version.json": "4f17588c79b6635be5446559c4fbcafe"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
