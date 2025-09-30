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
                    <div class="ending-stats">
                        <div class="stat-card">
                            <div class="stat-number">{{ $t('EndingsPage.hero.stats.total') }}</div>
                            <div class="stat-label">{{ $t('EndingsPage.hero.stats.totalLabel') }}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">{{ $t('EndingsPage.hero.stats.easy') }}</div>
                            <div class="stat-label">{{ $t('EndingsPage.hero.stats.easyLabel') }}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">{{ $t('EndingsPage.hero.stats.medium') }}</div>
                            <div class="stat-label">{{ $t('EndingsPage.hero.stats.mediumLabel') }}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">{{ $t('EndingsPage.hero.stats.hard') }}</div>
                            <div class="stat-label">{{ $t('EndingsPage.hero.stats.hardLabel') }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Endings Section -->
        <section class="section main-endings">
            <div class="container">
                <div class="endings-wrapper">
                    <div class="section-header">
                        <h2 class="home-title">{{ $t('EndingsPage.mainEndings.title') }}</h2>
                        <p class="section-subtitle" v-html="$t('EndingsPage.mainEndings.subtitle', {}, { raw: true })"></p>
                    </div>

                    <!-- Primary Endings Grid -->
                    <div class="endings-grid">
                        <!-- Best Ending -->
                        <div class="ending-card best-ending">
                            <div class="ending-header">
                                <div class="ending-title-section">
                                    <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.bestEnding.title') }}</h3>
                                    <p class="ending-subtitle">{{ $t('EndingsPage.mainEndings.bestEnding.subtitle') }}</p>
                                </div>
                                <div class="difficulty-tag easy">{{ $t('EndingsPage.mainEndings.bestEnding.difficulty') }}</div>
                            </div>
                            <div class="ending-content">
                                <div class="conditions-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.bestEnding.conditionsTitle') }}</h4>
                                    <ul class="conditions-list">
                                        <li v-html="$t('EndingsPage.mainEndings.bestEnding.condition1', {}, { raw: true })"></li>
                                        <li v-html="$t('EndingsPage.mainEndings.bestEnding.condition2', {}, { raw: true })"></li>
                                        <li>{{ $t('EndingsPage.mainEndings.bestEnding.condition3') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.bestEnding.condition4') }}</li>
                                    </ul>
                                </div>
                                <div class="description-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.bestEnding.descriptionTitle') }}</h4>
                                    <p>{{ $t('EndingsPage.mainEndings.bestEnding.description') }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Good Ending -->
                        <div class="ending-card good-ending">
                            <div class="ending-header">
                                <div class="ending-title-section">
                                    <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.goodEnding.title') }}</h3>
                                    <p class="ending-subtitle">{{ $t('EndingsPage.mainEndings.goodEnding.subtitle') }}</p>
                                </div>
                                <div class="difficulty-tag easy">{{ $t('EndingsPage.mainEndings.goodEnding.difficulty') }}</div>
                            </div>
                            <div class="ending-content">
                                <div class="conditions-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.goodEnding.conditionsTitle') }}</h4>
                                    <ul class="conditions-list">
                                        <li v-html="$t('EndingsPage.mainEndings.goodEnding.condition1', {}, { raw: true })"></li>
                                        <li v-html="$t('EndingsPage.mainEndings.goodEnding.condition2', {}, { raw: true })"></li>
                                        <li>{{ $t('EndingsPage.mainEndings.goodEnding.condition3') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.goodEnding.condition4') }}</li>
                                    </ul>
                                </div>
                                <div class="description-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.goodEnding.descriptionTitle') }}</h4>
                                    <p>{{ $t('EndingsPage.mainEndings.goodEnding.description') }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Bad Ending -->
                        <div class="ending-card bad-ending">
                            <div class="ending-header">
                                <div class="ending-title-section">
                                    <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.badEnding.title') }}</h3>
                                    <p class="ending-subtitle">{{ $t('EndingsPage.mainEndings.badEnding.subtitle') }}</p>
                                </div>
                                <div class="difficulty-tag medium">{{ $t('EndingsPage.mainEndings.badEnding.difficulty') }}</div>
                            </div>
                            <div class="ending-content">
                                <div class="conditions-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.badEnding.conditionsTitle') }}</h4>
                                    <ul class="conditions-list">
                                        <li v-html="$t('EndingsPage.mainEndings.badEnding.condition1', {}, { raw: true })"></li>
                                        <li>{{ $t('EndingsPage.mainEndings.badEnding.condition2') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.badEnding.condition3') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.badEnding.condition4') }}</li>
                                    </ul>
                                </div>
                                <div class="description-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.badEnding.descriptionTitle') }}</h4>
                                    <p>{{ $t('EndingsPage.mainEndings.badEnding.description') }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Massacre Ending -->
                        <div class="ending-card massacre-ending">
                            <div class="ending-header">
                                <div class="ending-title-section">
                                    <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.massacreEnding.title') }}</h3>
                                    <p class="ending-subtitle">{{ $t('EndingsPage.mainEndings.massacreEnding.subtitle') }}</p>
                                </div>
                                <div class="difficulty-tag medium">{{ $t('EndingsPage.mainEndings.massacreEnding.difficulty') }}</div>
                            </div>
                            <div class="ending-content">
                                <div class="conditions-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.massacreEnding.conditionsTitle') }}</h4>
                                    <ul class="conditions-list">
                                        <li>{{ $t('EndingsPage.mainEndings.massacreEnding.condition1') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.massacreEnding.condition2') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.massacreEnding.condition3') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.massacreEnding.condition4') }}</li>
                                    </ul>
                                </div>
                                <div class="description-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.massacreEnding.descriptionTitle') }}</h4>
                                    <p>{{ $t('EndingsPage.mainEndings.massacreEnding.description') }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Intruder Ending -->
                        <div class="ending-card intruder-ending">
                            <div class="ending-header">
                                <div class="ending-title-section">
                                    <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.intruderEnding.title') }}</h3>
                                    <p class="ending-subtitle">{{ $t('EndingsPage.mainEndings.intruderEnding.subtitle') }}</p>
                                </div>
                                <div class="difficulty-tag hard">{{ $t('EndingsPage.mainEndings.intruderEnding.difficulty') }}</div>
                            </div>
                            <div class="ending-content">
                                <div class="conditions-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.intruderEnding.conditionsTitle') }}</h4>
                                    <ul class="conditions-list">
                                        <li v-html="$t('EndingsPage.mainEndings.intruderEnding.condition1', {}, { raw: true })"></li>
                                        <li>{{ $t('EndingsPage.mainEndings.intruderEnding.condition2') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.intruderEnding.condition3') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.intruderEnding.condition4') }}</li>
                                    </ul>
                                </div>
                                <div class="description-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.intruderEnding.descriptionTitle') }}</h4>
                                    <p>{{ $t('EndingsPage.mainEndings.intruderEnding.description') }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Speedrun Ending -->
                        <div class="ending-card speedrun-ending">
                            <div class="ending-header">
                                <div class="ending-title-section">
                                    <h3 class="ending-title">{{ $t('EndingsPage.mainEndings.speedrunEnding.title') }}</h3>
                                    <p class="ending-subtitle">{{ $t('EndingsPage.mainEndings.speedrunEnding.subtitle') }}</p>
                                </div>
                                <div class="difficulty-tag hard">{{ $t('EndingsPage.mainEndings.speedrunEnding.difficulty') }}</div>
                            </div>
                            <div class="ending-content">
                                <div class="conditions-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.speedrunEnding.conditionsTitle') }}</h4>
                                    <ul class="conditions-list">
                                        <li>{{ $t('EndingsPage.mainEndings.speedrunEnding.condition1') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.speedrunEnding.condition2') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.speedrunEnding.condition3') }}</li>
                                        <li>{{ $t('EndingsPage.mainEndings.speedrunEnding.condition4') }}</li>
                                    </ul>
                                </div>
                                <div class="description-section">
                                    <h4>{{ $t('EndingsPage.mainEndings.speedrunEnding.descriptionTitle') }}</h4>
                                    <p>{{ $t('EndingsPage.mainEndings.speedrunEnding.description') }}</p>
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
                        <p class="section-subtitle" v-html="$t('EndingsPage.strategyGuide.subtitle', {}, { raw: true })"></p>
                    </div>

                    <div class="strategy-grid">
                        <!-- Best Ending Strategy -->
                        <div class="strategy-card best-strategy">
                            <div class="strategy-header">
                                <h3>{{ $t('EndingsPage.strategyGuide.bestEndingStrategy.title') }}</h3>
                            </div>
                            <div class="strategy-content">
                                <div class="strategy-point">
                                    <h4>{{ $t('EndingsPage.strategyGuide.bestEndingStrategy.point1Title') }}</h4>
                                    <p v-html="$t('EndingsPage.strategyGuide.bestEndingStrategy.point1Desc', {}, { raw: true })"></p>
                                </div>
                                <div class="strategy-point">
                                    <h4>{{ $t('EndingsPage.strategyGuide.bestEndingStrategy.point2Title') }}</h4>
                                    <p>{{ $t('EndingsPage.strategyGuide.bestEndingStrategy.point2Desc') }}</p>
                                </div>
                                <div class="strategy-point">
                                    <h4>{{ $t('EndingsPage.strategyGuide.bestEndingStrategy.point3Title') }}</h4>
                                    <p>{{ $t('EndingsPage.strategyGuide.bestEndingStrategy.point3Desc') }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Good Ending Strategy -->
                        <div class="strategy-card good-strategy">
                            <div class="strategy-header">
                                <h3>{{ $t('EndingsPage.strategyGuide.goodEndingStrategy.title') }}</h3>
                            </div>
                            <div class="strategy-content">
                                <div class="strategy-point">
                                    <h4>{{ $t('EndingsPage.strategyGuide.goodEndingStrategy.point1Title') }}</h4>
                                    <p v-html="$t('EndingsPage.strategyGuide.goodEndingStrategy.point1Desc', {}, { raw: true })"></p>
                                </div>
                                <div class="strategy-point">
                                    <h4>{{ $t('EndingsPage.strategyGuide.goodEndingStrategy.point2Title') }}</h4>
                                    <p v-html="$t('EndingsPage.strategyGuide.goodEndingStrategy.point2Desc', {}, { raw: true })"></p>
                                </div>
                            </div>
                        </div>

                        <!-- Endings to Avoid -->
                        <div class="strategy-card avoid-strategy">
                            <div class="strategy-header">
                                <h3>{{ $t('EndingsPage.strategyGuide.endingsToAvoid.title') }}</h3>
                            </div>
                            <div class="strategy-content">
                                <div class="avoid-ending">
                                    <h4 class="bad-ending-text">{{ $t('EndingsPage.strategyGuide.endingsToAvoid.badEnding') }}</h4>
                                    <p v-html="$t('EndingsPage.strategyGuide.endingsToAvoid.badEndingDesc', {}, { raw: true })"></p>
                                </div>
                                <div class="avoid-ending">
                                    <h4 class="massacre-ending-text">{{ $t('EndingsPage.strategyGuide.endingsToAvoid.massacreEnding') }}</h4>
                                    <p v-html="$t('EndingsPage.strategyGuide.endingsToAvoid.massacreEndingDesc', {}, { raw: true })"></p>
                                </div>
                                <div class="avoid-ending">
                                    <h4 class="intruder-ending-text">{{ $t('EndingsPage.strategyGuide.endingsToAvoid.intruderEnding') }}</h4>
                                    <p>{{ $t('EndingsPage.strategyGuide.endingsToAvoid.intruderEndingDesc') }}</p>
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
                        <p class="section-subtitle" v-html="$t('EndingsPage.tips.subtitle', {}, { raw: true })"></p>
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
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'
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
    background: linear-gradient(to right, 
        rgba(0, 0, 0, 1) 0%, 
        rgba(0, 0, 0, 1) 40%, 
        rgba(0, 0, 0, 0.8) 55%, 
        rgba(0, 0, 0, 0.4) 70%, 
        rgba(0, 0, 0, 0.1) 85%, 
        rgba(0, 0, 0, 0) 100%);
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 600px;
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
.best-ending {
    border-color: #ffd700;
    color: #ffd700;
}

.best-ending:hover {
    background: rgba(255, 215, 0, 0.1);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.2);
}

.good-ending {
    border-color: #00ff88;
    color: #00ff88;
}

.good-ending:hover {
    background: rgba(0, 255, 136, 0.1);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
}

.bad-ending {
    border-color: #ff4444;
    color: #ff4444;
}

.bad-ending:hover {
    background: rgba(255, 68, 68, 0.1);
    box-shadow: 0 20px 40px rgba(255, 68, 68, 0.2);
}

.massacre-ending {
    border-color: #8b0000;
    color: #8b0000;
}

.massacre-ending:hover {
    background: rgba(139, 0, 0, 0.1);
    box-shadow: 0 20px 40px rgba(139, 0, 0, 0.2);
}

.intruder-ending {
    border-color: #666666;
    color: #666666;
}

.intruder-ending:hover {
    background: rgba(102, 102, 102, 0.1);
    box-shadow: 0 20px 40px rgba(102, 102, 102, 0.2);
}

.speedrun-ending {
    border-color: #4169e1;
    color: #4169e1;
}

.speedrun-ending:hover {
    background: rgba(65, 105, 225, 0.1);
    box-shadow: 0 20px 40px rgba(65, 105, 225, 0.2);
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

.difficulty-tag {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px solid currentColor;
    background: rgba(255, 255, 255, 0.1);
}

.difficulty-tag.easy {
    color: #00ff88;
    border-color: #00ff88;
}

.difficulty-tag.medium {
    color: #ffa500;
    border-color: #ffa500;
}

.difficulty-tag.hard {
    color: #ff4444;
    border-color: #ff4444;
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
        grid-template-columns: repeat(2, 1fr);
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
    }

    .section-header{
        margin-bottom: 20px;
    }
    
    .stat-card {
        padding: 10px;
    }

    .stat-number{
        font-size: 24px;
        margin-bottom: 5px;
    }
    
    .ending-card {
        padding: 10px;
    }

    .conditions-list li{
        font-size: 12px;
    }

    .description-section p{
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
