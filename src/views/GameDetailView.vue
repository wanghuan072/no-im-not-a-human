<template>
  <div class="game-detail-page">
    <AppHeader :class="{ hidden: webFullscreen }" />

    <!-- Loading State -->
    <div v-if="loading" class="loading-section">
      <div class="container">
        <div class="loading-state">
          <div class="loading-spinner"></div>
          <p>{{ $t('GamesPage.detail.loading') }}</p>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-section">
      <div class="container">
        <div class="error-state">
          <div class="error-icon">⚠️</div>
          <h2>{{ $t('GamesPage.detail.error.title') }}</h2>
          <p>{{ $t('GamesPage.detail.error.description') }}</p>
          <a :href="localizedHref('/games')" class="btn btn-primary">{{
            $t('GamesPage.detail.error.backToGames')
          }}</a>
        </div>
      </div>
    </div>

    <!-- Game Detail Page -->
    <div class="game-detail" v-if="game && !loading">
      <div class="container">
        <div class="game-wrapper">
          <!-- Left Side - Game Player -->
          <div class="game-left" :class="{ 'web-fullscreen': webFullscreen }">
            <!-- Game Player Box with Control Bar -->
            <div class="player-wrapper">
              <div class="player-box">
                <div v-if="!gamePlaying" class="player-preview">
                  <div class="game-icon-frame">
                    <img :src="game.imageUrl" :alt="game.imageAlt" />
                  </div>
                  <button class="play-btn" @click="startGame">
                    {{ $t('GamesPage.detail.playButton') }}
                  </button>
                </div>
                <iframe
                  v-if="gamePlaying"
                  id="game-iframe"
                  :src="game.iframeUrl"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="game-iframe"
                ></iframe>
              </div>
              <div class="game-control-bar">
                <h3 class="control-title">{{ game.title }}</h3>
                <div class="control-buttons">
                  <button
                    class="control-btn"
                    @click="toggleWebFullscreen"
                    :title="webFullscreen ? $t('GamesPage.detail.exitWebFullscreen') : $t('GamesPage.detail.webFullscreen')"
                  >
                    <svg viewBox="0 0 1024 1024" fill="currentColor">
                      <path d="M547.4 197.4v46l200.3 0.1L546.1 444l32.4 32.6 201.9-200.7v200.9h46V197.5zM471.4 584.4l-32.6-32.6L243.6 747V547.9h-46v278.7h279v-46H275z" />
                    </svg>
                  </button>
                  <button
                    class="control-btn"
                    @click="toggleFullscreen"
                    :title="$t('GamesPage.detail.fullscreen')"
                  >
                    <svg viewBox="0 0 1024 1024" fill="currentColor">
                      <path d="M95.500388 368.593511c0 11.905658-9.637914 21.543572-21.543573 21.543572-11.877311 0-21.515225-9.637914-21.515225-21.543572V188.704684c0-37.502824 15.307275-71.575684 39.997343-96.265751s58.762928-39.997342 96.265751-39.997343h179.888827c11.905658 0 21.543572 9.637914 21.543572 21.515225 0 11.905658-9.637914 21.543572-21.543572 21.543573H188.704684c-25.625512 0-48.926586 10.488318-65.821282 27.383014s-27.383014 40.19577-27.383014 65.821282v179.888827z m559.906101-273.093123c-11.877311 0-21.515225-9.637914-21.515226-21.543573 0-11.877311 9.637914-21.515225 21.515226-21.515225h179.917174c37.502824 0 71.547337 15.307275 96.237404 39.997343s40.025689 58.762928 40.02569 96.265751v179.888827c0 11.905658-9.637914 21.543572-21.543572 21.543572-11.877311 0-21.515225-9.637914-21.515226-21.543572V188.704684c0-25.625512-10.488318-48.926586-27.411361-65.821282-16.894696-16.894696-40.19577-27.383014-65.792935-27.383014h-179.917174z m273.12147 559.906101c0-11.877311 9.637914-21.515225 21.515226-21.515226 11.905658 0 21.543572 9.637914 21.543572 21.515226v179.917174c0 37.474477-15.335622 71.547337-40.02569 96.237404s-58.734581 39.997342-96.237404 39.997343h-179.917174c-11.877311 0-21.515225-9.637914-21.515226-21.515225s9.637914-21.543572 21.515226-21.543573h179.917174c25.597165 0 48.898239-10.488318 65.792935-27.383014 16.923043-16.894696 27.411361-40.19577 27.411361-65.792935v-179.917174z m-559.934448 273.093123c11.905658 0 21.543572 9.666261 21.543572 21.543573s-9.637914 21.515225-21.543572 21.515225H188.704684c-37.502824 0-71.575684-15.307275-96.265751-39.997343s-39.997342-58.762928-39.997343-96.237404v-179.917174c0-11.877311 9.637914-21.515225 21.515225-21.515226 11.905658 0 21.543572 9.637914 21.543573 21.515226v179.917174c0 25.597165 10.488318 48.898239 27.383014 65.792935s40.19577 27.383014 65.821282 27.383014h179.888827z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Game Details HTML -->
            <div v-if="game.detailsHtml" class="game-html" v-html="game.detailsHtml"></div>
          </div>

          <!-- Right Side - Game Info -->
          <div class="game-right">
            <div class="game-info">
              <h1 class="game-title">{{ game.title }}</h1>
              <span class="game-date">{{ formatDate(game.publishDate) }}</span>
              <p class="game-desc">{{ game.description }}</p>
            </div>

            <!-- Comments Section -->
            <div v-if="game.comments && game.comments.length > 0" class="comments">
              <h3 class="comments-heading">{{ $t('GamesPage.detail.comments') }}</h3>
              <div class="comment-list">
                <div v-for="comment in game.comments" :key="comment.id" class="comment">
                  <div class="comment-avatar">
                    <span>{{ comment.author.charAt(0).toUpperCase() }}</span>
                  </div>
                  <div class="comment-content">
                    <div class="comment-header">
                      <span class="comment-author">{{ comment.author }}</span>
                      <span class="comment-date">{{ comment.date }}</span>
                    </div>
                    <div class="comment-rating" v-if="comment.rating">
                      <span
                        v-for="i in 5"
                        :key="i"
                        class="star"
                        :class="{ filled: i <= comment.rating }"
                      >
                        ★
                      </span>
                    </div>
                    <p class="comment-text">{{ comment.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter :class="{ hidden: webFullscreen }" />
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getGameByAddressBar, formatDate } from '@/utils/gameUtils'
import { setSEO } from '@/seo'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'GameDetailView',
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const route = useRoute()
    const { locale } = useI18n()

    const game = ref(null)
    const loading = ref(true)
    const error = ref(false)
    const gamePlaying = ref(false)
    const webFullscreen = ref(false)

    // 加载游戏详情
    const loadGame = async () => {
      try {
        loading.value = true
        error.value = false

        const gameId = route.params.id
        if (!gameId || typeof gameId !== 'string') {
          error.value = true
          return
        }

        const gameData = await getGameByAddressBar(gameId, locale.value)

        if (!gameData) {
          error.value = true
          return
        }

        game.value = gameData

        // 设置SEO
        await setupSEO(gameData)
      } catch (err) {
        console.error('Failed to load game:', err)
        error.value = true
      } finally {
        loading.value = false
      }
    }

    const localizedHref = (path) => {
      if (locale.value === 'en') return path
      return path === '/' ? `/${locale.value}` : `/${locale.value}${path}`
    }

    // 设置SEO
    const setupSEO = async (gameData) => {
      const { getGameSEO } = await import('@/utils/gameUtils')
      const seoData = getGameSEO(gameData)
      setSEO({
        ...seoData,
        image: gameData.imageUrl ? `https://iamnotahuman.org${gameData.imageUrl}` : undefined
      })
    }

    // 开始游戏
    const startGame = () => {
      gamePlaying.value = true
    }

    // 切换网页全屏（隐藏其他UI元素）
    const toggleWebFullscreen = () => {
      webFullscreen.value = !webFullscreen.value
      if (webFullscreen.value) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }

    // 切换浏览器原生全屏
    const toggleFullscreen = () => {
      const iframe = document.getElementById('game-iframe')
      if (!iframe) return

      if (!document.fullscreenElement) {
        iframe.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`)
        })
      } else {
        document.exitFullscreen()
      }
    }

    watch(
      () => [route.params.id, locale.value],
      () => {
        loadGame()
        gamePlaying.value = false
        webFullscreen.value = false
      },
      { immediate: true }
    )

    onMounted(() => {
      loadGame()
    })

    return {
      game,
      loading,
      error,
      gamePlaying,
      webFullscreen,
      formatDate,
      localizedHref,
      startGame,
      toggleWebFullscreen,
      toggleFullscreen,
    }
  },
}
</script>

<style scoped>
.game-detail-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.loading-section,
.error-section {
  padding-top: 100px;
  padding-bottom: 60px;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 60px 20px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #333;
  border-top: 4px solid #00ff88;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.error-state h2 {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.error-state p {
  color: #b8b8b8;
  margin-bottom: 20px;
}

.game-detail {
  padding: 120px 0 60px;
}

.game-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

/* Left Side */
.game-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  transition: all 0.3s ease;
}

.game-left.web-fullscreen {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: #000 !important;
  z-index: 9999 !important;
  gap: 0;
  padding: 20px;
  margin: 0 !important;
}

.game-left.web-fullscreen .player-wrapper {
  height: 100vh;
}

.game-left.web-fullscreen .player-box {
  height: calc(100vh - 60px);
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: none;
}

.game-left.web-fullscreen .game-control-bar {
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-top: 2px solid #333;
}

.game-left.web-fullscreen .game-html {
  display: none;
}

.hidden {
  display: none !important;
}

.player-wrapper {
  display: flex;
  flex-direction: column;
}

.player-box {
  background: #1a1a1a;
  border: 2px solid #333;
  border-radius: 8px 8px 0 0;
  height: 600px;
  position: relative;
  overflow: hidden;
}

.player-preview {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 20px;
}

.game-icon-frame {
  width: 150px;
  height: 150px;
  border: 3px solid #00ff88;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
}

.game-icon-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-btn {
  background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
  color: #000;
  border: none;
  border-radius: 6px;
  padding: 12px 50px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: none;
}

.play-btn:hover {
  background: linear-gradient(135deg, #00cc6a 0%, #00ff88 100%);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 136, 0.5);
}

.player-box iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.game-control-bar {
  background: #1a1a1a;
  border: 2px solid #333;
  border-top: none;
  border-radius: 0 0 8px 8px;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
}

.control-title {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.control-buttons {
  display: flex;
  gap: 8px;
}

.control-btn {
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #333;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #fff;
}

.control-btn:hover {
  background: rgba(0, 255, 136, 0.2);
  border-color: #00ff88;
  color: #00ff88;
}

.control-btn svg {
  width: 16px;
  height: 16px;
}

.game-html {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  border: 1px solid #333;
}

.game-html :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
}

.game-html :deep(h3) {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.game-html :deep(p) {
  margin-bottom: 1rem;
  color: #ccc;
  line-height: 1.6;
}

.game-html :deep(ul),
.game-html :deep(ol) {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.game-html :deep(li) {
  padding: 0.5rem 0;
  color: #ccc;
  line-height: 1.6;
}

.game-html :deep(li)::before {
  content: "• ";
  color: #00ff88;
  margin-right: 0.5rem;
  font-weight: bold;
}

.game-html :deep(blockquote) {
  border-left: 3px solid #00ff88;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #ccc;
  font-style: italic;
}

.game-html :deep(a) {
  color: #00ff88;
  text-decoration: none;
}

.game-html :deep(a:hover) {
  text-decoration: underline;
}

.game-html :deep(.faq-question) {
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
}

.game-html :deep(.faq-answer) {
  color: #ccc;
  margin-bottom: 1rem;
}

/* Right Side */
.game-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.game-info {
  background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #333;
}

.game-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
}

.game-date {
  display: block;
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.game-desc {
  color: #ccc;
  line-height: 1.6;
  font-size: 0.9rem;
  margin: 0;
}

/* Comments */
.comments {
  background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #333;
}

.comments-heading {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.comment {
  display: flex;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #333;
}

.comment:last-child {
  border-bottom: none;
}

.comment-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.comment-author {
  font-weight: 600;
  color: #fff;
  font-size: 0.9rem;
}

.comment-date {
  color: #888;
  font-size: 0.8rem;
}

.comment-rating {
  margin-bottom: 4px;
}

.star {
  color: #555;
  font-size: 0.9rem;
}

.star.filled {
  color: #ffd700;
}

.comment-text {
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
  color: #000;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #00cc6a 0%, #00ff88 100%);
  box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .game-wrapper {
    grid-template-columns: 1fr;
  }

  .game-right {
    order: -1;
  }
}

@media (max-width: 768px) {
  .game-detail {
    padding: 100px 0 40px;
  }

  .player-box {
    height: 400px;
  }

  .game-info,
  .comments {
    padding: 15px;
  }
}
</style>

