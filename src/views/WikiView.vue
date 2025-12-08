<template>
  <div class="wiki-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="section hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="highlight">{{ $t('WikiPage.hero.title') }}</span>
          </h1>
          <p class="hero-subtitle" v-html="$t('WikiPage.hero.subtitle', {}, { raw: true })"></p>
          <div class="hero-description">
            <p v-html="$t('WikiPage.hero.description1', {}, { raw: true })"></p>
            <p v-html="$t('WikiPage.hero.description2', {}, { raw: true })"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gameplay Section -->
    <section id="gameplay" class="section gameplay">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">{{ $t('WikiPage.gameplay.title') }}</h2>

          <div class="text-image-layout left-image">
            <div class="image-container">
              <img src="/images/wiki-01.webp" alt="Game Screenshot" />
            </div>
            <div class="text-content">
              <h3>{{ $t('WikiPage.gameplay.coreMechanics.title') }}</h3>
              <p v-html="$t('WikiPage.gameplay.coreMechanics.description1', {}, { raw: true })"></p>
              <p v-html="$t('WikiPage.gameplay.coreMechanics.description2', {}, { raw: true })"></p>
            </div>
          </div>

          <div class="text-image-layout right-image">
            <div class="image-container">
              <img src="/images/wiki-02.webp" alt="Energy UI" />
            </div>
            <div class="text-content">
              <h3>{{ $t('WikiPage.gameplay.energySystem.title') }}</h3>
              <p v-html="$t('WikiPage.gameplay.energySystem.description1', {}, { raw: true })"></p>
              <p v-html="$t('WikiPage.gameplay.energySystem.description2', {}, { raw: true })"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plot Section -->
    <section id="plot" class="section plot">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">{{ $t('WikiPage.plot.title') }}</h2>

          <div class="text-image-layout left-image">
            <div class="image-container">
              <img src="/images/wiki-03.webp" alt="Solar Catastrophe" />
            </div>
            <div class="text-content">
              <h3>{{ $t('WikiPage.plot.solarCatastrophe.title') }}</h3>
              <p v-html="$t('WikiPage.plot.solarCatastrophe.description1', {}, { raw: true })"></p>
              <p v-html="$t('WikiPage.plot.solarCatastrophe.description2', {}, { raw: true })"></p>
            </div>
          </div>

          <div class="text-image-layout right-image last-item">
            <div class="image-container">
              <img src="/images/wiki-04.webp" alt="Protagonist House" />
            </div>
            <div class="text-content">
              <h3>{{ $t('WikiPage.plot.protagonistJourney.title') }}</h3>
              <p
                v-html="$t('WikiPage.plot.protagonistJourney.description1', {}, { raw: true })"
              ></p>
              <p
                v-html="$t('WikiPage.plot.protagonistJourney.description2', {}, { raw: true })"
              ></p>
              <p
                v-html="$t('WikiPage.plot.protagonistJourney.description3', {}, { raw: true })"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Characters Section -->
    <section id="characters" class="section characters">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">{{ $t('WikiPage.characters.title') }}</h2>

          <div class="text-image-layout left-image">
            <div class="image-container">
              <img src="/images/wiki-05.webp" alt="Character Gallery" />
            </div>
            <div class="text-content">
              <h3>{{ $t('WikiPage.characters.confirmedSafe.title') }}</h3>
              <p v-html="$t('WikiPage.characters.confirmedSafe.intro', {}, { raw: true })"></p>
              <ul>
                <li
                  v-html="
                    $t('WikiPage.characters.confirmedSafe.elderlyGentleman', {}, { raw: true })
                  "
                ></li>
                <li
                  v-html="$t('WikiPage.characters.confirmedSafe.youngSurvivor', {}, { raw: true })"
                ></li>
                <li
                  v-html="$t('WikiPage.characters.confirmedSafe.scarredVeteran', {}, { raw: true })"
                ></li>
                <li
                  v-html="$t('WikiPage.characters.confirmedSafe.grievingMother', {}, { raw: true })"
                ></li>
              </ul>
              <p v-html="$t('WikiPage.characters.confirmedSafe.footer', {}, { raw: true })"></p>

              <h3>{{ $t('WikiPage.characters.confirmedThreats.title') }}</h3>
              <p>{{ $t('WikiPage.characters.confirmedThreats.intro') }}</p>
              <ul>
                <li
                  v-html="
                    $t('WikiPage.characters.confirmedThreats.hostileStranger', {}, { raw: true })
                  "
                ></li>
                <li
                  v-html="
                    $t('WikiPage.characters.confirmedThreats.serviceWorker', {}, { raw: true })
                  "
                ></li>
                <li
                  v-html="
                    $t(
                      'WikiPage.characters.confirmedThreats.predictionSpecialist',
                      {},
                      { raw: true }
                    )
                  "
                ></li>
              </ul>
            </div>
          </div>

          <div class="text-image-layout right-image last-item">
            <div class="image-container">
              <img src="/images/wiki-06.webp" alt="Visitor Traits" />
            </div>
            <div class="text-content">
              <h3>{{ $t('WikiPage.characters.specialCharacters.title') }}</h3>
              <p v-html="$t('WikiPage.characters.specialCharacters.intro', {}, { raw: true })"></p>
              <ul>
                <li
                  v-html="$t('WikiPage.characters.specialCharacters.intruder', {}, { raw: true })"
                ></li>
                <li
                  v-html="
                    $t('WikiPage.characters.specialCharacters.governmentWorker', {}, { raw: true })
                  "
                ></li>
                <li
                  v-html="
                    $t('WikiPage.characters.specialCharacters.armedVigilante', {}, { raw: true })
                  "
                ></li>
                <li
                  v-html="$t('WikiPage.characters.specialCharacters.doomCult', {}, { raw: true })"
                ></li>
              </ul>
              <p v-html="$t('WikiPage.characters.specialCharacters.footer', {}, { raw: true })"></p>

              <h3>{{ $t('WikiPage.characters.visitorTraits.title') }}</h3>
              <p v-html="$t('WikiPage.characters.visitorTraits.intro', {}, { raw: true })"></p>
              <ul>
                <li
                  v-html="$t('WikiPage.characters.visitorTraits.perfectTeeth', {}, { raw: true })"
                ></li>
                <li
                  v-html="$t('WikiPage.characters.visitorTraits.dirtyNails', {}, { raw: true })"
                ></li>
                <li
                  v-html="$t('WikiPage.characters.visitorTraits.bloodshotEyes', {}, { raw: true })"
                ></li>
                <li
                  v-html="
                    $t('WikiPage.characters.visitorTraits.hairlessArmpits', {}, { raw: true })
                  "
                ></li>
              </ul>
              <p v-html="$t('WikiPage.characters.visitorTraits.warning', {}, { raw: true })"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Section -->
    <section id="development" class="section development">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">{{ $t('WikiPage.development.title') }}</h2>

          <div class="text-image-layout right-image last-item">
            <div class="image-container">
              <img src="/images/wiki-07.webp" alt="Development Timeline" />
            </div>
            <div class="text-content">
              <h3>{{ $t('WikiPage.development.prototypeToRelease.title') }}</h3>
              <p
                v-html="
                  $t('WikiPage.development.prototypeToRelease.description1', {}, { raw: true })
                "
              ></p>
              <p
                v-html="
                  $t('WikiPage.development.prototypeToRelease.description2', {}, { raw: true })
                "
              ></p>
              <p
                v-html="
                  $t('WikiPage.development.prototypeToRelease.description3', {}, { raw: true })
                "
              ></p>
              <p
                v-html="
                  $t('WikiPage.development.prototypeToRelease.description4', {}, { raw: true })
                "
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reception Section -->
    <section class="section reception">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">{{ $t('WikiPage.reception.title') }}</h2>

          <div class="text-image-layout left-image last-item">
            <div class="image-container">
              <img src="/images/wiki-08.webp" alt="Critical Reviews" />
            </div>
            <div class="text-content">
              <h3>{{ $t('WikiPage.reception.criticalAcclaim.title') }}</h3>
              <p
                v-html="$t('WikiPage.reception.criticalAcclaim.description1', {}, { raw: true })"
              ></p>
              <p
                v-html="$t('WikiPage.reception.criticalAcclaim.description2', {}, { raw: true })"
              ></p>
              <p
                v-html="$t('WikiPage.reception.criticalAcclaim.description3', {}, { raw: true })"
              ></p>
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
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import '@/assets/css/public.css'
import { setSEO, getSEOFromLocale } from '@/seo'

