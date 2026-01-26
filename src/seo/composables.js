const defaultSEO = {
    title: "No I'm Not a Human - Complete Game Guide & Wiki",
    description: "Your ultimate guide to No I'm Not a Human. Tips, walkthroughs, and community highlights in one place.",
    keywords: "No I'm Not a Human, horror game, survival guide, game wiki",
    image: 'https://iamnotahuman.org/images/about-img.webp'
}

const ensureMetaTag = (name, attribute = 'name') => {
    let tag = document.querySelector(`meta[${attribute}="${name}"]`)
    if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, name)
        document.head.appendChild(tag)
    }
    return tag
}

const ensureLinkTag = (rel) => {
    let tag = document.querySelector(`link[rel="${rel}"]`)
    if (!tag) {
        tag = document.createElement('link')
        tag.setAttribute('rel', rel)
        document.head.appendChild(tag)
    }
    return tag
}

/**
 * 获取当前页面的 Canonical URL
 * 移除语言前缀，统一使用英文版本作为 Canonical URL
 * @returns {string} Canonical URL
 */
const getCanonicalUrl = () => {
    if (typeof window === 'undefined') return 'https://iamnotahuman.org/'
    
    const baseUrl = 'https://iamnotahuman.org'
    const pathname = window.location.pathname
    
    // 移除语言前缀（如 /zh, /ja 等）
    const supportedLanguages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']
    const pathSegments = pathname.split('/').filter(Boolean)
    
    // 如果第一个段是语言代码，移除它
    if (pathSegments.length > 0 && supportedLanguages.includes(pathSegments[0])) {
        pathSegments.shift()
    }
    
    // 构建 Canonical URL（使用英文版本）
    const canonicalPath = pathSegments.length > 0 ? '/' + pathSegments.join('/') : '/'
    return baseUrl + canonicalPath
}

export function setSEO(overrides = {}) {
    if (typeof document === 'undefined') return

    const seo = { ...defaultSEO, ...overrides }
    document.title = seo.title

    ensureMetaTag('description').setAttribute('content', seo.description)
    ensureMetaTag('keywords').setAttribute('content', seo.keywords)

    ensureMetaTag('og:title', 'property').setAttribute('content', seo.title)
    ensureMetaTag('og:description', 'property').setAttribute('content', seo.description)
    ensureMetaTag('og:image', 'property').setAttribute('content', seo.image || defaultSEO.image)

    // 设置 og:url（使用当前完整 URL）
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://iamnotahuman.org/'
    ensureMetaTag('og:url', 'property').setAttribute('content', currentUrl)

    // 设置 Canonical URL（使用英文版本，移除语言前缀）
    const canonicalUrl = getCanonicalUrl()
    ensureLinkTag('canonical').setAttribute('href', canonicalUrl)
}

/**
 * 从多语言配置中获取SEO数据
 * @param {string} pageKey - 页面key，如 'home', 'guides', 'endings' 等
 * @param {string} language - 语言代码，默认为 'en'
 * @returns {Promise<Object>} SEO数据对象
 */
export async function getSEOFromLocale(pageKey, language = 'en') {
    try {
        const locale = await import(`@/locales/${language}.json`)
        const seoData = locale.default?.seo?.[pageKey]

        if (seoData) {
            return {
                title: seoData.title || defaultSEO.title,
                description: seoData.description || defaultSEO.description,
                keywords: seoData.keywords || defaultSEO.keywords,
                image: defaultSEO.image
            }
        }
    } catch (error) {
        console.error(`Failed to load SEO data for ${pageKey} in language ${language}:`, error)
    }

    return defaultSEO
}