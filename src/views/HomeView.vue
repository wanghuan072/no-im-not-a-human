<template>
  <div class="home-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="section hero">
      <!-- 背景图片 -->
      <img
        src="/images/1.webp"
        alt="No I'm not a Human Game Background"
        class="hero-bg-image"
        fetchpriority="high"
        loading="eager"
        width="1920"
        height="1080"
        decoding="sync"
      />
      <div class="container">
        <div class="hero-wrapper">
          <!-- Hot Recommendation Banner -->
          <div class="hero-banner">
            <div class="banner-left">
              <div class="hot-badge">
                <span class="flame-icon">🔥</span>
                <span>{{ $t('HomePage.hero.banner.hotBadge') }}</span>
              </div>
            </div>
            <div class="banner-right">
              <span class="star-icon">✨</span>
              <span>{{ $t('HomePage.hero.banner.announcement') }}</span>
            </div>
          </div>
          <h1 class="hero-title" v-html="$t('HomePage.hero.title', {}, { raw: true })"></h1>
          <div class="hero-description">
            <p v-html="$t('HomePage.hero.description', {}, { raw: true })"></p>
          </div>
          <div class="hero-buttons">
            <a :href="localizedHref('/download')" class="btn btn-primary btn-download">
              <span class="btn-icon">⬇️</span>
              <span>{{ $t('HomePage.hero.buttons.download') }}</span>
            </a>
            <a :href="localizedHref('/guides')" class="btn btn-secondary btn-guide">
              <span class="btn-icon">📖</span>
              <span>{{ $t('HomePage.hero.buttons.guides') }}</span>
            </a>
          </div>

          <!-- Footer Text -->
          <div class="hero-footer">
            <div class="footer-icon">⚡</div>
            <p>{{ $t('HomePage.hero.footer.text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="section video">
      <div class="container">
        <div class="video-wrapper">
          <h2 class="home-title">{{ $t('HomePage.video.title') }}</h2>
          <div class="video-container">
            <div class="video-overlay" v-if="!videoPlaying" @click="playVideo">
              <div class="video-poster">
                <img
                  src="/images/video-bg.webp"
                  alt="No I'm not a Human Video Poster"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="450"
                />
                <div class="video-mask"></div>
              </div>
              <div class="play-text-button" @click.stop="playVideo">
                <span class="play-text-icon">{{ $t('HomePage.video.playButton') }}</span>
                <span class="play-text-label">{{ $t('HomePage.video.playLabel') }}</span>
              </div>
            </div>
            <iframe
              v-if="videoPlaying"
              src="https://www.youtube.com/embed/5aSTaVY0J7I"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="video-iframe"
            ></iframe>
          </div>
          <aside style="width: 100%; padding: 20px 0; text-align: center" v-if="!isMobile">
            <ins class="eas6a97888e2" data-zoneid="5750502"></ins>
          </aside>
        </div>
        <div class="ad-wrap">
          <div ref="bannerAdSlot" class="banner-ad-slot"></div>
        </div>
      </div>
    </section>

    <!-- Games Section -->
    <section v-if="homeGames.length > 0" class="section games">
      <div class="container">
        <div class="games-wrapper">
          <h2 class="home-title">{{ $t('HomePage.games.title') }}</h2>
          <p class="games-intro">{{ $t('HomePage.games.intro') }}</p>
          <div class="home-games-grid">
            <article
              v-for="game in homeGames"
              :key="game.id"
              class="home-game-card"
              @click="navigateToGame(game.addressBar)"
            >
              <div class="home-game-image">
                <img
                  :src="game.imageUrl"
                  :alt="game.imageAlt"
                  loading="lazy"
                  @error="handleImageError"
                />
                <div class="home-game-overlay">
                  <span class="home-play-button">▶ {{ $t('GamesPage.list.playNow') }}</span>
                </div>
              </div>
              <div class="home-game-content">
                <h3 class="home-game-title">{{ game.title }}</h3>
                <p class="home-game-description">{{ game.description }}</p>
              </div>
            </article>
          </div>
          <div class="games-view-all">
            <a :href="localizedHref('/games')" class="btn btn-secondary">
              {{ $t('HomePage.games.viewAll') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about">
      <div class="container">
        <div class="about-wrapper">
          <h2 class="home-title">{{ $t('HomePage.about.title') }}</h2>
          <div class="about-content">
            <div class="about-text">
              <p>{{ $t('HomePage.about.description') }}</p>

              <h3 class="subsection-title">{{ $t('HomePage.about.challenge.title') }}</h3>
              <p v-html="$t('HomePage.about.challenge.description', {}, { raw: true })"></p>
            </div>
            <div class="about-image">
              <div class="game-image">
                <img
                  src="/images/about-img.webp"
                  alt="No I'm not a Human Game Screenshot"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <h3>{{ $t('HomePage.features.card1.title') }}</h3>
              <p v-html="$t('HomePage.features.card1.description', {}, { raw: true })"></p>
            </div>
            <div class="feature-card">
              <h3>{{ $t('HomePage.features.card2.title') }}</h3>
              <p v-html="$t('HomePage.features.card2.description', {}, { raw: true })"></p>
            </div>
            <div class="feature-card">
              <h3>{{ $t('HomePage.features.card3.title') }}</h3>
              <p>{{ $t('HomePage.features.card3.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Native Banner----PC移动 原生广告 -->
        <div class="ad-wrap">
          <div id="container-adbedbcd8a3516a8ca3fc9c0a5715e6b"></div>
        </div>
      </div>
    </section>

    <!-- Why Section -->
    <section class="section why">
      <div class="container">
        <div class="why-wrapper">
          <h2 class="home-title">{{ $t('HomePage.why.title') }}</h2>
          <p class="why-intro">{{ $t('HomePage.why.intro') }}</p>
          <div class="why-grid">
            <div class="why-card">
              <div class="why-image">
                <img
                  src="/images/why-01.webp"
                  alt="No I'm not a Human Game Screenshot"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="200"
                />
              </div>
              <h3 v-html="$t('HomePage.why.card1.title', {}, { raw: true })"></h3>
              <p>{{ $t('HomePage.why.card1.description') }}</p>
            </div>
            <div class="why-card">
              <div class="why-image">
                <img
                  src="/images/why-02.webp"
                  alt="No I'm not a Human Game Screenshot"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="200"
                />
              </div>
              <h3 v-html="$t('HomePage.why.card2.title', {}, { raw: true })"></h3>
              <p>{{ $t('HomePage.why.card2.description') }}</p>
            </div>
            <div class="why-card">
              <div class="why-image">
                <img
                  src="/images/why-03.webp"
                  alt="No I'm not a Human Game Screenshot"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="200"
                />
              </div>
              <h3 v-html="$t('HomePage.why.card3.title', {}, { raw: true })"></h3>
              <p>{{ $t('HomePage.why.card3.description') }}</p>
            </div>
            <div class="why-card">
              <div class="why-image">
                <img
                  src="/images/why-04.webp"
                  alt="No I'm not a Human Game Screenshot"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="200"
                />
              </div>
              <h3 v-html="$t('HomePage.why.card4.title', {}, { raw: true })"></h3>
              <p v-html="$t('HomePage.why.card4.description', {}, { raw: true })"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide Section -->
    <section class="section guide">
      <div class="container">
        <div class="guide-wrapper">
          <h2 class="home-title">{{ $t('HomePage.guide.title') }}</h2>
          <p class="guide-intro">{{ $t('HomePage.guide.intro') }}</p>
          <div class="guide-grid">
            <div class="guide-card">
              <h3 v-html="$t('HomePage.guide.card1.title', {}, { raw: true })"></h3>
              <p v-html="$t('HomePage.guide.card1.description', {}, { raw: true })"></p>
            </div>
            <div class="guide-card">
              <h3 v-html="$t('HomePage.guide.card2.title', {}, { raw: true })"></h3>
              <p>{{ $t('HomePage.guide.card2.description') }}</p>
            </div>
            <div class="guide-card">
              <h3 v-html="$t('HomePage.guide.card3.title', {}, { raw: true })"></h3>
              <p>{{ $t('HomePage.guide.card3.description') }}</p>
            </div>
            <div class="guide-card">
              <h3 v-html="$t('HomePage.guide.card4.title', {}, { raw: true })"></h3>
              <p>{{ $t('HomePage.guide.card4.description') }}</p>
            </div>
            <div class="guide-card">
              <h3 v-html="$t('HomePage.guide.card5.title', {}, { raw: true })"></h3>
              <p>{{ $t('HomePage.guide.card5.description') }}</p>
            </div>
            <div class="guide-card">
              <h3 v-html="$t('HomePage.guide.card6.title', {}, { raw: true })"></h3>
              <p>{{ $t('HomePage.guide.card6.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq">
      <div class="container">
        <div class="faq-wrapper">
          <h2 class="home-title">{{ $t('HomePage.faq.title') }}</h2>
          <p class="faq-intro">{{ $t('HomePage.faq.intro') }}</p>
          <div class="faq-content">
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">{{ $t('HomePage.faq.q1.question') }}</h3>
                <p class="faq-answer" v-html="$t('HomePage.faq.q1.answer', {}, { raw: true })"></p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ $t('HomePage.faq.q2.question') }}</h3>
                <p class="faq-answer">{{ $t('HomePage.faq.q2.answer') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ $t('HomePage.faq.q3.question') }}</h3>
                <p class="faq-answer" v-html="$t('HomePage.faq.q3.answer', {}, { raw: true })"></p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ $t('HomePage.faq.q4.question') }}</h3>
                <p class="faq-answer">{{ $t('HomePage.faq.q4.answer') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ $t('HomePage.faq.q5.question') }}</h3>
                <p class="faq-answer" v-html="$t('HomePage.faq.q5.answer', {}, { raw: true })"></p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ $t('HomePage.faq.q6.question') }}</h3>
                <p class="faq-answer" v-html="$t('HomePage.faq.q6.answer', {}, { raw: true })"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'

import { useDeviceDetection } from '@/utils/useDeviceDetection.js'
import { getGameData } from '@/utils/gameUtils'
import { setSEO, getSEOFromLocale } from '@/seo'

const { isMobile } = useDeviceDetection()
const router = useRouter()
const { locale } = useI18n()

const bannerAdSlot = ref(null)

// 注入横幅广告1
const injectBannerAd1 = () => {
  if (!bannerAdSlot.value) return
  bannerAdSlot.value.innerHTML = ''
  window.atOptions = {
    key: '522b073adec0446cd70d13406d93365c',
    format: 'iframe',
    height: 90,
    width: 728,
    params: {},
  }
  const script = document.createElement('script')
  script.src = 'https://www.highperformanceformat.com/522b073adec0446cd70d13406d93365c/invoke.js'
  script.async = true
  bannerAdSlot.value.appendChild(script)
}

// 注入横幅广告2
const injectBannerAd2 = () => {
  const container = document.getElementById('container-adbedbcd8a3516a8ca3fc9c0a5715e6b')
  if (!container) return
  const script = document.createElement('script')
  script.async = true
  script.setAttribute('data-cfasync', 'false')
  script.src = 'https://pl28273598.effectivegatecpm.com/adbedbcd8a3516a8ca3fc9c0a5715e6b/invoke.js'
  document.body.appendChild(script)
}

// 设置SEO
const setupSEO = async () => {
  const seoData = await getSEOFromLocale('home', locale.value)
  setSEO(seoData)
}

// 视频相关状态
const videoPlaying = ref(false)

// 游戏列表
const homeGames = ref([])

// 播放视频方法
const playVideo = () => {
  videoPlaying.value = true
}

// 加载首页游戏
const loadHomeGames = async () => {
  try {
    const games = await getGameData(locale.value)
    // 筛选 isHome 为 true 的游戏
    homeGames.value = games.filter((game) => game.isHome === true)
  } catch (error) {
    console.error('Failed to load home games:', error)
    homeGames.value = []
  }
}

// 导航到游戏详情页
const navigateToGame = (addressBar) => {
  const basePath = locale.value === 'en' ? '' : `/${locale.value}`
  router.push(`${basePath}/games/${addressBar}`)
}

// 获取本地化链接
const localizedHref = (path) => {
  if (locale.value === 'en') return path
  return path === '/' ? `/${locale.value}` : `/${locale.value}${path}`
}

// 图片加载错误处理
const handleImageError = (event) => {
  event.target.src = '/images/games/game-default.webp'
}

// 监听语言变化
watch(
  locale,
  () => {
    loadHomeGames()
    setupSEO()
  },
  { immediate: false }
)

// 优化的组件挂载 - 避免强制重排
onMounted(() => {
  injectBannerAd1()
  injectBannerAd2()
  loadHomeGames()
  setupSEO()
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.section {
  position: relative;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
}

.section.hero {
  height: 100vh;
  padding: 70px 0 0 0;
}

/* Hero Banner */
.hero-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  padding: 8px 16px;
  margin: 0 auto 20px auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 3;
  max-width: 800px;
}

.banner-left {
  display: flex;
  align-items: center;
}

.hot-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
}

.flame-icon {
  font-size: 12px;
}

.banner-right {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #e5e7eb;
  font-size: 12px;
  font-weight: 500;
}

.star-icon {
  font-size: 12px;
}

/* Hero Section */
.hero-title {
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 24px;
  color: white;
  text-align: center;
  position: relative;
  z-index: 3;
  line-height: 1.2;
}

.hero-title .highlight {
  font-family: 'Creepster', cursive;
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
  font-weight: normal;
}

@keyframes glow {
  from {
    text-shadow: 0 0 20px #00ff41, 0 0 40px #00ff41;
  }

  to {
    text-shadow: 0 0 30px #00ff41, 0 0 60px #00ff41, 0 0 80px #00ff41;
  }
}

.hero-description {
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  z-index: 3;
}

.hero-description p {
  font-size: 18px;
  line-height: 1.7;
  color: #d1d5db;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  position: relative;
  z-index: 3;
  margin-bottom: 40px;
}

.btn-download {
  background: linear-gradient(135deg, #00ff41, #00cc33);
  border: 2px solid #00ff41;
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
}

.btn-download:hover {
  background: linear-gradient(135deg, #00cc33, #00aa2a);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 255, 65, 0.6);
}

.btn-guide {
  background: transparent;
  border: 2px solid white;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.btn-guide:hover {
  background: white;
  color: black;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}

.btn-icon {
  font-size: 20px;
}

.hero-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  z-index: 3;
}

.footer-icon {
  font-size: 24px;
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-footer p {
  color: #9ca3af;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
}

/* Section 内容样式 */
.section.hero .hero-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  position: relative;
  z-index: 3;
}

.section.about .about-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section.why .why-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section.guide .guide-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section.faq .faq-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* About Section */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 40px;
}

.about-text p {
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 1.8;
  text-align: left;
}

.subsection-title {
  color: #00ff41;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: left;
  text-shadow: 0 0 15px #00ff41;
  position: relative;
}

.subsection-title::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, #00ff41, #00cc33);
  border-radius: 2px;
  animation: drip 3s ease-in-out infinite;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-image {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.game-image img {
  width: 100%;
  height: auto;
  display: block;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #00ff41;
  margin-bottom: 16px;
  font-size: 20px;
  text-shadow: 0 0 10px #00ff41;
}

.feature-card p {
  font-size: 14px;
  line-height: 1.5;
}

/* Why Section */
.why-intro {
  text-align: center;
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.why-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  text-align: center;
}

.why-card:hover {
  transform: translateY(-5px);
}

.why-image {
  margin-bottom: 16px;
}

.why-image img {
  aspect-ratio: 1/1;
  object-fit: cover;
}

.why-card h3 {
  color: #00ff41;
  margin-bottom: 16px;
  font-size: 18px;
  text-shadow: 0 0 8px #00ff41;
}

.why-card p {
  font-size: 14px;
  line-height: 1.5;
}

/* Guide Section */
.guide-intro {
  text-align: center;
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.guide-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  text-align: center;
}

.guide-card:hover {
  transform: translateY(-5px);
}

.guide-card h3 {
  color: #00ff41;
  margin-bottom: 16px;
  font-size: 18px;
  text-shadow: 0 0 8px #00ff41;
}

.guide-card p {
  font-size: 14px;
  line-height: 1.5;
}

/* FAQ Section */
.faq-intro {
  text-align: center;
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;
}

.faq-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
}

.faq-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.faq-question {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.4;
}

.faq-answer {
  color: #ccc;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

/* Common Styles */
.home-title {
  font-family: 'Creepster', cursive;
  font-size: 2.5rem;
  text-align: center;
  color: #00ff88;
  margin-bottom: 3rem;
  text-shadow: 0 0 10px #00ff88;
  font-weight: normal;
  text-transform: uppercase;
  position: relative;
  z-index: 3;
}

.btn {
  padding: 16px 32px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #00ff41;
  color: #000;
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
}

.btn-primary:hover {
  background: #00cc33;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 255, 65, 0.5);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-secondary:hover {
  background: #fff;
  color: #000;
  transform: translateY(-2px);
}

.btn-large {
  padding: 24px 48px;
  font-size: 19px;
}

.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(10, 0, 20, 0.7) 100%);
  z-index: 0;
}

/* Video Section Styles */
.video-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.video-overlay {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.video-poster {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.video-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.video-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}

/* 蒙版内的播放按钮样式 */
.play-text-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #00ff41;
  border-radius: 30px;
  color: #00ff41;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.play-text-button:hover {
  background: rgba(0, 255, 65, 0.2);
  border-color: #00ff88;
  color: #00ff88;
  transform: translate(-50%, -50%) scale(1.05);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
}

.play-text-icon {
  font-size: 14px;
  line-height: 1;
}

.play-text-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}

.section.hero {
  position: relative;
  overflow: hidden;
}

/* LCP图片优化样式 */
.hero-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: -1;
  background-attachment: fixed;
}

.section.video {
  background-image: url('/images/2.webp');
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Games Section */
.section.games {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.games-wrapper {
  text-align: center;
}

.games-intro {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 40px;
  line-height: 1.6;
}

.home-games-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.home-game-card {
  background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #333;
}

.home-game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
  border-color: #00ff88;
}

.home-game-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.home-game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.home-game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.home-game-card:hover .home-game-overlay {
  opacity: 1;
}

.home-game-card:hover .home-game-image img {
  transform: scale(1.05);
}

.home-play-button {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 10px 20px;
  background: rgba(0, 255, 136, 0.9);
  border-radius: 8px;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.home-game-content {
  padding: 20px;
}

.home-game-title {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.4;
}

.home-game-description {
  color: #b8b8b8;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.games-view-all {
  text-align: center;
  margin-top: 30px;
}

.section.about {
  background-image: url('/images/3.webp');
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.section.why {
  background-image: url('/images/4.webp');
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.section.guide {
  background-image: url('/images/5.webp');
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.section.faq {
  background-image: url('/images/7.webp');
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Responsive Design - 1200px */
@media (max-width: 1200px) {
  .home-games-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
  .section {
    padding: 40px 0;
  }

  .section.hero {
    height: auto;
    padding-top: 100px;
  }

  .section.hero .hero-wrapper {
    padding: 20px;
  }

  .hero-banner {
    padding: 8px 14px;
    margin-bottom: 25px;
    max-width: 90%;
  }

  .hot-badge {
    padding: 5px 10px;
    font-size: 11px;
  }

  .flame-icon {
    font-size: 11px;
  }

  .banner-right {
    font-size: 11px;
  }

  .star-icon {
    font-size: 11px;
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-description p {
    font-size: 17px;
  }

  .home-title {
    font-size: 2rem;
  }

  .video-wrapper {
    padding: 20px;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 30px;
  }

  .section.about .about-wrapper {
    padding: 20px;
  }

  .section.why .why-wrapper {
    padding: 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .why-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .guide-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .home-games-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .section.guide .guide-wrapper {
    padding: 20px;
  }

  .faq-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section.faq .faq-wrapper {
    padding: 20px;
  }

  .btn-large {
    padding: 16px 32px;
    font-size: 16px;
  }
}

/* Link Styles */
a {
  color: #00ff88;
  text-decoration: underline;
  text-decoration-color: #00ff88;
  text-underline-offset: 3px;
  transition: all 0.3s ease;
  font-weight: 600;
}

a:hover {
  color: #00cc66;
  text-decoration-color: #00cc66;
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
}

/* Special styling for links in different contexts */
.hero-description a,
.about-text a,
.feature-card a,
.why-card a,
.guide-card a,
.faq-answer a {
  color: #00ff88;
  text-decoration: underline;
  text-decoration-color: #00ff88;
  text-underline-offset: 3px;
  transition: all 0.3s ease;
  font-weight: 600;
}

.hero-description a:hover,
.about-text a:hover,
.feature-card a:hover,
.why-card a:hover,
.guide-card a:hover,
.faq-answer a:hover {
  color: #00cc66;
  text-decoration-color: #00cc66;
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
}

/* Title links should inherit title styling */
.guide-card h3 a,
.why-card h3 a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: #00ff88;
  text-underline-offset: 3px;
  transition: all 0.3s ease;
}

.guide-card h3 a:hover,
.why-card h3 a:hover {
  color: inherit;
  text-decoration-color: #00cc66;
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
  .section {
    padding: 20px 0;
  }

  .section.hero {
    padding-top: 70px;
    padding-bottom: 20px;
  }

  .section.hero .hero-wrapper {
    padding: 10px;
  }

  .hero-banner {
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    margin-bottom: 10px;
    max-width: 100%;
  }

  .hot-badge {
    padding: 4px 8px;
    font-size: 10px;
    gap: 4px;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .hero-description {
    margin-bottom: 10px;
  }

  .hero-description p {
    font-size: 14px;
    line-height: 1.5;
  }

  .hero-buttons {
    gap: 10px;
    margin-bottom: 10px;
  }

  .flame-icon {
    font-size: 10px;
  }

  .banner-right {
    text-align: center;
    font-size: 10px;
    gap: 4px;
  }

  .star-icon {
    font-size: 10px;
  }

  .btn-download,
  .btn-guide {
    padding: 14px 24px;
    font-size: 16px;
  }

  .hero-footer {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }

  .hero-footer p {
    font-size: 12px;
  }

  .home-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .video-wrapper {
    padding: 10px;
  }

  .play-text-button {
    padding: 10px 20px;
    font-size: 14px;
    gap: 6px;
  }

  .play-text-icon {
    font-size: 12px;
  }

  .hero-subtitle {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .section.about .about-wrapper,
  .section.why .why-wrapper,
  .section.guide .guide-wrapper,
  .section.faq .faq-wrapper,
  .about-text p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 20px;
  }

  .subsection-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 20px;
  }

  .feature-card {
    padding: 10px;
  }

  .feature-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .feature-card p {
    font-size: 12px;
    line-height: 1.5;
  }

  .why-intro,
  .guide-intro,
  .faq-intro {
    font-size: 12px;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  .why-grid {
    gap: 10px;
  }

  .why-card {
    padding: 10px;
  }

  .why-image {
    margin-bottom: 10px;
  }

  .why-card h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .why-card p {
    font-size: 12px;
    line-height: 1.5;
  }

  .guide-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .home-games-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .home-game-image {
    height: 180px;
  }

  .home-game-content {
    padding: 15px;
  }

  .home-game-title {
    font-size: 1.1rem;
  }

  .home-game-description {
    font-size: 0.85rem;
  }

  .guide-card {
    padding: 10px;
  }

  .guide-card h3 {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .guide-card p {
    font-size: 12px;
    line-height: 1.5;
  }

  .faq-question {
    font-size: 16px;
  }

  .faq-answer {
    font-size: 12px;
    line-height: 1.5;
  }

  .btn {
    padding: 10px 20px;
    font-size: 12px;
  }

  .btn-large {
    padding: 10px 20px;
    font-size: 14px;
  }

  .btn-icon {
    display: none;
  }
}

.ad-wrap {
  width: 100%;
  text-align: center;
  overflow: hidden;
  margin-top: 20px;
  position: relative;
  z-index: 2;
}
</style>
