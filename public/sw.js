// Service Worker for performance optimization - 基于CloverLeaf优化策略
const CACHE_NAME = 'iamnotahuman-v3';
const AD_CACHE_NAME = 'ad-cache-v3';
const CSS_CACHE_NAME = 'css-cache-v2';
const JS_CACHE_NAME = 'js-cache-v1';

// 性能监控数据
const performanceMetrics = {
  cacheHits: 0,
  cacheMisses: 0,
  totalRequests: 0
};

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

// 性能监控函数 - 基于CloverLeaf的Roofline分析思路
function logPerformanceMetrics(request, response, fromCache) {
  performanceMetrics.totalRequests++;
  if (fromCache) {
    performanceMetrics.cacheHits++;
  } else {
    performanceMetrics.cacheMisses++;
  }
  
  // 计算缓存命中率
  const hitRate = performanceMetrics.cacheHits / performanceMetrics.totalRequests;
  
  // 记录性能数据到IndexedDB
  if (hitRate < 0.8) { // 缓存命中率低于80%时记录
    console.warn('Low cache hit rate:', hitRate);
  }
}

// 拦截请求
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // 处理广告资源缓存 - 使用stale-while-revalidate策略
  if (url.hostname.includes('magsrv.com') || 
      url.hostname.includes('pemsrv.com') ||
      url.hostname.includes('googlesyndication.com') ||
      url.hostname.includes('googletagmanager.com')) {
    
    event.respondWith(
      caches.open(AD_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          // 立即返回缓存，同时在后台更新
          if (response) {
            fetch(event.request).then(fetchResponse => {
              if (fetchResponse.status === 200) {
                cache.put(event.request, fetchResponse.clone());
              }
            }).catch(() => {
              // 忽略更新失败
            });
            return response;
          }
          
          // 缓存未命中，获取新资源
          return fetch(event.request).then(fetchResponse => {
            if (fetchResponse.status === 200) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
    );
    return;
  }
  
  // 处理CSS文件缓存
  if (event.request.destination === 'style') {
    event.respondWith(
      caches.open(CSS_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          if (response) {
            return response;
          }
          
          return fetch(event.request).then(fetchResponse => {
            if (fetchResponse.status === 200) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
    );
    return;
  }
  
  // 处理其他静态资源
  if (event.request.destination === 'image' || 
      event.request.destination === 'script') {
    
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
