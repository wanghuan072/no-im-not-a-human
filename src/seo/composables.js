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

export function setSEO(overrides = {}) {
    if (typeof document === 'undefined') return

    const seo = { ...defaultSEO, ...overrides }
    document.title = seo.title

    ensureMetaTag('description').setAttribute('content', seo.description)
    ensureMetaTag('keywords').setAttribute('content', seo.keywords)

    ensureMetaTag('og:title', 'property').setAttribute('content', seo.title)
    ensureMetaTag('og:description', 'property').setAttribute('content', seo.description)
    ensureMetaTag('og:image', 'property').setAttribute('content', seo.image || defaultSEO.image)

    // 确保 og:url 也被设置
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://iamnotahuman.org/'
    ensureMetaTag('og:url', 'property').setAttribute('content', currentUrl)
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