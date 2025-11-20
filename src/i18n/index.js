import { createI18n } from 'vue-i18n'

import en from '../locales/en.json'
import zh from '../locales/zh.json'
import ja from '../locales/ja.json'
import ru from '../locales/ru.json'
import ko from '../locales/ko.json'
import de from '../locales/de.json'
import fr from '../locales/fr.json'
import es from '../locales/es.json'
import pt from '../locales/pt.json'

const messages = { en, zh, ja, ru, ko, de, fr, es, pt }
const supportedLanguages = Object.keys(messages)

const detectLocaleFromPath = () => {
    if (typeof window === 'undefined') return null
    const segments = window.location.pathname.split('/').filter(Boolean)
    const maybeLocale = segments[0]
    if (supportedLanguages.includes(maybeLocale)) {
        return maybeLocale
    }
    return null
}

const getInitialLocale = () => {
    const fromPath = detectLocaleFromPath()
    if (fromPath) return fromPath

    const saved = localStorage.getItem('language')
    if (saved && supportedLanguages.includes(saved)) {
        return saved
    }

    const browserLang = navigator.language.split('-')[0]
    if (supportedLanguages.includes(browserLang)) {
        return browserLang
    }

    return 'en'
}

const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'en',
    messages,
    warnHtmlMessage: false,
    allowComposition: true
})

const updateHtmlLang = (locale) => {
    if (typeof document !== 'undefined') {
        document.documentElement.lang = locale
    }
}

updateHtmlLang(i18n.global.locale.value)

export default i18n

export const switchLocale = (locale) => {
    if (!supportedLanguages.includes(locale)) return
    i18n.global.locale.value = locale
    localStorage.setItem('language', locale)
    updateHtmlLang(locale)
}

export const getCurrentLocale = () => i18n.global.locale.value
export { supportedLanguages }