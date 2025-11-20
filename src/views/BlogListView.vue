<template>
  <div class="blog-list-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="section hero">
      <div class="container">
        <div class="hero-wrapper">
          <h1 class="hero-title" v-html="$t('BlogPage.list.hero.title', {}, { raw: true })"></h1>
          <div class="hero-description">
            <p>{{ $t('BlogPage.list.hero.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog List Section -->
    <section class="section blog-list">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <div class="loading-spinner"></div>
          <p>{{ $t('BlogPage.list.loading') }}</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-state">
          <div class="error-icon">⚠️</div>
          <h3>{{ $t('BlogPage.list.error.title') }}</h3>
          <p>{{ $t('BlogPage.list.error.description') }}</p>
          <button @click="loadBlogs" class="btn btn-primary">
            {{ $t('BlogPage.list.error.retry') }}
          </button>
        </div>

        <!-- Blog Grid -->
        <div v-else-if="blogs.length > 0" class="blog-grid">
          <article
            v-for="blog in blogs"
            :key="blog.id"
            class="blog-card"
            @click="navigateToBlog(blog.addressBar)"
          >
            <div class="blog-image">
              <img
                :src="blog.imageUrl"
                :alt="blog.imageAlt"
                loading="lazy"
                @error="handleImageError"
              />
            </div>
            <div class="blog-content">
              <h2 class="blog-title">{{ blog.title }}</h2>
              <div class="blog-meta">
                <span class="publish-date">{{ formatDate(blog.publishDate) }}</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state">
          <div class="empty-icon">📝</div>
          <h3>{{ $t('BlogPage.list.empty.title') }}</h3>
          <p>{{ $t('BlogPage.list.empty.description') }}</p>
        </div>

        <!-- Pagination -->
        <div
          v-if="!loading && !error && blogs.length > 0 && pagination.totalPages > 1"
          class="pagination"
        >
          <button
            v-if="pagination.currentPage > 1"
            @click="goToPage(pagination.currentPage - 1)"
            class="btn btn-secondary pagination-btn"
          >
            {{ $t('BlogPage.list.pagination.previous') }}
          </button>

          <div class="pagination-info">
            {{
              $t('BlogPage.list.pagination.page', {
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
            {{ $t('BlogPage.list.pagination.next') }}
          </button>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getBlogsList, formatDate } from '@/utils/blogUtils'
import { setSEO } from '@/seo'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'BlogListView',
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const router = useRouter()
    const { locale } = useI18n()

    const blogs = ref([])
    const pagination = ref({
      total: 0,
      limit: 10,
      offset: 0,
      hasMore: false,
      currentPage: 1,
      totalPages: 0,
    })
    const loading = ref(true)
    const error = ref(false)

    // 加载博客列表
    const loadBlogs = async (page = 1) => {
      try {
        loading.value = true
        error.value = false

        const offset = (page - 1) * pagination.value.limit
        const result = await getBlogsList(locale.value, {
          limit: pagination.value.limit,
          offset,
        })

        blogs.value = result.blogs
        pagination.value = result.pagination
      } catch (err) {
        console.error('Failed to load blogs:', err)
        error.value = true
      } finally {
        loading.value = false
      }
    }

    const buildLocalizedPath = (lang, basePath) => {
      if (lang === 'en') return basePath
      return basePath === '/' ? `/${lang}` : `/${lang}${basePath}`
    }

    // 导航到博客详情页
    const navigateToBlog = (addressBar) => {
      const basePath = `/blog/${addressBar}`
      router.push(buildLocalizedPath(locale.value, basePath))
    }

    // 分页导航
    const goToPage = (page) => {
      if (page >= 1 && page <= pagination.value.totalPages) {
        loadBlogs(page)
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    // 图片加载错误处理
    const handleImageError = (event) => {
      // 避免无限循环，如果已经是占位图片就不再替换
      if (!event.target.src.includes('about-img.webp')) {
        event.target.src = '/images/about-img.webp'
      }
    }

    // 设置SEO
    const setupSEO = async () => {
      const seoData = await import('@/utils/blogUtils').then((module) =>
        module.getBlogListSEO(locale.value)
      )
      setSEO(seoData)
    }

    // 组件挂载时加载数据
    onMounted(async () => {
      await loadBlogs()
      await setupSEO()
    })

    return {
      blogs,
      pagination,
      loading,
      error,
      formatDate,
      loadBlogs,
      navigateToBlog,
      goToPage,
      handleImageError,
    }
  },
}
</script>

<style scoped>
.blog-list-page {
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

.blog-list {
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
  border-top: 4px solid #ff6b35;
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

.blog-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.blog-card {
  background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #333;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: #ff6b35;
}

.blog-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 20px;
}

.blog-title {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.4;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.publish-date {
  color: #888;
  font-size: 0.9rem;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}

.pagination-btn {
  padding: 10px 20px;
  border: 1px solid #444;
  background: transparent;
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-btn:hover {
  background: #ff6b35;
  border-color: #ff6b35;
}

.pagination-info {
  color: #b8b8b8;
  font-size: 0.9rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: #ffffff;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid #444;
}

.btn-secondary:hover {
  background: #444;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section.hero {
    padding: 100px 0 20px 0;
  }

  .section.hero .hero-wrapper {
    padding: 20px;
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-description p {
    font-size: 17px;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .pagination {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .section.hero {
    padding: 70px 0 20px 0;
  }

  .section.hero .hero-wrapper {
    padding: 10px 0;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .hero-description {
    margin-bottom: 20px;
  }

  .hero-description p {
    font-size: 12px;
    line-height: 1.5;
  }

  .blog-content {
    padding: 20px;
  }

  .blog-title {
    font-size: 1.1rem;
  }
}
</style>
