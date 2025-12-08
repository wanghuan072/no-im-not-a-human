<template>
  <div class="endings-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="section hero">
      <div class="container">
        <div class="hero-wrapper">
          <!-- Main Title -->
          <h1 class="hero-title" v-html="$t('EndingsPage.hero.title', {}, { raw: true })"></h1>

          <!-- Description -->
          <div class="hero-description">
            <p v-html="$t('EndingsPage.hero.description', {}, { raw: true })"></p>
          </div>

          <!-- Ending Summary Stats -->
          <!-- <div class="ending-stats">
                        <div class="stat-card">
                            <div class="stat-number">{{ $t('EndingsPage.hero.stats.total') }}</div>
                            <div class="stat-label">{{ $t('EndingsPage.hero.stats.totalLabel') }}</div>
                        </div>
                    </div> -->
        </div>
      </div>
    </section>

    <!-- Main Endings Section -->
    <section class="section main-endings">
      <div class="container">
        <div class="endings-wrapper">
          <div class="section-header">
            <h2 class="home-title">{{ $t('EndingsPage.mainEndings.title') }}</h2>
            <p
              class="section-subtitle"
              v-html="$t('EndingsPage.mainEndings.subtitle', {}, { raw: true })"
            ></p>
          </div>

          <!-- Primary Endings Grid -->
          <div class="endings-grid">
            <!-- Ending 1 -->
            <div class="ending-card ending-1">
              <div class="ending-header">
                <div class="ending-title-section">
                  <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.ending1.title') }}</h3>
                  <p class="ending-subtitle">
                    {{ $t('EndingsPage.mainEndings.ending1.subtitle') }}
                  </p>
                </div>
              </div>
              <div class="ending-content">
                <div class="conditions-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending1.conditionsTitle') }}</h4>
                  <ul class="conditions-list">
                    <li
                      v-html="$t('EndingsPage.mainEndings.ending1.condition1', {}, { raw: true })"
                    ></li>
                    <li>{{ $t('EndingsPage.mainEndings.ending1.condition2') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending1.condition3') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending1.condition4') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending1.condition5') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending1.condition6') }}</li>
                  </ul>
                </div>
                <div class="description-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending1.descriptionTitle') }}</h4>
                  <p>{{ $t('EndingsPage.mainEndings.ending1.description') }}</p>
                  <p class="ending-note" v-if="$t('EndingsPage.mainEndings.ending1.note')">
                    <strong>Note:</strong>
                    <span
                      v-html="$t('EndingsPage.mainEndings.ending1.note', {}, { raw: true })"
                    ></span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Ending 2 -->
            <div class="ending-card ending-2">
              <div class="ending-header">
                <div class="ending-title-section">
                  <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.ending2.title') }}</h3>
                  <p class="ending-subtitle">
                    {{ $t('EndingsPage.mainEndings.ending2.subtitle') }}
                  </p>
                </div>
              </div>
              <div class="ending-content">
                <div class="conditions-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending2.conditionsTitle') }}</h4>
                  <ul class="conditions-list">
                    <li>{{ $t('EndingsPage.mainEndings.ending2.condition1') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending2.condition2') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending2.condition3') }}</li>
                  </ul>
                </div>
                <div class="description-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending2.descriptionTitle') }}</h4>
                  <p>{{ $t('EndingsPage.mainEndings.ending2.description') }}</p>
                </div>
              </div>
            </div>

            <!-- Ending 3 -->
            <div class="ending-card ending-3">
              <div class="ending-header">
                <div class="ending-title-section">
                  <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.ending3.title') }}</h3>
                  <p class="ending-subtitle">
                    {{ $t('EndingsPage.mainEndings.ending3.subtitle') }}
                  </p>
                </div>
              </div>
              <div class="ending-content">
                <div class="conditions-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending3.conditionsTitle') }}</h4>
                  <ul class="conditions-list">
                    <li>{{ $t('EndingsPage.mainEndings.ending3.condition1') }}</li>
                    <li
                      v-html="$t('EndingsPage.mainEndings.ending3.condition2', {}, { raw: true })"
                    ></li>
                  </ul>
                </div>
                <div class="description-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending3.descriptionTitle') }}</h4>
                  <p>{{ $t('EndingsPage.mainEndings.ending3.description') }}</p>
                </div>
              </div>
            </div>

            <!-- Ending 4 -->
            <div class="ending-card ending-4">
              <div class="ending-header">
                <div class="ending-title-section">
                  <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.ending4.title') }}</h3>
                  <p class="ending-subtitle">
                    {{ $t('EndingsPage.mainEndings.ending4.subtitle') }}
                  </p>
                </div>
              </div>
              <div class="ending-content">
                <div class="conditions-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending4.conditionsTitle') }}</h4>
                  <ul class="conditions-list">
                    <li
                      v-html="$t('EndingsPage.mainEndings.ending4.condition1', {}, { raw: true })"
                    ></li>
                    <li>{{ $t('EndingsPage.mainEndings.ending4.condition2') }}</li>
                    <li
                      v-html="$t('EndingsPage.mainEndings.ending4.condition3', {}, { raw: true })"
                    ></li>
                    <li>{{ $t('EndingsPage.mainEndings.ending4.condition4') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending4.condition5') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending4.condition6') }}</li>
                  </ul>
                </div>
                <div class="description-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending4.descriptionTitle') }}</h4>
                  <p>{{ $t('EndingsPage.mainEndings.ending4.description') }}</p>
                </div>
              </div>
            </div>

            <!-- Ending 5 -->
            <div class="ending-card ending-5">
              <div class="ending-header">
                <div class="ending-title-section">
                  <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.ending5.title') }}</h3>
                  <p class="ending-subtitle">
                    {{ $t('EndingsPage.mainEndings.ending5.subtitle') }}
                  </p>
                </div>
              </div>
              <div class="ending-content">
                <div class="conditions-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending5.conditionsTitle') }}</h4>
                  <ul class="conditions-list">
                    <li>{{ $t('EndingsPage.mainEndings.ending5.condition1') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending5.condition2') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending5.condition3') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending5.condition4') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending5.condition5') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending5.condition6') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending5.condition7') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending5.condition8') }}</li>
                  </ul>
                </div>
                <div class="description-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending5.descriptionTitle') }}</h4>
                  <p>{{ $t('EndingsPage.mainEndings.ending5.description') }}</p>
                </div>
              </div>
            </div>

            <!-- Ending 6 -->
            <div class="ending-card ending-6">
              <div class="ending-header">
                <div class="ending-title-section">
                  <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.ending6.title') }}</h3>
                  <p class="ending-subtitle">
                    {{ $t('EndingsPage.mainEndings.ending6.subtitle') }}
                  </p>
                </div>
              </div>
              <div class="ending-content">
                <div class="conditions-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending6.conditionsTitle') }}</h4>
                  <ul class="conditions-list">
                    <li>{{ $t('EndingsPage.mainEndings.ending6.condition1') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending6.condition2') }}</li>
                    <li
                      v-html="$t('EndingsPage.mainEndings.ending6.condition3', {}, { raw: true })"
                    ></li>
                  </ul>
                </div>
                <div class="description-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending6.descriptionTitle') }}</h4>
                  <p>{{ $t('EndingsPage.mainEndings.ending6.description') }}</p>
                  <p class="ending-note" v-if="$t('EndingsPage.mainEndings.ending6.note')">
                    <strong>Note:</strong> {{ $t('EndingsPage.mainEndings.ending6.note') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Ending 7 -->
            <div class="ending-card ending-7">
              <div class="ending-header">
                <div class="ending-title-section">
                  <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.ending7.title') }}</h3>
                  <p class="ending-subtitle">
                    {{ $t('EndingsPage.mainEndings.ending7.subtitle') }}
                  </p>
                </div>
              </div>
              <div class="ending-content">
                <div class="conditions-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending7.conditionsTitle') }}</h4>
                  <ul class="conditions-list">
                    <li>{{ $t('EndingsPage.mainEndings.ending7.condition1') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending7.condition2') }}</li>
                    <li
                      v-html="$t('EndingsPage.mainEndings.ending7.condition3', {}, { raw: true })"
                    ></li>
                    <li>{{ $t('EndingsPage.mainEndings.ending7.condition4') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending7.condition5') }}</li>
                  </ul>
                </div>
                <div class="description-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending7.descriptionTitle') }}</h4>
                  <p>{{ $t('EndingsPage.mainEndings.ending7.description') }}</p>
                </div>
              </div>
            </div>

            <!-- Ending 8 -->
            <div class="ending-card ending-8">
              <div class="ending-header">
                <div class="ending-title-section">
                  <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.ending8.title') }}</h3>
                  <p class="ending-subtitle">
                    {{ $t('EndingsPage.mainEndings.ending8.subtitle') }}
                  </p>
                </div>
              </div>
              <div class="ending-content">
                <div class="conditions-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending8.conditionsTitle') }}</h4>
                  <ul class="conditions-list">
                    <li
                      v-html="$t('EndingsPage.mainEndings.ending8.condition1', {}, { raw: true })"
                    ></li>
                    <li
                      v-html="$t('EndingsPage.mainEndings.ending8.condition2', {}, { raw: true })"
                    ></li>
                    <li>{{ $t('EndingsPage.mainEndings.ending8.condition3') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending8.condition4') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending8.condition5') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending8.condition6') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending8.condition7') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending8.condition8') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending8.condition9') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending8.condition10') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending8.condition11') }}</li>
                  </ul>
                </div>
                <div class="description-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending8.descriptionTitle') }}</h4>
                  <p>{{ $t('EndingsPage.mainEndings.ending8.description') }}</p>
                  <p class="ending-note" v-if="$t('EndingsPage.mainEndings.ending8.note')">
                    <strong>Note:</strong> {{ $t('EndingsPage.mainEndings.ending8.note') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Ending 9 -->
            <div class="ending-card ending-9">
              <div class="ending-header">
                <div class="ending-title-section">
                  <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.ending9.title') }}</h3>
                  <p class="ending-subtitle">
                    {{ $t('EndingsPage.mainEndings.ending9.subtitle') }}
                  </p>
                </div>
              </div>
              <div class="ending-content">
                <div class="conditions-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending9.conditionsTitle') }}</h4>
                  <ul class="conditions-list">
                    <li
                      v-html="$t('EndingsPage.mainEndings.ending9.condition1', {}, { raw: true })"
                    ></li>
                    <li>{{ $t('EndingsPage.mainEndings.ending9.condition2') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending9.condition3') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending9.condition4') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending9.condition5') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending9.condition6') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending9.condition7') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending9.condition8') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending9.condition9') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending9.condition10') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending9.condition11') }}</li>
                  </ul>
                </div>
                <div class="description-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending9.descriptionTitle') }}</h4>
                  <p>{{ $t('EndingsPage.mainEndings.ending9.description') }}</p>
                  <p class="ending-note" v-if="$t('EndingsPage.mainEndings.ending9.note')">
                    <strong>Note:</strong> {{ $t('EndingsPage.mainEndings.ending9.note') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Ending 10 -->
            <div class="ending-card ending-10">
              <div class="ending-header">
                <div class="ending-title-section">
                  <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.ending10.title') }}</h3>
                  <p class="ending-subtitle">
                    {{ $t('EndingsPage.mainEndings.ending10.subtitle') }}
                  </p>
                </div>
              </div>
              <div class="ending-content">
                <div class="conditions-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending10.conditionsTitle') }}</h4>
                  <ul class="conditions-list">
                    <li
                      v-html="$t('EndingsPage.mainEndings.ending10.condition1', {}, { raw: true })"
                    ></li>
                    <li>{{ $t('EndingsPage.mainEndings.ending10.condition2') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending10.condition3') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending10.condition4') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending10.condition5') }}</li>
                    <li>{{ $t('EndingsPage.mainEndings.ending10.condition6') }}</li>
                  </ul>
                </div>
                <div class="description-section">
                  <h4>{{ $t('EndingsPage.mainEndings.ending10.descriptionTitle') }}</h4>
                  <p>{{ $t('EndingsPage.mainEndings.ending10.description') }}</p>
                  <p class="ending-note" v-if="$t('EndingsPage.mainEndings.ending10.note')">
                    <strong>Note:</strong> {{ $t('EndingsPage.mainEndings.ending10.note') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Strategy Guide Section -->
    <section class="section strategy-guide">
      <div class="container">
        <div class="strategy-wrapper">
          <div class="section-header">
            <h2 class="home-title">{{ $t('EndingsPage.strategyGuide.title') }}</h2>
            <p
              class="section-subtitle"
              v-html="$t('EndingsPage.strategyGuide.subtitle', {}, { raw: true })"
            ></p>
          </div>

          <div class="strategy-grid">
            <!-- Quest-Based Endings -->
            <div class="strategy-card quest-strategy">
              <div class="strategy-header">
                <h3>{{ $t('EndingsPage.strategyGuide.questBasedEndings.title') }}</h3>
              </div>
              <div class="strategy-content">
                <div class="strategy-point">
                  <h4>{{ $t('EndingsPage.strategyGuide.questBasedEndings.point1Title') }}</h4>
                  <p>{{ $t('EndingsPage.strategyGuide.questBasedEndings.point1Desc') }}</p>
                </div>
                <div class="strategy-point">
                  <h4>{{ $t('EndingsPage.strategyGuide.questBasedEndings.point2Title') }}</h4>
                  <p>{{ $t('EndingsPage.strategyGuide.questBasedEndings.point2Desc') }}</p>
                </div>
                <div class="strategy-point">
                  <h4>{{ $t('EndingsPage.strategyGuide.questBasedEndings.point3Title') }}</h4>
                  <p>{{ $t('EndingsPage.strategyGuide.questBasedEndings.point3Desc') }}</p>
                </div>
              </div>
            </div>

            <!-- Choice-Based Endings -->
            <div class="strategy-card choice-strategy">
              <div class="strategy-header">
                <h3>{{ $t('EndingsPage.strategyGuide.choiceBasedEndings.title') }}</h3>
              </div>
              <div class="strategy-content">
                <div class="strategy-point">
                  <h4>{{ $t('EndingsPage.strategyGuide.choiceBasedEndings.point1Title') }}</h4>
                  <p
                    v-html="
                      $t(
                        'EndingsPage.strategyGuide.choiceBasedEndings.point1Desc',
                        {},
                        { raw: true }
                      )
                    "
                  ></p>
                </div>
                <div class="strategy-point">
                  <h4>{{ $t('EndingsPage.strategyGuide.choiceBasedEndings.point2Title') }}</h4>
                  <p>{{ $t('EndingsPage.strategyGuide.choiceBasedEndings.point2Desc') }}</p>
                </div>
                <div class="strategy-point">
                  <h4>{{ $t('EndingsPage.strategyGuide.choiceBasedEndings.point3Title') }}</h4>
                  <p>{{ $t('EndingsPage.strategyGuide.choiceBasedEndings.point3Desc') }}</p>
                </div>
              </div>
            </div>

            <!-- Timing Tips -->
            <div class="strategy-card timing-strategy">
              <div class="strategy-header">
                <h3>{{ $t('EndingsPage.strategyGuide.timingTips.title') }}</h3>
              </div>
              <div class="strategy-content">
                <div class="strategy-point">
                  <h4>{{ $t('EndingsPage.strategyGuide.timingTips.point1Title') }}</h4>
                  <p>{{ $t('EndingsPage.strategyGuide.timingTips.point1Desc') }}</p>
                </div>
                <div class="strategy-point">
                  <h4>{{ $t('EndingsPage.strategyGuide.timingTips.point2Title') }}</h4>
                  <p>{{ $t('EndingsPage.strategyGuide.timingTips.point2Desc') }}</p>
                </div>
                <div class="strategy-point">
                  <h4>{{ $t('EndingsPage.strategyGuide.timingTips.point3Title') }}</h4>
                  <p>{{ $t('EndingsPage.strategyGuide.timingTips.point3Desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tips Section -->
    <section class="section tips-section">
      <div class="container">
        <div class="tips-wrapper">
          <div class="section-header">
            <h2 class="home-title">{{ $t('EndingsPage.tips.title') }}</h2>
            <p
              class="section-subtitle"
              v-html="$t('EndingsPage.tips.subtitle', {}, { raw: true })"
            ></p>
          </div>

          <div class="tips-grid">
            <div class="tips-card">
              <div class="tips-header">
                <h3>{{ $t('EndingsPage.tips.generalAdvice.title') }}</h3>
              </div>
              <div class="tips-content">
                <ul class="tips-list">
                  <li>{{ $t('EndingsPage.tips.generalAdvice.tip1') }}</li>
                  <li>{{ $t('EndingsPage.tips.generalAdvice.tip2') }}</li>
                  <li>{{ $t('EndingsPage.tips.generalAdvice.tip3') }}</li>
                  <li>{{ $t('EndingsPage.tips.generalAdvice.tip4') }}</li>
                </ul>
              </div>
            </div>

            <div class="tips-card">
              <div class="tips-header">
                <h3>{{ $t('EndingsPage.tips.unlockStrategy.title') }}</h3>
              </div>
              <div class="tips-content">
                <ul class="tips-list">
                  <li>{{ $t('EndingsPage.tips.unlockStrategy.tip1') }}</li>
                  <li>{{ $t('EndingsPage.tips.unlockStrategy.tip2') }}</li>
                  <li>{{ $t('EndingsPage.tips.unlockStrategy.tip3') }}</li>
                  <li>{{ $t('EndingsPage.tips.unlockStrategy.tip4') }}</li>
                </ul>
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
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'
import { setSEO, getSEOFromLocale } from '@/seo'

const { locale } = useI18n()

// 设置SEO
const setupSEO = async () => {
  const seoData = await getSEOFromLocale('endings', locale.value)
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
.section-subtitle a,
.conditions-list a,
.strategy-content a,
.tips-content a {
  color: #00ff88;
  text-decoration: underline;
  text-decoration-color: #00ff88;
  text-underline-offset: 3px;
  transition: all 0.3s ease;
  font-weight: 600;
}

.hero-description a:hover,
.section-subtitle a:hover,
.conditions-list a:hover,
.strategy-content a:hover,
.tips-content a:hover {
  color: #00cc66;
  text-decoration-color: #00cc66;
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
}

.section {
  position: relative;
  padding: 80px 0;
  background: #000;
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

.highlight-text {
  color: #00ff88;
  font-weight: 600;
}

/* Ending Stats */
.ending-stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 300px;
  margin: 0 auto;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(0, 255, 136, 0.1);
  border-color: #00ff88;
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  color: #00ff88;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Main Endings Section */
.section.main-endings {
  background: linear-gradient(135deg, #0d0d1a 0%, #111111 50%, #0d0d1a 100%);
  position: relative;
}

.section.main-endings::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 70%, rgba(100, 0, 150, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(150, 0, 200, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

/* Wrapper Styles with Theme Colors */
.endings-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(150, 0, 200, 0.1);
  border: 1px solid rgba(150, 0, 200, 0.3);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(150, 0, 200, 0.1),
    inset 0 1px 0 rgba(200, 0, 255, 0.1);
}

.strategy-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(200, 0, 0, 0.1);
  border: 1px solid rgba(200, 0, 0, 0.3);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(200, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 0, 0, 0.1);
}

.tips-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 100, 200, 0.1);
  border: 1px solid rgba(0, 100, 200, 0.3);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 100, 200, 0.1),
    inset 0 1px 0 rgba(0, 150, 255, 0.1);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.home-title {
  font-family: 'Creepster', cursive;
  font-size: 48px;
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
  margin-bottom: 20px;
  font-weight: normal;
  text-align: center;
}

.section-subtitle {
  font-size: 18px;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Endings Grid */
.endings-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.ending-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 30px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.ending-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.ending-card:hover::before {
  opacity: 1;
}

.ending-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Ending Card Themes */
.ending-1 {
  border-color: #8b0000;
  color: #8b0000;
}

.ending-1:hover {
  background: rgba(139, 0, 0, 0.1);
  box-shadow: 0 20px 40px rgba(139, 0, 0, 0.2);
}

.ending-2 {
  border-color: #4a4a4a;
  color: #4a4a4a;
}

.ending-2:hover {
  background: rgba(74, 74, 74, 0.1);
  box-shadow: 0 20px 40px rgba(74, 74, 74, 0.2);
}

.ending-3 {
  border-color: #ff4444;
  color: #ff4444;
}

.ending-3:hover {
  background: rgba(255, 68, 68, 0.1);
  box-shadow: 0 20px 40px rgba(255, 68, 68, 0.2);
}

.ending-4 {
  border-color: #9b59b6;
  color: #9b59b6;
}

.ending-4:hover {
  background: rgba(155, 89, 182, 0.1);
  box-shadow: 0 20px 40px rgba(155, 89, 182, 0.2);
}

.ending-5 {
  border-color: #3498db;
  color: #3498db;
}

.ending-5:hover {
  background: rgba(52, 152, 219, 0.1);
  box-shadow: 0 20px 40px rgba(52, 152, 219, 0.2);
}

.ending-6 {
  border-color: #666666;
  color: #666666;
}

.ending-6:hover {
  background: rgba(102, 102, 102, 0.1);
  box-shadow: 0 20px 40px rgba(102, 102, 102, 0.2);
}

.ending-7 {
  border-color: #e74c3c;
  color: #e74c3c;
}

.ending-7:hover {
  background: rgba(231, 76, 60, 0.1);
  box-shadow: 0 20px 40px rgba(231, 76, 60, 0.2);
}

.ending-8 {
  border-color: #27ae60;
  color: #27ae60;
}

.ending-8:hover {
  background: rgba(39, 174, 96, 0.1);
  box-shadow: 0 20px 40px rgba(39, 174, 96, 0.2);
}

.ending-9 {
  border-color: #f39c12;
  color: #f39c12;
}

.ending-9:hover {
  background: rgba(243, 156, 18, 0.1);
  box-shadow: 0 20px 40px rgba(243, 156, 18, 0.2);
}

.ending-10 {
  border-color: #c0392b;
  color: #c0392b;
}

.ending-10:hover {
  background: rgba(192, 57, 43, 0.1);
  box-shadow: 0 20px 40px rgba(192, 57, 43, 0.2);
}

/* Ending Header */
.ending-header {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  gap: 15px;
}

.ending-title-section {
  flex: 1;
}

.ending-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  color: inherit;
}

.ending-subtitle {
  font-size: 14px;
  color: #ccc;
  font-style: italic;
}

/* Ending Content */

.conditions-section,
.description-section {
  margin-bottom: 20px;
}

.conditions-section h4,
.description-section h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #fff;
}

.conditions-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.conditions-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  color: #ccc;
  line-height: 1.5;
}

.conditions-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #ff69b4;
  font-weight: bold;
}

.description-section p {
  color: #ccc;
  line-height: 1.6;
  font-size: 14px;
}

.ending-note {
  margin-top: 15px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid #00ff88;
  border-radius: 4px;
  font-size: 13px;
  color: #aaa;
}

.ending-note strong {
  color: #00ff88;
  font-weight: 600;
}

.ending-note:deep(a) {
  color: #00ff88;
  text-decoration: underline;
  text-decoration-color: #00ff88;
  text-underline-offset: 3px;
  transition: all 0.3s ease;
  font-weight: 600;
}

/* Strategy Guide Section */
.section.strategy-guide {
  background: linear-gradient(135deg, #1a0d0d 0%, #0a0a0a 50%, #1a0d0d 100%);
  position: relative;
}

.section.strategy-guide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 25% 75%, rgba(200, 0, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 25%, rgba(150, 0, 0, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.strategy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.strategy-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
}

.strategy-card:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px);
}

.strategy-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.strategy-header h3 {
  font-size: 20px;
  color: #fff;
  font-weight: 600;
}

.strategy-point {
  margin-bottom: 20px;
}

.strategy-point h4 {
  font-size: 16px;
  color: #00ff88;
  margin-bottom: 8px;
  font-weight: 600;
}

.strategy-point p {
  color: #ccc;
  line-height: 1.5;
  font-size: 14px;
}

.avoid-ending {
  margin-bottom: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border-left: 3px solid currentColor;
}

.bad-ending-text {
  color: #ff4444;
}

.massacre-ending-text {
  color: #8b0000;
}

.intruder-ending-text {
  color: #666666;
}

.avoid-ending p {
  color: #ccc;
  font-size: 14px;
  margin-top: 5px;
}

/* Tips Section */
.section.tips-section {
  background: linear-gradient(135deg, #0d0d1a 0%, #111111 50%, #0d0d1a 100%);
  position: relative;
}

.section.tips-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 35% 65%, rgba(0, 50, 150, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 65% 35%, rgba(0, 100, 200, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.tips-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
}

.tips-card:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px);
}

.tips-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.tips-header h3 {
  font-size: 20px;
  color: #fff;
  font-weight: 600;
}

.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  color: #ccc;
  line-height: 1.5;
}

.tips-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #00ff88;
  font-weight: bold;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
  .section {
    padding: 40px 0;
  }

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

  .home-title {
    font-size: 24px;
  }

  .ending-stats {
    max-width: 250px;
    gap: 15px;
  }

  .stat-card {
    padding: 15px;
  }

  .stat-number {
    font-size: 28px;
  }

  .stat-label {
    font-size: 12px;
  }

  .endings-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .ending-card {
    padding: 20px;
  }

  .ending-title {
    font-size: 18px;
  }

  .ending-subtitle {
    font-size: 12px;
  }

  .strategy-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .strategy-card {
    padding: 20px;
  }

  .strategy-header h3 {
    font-size: 18px;
  }

  .strategy-point h4 {
    font-size: 14px;
  }

  .strategy-point p {
    font-size: 13px;
  }

  .tips-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .tips-card {
    padding: 20px;
  }

  .tips-header h3 {
    font-size: 18px;
  }

  .tips-list li {
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 20px 0;
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

  .home-title {
    font-size: 20px;
    margin-bottom: 5px;
  }

  .section-subtitle {
    font-size: 12px;
  }

  .ending-stats {
    gap: 10px;
    max-width: 200px;
  }

  .section-header {
    margin-bottom: 20px;
  }

  .stat-card {
    padding: 10px;
  }

  .stat-number {
    font-size: 24px;
    margin-bottom: 5px;
  }

  .ending-card {
    padding: 10px;
  }

  .conditions-list li {
    font-size: 12px;
  }

  .description-section p {
    font-size: 12px;
  }

  .strategy-card,
  .tips-card {
    padding: 10px;
  }

  .ending-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 10px;
  }

  .strategy-header,
  .tips-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 10px;
  }
}
</style>
