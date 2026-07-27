const CACHE_NAME = 'disney-adventure-offline-v2';

const PRECACHE_ASSETS = [
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
  './manifest.webmanifest',
  './pwa-register.js'
];

function normalizePath(requestUrl) {
  const url = new URL(requestUrl);
  let path = url.pathname;
  if (path.endsWith('/')) path += 'disney-adventure-singapore-guide.html';
  return path.split('/').pop() || 'disney-adventure-singapore-guide.html';
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    // 각 파일을 독립적으로 저장하여 일부 파일에 문제가 있어도 나머지는 유지합니다.
    for (const asset of PRECACHE_ASSETS) {
      try {
        const response = await fetch(asset, { cache: 'reload' });
        if (response.ok) await cache.put(asset, response.clone());
      } catch (error) {
        console.warn('Precache skipped:', asset, error);
      }
    }

    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const fileName = normalizePath(event.request.url);

      // 방문 여부와 상관없이 설치 때 저장한 HTML을 먼저 사용합니다.
      const cached =
        await cache.match(event.request, { ignoreSearch: true }) ||
        await cache.match('./' + fileName, { ignoreSearch: true });

      if (cached) {
        // 온라인이면 백그라운드에서 새 버전으로 갱신합니다.
        event.waitUntil((async () => {
          try {
            const fresh = await fetch(event.request, { cache: 'no-store' });
            if (fresh.ok) await cache.put('./' + fileName, fresh.clone());
          } catch (_) {}
        })());
        return cached;
      }

      try {
        const fresh = await fetch(event.request);
        if (fresh.ok) await cache.put('./' + fileName, fresh.clone());
        return fresh;
      } catch (error) {
        return (
          await cache.match('./disney-adventure-singapore-guide.html') ||
          await cache.match('./home.html') ||
          new Response('오프라인 상태이며 저장된 페이지가 없습니다.', {
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          })
        );
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(event.request, { ignoreSearch: true });
    if (cached) return cached;

    try {
      const fresh = await fetch(event.request);
      if (fresh.ok) await cache.put(event.request, fresh.clone());
      return fresh;
    } catch (error) {
      return new Response('', { status: 504, statusText: 'Offline' });
    }
  })());
});
