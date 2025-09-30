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

// 支持的语言列表
const supportedLanguages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']

// 获取初始语言
const getInitialLocale = () => {
    // 1. 检查URL中的语言
    const path = window.location.pathname

    for (const lang of supportedLanguages) {
        if (lang === 'en') continue // 英文是默认语言，不需要前缀
        if (path.startsWith(`/${lang}`)) {
            return lang
        }
    }

    // 2. 检查localStorage
    const saved = localStorage.getItem('language')
    if (saved && supportedLanguages.includes(saved)) {
        return saved
    }

    // 3. 检查浏览器语言
    const browserLang = navigator.language.split('-')[0]
    if (supportedLanguages.includes(browserLang)) {
        return browserLang
    }

    // 4. 默认英文
    return 'en'
}

// 创建i18n实例
const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'en',
    messages: {
        en, // 英文
        zh, // 中文
        ja, // 日语
        ru, // 俄语
        ko, // 韩语
        de, // 德语
        fr, // 法语
        es, // 西班牙语
        pt // 葡萄牙语
    },
    warnHtmlMessage: false,
    allowComposition: true
})

// 导出i18n实例
export default i18n

// 导出语言切换函数
export const switchLocale = (locale) => {
    if (supportedLanguages.includes(locale)) {
        i18n.global.locale.value = locale
        localStorage.setItem('language', locale)
    }
}

// 导出当前语言
export const getCurrentLocale = () => {
    return i18n.global.locale.value
}

// 导出支持的语言列表
export { supportedLanguages }