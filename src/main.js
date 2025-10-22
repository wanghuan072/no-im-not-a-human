import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { localizeAllLinks, watchLanguageChange } from './utils/localizeLinks.js'
import { preloadCriticalResources } from './utils/performance.js'

// 预加载关键资源
preloadCriticalResources([
  '/images/1.webp',
  '/images/about-img.webp',
  '/images/logo.webp'
])

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

// 性能优化：延迟非关键初始化
requestAnimationFrame(() => {
  app.mount('#app')
  
  // 页面加载完成后处理所有链接
  document.addEventListener('DOMContentLoaded', () => {
    localizeAllLinks()
    watchLanguageChange()
  })

  // 路由变化后也处理链接
  router.afterEach(() => {
    localizeAllLinks()
  })
})
