<template>
  <div class="blog-detail-page">
    <AppHeader />

    <!-- Loading State -->
    <div v-if="loading" class="loading-section">
      <div class="container">
        <div class="loading-state">
          <div class="loading-spinner"></div>
          <p>{{ $t('BlogPage.detail.loading') }}</p>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-section">
      <div class="container">
        <div class="error-state">
          <div class="error-icon">⚠️</div>
          <h2>{{ $t('BlogPage.detail.error.title') }}</h2>
          <p>{{ $t('BlogPage.detail.error.description') }}</p>
          <a :href="localizedHref('/blog')" class="btn btn-primary">{{
            $t('BlogPage.detail.error.backToBlog')
          }}</a>
        </div>
      </div>
    </div>

    <!-- Blog Content -->
    <div v-else-if="blog" class="blog-content">
      <!-- Hero Section -->
      <section class="section hero" :style="{ backgroundImage: `url(${blog.imageUrl})` }">
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-wrapper">
            <!-- Breadcrumb -->
            <nav class="breadcrumb">
              <a :href="localizedHref('/')">{{ $t('BlogPage.detail.breadcrumb.home') }}</a>
              <span class="separator">/</span>
              <a :href="localizedHref('/blog')">{{ $t('BlogPage.detail.breadcrumb.blog') }}</a>
              <span class="separator">/</span>
              <span class="current">{{ blog.title }}</span>
            </nav>

            <!-- Blog Meta -->
            <div class="blog-meta">
              <h1 class="blog-title">{{ blog.title }}</h1>
              <div class="blog-info">
                <span class="publish-date">{{ formatDate(blog.publishDate) }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Article Content -->
      <section class="section article">
        <div class="container">
          <div class="article-wrapper">
            <article class="article-content">
              <div class="content" v-html="blog.detailsHtml"></div>
            </article>
          </div>
        </div>
      </section>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getBlogByAddressBar, formatDate } from '@/utils/blogUtils'
import { setSEO } from '@/seo'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'BlogDetailView',
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const route = useRoute()
    const { locale } = useI18n()

    const blog = ref(null)
    const loading = ref(true)
    const error = ref(false)

    // 加载博客详情
    const loadBlog = async () => {
      try {
        loading.value = true
        error.value = false

        const slug = route.params.slug
        if (!slug || typeof slug !== 'string') {
          error.value = true
          return
        }

        const blogData = await getBlogByAddressBar(slug, locale.value)

        if (!blogData) {
          error.value = true
          return
        }

        blog.value = blogData

        // 设置SEO
        await setupSEO(blogData)
      } catch (err) {
        console.error('Failed to load blog:', err)
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
    const setupSEO = async (blogData) => {
      const seoData = await import('@/utils/blogUtils').then((module) =>
        module.getBlogSEO(blogData)
      )
      setSEO(seoData)
    }

    watch(
      () => [route.params.slug, locale.value],
      () => {
        loadBlog()
      },
      { immediate: true }
    )

    return {
      blog,
      loading,
      error,
      localizedHref,
      formatDate,
    }
  },
}
</script>

<style scoped>
.blog-detail-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.loading-section,
.error-section {
  padding: 100px 0;
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

.hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 0 60px;
  position: relative;
  min-height: 500px;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 1;
}

.hero .container {
  position: relative;
  z-index: 2;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: #ff6b35;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: #ffffff;
}

.breadcrumb .separator {
  color: rgba(255, 255, 255, 0.6);
}

.breadcrumb .current {
  color: rgba(255, 255, 255, 0.8);
}

.blog-meta {
  text-align: center;
  margin-top: 60px;
}

.blog-title {
  font-family: 'Creepster', cursive;
  color: #00ff88;
  font-size: 3rem;
  font-weight: normal;
  margin-bottom: 20px;
  line-height: 1.2;
  text-shadow: 0 0 15px #00ff88, 0 0 30px rgba(0, 255, 136, 0.5), 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.blog-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.publish-date {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.article {
  padding: 60px 0;
}

.article-wrapper {
  margin: 0 auto;
}

.article-content {
  background: linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 100%);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 40px;
  border: 1px solid #333;
}

.content {
  color: #ccc;
  line-height: 1.8;
  font-size: 1.1rem;
}

.content :deep(h1),
.content :deep(h2) {
  font-family: 'Creepster', cursive;
  color: #00ff88;
  margin: 30px 0 15px 0;
  font-weight: normal;
  text-shadow: 0 0 10px #00ff88, 0 0 20px rgba(0, 255, 136, 0.3);
}

