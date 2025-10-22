import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

// 延迟加载非关键功能
setTimeout(async () => {
    const { localizeAllLinks, watchLanguageChange } = await import('./utils/localizeLinks.js')
    
    // 页面加载完成后处理所有链接
    document.addEventListener('DOMContentLoaded', () => {
        localizeAllLinks()
        watchLanguageChange()
    })

    // 路由变化后也处理链接
    router.afterEach(() => {
        localizeAllLinks()
    })
}, 100)
