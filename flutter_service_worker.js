'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "66d28ba806c38088d846f7b74901cbe4",
".git/config": "6e9e7ce479bf3f1815e71f3b0b4a46c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8731356d88f559fce26f93459e59eca3",
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
".git/index": "7cfaedab66c71d49feb8f47e336d30fa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e99d2c3062f2f63bd81ef1a5a05a431d",
".git/logs/refs/heads/master": "e99d2c3062f2f63bd81ef1a5a05a431d",
".git/logs/refs/remotes/origin/HEAD": "d7c3cb83b793af675bd0f54696b8c874",
".git/logs/refs/remotes/origin/master": "8a4b45b18808289219b7dfdc1e5692bf",
".git/objects/02/554cd4313284e2119df4409ab99f93a644cf10": "9c38ad708541574077b4c06878149197",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/8a555b8cb992fbbb18e5540a53f3b30ac95a49": "939258672635d4c4a6108b582b329a2c",
".git/objects/08/a38631312060606c99af96d05787d0b567b40c": "6d0b2ea22c838439a58b0658eb355d55",
".git/objects/08/dde594a41979760746689ad42d8f71a6d66406": "8f24ea0db0883b074cde936ebe9ca8f2",
".git/objects/0e/28fcabb43ea5c7f3196f34c6c441c0f753decc": "8aad6398b25304e8a0de74a57dc88cb0",
".git/objects/0e/f8eda7bb9d6cb0996c4a8d24d2ea171eaeccc1": "7d3d43eeccfed59283a80c857d9ca804",
".git/objects/13/854399fdfdcfc75b94333bb025ca65e153a3b6": "e8d9aefecd240f1273e31e0af07eac05",
".git/objects/13/eabff2dccfb47ddd220986a501417294354c56": "044297891fcb0db4843d2fbeb38aea9b",
".git/objects/14/fc36e0b35c5e207c3f77088ca253824818cb89": "b01b179649fbe42573ce868e01a7fcf2",
".git/objects/19/389f73a1398f05cb3540addd14c0f18c67d4e5": "2736f0fe0077a4ee25486a3e6e99a0b6",
".git/objects/19/957d619f3a7dac54198e96a7de321a4637ee1c": "3555d7a016d82033544a7ba944a95c22",
".git/objects/1a/3e612b74a1893e5bdc7fb2e16a8e386f1f5c82": "9e7add4a1bd8113801c7924d2de7da99",
".git/objects/20/f78799f043035bc78e7b20e0f5369aaf45e381": "c59e59be6ccdfc1750a9c4da832a3bc9",
".git/objects/22/8dba7afa2ba991c341d0a1f1ab40d17e56ade8": "89efc525060c618ddcf2d6ecba3d824d",
".git/objects/27/982aaf2a7411672130f286f1137ece14d9968e": "029d9de2eb2275a1fb47cff7781156c4",
".git/objects/2b/36c6b521ffb4f22205a9863464dab7df27cc94": "83ed0693ca5e9512bb27bf9784c9704e",
".git/objects/2d/919a79fb401f6685cc284a71124adbbbfbed4e": "513679939ec1f38c969cc6e76995debe",
".git/objects/2e/8f2b84a990a07acdf1f6e4435dca267e2aca3c": "2e097ad338cb51ce7852c99fddc38358",
".git/objects/34/b213349dd2f3b4c65d73bd60b6e000e5a620f2": "27989a340e360fd2351f1f067f99845f",
".git/objects/36/74e02eea86575f550be3b3fb7dff0069ca5307": "32f4201fba289c2c31a3f3e9bbd7f6b1",
".git/objects/39/040129e6b5503d1fea6425e802ea32410cee90": "29265dbcd2cd35b77a57e2c43eb98676",
".git/objects/43/66cd7ab9d5e339b9929a8457181e1902b1c779": "a29d02da5890e226c1c6d19873a58c15",
".git/objects/44/84ff7212ea80e67b192bdaa4b6785ce8f1b4e7": "260e126d0c5560ff0be78ab9e5d96fdd",
".git/objects/47/d69d112fc903fbeeadfa994f5c549e7bf2e73c": "feb42d3da5080cee14b7d569e900e1dc",
".git/objects/48/5627c3f24a00b9ef9643a89017afe39748d299": "dbe68df99deabafd0834c89fb716db34",
".git/objects/49/5437b515081ae495dc09746d3adf0ba71ff7ab": "336aace3ad4686f5e48dbec6e7190e7b",
".git/objects/51/0bcbdfebb066d317b22cf9a3e5fc6ae3c3bffa": "462034e57dc8be584894a40e317f7614",
".git/objects/54/f888c45e703ea14bc84ff2348b963e70643c67": "5f1e24e7ce299cb27c3095a582375270",
".git/objects/55/0c953f2e8256564ebda30afb563421485a1c0b": "2c2a9002d9b400af34a2f66eda26d2d5",
".git/objects/56/e586180787636c1ec98ba45814c2af4c5bd59c": "e950c8f8dc70a5c877e3e31001ba61d5",
".git/objects/57/591e07cb6b0868ce3dc9323c8af088cc27aba5": "e1310320d866b543de19fb78394ce2f9",
".git/objects/5a/49856861a15d171d76d916667ec3747558e789": "e023f3444625561dac7ee5f3a8c46409",
".git/objects/5b/8ee0d3f9a7e289d0d897121217b19859105953": "bdb2ff55e6507b2864b6ad19a41d3442",
".git/objects/67/cbb78bd9e72d0f8b10b5191e2a3babf1be2559": "fab4226d9a6076b03975b293e94679a7",
".git/objects/6f/f6068e2336101f939c4f3f414947d3c8ff0bcf": "4cefc4d5bf026a8146ee39af4dfce363",
".git/objects/71/c2c259092f671117507191fe73c467a2f4a338": "b3cefcfcc575158013ca9ac9a421f4a5",
".git/objects/72/651c7aec3dc0ba9ab4f93f31485e87be70b19a": "4d35c0ae779213cc059733fc13d88868",
".git/objects/73/266196ce37f4f473898da9adccaef29e7b1a6c": "1703ff1bc2c43036c9f62b47f8e29ac1",
".git/objects/78/a782d6c4a652b13cf25fb458ae10ee41c42e68": "a8e072c3cf6f4ae06ec9f19693378541",
".git/objects/82/4042c16ccec9432fb7a48a75c1194f9382103a": "8d7eac80390d167d91daa258fbe66209",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/84/528146d2524a8d410008a1206a70d0b0b9729e": "3e1f480b706c37ffd506dd198dae9d89",
".git/objects/85/98dc04cf3fe87592bde6b1acb204e7976093cb": "720a855dcbe6ca6ba605383bc1366003",
".git/objects/86/a2597efa0e45aafda8ae01b9d99f7855c4ea48": "8bddd9fa360011c22cd6d27129e82d99",
".git/objects/88/59955a722bcdc2efe95a89fcd00be7f8a2b112": "8c0e220134cf2a9cbdd90db3831cacf7",
".git/objects/90/ae53076a5b24a74f277b5e4dcd925d5b0ccae6": "a956dfbc5480737fbd343ead214ba2b2",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/98/4fd2c16d800761d3a610148bd184c0fc689b71": "2c038222e371d30390547004085931ce",
".git/objects/a6/a68b801a01d1ed801664d5dcc5b56189323f51": "664db32d10e93ef1412d675220da9235",
".git/objects/ab/7f33a2e43bda644d965b067e1874bb39e75b03": "04a0a682e0b96a05035626423877e1e9",
".git/objects/b2/643290eed9a584044aaa95c6f8d2d2fe37af0d": "a4fddb1adf3ba17b9675297f329bc172",
".git/objects/b6/42a6d1664db2ac2106adad07c636b5c99df78e": "463e4f12a6f66b0c56645a44061fa880",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/c3/44e9c361d995cea1fceb554cc1d3bb4254104b": "58927426688dedc9104734c1da89e49f",
".git/objects/c3/b9f8218d9fb2e2d95ada10e30bf037ae070b4c": "99e60a6a86be2fdff537d8eda3c8e99b",
".git/objects/c6/53f65df258d05e73009b585de684b74e246436": "419c3863c8493fcdfb0707d9cc4fa67a",
".git/objects/c9/f68105fcd416ab4c9501eebe8192898335fcae": "16d5d09d5a8c5cc30356b0a5afb44d75",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/d0/6fd5fada486b4faf48220bdbf186ba3d2b7a35": "2b7a7c2f9db0db2bedc252cb30664441",
".git/objects/d6/c0f218251f4d91e0d389ad454035c4cad2f671": "0219b5d4934de1f2f20c1dda9ed174bc",
".git/objects/d9/867f371c3fed977097f352e8d8833bba131b1b": "eb7f06e7e476c12d5ea3e31c8a7f2c8e",
".git/objects/dd/388098bb738a5394edc680227a46b6cf5c6c61": "edf4d3e9ac5592e1cdaad991df2a3579",
".git/objects/e0/a28d62cc114f7ab51b499fd1263447a68c65af": "4b806b8eab642ae74ccbf4bd85a6ca4f",
".git/objects/e3/0223446e182129b532d6bac6bcf4da1a0a8b69": "0df759455715723f5481dff3bef1f8cf",
".git/objects/e4/f10b70cea87dd49f976893d7cb40e3aa205c42": "a2b09538d17c7c32951c807b3c703414",
".git/objects/e5/57857e5652e52aa46299123889a0964e46fd5f": "8954a576ca0b185771a77959792e56c6",
".git/objects/ed/c4018896d377147da6ccc91051348dadb49dd8": "3d3fad8acbce27808f4c4529887ecc59",
".git/objects/f4/1f31a262c5eb39028f24615948e84466325154": "5a8ebd08892d889065b2b3e1f4c830d6",
".git/objects/f6/f372384cabc558b3f4db82ba0bc6480dc861b0": "bfec6f233f84d8815ae33de9f7ae9028",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fc/3dccb9c5d776de182f8536a1cc94ba7ffb1144": "25d362864486e6d128e0a5d6e95c87cb",
".git/objects/pack/pack-bab558b51c506b8c0a80d4ceb79bf3a6c12d788a.idx": "103d91d94c983145bf265a82695c3308",
".git/objects/pack/pack-bab558b51c506b8c0a80d4ceb79bf3a6c12d788a.pack": "90c04b05d17989d731f2bacc16787453",
".git/ORIG_HEAD": "234d05e8dcda22ffbd8b0f33390e9005",
".git/packed-refs": "eb3705740b88bb27a998763b3714866e",
".git/refs/heads/master": "8fa0f40fa5ca91afafc6fd7b83b74051",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "8fa0f40fa5ca91afafc6fd7b83b74051",
".git/sourcetreeconfig.json": "90cb3b2db5e661cdf913192f7530b852",
"assets/AssetManifest.json": "c0350177cafb48d483e5797e17606a75",
"assets/assets/fonts/Rubik-Italic.ttf": "d8e3125b4c93f7591a5c1ad87ef7cd87",
"assets/assets/fonts/Rubik-Regular.ttf": "c8041f987a7c34d176ad7014374a29cf",
"assets/assets/fonts/WorkSans-Italic.ttf": "572bbe993a835da6881031b08ec32490",
"assets/assets/fonts/WorkSans-Regular.ttf": "3648344fc745a9f1c78bdac727bb40bc",
"assets/assets/images/chocolate.jpg": "a3731b883507ca0731408dd994bcc5a9",
"assets/assets/images/logo.jpg": "934b7b080607f68122f3772f27f92fad",
"assets/assets/images/profile.jpg": "8565663bc9007ed68ec6f4df34501708",
"assets/FontManifest.json": "2a40dcf6e2be62493d4e0f62f1840efb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c42458ae1ee0b6b6c957dc28e4604705",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"CNAME": "9a936c3e2880422276441e25a7618f1f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd414d843fabef893727061253c21776",
"/": "fd414d843fabef893727061253c21776",
"main.dart.js": "f7179b9f04751cfbb334b071bf5d8267",
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
