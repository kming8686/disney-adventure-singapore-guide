const CACHE_NAME='disney-adventure-offline-v1';
const CORE_ASSETS=[
  './',
  './disney-adventure-singapore-guide.html',
  './home.html',
  './deck-plan.html',
  './restaurant.html',
  './shows-v4.html',
  './adventure.html',
  './tips.html',
  './my-info.html',
  './cruise-theme.css',
  './stateroom-themes.json',
  './manifest.webmanifest'
];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    await Promise.all(CORE_ASSETS.map(async url=>{
      try{
        const response=await fetch(url,{cache:'reload'});
        if(response.ok)await cache.put(url,response);
      }catch(error){
        console.warn('Precache skipped:',url,error);
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;

  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(event.request);
        const cache=await caches.open(CACHE_NAME);
        cache.put(event.request,fresh.clone());
        return fresh;
      }catch(error){
        return (await caches.match(event.request)) ||
               (await caches.match('./home.html')) ||
               new Response('오프라인 상태이며 저장된 페이지가 없습니다.',{headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    if(cached)return cached;
    try{
      const fresh=await fetch(event.request);
      if(fresh.ok){
        const cache=await caches.open(CACHE_NAME);
        cache.put(event.request,fresh.clone());
      }
      return fresh;
    }catch(error){
      return new Response('',{status:504,statusText:'Offline'});
    }
  })());
});
