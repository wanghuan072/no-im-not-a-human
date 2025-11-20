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
}