const { locale } = useI18n()

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 设置SEO
const setupSEO = async () => {
  const seoData = await getSEOFromLocale('wiki', locale.value)
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
/* Hero Section */
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
}

.hero-title .highlight {
  font-family: 'Creepster', cursive;
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
  font-weight: normal;
}

.highlight-text {
  color: #00ff88;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
}

.hero-subtitle {
  font-size: 20px;
  color: #ccc;
  text-align: center;
  margin-bottom: 40px;
  font-style: italic;
}

.hero-description p {
  font-size: 16px;
  color: #fff;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
}

.hero-description strong {
  color: #00ff88;
  font-weight: bold;
}

/* Text-Image Layout */
.text-image-layout {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
}

.text-image-layout.right-image {
  flex-direction: row-reverse;
}

.text-image-layout:last-child {
  margin-bottom: 0;
}

.image-container {
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16/9;
  position: relative;
  width: 50%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.text-content {
  flex: 0 0 50%;
  width: 50%;
}

.text-content h3 {
  color: #00ff88;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
}

.text-content p {
  color: #e0e0e0;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 15px;
  text-align: justify;
}

.text-content ul {
  margin: 20px 0;
  padding-left: 0;
  list-style: none;
}

.text-content li {
  color: #e0e0e0;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.text-content li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #00ff88;
  font-size: 18px;
  top: 0;
}

.text-content strong {
  color: #00ff88;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
}

/* Content Sections */
.section {
  padding: 80px 0;
  position: relative;
}

.section.gameplay {
  background: linear-gradient(135deg, #0d1b0d 0%, #0a0a0a 50%, #0d1b0d 100%);
}

.section.gameplay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(0, 100, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 150, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.section.plot {
  background: linear-gradient(135deg, #0d0d1a 0%, #111111 50%, #0d0d1a 100%);
}

.section.plot::before {
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

.section.characters {
  background: linear-gradient(135deg, #1a0d0d 0%, #0a0a0a 50%, #1a0d0d 100%);
}

.section.characters::before {
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

.section.development {
  background: linear-gradient(135deg, #0d0d1a 0%, #111111 50%, #0d0d1a 100%);
}

.section.development::before {
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

.section.reception {
  background: linear-gradient(135deg, #1a0d0d 0%, #0a0a0a 50%, #1a0d0d 100%);
}

.section.reception::before {
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

.section-title {
  font-family: 'Creepster', cursive;
  font-size: 48px;
  text-align: center;
  color: #00ff88;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
}

.content-block {
  margin-bottom: 50px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 15px;
  border: 1px solid rgba(0, 255, 136, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(0, 255, 136, 0.1);
  position: relative;
  transition: all 0.3s ease;
}

.content-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 255, 136, 0.2);
  border-color: rgba(0, 255, 136, 0.4);
}

.content-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, #00ff88, transparent);
  border-radius: 15px 15px 0 0;
}

.content-block h3 {
  font-size: 28px;
  color: #00ff88;
  margin-bottom: 25px;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  position: relative;
  padding-left: 20px;
}

.content-block h3::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #00ff88;
  font-size: 20px;
}

.content-block p {
  font-size: 16px;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 20px;
  text-align: justify;
}

.content-block strong {
  color: #00ff88;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
}

.content-block ul {
  margin: 25px 0;
  padding-left: 0;
  list-style: none;
}

.content-block li {
  font-size: 16px;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 15px;
  padding-left: 25px;
  position: relative;
  transition: all 0.3s ease;
}

.content-block li::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #00ff88;
  font-size: 12px;
  top: 8px;
}

.content-block li:hover {
  color: #fff;
  transform: translateX(5px);
}

.content-block li strong {
  color: #00ff88;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
}

/* Special content blocks for different sections */
.section.gameplay .content-block {
  border-color: rgba(0, 150, 0, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(0, 200, 0, 0.1);
}

.section.plot .content-block {
  border-color: rgba(150, 0, 200, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(200, 0, 255, 0.1);
}

.section.characters .content-block {
  border-color: rgba(200, 0, 0, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 0, 0, 0.1);
}

.section.development .content-block {
  border-color: rgba(0, 100, 200, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(0, 150, 255, 0.1);
}

.section.reception .content-block {
  border-color: rgba(200, 0, 0, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 0, 0, 0.1);
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
.text-content a {
  color: #00ff88;
  text-decoration: underline;
  text-decoration-color: #00ff88;
  text-underline-offset: 3px;
  transition: all 0.3s ease;
  font-weight: 600;
}

.hero-description a:hover,
.text-content a:hover {
  color: #00cc66;
  text-decoration-color: #00cc66;
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .text-image-layout {
    flex-direction: column;
    gap: 30px;
  }

  .text-image-layout.right-image {
    flex-direction: column;
  }

  .image-container {
    width: 100%;
  }

  .text-content {
    flex: none;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 20px 0;
  }

  .section.hero {
    padding: 70px 0 20px 0;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .hero-subtitle {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .hero-description p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .text-content h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .text-content p,
  .text-content li {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  .text-image-layout {
    gap: 10px;
    margin-bottom: 10px;
  }

  .text-content ul {
    margin: 15px 0;
  }

  .text-content li {
    margin-bottom: 8px;
    padding-left: 15px;
  }
}
</style>