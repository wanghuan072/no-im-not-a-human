<template>
  <div class="copyright-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="section hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title" v-html="$t('CopyrightPage.hero.title', {}, { raw: true })"></h1>
          <p class="hero-subtitle">{{ $t('CopyrightPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section main-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="copyright-content">
            <h2>{{ $t('CopyrightPage.statement.title') }}</h2>
            <p v-html="$t('CopyrightPage.statement.content', {}, { raw: true })"></p>

            <h2>{{ $t('CopyrightPage.whatWeOwn.title') }}</h2>
            <ul>
              <li v-html="$t('CopyrightPage.whatWeOwn.item1', {}, { raw: true })"></li>
              <li v-html="$t('CopyrightPage.whatWeOwn.item2', {}, { raw: true })"></li>
              <li v-html="$t('CopyrightPage.whatWeOwn.item3', {}, { raw: true })"></li>
              <li v-html="$t('CopyrightPage.whatWeOwn.item4', {}, { raw: true })"></li>
            </ul>

            <h2>{{ $t('CopyrightPage.thirdParty.title') }}</h2>
            <p v-html="$t('CopyrightPage.thirdParty.content', {}, { raw: true })"></p>

            <h2>{{ $t('CopyrightPage.fairUse.title') }}</h2>
            <p>{{ $t('CopyrightPage.fairUse.intro') }}</p>
            <p v-html="$t('CopyrightPage.fairUse.allowedTitle', {}, { raw: true })"></p>
            <ul>
              <li>{{ $t('CopyrightPage.fairUse.allowed1') }}</li>
              <li>{{ $t('CopyrightPage.fairUse.allowed2') }}</li>
              <li>{{ $t('CopyrightPage.fairUse.allowed3') }}</li>
              <li>{{ $t('CopyrightPage.fairUse.allowed4') }}</li>
            </ul>
            <p v-html="$t('CopyrightPage.fairUse.restrictedTitle', {}, { raw: true })"></p>
            <ul>
              <li>{{ $t('CopyrightPage.fairUse.restricted1') }}</li>
              <li>{{ $t('CopyrightPage.fairUse.restricted2') }}</li>
              <li>{{ $t('CopyrightPage.fairUse.restricted3') }}</li>
              <li>{{ $t('CopyrightPage.fairUse.restricted4') }}</li>
            </ul>

            <h2>{{ $t('CopyrightPage.dmca.title') }}</h2>
            <p>{{ $t('CopyrightPage.dmca.intro') }}</p>
            <p v-html="$t('CopyrightPage.dmca.requirementsTitle', {}, { raw: true })"></p>
            <ul>
              <li>{{ $t('CopyrightPage.dmca.req1') }}</li>
              <li>{{ $t('CopyrightPage.dmca.req2') }}</li>
              <li>{{ $t('CopyrightPage.dmca.req3') }}</li>
            </ul>

            <h2>{{ $t('CopyrightPage.attribution.title') }}</h2>
            <p>{{ $t('CopyrightPage.attribution.content') }}</p>

            <h2>{{ $t('CopyrightPage.license.title') }}</h2>
            <p>{{ $t('CopyrightPage.license.intro') }}</p>
            <p v-html="$t('CopyrightPage.license.requirementsTitle', {}, { raw: true })"></p>
            <ul>
              <li>{{ $t('CopyrightPage.license.req1') }}</li>
              <li>{{ $t('CopyrightPage.license.req2') }}</li>
              <li>{{ $t('CopyrightPage.license.req3') }}</li>
              <li>{{ $t('CopyrightPage.license.req4') }}</li>
            </ul>

            <h2>{{ $t('CopyrightPage.contact.title') }}</h2>
            <p>
              {{ $t('CopyrightPage.contact.emailPrefix') }}
              <a href="mailto:wyong@iamnotahuman.org">wyong@iamnotahuman.org</a>
            </p>

            <h2>{{ $t('CopyrightPage.updates.title') }}</h2>
            <p>{{ $t('CopyrightPage.updates.content1') }}</p>
            <p>{{ $t('CopyrightPage.updates.content2') }}</p>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { setSEO, getSEOFromLocale } from '@/seo'

const { locale } = useI18n()

// 设置SEO
const setupSEO = async () => {
  const seoData = await getSEOFromLocale('copyright', locale.value)
  setSEO(seoData)
}

onMounted(() => {
  setupSEO()
})

watch(locale, () => {
  setupSEO()
})
</script>

<style scoped>
.copyright-page {
  min-height: 100vh;
  background: #000;
  color: #fff;
}

.hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 80px 0;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00ff41, #00cc33);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
}

.main-content {
  padding: 60px 0;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.copyright-content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright-content h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #00ff41;
  position: relative;
  padding-left: 20px;
  line-height: 1.5;
}

.copyright-content h2:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 30px;
  background: linear-gradient(135deg, #00ff41, #00cc33);
  border-radius: 2px;
}

.copyright-content p {
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.copyright-content ul {
  margin-bottom: 1.5rem;
  padding-left: 0;
}

.copyright-content li {
  list-style: none;
  position: relative;
  padding: 10px 0 10px 25px;
  color: #ccc;
  font-size: 1rem;
  line-height: 1.6;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright-content li:before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #00ff41;
  font-weight: bold;
  font-size: 1.2rem;
}

.copyright-content strong {
  color: #fff;
  font-weight: 600;
}

.copyright-content a {
  color: #00ff41;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.copyright-content a:hover {
  color: #00cc33;
  border-bottom-color: #00cc33;
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .main-content {
    padding: 40px 0;
  }

  .copyright-content {
    padding: 30px 20px;
    border-radius: 16px;
  }

  .copyright-content h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-left: 15px;
  }

  .copyright-content h2:before {
    width: 3px;
    height: 25px;
  }

  .copyright-content p,
  .copyright-content li {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .copyright-content li {
    padding: 8px 0 8px 20px;
  }
}
</style>
