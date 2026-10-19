const CACHE='hank-manager-v538-finances';
const ASSETS=['./','./index.html','./css/style.css?v=538','./js/app.js?v=538','./js/finances.js?v=538','./manifest.json','./js/cloud.js','./js/team-logos.js','./assets/logos/maccabi-roma.png','./assets/brand/icon-192.png','./assets/brand/icon-512.png','./assets/brand/apple-touch-icon.png','./assets/brand/favicon-32.png','./assets/social/convocati-approved.png','./assets/social/formazione-approved.png','./assets/social/risultato-approved.png','./assets/social/poster-background-v533.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith(
    fetch(event.request).then(response=>{
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(event.request,copy));
      return response;
    }).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html')))
  );
});
