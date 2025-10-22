<template>
    <header class="app-header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <a href="/">
                        <img src="/images/logo.webp" alt="No I'm not a Human Logo" />
                        <span class="logo-text">No I'm not a Human</span>
                    </a>
                </div>
                <!-- 桌面端导航 -->
                <nav class="nav desktop-nav">
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a href="/" class="nav-link">{{ $t('nav.home') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/guides" class="nav-link">{{ $t('nav.guides') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/endings" class="nav-link">{{ $t('nav.endings') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/wiki" class="nav-link">{{ $t('nav.wiki') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/visitors" class="nav-link">{{ $t('nav.visitors') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/blog" class="nav-link">{{ $t('nav.blog') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/download" class="nav-link">{{ $t('nav.download') }}</a>
                        </li>
                    </ul>
                </nav>

                <!-- 语言切换器 -->
                <div class="language-switcher">
                    <div class="language-dropdown" @click="toggleLanguageDropdown">
                        <span class="current-language">
                            {{ getLanguageDisplayName($i18n.locale) }}
                        </span>
                        <span class="dropdown-arrow">▼</span>
                    </div>
                    <ul class="language-menu" :class="{ open: isLanguageDropdownOpen }">
                        <li v-for="lang in supportedLanguages" :key="lang">
                            <a href="#" @click.prevent="switchLanguage(lang)"
                                :class="{ active: $i18n.locale === lang }">
                                {{ getLanguageDisplayName(lang) }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- 汉堡菜单按钮 -->
                <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }"
                    :aria-label="isMobileMenuOpen ? $t('nav.closeMenu') : $t('nav.openMenu')"
                    :aria-expanded="isMobileMenuOpen">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="sr-only">{{ isMobileMenuOpen ? $t('nav.closeMenu') : $t('nav.openMenu') }}</span>
                </button>

                <!-- 移动端滑出导航 -->
                <nav class="nav mobile-nav" :class="{ open: isMobileMenuOpen }">
                    <ul class="mobile-nav-list">
                        <li class="nav-item">
                            <a href="/" class="nav-link" @click="closeMobileMenu">{{ $t('nav.home') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/guides" class="nav-link" @click="closeMobileMenu">{{ $t('nav.guides') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/endings" class="nav-link" @click="closeMobileMenu">{{ $t('nav.endings') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/wiki" class="nav-link" @click="closeMobileMenu">{{ $t('nav.wiki') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/visitors" class="nav-link" @click="closeMobileMenu">{{ $t('nav.visitors') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/blog" class="nav-link" @click="closeMobileMenu">{{ $t('nav.blog') }}</a>
                        </li>
                        <li class="nav-item">
                            <a href="/download" class="nav-link" @click="closeMobileMenu">{{ $t('nav.download') }}</a>
                        </li>
                        <!-- 移动端语言切换器 -->
                        <li class="nav-item mobile-language-switcher">
                            <div class="mobile-language-dropdown" @click="toggleMobileLanguageDropdown">
                                <span class="mobile-current-language">
                                    {{ getLanguageDisplayName($i18n.locale) }}
                                </span>
                                <span class="mobile-dropdown-arrow">▼</span>
                            </div>
                            <ul class="mobile-language-menu" :class="{ open: isMobileLanguageDropdownOpen }">
                                <li v-for="lang in supportedLanguages" :key="lang">
                                    <a href="#" @click.prevent="switchLanguage(lang)"
                                        :class="{ active: $i18n.locale === lang }">
                                        {{ getLanguageDisplayName(lang) }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <!-- 移动端遮罩层 -->
        <div class="mobile-overlay" :class="{ open: isMobileMenuOpen }" @click="closeMobileMenu"></div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
// 全局CSS已在main.js中导入

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()

// 支持的语言列表
const supportedLanguages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']

// 语言显示名称映射
const languageNames = {
    en: 'EN',
    zh: '中文',
    ja: '日本語',
    ru: 'Русский',
    ko: '한국어',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español',
    pt: 'Português'
}

// 移动端菜单状态
const isMobileMenuOpen = ref(false)
const isLanguageDropdownOpen = ref(false)
const isMobileLanguageDropdownOpen = ref(false)

// 切换移动端菜单
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    // 关闭菜单时也关闭下拉菜单
    if (!isMobileMenuOpen.value) {
        isMobileLanguageDropdownOpen.value = false
    }
}

// 关闭移动端菜单
const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    isMobileLanguageDropdownOpen.value = false
}

// 切换语言下拉菜单
const toggleLanguageDropdown = () => {
    isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}

// 切换移动端语言下拉菜单
const toggleMobileLanguageDropdown = () => {
    isMobileLanguageDropdownOpen.value = !isMobileLanguageDropdownOpen.value
}

// 获取语言显示名称
const getLanguageDisplayName = (lang) => {
    return languageNames[lang] || lang.toUpperCase()
}

// 语言切换功能
const switchLanguage = (lang) => {
    // 关闭下拉菜单
    isLanguageDropdownOpen.value = false
    isMobileLanguageDropdownOpen.value = false

    // 获取当前路由的基础路径（移除所有语言前缀）
    const currentPath = route.path
    let basePath = currentPath

    // 移除所有支持的语言前缀
    supportedLanguages.forEach(language => {
        if (language !== 'en') {
            basePath = basePath.replace(new RegExp(`^/${language}`), '')
        }
    })

    // 确保基础路径不为空
    basePath = basePath || '/'

    // 根据目标语言构建新路径
    let targetPath
    if (lang === 'en') {
        targetPath = basePath
    } else {
        targetPath = basePath === '/' ? `/${lang}` : `/${lang}${basePath}`
    }

    // 使用window.location进行页面跳转
    window.location.href = targetPath
}
</script>

<style scoped>
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.logo img {
    width: 40px;
    height: 40px;
}

.logo-text {
    font-family: 'Creepster', cursive;
    color: #00ff88;
    text-shadow: 0 0 10px #00ff88;
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
    line-height: 30px;
}

.nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
}

.nav-link {
    display: inline-block;
    line-height: 30px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #00ff41;
}

.nav-link.a-active {
    color: #00ff41;
}

/* 语言切换器 */
.language-switcher {
    position: relative;
    margin-left: 20px;
}

.language-dropdown {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.language-dropdown:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(0, 255, 65, 0.4);
}

.current-language {
    min-width: 50px;
}

.dropdown-arrow {
    font-size: 10px;
    transition: transform 0.3s ease;
}

.language-switcher:hover .dropdown-arrow {
    transform: rotate(180deg);
}

.language-menu {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 150px;
    background: rgba(0, 0, 0, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    list-style: none;
    margin: 0;
    padding: 8px 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1001;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.language-menu.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.language-menu li {
    margin: 0;
}

.language-menu a {
    display: block;
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 14px;
}

.language-menu a:hover {
    background: rgba(0, 255, 65, 0.1);
    color: #00ff41;
}

.language-menu a.active {
    background: rgba(0, 255, 65, 0.2);
    color: #00ff41;
}

/* 汉堡菜单按钮 */
.mobile-menu-btn {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1002;
}

.hamburger-line {
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* 移动端遮罩层 */
.mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.mobile-overlay.open {
    opacity: 1;
    visibility: visible;
}

/* 移动端导航 */
.mobile-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1001;
    transition: right 0.3s ease;
    padding: 80px 0 20px 0;
}

.mobile-nav.open {
    right: 0;
}

.mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

.mobile-nav-list .nav-item {
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-list .nav-link {
    display: block;
    padding: 20px 30px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
}

.mobile-nav-list .nav-link:hover {
    background: rgba(0, 255, 65, 0.1);
    color: #00ff41;
    border-left-color: #00ff41;
}

/* Screen reader only text */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {

    /* 隐藏桌面端导航 */
    .desktop-nav {
        display: none;
    }

    /* 显示汉堡菜单按钮 */
    .mobile-menu-btn {
        display: flex;
    }

    .header-content {
        padding: 10px 0;
    }

    .logo-text {
        font-size: 16px;
    }
}

/* 移动端语言切换器 */
.mobile-language-switcher {
    border-bottom: none !important;
    padding: 20px 30px;
    position: relative;
}

.mobile-language-dropdown {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 12px 16px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.mobile-language-dropdown:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(0, 255, 65, 0.4);
}

.mobile-dropdown-arrow {
    font-size: 12px;
    transition: transform 0.3s ease;
}

.mobile-language-switcher:hover .mobile-dropdown-arrow {
    transform: rotate(180deg);
}

.mobile-language-menu {
    position: absolute;
    top: 100%;
    left: 30px;
    right: 30px;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    list-style: none;
    margin: 8px 0 0 0;
    padding: 8px 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1000;
}

.mobile-language-menu.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.mobile-language-menu li {
    margin: 0;
    border-bottom: none !important;
}

.mobile-language-menu a {
    display: block;
    padding: 12px 20px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 14px;
    border-left: 3px solid transparent;
}

.mobile-language-menu a:hover {
    background: rgba(0, 255, 65, 0.1);
    color: #00ff41;
    border-left-color: #00ff41;
}

.mobile-language-menu a.active {
    background: rgba(0, 255, 65, 0.2);
    color: #00ff41;
    border-left-color: #00ff41;
}

@media (min-width: 769px) {

    /* 隐藏移动端导航 */
    .mobile-nav {
        display: none;
    }

    /* 隐藏汉堡菜单按钮 */
    .mobile-menu-btn {
        display: none;
    }

    /* 隐藏移动端遮罩 */
    .mobile-overlay {
        display: none;
    }
}

@media (max-width: 768px) {

    /* 隐藏桌面端语言切换器 */
    .language-switcher {
        display: none;
    }
}
</style>
