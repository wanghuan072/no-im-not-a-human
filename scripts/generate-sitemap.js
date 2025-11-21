import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import gamesEn from '../src/data/games/en.js'
import blogsEn from '../src/data/blogs/en.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
  fullDomain: 'https://iamnotahuman.org',
  supportedLanguages: ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']
}

// 路由配置
const routes = [
  { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
  { path: '/guides', name: 'guides', priority: 0.9, changefreq: 'weekly' },
  { path: '/endings', name: 'endings', priority: 0.9, changefreq: 'weekly' },
  { path: '/wiki', name: 'wiki', priority: 0.9, changefreq: 'weekly' },
  { path: '/visitors', name: 'visitors', priority: 0.9, changefreq: 'weekly' },
  { path: '/download', name: 'download', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', name: 'blog', priority: 0.9, changefreq: 'weekly' },
  { path: '/games', name: 'games', priority: 0.8, changefreq: 'weekly' },
  { path: '/about-us', name: 'about', priority: 0.5, changefreq: 'yearly' },
  { path: '/contact-us', name: 'contact', priority: 0.5, changefreq: 'yearly' },
  { path: '/copyright', name: 'copyright', priority: 0.3, changefreq: 'yearly' },
  { path: '/privacy-policy', name: 'privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', name: 'terms', priority: 0.3, changefreq: 'yearly' }
]

// 生成URL
function generateUrl(path, lang = 'en') {
  return lang === 'en'
    ? `${seoConfig.fullDomain}${path}`
    : `${seoConfig.fullDomain}/${lang}${path}`
}

// 生成单个URL的XML
function generateUrlXml(path, lang, lastmod, priority, changefreq) {
  const url = generateUrl(path, lang)

  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

// 生成站点地图
function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0]

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // 为每个路由和每种语言生成URL
  routes.forEach(route => {
    seoConfig.supportedLanguages.forEach(lang => {
      sitemapXml += `\n${generateUrlXml(route.path, lang, lastmod, route.priority, route.changefreq)}`
    })
  })

  // 为每个游戏和每种语言生成URL
  try {
    const games = gamesEn?.default || gamesEn
    if (games && Array.isArray(games)) {
      games.forEach(game => {
        if (game.addressBar) {
          seoConfig.supportedLanguages.forEach(lang => {
            const gamePath = `/games/${game.addressBar}`
            const gameLastmod = game.publishDate || lastmod
            sitemapXml += `\n${generateUrlXml(gamePath, lang, gameLastmod, 0.8, 'monthly')}`
          })
        }
      })
      console.log(`✅ Added ${games.length} games to sitemap`)
    }
  } catch (error) {
    console.warn('⚠️  Warning: Could not load games data:', error.message)
  }

  // 为每个博客和每种语言生成URL
  try {
    const blogs = blogsEn?.default || blogsEn
    if (blogs && Array.isArray(blogs)) {
      blogs.forEach(blog => {
        if (blog.addressBar) {
          seoConfig.supportedLanguages.forEach(lang => {
            const blogPath = `/blog/${blog.addressBar}`
            const blogLastmod = blog.publishDate || lastmod
            sitemapXml += `\n${generateUrlXml(blogPath, lang, blogLastmod, 0.7, 'monthly')}`
          })
        }
      })
      console.log(`✅ Added ${blogs.length} blogs to sitemap`)
    }
  } catch (error) {
    console.warn('⚠️  Warning: Could not load blogs data:', error.message)
  }

  sitemapXml += `\n</urlset>`
  return sitemapXml
}

// 生成并保存站点地图
try {
  const sitemapContent = generateSitemap()
  const publicPath = path.join(__dirname, '../public/sitemap.xml')
  const distPath = path.join(__dirname, '../dist/sitemap.xml')

  fs.writeFileSync(publicPath, sitemapContent, 'utf8')
  console.log('✅ Generated sitemap.xml in public folder')

  // 如果dist目录存在，也复制一份
  if (fs.existsSync(path.join(__dirname, '../dist'))) {
    fs.writeFileSync(distPath, sitemapContent, 'utf8')
    console.log('✅ Generated sitemap.xml in dist folder')
  }

  const urlCount = (sitemapContent.match(/<url>/g) || []).length
  console.log(`✅ Total URLs in sitemap: ${urlCount}`)
} catch (error) {
  console.error('❌ Error generating sitemap:', error)
  process.exit(1)
}

