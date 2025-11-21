import { createRouter, createWebHistory } from 'vue-router'
import i18n, { switchLocale, supportedLanguages } from '@/i18n'

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
  { path: '/blog/:slug', component: 'BlogDetailView', name: 'BlogDetail' },
  { path: '/games', component: 'GamesListView', name: 'GamesList' },
  { path: '/games/:id', component: 'GameDetailView', name: 'GameDetail' }
]

const buildPath = (lang, basePath) => {
  if (lang === 'en') return basePath
  if (basePath === '/') return `/${lang}`
  return `/${lang}${basePath}`
}

const routes = supportedLanguages.flatMap(lang =>
  pageConfigs.map(page => ({
    path: buildPath(lang, page.path),
    name: lang === 'en' ? page.name : `${page.name}-${lang}`,
    component: () => import(`@/views/${page.component}.vue`)
  }))
)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const detectLanguageFromPath = path => {
  const segments = path.split('/').filter(Boolean)
  const candidate = segments[0]
  if (supportedLanguages.includes(candidate)) {
    return candidate
  }
  return 'en'
}

router.beforeEach((to, from, next) => {
  const detected = detectLanguageFromPath(to.path)
  if (detected !== i18n.global.locale.value) {
    switchLocale(detected)
  }
  next()
})

export default router
