// 简化的Service Worker
const CACHE_NAME = 'iamnotahuman-simple';
const AD_CACHE_NAME = 'ad-cache-simple';

// 需要缓存的资源
const CACHE_URLS = [
  '/',
  '/images/1.webp',
  '/images/about-img.webp',
  '/images/logo.webp'
];

// 安装事件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_URLS);
    })
  );
});

// 激活事件
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== AD_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 简化的缓存策略
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // 只缓存关键资源
  if (url.pathname.includes('/images/') || url.pathname.includes('/assets/')) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(fetchResponse => {
          if (fetchResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, fetchResponse.clone());
            });
          }
          return fetchResponse;
        });
      })
    );
  }
});
