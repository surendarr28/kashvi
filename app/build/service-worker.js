"use strict";var precacheConfig=[["/index.html","8ea2c4944d555ddf3d4f0f2e55b6baba"],["/static/css/main.9d232b20.css","71c098c879e038998aaf602082510b5c"],["/static/js/main.d7ede8b5.js","f5b76fc0d86fe28e6ab7220c8243d8af"],["/static/media/doll.a8bc1350.png","a8bc13504a782c08d1772c4c09352d10"],["/static/media/k1.2af26940.jpg","2af269402b67963e297fae59219bb208"],["/static/media/k10.01407d39.jpg","01407d39a7d2eb9ca1514ca9e91d629a"],["/static/media/k11.ca28ca28.jpg","ca28ca28f4f977051aca21f9e8e70a93"],["/static/media/k12.3b4573d1.jpg","3b4573d17ae1da754cc3634907bac029"],["/static/media/k13.ad8a614a.jpg","ad8a614affc2dfd819a38e99dd342f0c"],["/static/media/k14.31f8d93d.jpg","31f8d93d80c387ff9c54e401f792f77b"],["/static/media/k15.204223ef.jpg","204223ef4d48a7a410e71d7b8f6cd6c9"],["/static/media/k16.0d347175.jpg","0d3471755d2224ea1197ba9665ea4f26"],["/static/media/k17.a369615f.jpg","a369615f98fbbbe03f51ee58b60db6ff"],["/static/media/k18.3e9366e4.jpg","3e9366e48bb6d1c76442c22444051659"],["/static/media/k19.7b3e54cc.jpg","7b3e54cc8dd7ac0d755658ca82d881d6"],["/static/media/k2.e354cd7c.jpg","e354cd7c4b60338da8f75d3164b537e0"],["/static/media/k20.f20374bc.jpg","f20374bcfa39bb7ee6c4ea8c96c11b8c"],["/static/media/k21.0e00da2a.jpg","0e00da2a58dccc8646bcb2808aff8f91"],["/static/media/k22.7c1fae0c.jpg","7c1fae0c399f287e60fd5661e7c637df"],["/static/media/k4.924fa57d.jpg","924fa57d8708fbb57735cef73f335443"],["/static/media/k5.9a24281e.jpg","9a24281ebf7b99e2778b93773dc85f69"],["/static/media/k6.993c96ec.jpg","993c96ec284832c3a86c9497dd0693aa"],["/static/media/k7.5afddcc3.jpg","5afddcc3f3e86898123f6d3e3c716686"],["/static/media/k8.37c8f388.jpg","37c8f3883634fb932ca899b220e63e98"],["/static/media/k9.f5fd74b5.jpg","f5fd74b59907fda7707e02975a80c7b7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});