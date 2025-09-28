<template>
    <header class="app-header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <a href="/">
                        <span class="logo-text">No I'm not a Human</span>
                    </a>
                </div>
                <!-- 桌面端导航 -->
                <nav class="nav desktop-nav">
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a href="/" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="/guides" class="nav-link">Guides</a>
                        </li>
                        <li class="nav-item">
                            <a href="/endings" class="nav-link">Endings</a>
                        </li>
                        <li class="nav-item">
                            <a href="/wiki" class="nav-link">Wiki</a>
                        </li>
                        <li class="nav-item">
                            <a href="/visitors" class="nav-link">Visitors</a>
                        </li>
                        <li class="nav-item">
                            <a href="/download" class="nav-link">Download</a>
                        </li>
                    </ul>
                </nav>

                <!-- 汉堡菜单按钮 -->
                <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }"
                    :aria-label="isMobileMenuOpen ? 'Close Menu' : 'Open Menu'"
                    :aria-expanded="isMobileMenuOpen">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="sr-only">{{ isMobileMenuOpen ? 'Close Menu' : 'Open Menu' }}</span>
                </button>

                <!-- 移动端滑出导航 -->
                <nav class="nav mobile-nav" :class="{ open: isMobileMenuOpen }">
                    <ul class="mobile-nav-list">
                        <li class="nav-item">
                            <a href="/" class="nav-link" @click="closeMobileMenu">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="/guides" class="nav-link" @click="closeMobileMenu">Guides</a>
                        </li>
                        <li class="nav-item">
                            <a href="/endings" class="nav-link" @click="closeMobileMenu">Endings</a>
                        </li>
                        <li class="nav-item">
                            <a href="/wiki" class="nav-link" @click="closeMobileMenu">Wiki</a>
                        </li>
                        <li class="nav-item">
                            <a href="/visitors" class="nav-link" @click="closeMobileMenu">Visitors</a>
                        </li>
                        <li class="nav-item">
                            <a href="/download" class="nav-link" @click="closeMobileMenu">Download</a>
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
import '@/assets/css/public.css'

// 移动端菜单状态
const isMobileMenuOpen = ref(false)

// 切换移动端菜单
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
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
</style>
