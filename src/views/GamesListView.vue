<template>
  <div class="games-list-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="section hero">
      <div class="container">
        <div class="hero-wrapper">
          <h1 class="hero-title" v-html="$t('GamesPage.list.hero.title', {}, { raw: true })"></h1>
          <div class="hero-description">
            <p>{{ $t('GamesPage.list.hero.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Games List Section -->
    <section class="section games-list">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <div class="loading-spinner"></div>
          <p>{{ $t('GamesPage.list.loading') }}</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-state">
          <div class="error-icon">⚠️</div>
          <h3>{{ $t('GamesPage.list.error.title') }}</h3>
          <p>{{ $t('GamesPage.list.error.description') }}</p>
          <button @click="loadGames" class="btn btn-primary">
            {{ $t('GamesPage.list.error.retry') }}
          </button>
        </div>

        <!-- Games Grid -->
        <div v-else-if="games.length > 0" class="games-grid">
          <article
            v-for="game in games"
            :key="game.id"
            class="game-card"
            @click="navigateToGame(game.addressBar)"
          >
            <div class="game-image">
              <img
                :src="game.imageUrl"
                :alt="game.imageAlt"
                loading="lazy"
                @error="handleImageError"
              />
              <div class="game-overlay">
                <span class="play-button">▶ {{ $t('GamesPage.list.playNow') }}</span>
              </div>
            </div>
            <div class="game-content">
              <h2 class="game-title">{{ game.title }}</h2>
              <p class="game-description">{{ game.description }}</p>
              <div class="game-meta">
                <span class="publish-date">{{ formatDate(game.publishDate) }}</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state">
          <div class="empty-icon">🎮</div>
          <h3>{{ $t('GamesPage.list.empty.title') }}</h3>
          <p>{{ $t('GamesPage.list.empty.description') }}</p>
        </div>

        <!-- Pagination -->
        <div
          v-if="!loading && !error && games.length > 0 && pagination.totalPages > 1"
          class="pagination"
        >
          <button
            v-if="pagination.currentPage > 1"
            @click="goToPage(pagination.currentPage - 1)"
            class="btn btn-secondary pagination-btn"
          >
            {{ $t('GamesPage.list.pagination.previous') }}
          </button>

          <div class="pagination-info">
            {{
              $t('GamesPage.list.pagination.page', {
                current: pagination.currentPage,
                total: pagination.totalPages,
              })
            }}
          </div>

          <button
            v-if="pagination.hasMore"
            @click="goToPage(pagination.currentPage + 1)"
            class="btn btn-secondary pagination-btn"
          >
            {{ $t('GamesPage.list.pagination.next') }}
          </button>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getGamesList, formatDate } from '@/utils/gameUtils'
import { setSEO } from '@/seo'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'GamesListView',
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const router = useRouter()
    const { locale } = useI18n()

    const games = ref([])
    const pagination = ref({
      total: 0,
      limit: 12,
      offset: 0,
      hasMore: false,
      currentPage: 1,
      totalPages: 0,
    })
    const loading = ref(true)
    const error = ref(false)

    // 加载游戏列表
    const loadGames = async (page = 1) => {
      try {
        loading.value = true
        error.value = false

        const offset = (page - 1) * pagination.value.limit
        const result = await getGamesList(locale.value, {
          limit: pagination.value.limit,
          offset,
        })

        games.value = result.games
        pagination.value = result.pagination
      } catch (err) {
        console.error('Failed to load games:', err)
        error.value = true
      } finally {
        loading.value = false
      }
    }

    // 导航到游戏详情页
    const navigateToGame = (addressBar) => {
      const basePath = locale.value === 'en' ? '' : `/${locale.value}`
      router.push(`${basePath}/games/${addressBar}`)
    }

    // 分页
    const goToPage = (page) => {
      loadGames(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // 图片加载错误处理
    const handleImageError = (event) => {
      event.target.src = '/images/games/game-default.webp'
    }

    // 设置SEO
    const setupSEO = async () => {
      const { getGameListSEO } = await import('@/utils/gameUtils')
      const seoData = await getGameListSEO(locale.value)
      setSEO(seoData)
    }

    // 监听语言变化
    watch(
      locale,
      () => {
        loadGames(1)
        setupSEO()
      },
      { immediate: false }
    )

    onMounted(() => {
      loadGames(1)
      setupSEO()
    })

    return {
      games,
      pagination,
      loading,
      error,
      formatDate,
      loadGames,
      navigateToGame,
      goToPage,
      handleImageError,
    }
  },
}
</script>

<style scoped>
.games-list-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.section.hero {
  padding: 100px 0 40px 0;
  background: #000;
  position: relative;
  overflow: hidden;
}

.section.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/about-img.webp');
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  z-index: 1;
  opacity: 0.8;
}

.section.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 2;
}

.section.hero .container {
  position: relative;
  z-index: 3;
}

.hero-wrapper {
  position: relative;
  z-index: 3;
}

.hero-title {
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 24px;
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

.hero-description {
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  z-index: 3;
}

.hero-description p {
  font-size: 18px;
  line-height: 1.6;
  color: #ccc;
}

.games-list {
  padding: 60px 0;
}

.loading-state,
.error-state,
.empty-state {
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

.error-icon,
.empty-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.error-state h3,
.empty-state h3 {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.error-state p,
.empty-state p {
  color: #b8b8b8;
  margin-bottom: 20px;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.game-card {
  background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #333;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
  border-color: #00ff88;
}

.game-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.game-overlay {
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

.game-card:hover .game-overlay {
  opacity: 1;
}

.game-card:hover .game-image img {
  transform: scale(1.05);
}

.play-button {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 12px 24px;
  background: rgba(0, 255, 136, 0.9);
  border-radius: 8px;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.game-content {
  padding: 10px;
}

.game-title {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.4;
}

.game-description {
  color: #b8b8b8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #333;
}

.publish-date {
  color: #888;
  font-size: 0.85rem;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}

.pagination-info {
  color: #ccc;
  font-size: 0.95rem;
}

.pagination-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
  border: 1px solid #333;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.pagination-btn:hover {
  background: linear-gradient(135deg, #3a3a3a 0%, #2e2e2e 100%);
  border-color: #00ff88;
  color: #00ff88;
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

.btn-secondary {
  background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
  color: #fff;
  border: 1px solid #333;
}

.btn-secondary:hover {
  background: linear-gradient(135deg, #3a3a3a 0%, #2e2e2e 100%);
  border-color: #00ff88;
  color: #00ff88;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .games-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-description p {
    font-size: 16px;
  }

  .games-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .game-image {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .games-grid {
    grid-template-columns: 1fr;
  }

  .game-content {
    padding: 15px;
  }

  .game-title {
    font-size: 1.1rem;
  }

  .game-description {
    font-size: 0.9rem;
  }
}
</style>

