// Service Worker for performance optimization
const CACHE_NAME = 'iamnotahuman-v1';
const AD_CACHE_NAME = 'ad-cache-v1';

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

// 拦截请求
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // 处理广告资源缓存
  if (url.hostname.includes('magsrv.com') || 
      url.hostname.includes('pemsrv.com') ||
      url.hostname.includes('googlesyndication.com')) {
    
    event.respondWith(
      caches.open(AD_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          if (response) {
            // 返回缓存，同时更新缓存
            fetch(event.request).then(fetchResponse => {
              cache.put(event.request, fetchResponse.clone());
            });
            return response;
          }
          
          // 缓存未命中，获取新资源
          return fetch(event.request).then(fetchResponse => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
    return;
  }
  
  // 处理静态资源
  if (event.request.destination === 'image' || 
      event.request.destination === 'script' ||
      event.request.destination === 'style') {
    
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(fetchResponse => {
          if (fetchResponse.status === 200) {
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return fetchResponse;
        });
      })
    );
  }
});