.content :deep(h4),
.content :deep(h5),
.content :deep(h6) {
  color: #00ff88;
  margin: 25px 0 15px 0;
  font-weight: 600;
}

.content :deep(h2) {
  font-size: 2.5rem;
  border-bottom: 2px solid rgba(0, 255, 136, 0.3);
  padding-bottom: 15px;
  margin-top: 0;
  margin-bottom: 20px;
}

.content :deep(h3) {
  font-family: inherit;
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 600;
  color: #00ff88;
  text-shadow: none;
}

.content :deep(p) {
  margin-bottom: 20px;
}

.content :deep(a) {
  color: #00ff88;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
}

.content :deep(a:hover) {
  border-bottom-color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
}

.content :deep(ul),
.content :deep(ol) {
  margin: 25px 0;
  padding: 20px 20px 20px 50px;
  background: rgba(0, 255, 136, 0.03);
  border-left: 3px solid rgba(0, 255, 136, 0.3);
  border-radius: 4px;
}

.content :deep(li) {
  margin-bottom: 15px;
  position: relative;
  padding-left: 10px;
}

.content :deep(li::marker) {
  color: #00ff88;
}

.content :deep(ul li::before) {
  content: '▸';
  color: #00ff88;
  font-weight: bold;
  position: absolute;
  left: -20px;
}

.content :deep(strong) {
  color: #00ff88;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
}

.content :deep(.image-container) {
  display: flex;
  gap: 15px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}

.content :deep(.image-container img) {
  flex: 1;
  max-width: 25%;
  height: auto;
  border-radius: 8px;
  display: block;
  object-fit: cover;
}

.content :deep(blockquote) {
  border-left: 4px solid #00ff88;
  background: rgba(0, 255, 136, 0.05);
  padding: 20px 20px 20px 25px;
  margin: 30px 0;
  font-style: italic;
  color: #aaa;
  border-radius: 4px;
  box-shadow: inset 0 0 20px rgba(0, 255, 136, 0.1);
  position: relative;
}

.content :deep(blockquote::before) {
  content: '"';
  font-family: 'Creepster', cursive;
  font-size: 4rem;
  color: rgba(0, 255, 136, 0.2);
  position: absolute;
  top: -10px;
  left: 10px;
  line-height: 1;
}

.content :deep(code) {
  background: rgba(0, 255, 136, 0.1);
  color: #00ff88;
  padding: 2px 8px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.95em;
}

.content :deep(pre) {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 6px;
  padding: 20px;
  margin: 25px 0;
  overflow-x: auto;
}

.content :deep(pre code) {
  background: none;
  padding: 0;
}

.content :deep(hr) {
  border: none;
  border-top: 2px solid rgba(0, 255, 136, 0.2);
  margin: 40px 0;
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.1);
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

/* 响应式设计 */
@media (max-width: 768px) {
  .hero {
    min-height: 400px;
    padding: 60px 0 40px;
  }

  .blog-title {
    font-size: 2.2rem;
  }

  .blog-meta {
    margin-top: 40px;
  }

  .article-content {
    padding: 30px 20px;
  }

  .content :deep(h2) {
    font-size: 2rem;
  }

  .content :deep(h3) {
    font-size: 1.5rem;
  }

  .content :deep(ul),
  .content :deep(ol) {
    padding: 15px 15px 15px 40px;
  }

  .content :deep(img) {
    margin: 20px 0;
  }

  .content :deep(.image-container) {
    gap: 12px;
    margin: 25px 0;
  }

  .content :deep(.image-container img) {
    max-width: 48%;
  }

  .content :deep(blockquote) {
    padding: 15px 15px 15px 20px;
  }

  .content :deep(blockquote::before) {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .hero {
    min-height: 350px;
    padding: 40px 0 30px;
  }

  .blog-title {
    font-size: 1.8rem;
  }

  .blog-meta {
    margin-top: 30px;
  }

  .breadcrumb {
    margin-bottom: 30px;
    font-size: 0.8rem;
  }

  .article-content {
    padding: 20px 15px;
  }

  .content :deep(h2) {
    font-size: 1.6rem;
  }

  .content :deep(h3) {
    font-size: 1.3rem;
  }

  .content :deep(ul),
  .content :deep(ol) {
    padding: 12px 12px 12px 35px;
  }

  .content :deep(.image-container) {
    flex-direction: column;
    gap: 10px;
  }

  .content :deep(.image-container img) {
    max-width: 100%;
    flex: none;
  }

  .content :deep(blockquote) {
    padding: 12px 12px 12px 18px;
    margin: 20px 0;
  }

  .content :deep(blockquote::before) {
    font-size: 2.5rem;
    top: -5px;
    left: 5px;
  }
}
</style>
