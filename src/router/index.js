import { createRouter, createWebHistory } from 'vue-router'
import { useSEO } from '@/seo'

// 按需加载语言文件 - 减少主包大小
const localeDataMap = {}

// 动态加载语言文件
async function loadLocale(lang) {
  if (!localeDataMap[lang]) {
    try {
      const locale = await import(`@/locales/${lang}.json`)
      localeDataMap[lang] = locale.default
    } catch (error) {
      console.warn(`Failed to load locale ${lang}:`, error)
      // 回退到英文
      if (lang !== 'en') {
        const enLocale = await import('@/locales/en.json')
        localeDataMap[lang] = enLocale.default
      }
    }
  }
  return localeDataMap[lang]
}

// 页面配置
const pageConfigs = [
  { path: '/', component: 'HomeView', name: 'Home' },
  { path: '/guides', component: 'GuidesView', name: 'Guides' },
  { path: '/endings', component: 'EndingsView', name: 'Endings' },
  { path: '/wiki', component: 'WikiView', name: 'Wiki' },
  { path: '/visitors', component: 'VisitorsView', name: 'Visitors' },
  { path: '/download', component: 'DownloadView', name: 'Download' },
  { path: '/about-us', component: 'AboutView', name: 'About' },
  { path: '/contact-us', component: 'ContactView', name: 'Contact' },
  { path: '/copyright', component: 'CopyrightView', name: 'Copyright' },
  { path: '/privacy-policy', component: 'PrivacyPolicyView', name: 'Privacy' },
  { path: '/terms-of-service', component: 'TermsOfServiceView', name: 'Terms' },
  { path: '/blog', component: 'BlogListView', name: 'BlogList' },
  { path: '/blog/:slug', component: 'BlogDetailView', name: 'BlogDetail' }
]

// 支持的语言列表
const supportedLanguages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']

// 动态生成路由
function generateRoutes() {
  const routes = []

  // 为每种语言生成路由
  supportedLanguages.forEach(lang => {
    pageConfigs.forEach(page => {
      const isDefaultLang = lang === 'en'
      const path = isDefaultLang ? page.path : `/${lang}${page.path}`
      const name = isDefaultLang ? page.name : `${page.name}${lang.charAt(0).toUpperCase() + lang.slice(1)}`

      routes.push({
        path,
        name,
        component: () => import(`@/views/${page.component}.vue`)
      })
    })
  })

  return routes
}

// 生成路由配置
const routes = generateRoutes()

// 创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 检测URL中的语言
function detectLanguageFromPath(path) {
  for (const lang of supportedLanguages) {
    if (lang === 'en') continue // 英文是默认语言，不需要前缀
    if (path.startsWith(`/${lang}`)) {
      return lang
    }
  }
  return 'en' // 默认返回英文
}

// 路由守卫：根据URL设置语言和SEO
router.beforeEach(async (to, from, next) => {
  // 从URL路径中检测语言
  const detectedLanguage = detectLanguageFromPath(to.path)

  try {
    // 导入i18n实例并设置语言
    const { default: i18n } = await import('@/i18n')

    // 强制设置语言
    i18n.global.locale.value = detectedLanguage
    localStorage.setItem('language', detectedLanguage)

    // 设置HTML的lang属性
    document.documentElement.lang = detectedLanguage

    // 设置页面SEO
    setPageSEO(to, detectedLanguage)

    next()
  } catch (error) {
    console.error('Language switching error:', error)
    next()
  }
})

// 设置页面SEO的函数
async function setPageSEO(route, language) {
  // 动态加载语言数据
  const localeData = await loadLocale(language)
  
  if (localeData) {
    // 获取页面SEO配置
    const seoKey = getSEOKey(route.path, language)
    const seoData = localeData?.seo?.[seoKey]

    if (seoData && typeof document !== 'undefined') {
      const { setSEO } = await import('@/seo')
      setSEO(seoData, route.path, seoKey)
    }
  }
}

// 根据路径获取SEO配置键
function getSEOKey(path, language) {
  // 移除语言前缀
  let cleanPath = path
  if (language !== 'en') {
    cleanPath = path.replace(`/${language}`, '') || '/'
  }

  const pathMap = {
    '/': 'home',
    '/guides': 'guides',
    '/endings': 'endings',
    '/wiki': 'wiki',
    '/visitors': 'visitors',
    '/download': 'download',
    '/about-us': 'about',
    '/contact-us': 'contact',
    '/privacy-policy': 'privacy',
    '/terms-of-service': 'terms',
    '/copyright': 'copyright',
    '/blog': 'blog-list'
  }

  return pathMap[cleanPath] || 'home'
}

export default router
