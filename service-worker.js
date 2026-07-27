const CACHE_NAME='disney-adventure-offline-v3';
const BASE='/disney-adventure-singapore-guide/';
const CORE_PAGES=[
  BASE,
  BASE+'disney-adventure-singapore-guide.html',
  BASE+'home.html',
  BASE+'deck-plan.html',
  BASE+'restaurant.html',
  BASE+'shows-v4.html',
  BASE+'adventure.html',
  BASE+'tips.html',
  BASE+'my-info.html'
];
const CORE_ASSETS=[
  BASE+'cruise-theme.css',
  BASE+'stateroom-themes.json',
  BASE+'manifest.webmanifest',
  BASE+'pwa-register.js',
  BASE+'app-enhancements.js'
];

async function cacheOne(cache,url){
  try{
    const response=await fetch(url,{cache:'reload'});
    if(response.ok){await cache.put(url,response.clone());return response;}
  }catch(error){console.warn('Precache skipped:',url,error)}
  return null;
}

function linkedLocalAssets(html,pageUrl){
  const found=new Set();
  const re=/(?:src|href)=["']([^"'#?]+)["']/gi;
  let match;
  while((match=re.exec(html))){
    try{
      const url=new URL(match[1],pageUrl);
      if(url.origin===self.location.origin && url.pathname.startsWith(BASE)) found.add(url.href);
    }catch(error){}
  }
  return [...found];
}

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const discovered=new Set(CORE_ASSETS.map(x=>new URL(x,self.location.origin).href));
    for(const page of CORE_PAGES){
      const absolute=new URL(page,self.location.origin).href;
      const response=await cacheOne(cache,absolute);
      if(response){
        const html=await response.clone().text();
        linkedLocalAssets(html,absolute).forEach(x=>discovered.add(x));
      }
    }
    for(const asset of discovered) await cacheOne(cache,asset);
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
  if(url.origin!==self.location.origin || !url.pathname.startsWith(BASE))return;

  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE_NAME);
      const exact=await cache.match(event.request,{ignoreSearch:true});
      if(exact){
        event.waitUntil(fetch(event.request).then(r=>{if(r.ok)return cache.put(event.request,r.clone())}).catch(()=>{}));
        return exact;
      }
      try{
        const fresh=await fetch(event.request);
        if(fresh.ok)await cache.put(event.request,fresh.clone());
        return fresh;
      }catch(error){
        return (await cache.match(new URL(BASE+'home.html',self.location.origin).href)) ||
          new Response('오프라인 상태이며 저장된 페이지가 없습니다.',{headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const cached=await cache.match(event.request,{ignoreSearch:true});
    if(cached)return cached;
    try{
      const fresh=await fetch(event.request);
      if(fresh.ok)await cache.put(event.request,fresh.clone());
      return fresh;
    }catch(error){return new Response('',{status:504,statusText:'Offline'})}
  })());
});
