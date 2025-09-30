<template>
    <div class="guides-page">
        <AppHeader />

        <!-- Hero Section -->
        <section class="section hero">
            <div class="container">
                <div class="hero-wrapper">
                    <!-- Main Title -->
                    <h1 class="hero-title" v-html="$t('GuidesPage.hero.title', {}, { raw: true })"></h1>

                    <!-- Description -->
                    <div class="hero-description">
                        <p v-html="$t('GuidesPage.hero.description', {}, { raw: true })"></p>
                    </div>

                    <!-- Navigation Cards -->
                    <div class="guide-nav">
                        <div class="nav-card" @click="scrollToSection('core-mechanics')">
                            <span>{{ $t('GuidesPage.hero.navCards.mechanics') }}</span>
                        </div>
                        <div class="nav-card" @click="scrollToSection('energy')">
                            <span>{{ $t('GuidesPage.hero.navCards.energy') }}</span>
                        </div>
                        <div class="nav-card" @click="scrollToSection('guests')">
                            <span>{{ $t('GuidesPage.hero.navCards.guests') }}</span>
                        </div>
                        <div class="nav-card" @click="scrollToSection('survival')">
                            <span>{{ $t('GuidesPage.hero.navCards.survival') }}</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Game Flow Overview Section -->
        <section id="core-mechanics" class="section mechanics">
            <div class="container">
                <div class="mechanics-wrapper">
                    <div class="section-header">
                        <h2 class="home-title">{{ $t('GuidesPage.mechanics.title') }}</h2>
                        <p class="section-subtitle" v-html="$t('GuidesPage.mechanics.subtitle', {}, { raw: true })"></p>
                    </div>

                    <div class="flow-stages">
                        <div class="stage-card stage-1">
                            <div class="stage-icon">
                                <div class="stage-number">1</div>
                            </div>
                            <h3>{{ $t('GuidesPage.mechanics.stages.stage1.title') }}</h3>
                            <p>{{ $t('GuidesPage.mechanics.stages.stage1.description') }}</p>
                        </div>
                        <div class="stage-card stage-2">
                            <div class="stage-icon">
                                <div class="stage-number">2</div>
                            </div>
                            <h3>{{ $t('GuidesPage.mechanics.stages.stage2.title') }}</h3>
                            <p>{{ $t('GuidesPage.mechanics.stages.stage2.description') }}</p>
                        </div>
                        <div class="stage-card stage-3">
                            <div class="stage-icon">
                                <div class="stage-number">3</div>
                            </div>
                            <h3>{{ $t('GuidesPage.mechanics.stages.stage3.title') }}</h3>
                            <p>{{ $t('GuidesPage.mechanics.stages.stage3.description') }}</p>
                        </div>
                    </div>

                    <div class="night-details">
                        <div class="night-card">
                            <div class="night-header">
                                <h3>{{ $t('GuidesPage.mechanics.nights.night1.title') }}</h3>
                                <span class="difficulty-tag easy">{{ $t('GuidesPage.mechanics.nights.night1.difficulty') }}</span>
                            </div>
                            <div class="night-content">
                                <div class="night-left">
                                    <p class="night-description">{{ $t('GuidesPage.mechanics.nights.night1.description') }}</p>
                                    <div class="playtime">
                                        <span class="time-icon">⏱️</span>
                                        <span>{{ $t('GuidesPage.mechanics.nights.night1.playTime') }}</span>
                                    </div>
                                    <div class="visitor-types">
                                        <h4>{{ $t('GuidesPage.mechanics.nights.night1.visitorTypesTitle') }}</h4>
                                        <div class="visitor-tags">
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night1.visitorType1') }}</span>
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night1.visitorType2') }}</span>
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night1.visitorType3') }}</span>
                                        </div>
                                    </div>
                                    <div class="strategy-tips">
                                        <h4><span class="tip-icon">💡</span>{{ $t('GuidesPage.mechanics.nights.night1.strategyTitle') }}</h4>
                                        <p>{{ $t('GuidesPage.mechanics.nights.night1.strategyDesc') }}</p>
                                    </div>
                                </div>
                                <div class="night-right">
                                    <div class="key-points">
                                        <h4>{{ $t('GuidesPage.mechanics.nights.night1.keyPointsTitle') }}</h4>
                                        <ul>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night1.keyPoint1') }}</li>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night1.keyPoint2') }}</li>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night1.keyPoint3') }}</li>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night1.keyPoint4') }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="night-card">
                            <div class="night-header">
                                <h3>{{ $t('GuidesPage.mechanics.nights.night2.title') }}</h3>
                                <span class="difficulty-tag medium">{{ $t('GuidesPage.mechanics.nights.night2.difficulty') }}</span>
                            </div>
                            <div class="night-content">
                                <div class="night-left">
                                    <p class="night-description">{{ $t('GuidesPage.mechanics.nights.night2.description') }}</p>
                                    <div class="playtime">
                                        <span class="time-icon">⏱️</span>
                                        <span>{{ $t('GuidesPage.mechanics.nights.night2.playTime') }}</span>
                                    </div>
                                    <div class="visitor-types">
                                        <h4>{{ $t('GuidesPage.mechanics.nights.night2.visitorTypesTitle') }}</h4>
                                        <div class="visitor-tags">
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night2.visitorType1') }}</span>
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night2.visitorType2') }}</span>
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night2.visitorType3') }}</span>
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night2.visitorType4') }}</span>
                                        </div>
                                    </div>
                                    <div class="strategy-tips">
                                        <h4><span class="tip-icon">💡</span>{{ $t('GuidesPage.mechanics.nights.night2.strategyTitle') }}</h4>
                                        <p>{{ $t('GuidesPage.mechanics.nights.night2.strategyDesc') }}</p>
                                    </div>
                                </div>
                                <div class="night-right">
                                    <div class="key-points">
                                        <h4>{{ $t('GuidesPage.mechanics.nights.night2.keyPointsTitle') }}</h4>
                                        <ul>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night2.keyPoint1') }}</li>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night2.keyPoint2') }}</li>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night2.keyPoint3') }}</li>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night2.keyPoint4') }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="night-card">
                            <div class="night-header">
                                <h3>{{ $t('GuidesPage.mechanics.nights.night3.title') }}</h3>
                                <span class="difficulty-tag hard">{{ $t('GuidesPage.mechanics.nights.night3.difficulty') }}</span>
                            </div>
                            <div class="night-content">
                                <div class="night-left">
                                    <p class="night-description">{{ $t('GuidesPage.mechanics.nights.night3.description') }}</p>
                                    <div class="playtime">
                                        <span class="time-icon">⏱️</span>
                                        <span>{{ $t('GuidesPage.mechanics.nights.night3.playTime') }}</span>
                                    </div>
                                    <div class="visitor-types">
                                        <h4>{{ $t('GuidesPage.mechanics.nights.night3.visitorTypesTitle') }}</h4>
                                        <div class="visitor-tags">
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night3.visitorType1') }}</span>
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night3.visitorType2') }}</span>
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night3.visitorType3') }}</span>
                                            <span class="visitor-tag">{{ $t('GuidesPage.mechanics.nights.night3.visitorType4') }}</span>
                                        </div>
                                    </div>
                                    <div class="strategy-tips">
                                        <h4><span class="tip-icon">💡</span>{{ $t('GuidesPage.mechanics.nights.night3.strategyTitle') }}</h4>
                                        <p>{{ $t('GuidesPage.mechanics.nights.night3.strategyDesc') }}</p>
                                    </div>
                                </div>
                                <div class="night-right">
                                    <div class="key-points">
                                        <h4>{{ $t('GuidesPage.mechanics.nights.night3.keyPointsTitle') }}</h4>
                                        <ul>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night3.keyPoint1') }}</li>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night3.keyPoint2') }}</li>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night3.keyPoint3') }}</li>
                                            <li>{{ $t('GuidesPage.mechanics.nights.night3.keyPoint4') }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Energy Management Section -->
        <section id="energy" class="section energy">
            <div class="container">
                <div class="energy-wrapper">
                    <div class="section-header">
                        <h2 class="home-title">{{ $t('GuidesPage.energy.title') }}</h2>
                        <p class="section-subtitle" v-html="$t('GuidesPage.energy.subtitle', {}, { raw: true })"></p>
                    </div>

                    <div class="energy-grid">
                        <div class="energy-card">
                            <h3>{{ $t('GuidesPage.energy.dailyAllocation.title') }}</h3>
                            <p>{{ $t('GuidesPage.energy.dailyAllocation.description') }}</p>

                            <div class="energy-costs">
                                <h4>{{ $t('GuidesPage.energy.dailyAllocation.costsTitle') }}</h4>
                                <div class="cost-item">
                                    <span class="cost-action">{{ $t('GuidesPage.energy.dailyAllocation.talking') }}</span>
                                    <span class="cost-value free">{{ $t('GuidesPage.energy.dailyAllocation.talkingCost') }}</span>
                                </div>
                                <div class="cost-item">
                                    <span class="cost-action">{{ $t('GuidesPage.energy.dailyAllocation.examination') }}</span>
                                    <span class="cost-value">{{ $t('GuidesPage.energy.dailyAllocation.examinationCost') }}</span>
                                </div>
                                <div class="cost-item">
                                    <span class="cost-action">{{ $t('GuidesPage.energy.dailyAllocation.roomInvestigation') }}</span>
                                    <span class="cost-value">{{ $t('GuidesPage.energy.dailyAllocation.roomCost') }}</span>
                                </div>
                                <div class="cost-item">
                                    <span class="cost-action">{{ $t('GuidesPage.energy.dailyAllocation.itemExamination') }}</span>
                                    <span class="cost-value">{{ $t('GuidesPage.energy.dailyAllocation.itemCost') }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="energy-card">
                            <h3>{{ $t('GuidesPage.energy.strategicManagement.title') }}</h3>
                            <ol class="strategy-list">
                                <li v-html="$t('GuidesPage.energy.strategicManagement.step1', {}, { raw: true })"></li>
                                <li v-html="$t('GuidesPage.energy.strategicManagement.step2', {}, { raw: true })"></li>
                                <li v-html="$t('GuidesPage.energy.strategicManagement.step3', {}, { raw: true })"></li>
                                <li v-html="$t('GuidesPage.energy.strategicManagement.step4', {}, { raw: true })"></li>
                                <li v-html="$t('GuidesPage.energy.strategicManagement.step5', {}, { raw: true })"></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Guest Interaction Section -->
        <section id="guests" class="section guests">
            <div class="container">
                <div class="guests-wrapper">
                    <div class="section-header">
                        <h2 class="home-title">{{ $t('GuidesPage.guests.title') }}</h2>
                        <p class="section-subtitle" v-html="$t('GuidesPage.guests.subtitle', {}, { raw: true })"></p>
                    </div>

                    <div class="guests-grid">
                        <div class="guest-card always-human">
                            <h3>{{ $t('GuidesPage.guests.confirmedSafe.title') }}</h3>
                            <p v-html="$t('GuidesPage.guests.confirmedSafe.description', {}, { raw: true })"></p>
                            <ul class="guest-list">
                                <li>{{ $t('GuidesPage.guests.confirmedSafe.char1') }}</li>
                                <li>{{ $t('GuidesPage.guests.confirmedSafe.char2') }}</li>
                                <li>{{ $t('GuidesPage.guests.confirmedSafe.char3') }}</li>
                                <li>{{ $t('GuidesPage.guests.confirmedSafe.char4') }}</li>
                            </ul>
                        </div>

                        <div class="guest-card always-visitor">
                            <h3>{{ $t('GuidesPage.guests.confirmedThreats.title') }}</h3>
                            <p v-html="$t('GuidesPage.guests.confirmedThreats.description', {}, { raw: true })"></p>
                            <ul class="guest-list">
                                <li>{{ $t('GuidesPage.guests.confirmedThreats.char1') }}</li>
                                <li>{{ $t('GuidesPage.guests.confirmedThreats.char2') }}</li>
                                <li>{{ $t('GuidesPage.guests.confirmedThreats.char3') }}</li>
                                <li>{{ $t('GuidesPage.guests.confirmedThreats.char4') }}</li>
                            </ul>
                        </div>

                        <div class="guest-card variable">
                            <h3>{{ $t('GuidesPage.guests.uncertainIndividuals.title') }}</h3>
                            <p v-html="$t('GuidesPage.guests.uncertainIndividuals.description1', {}, { raw: true })"></p>
                            <p class="warning-text" v-html="$t('GuidesPage.guests.uncertainIndividuals.description2', {}, { raw: true })"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Visitor Identification Section -->
        <section class="section identification">
            <div class="container">
                <div class="identification-wrapper">
                    <div class="section-header">
                        <h2 class="home-title">{{ $t('GuidesPage.identification.title') }}</h2>
                        <p class="section-subtitle">{{ $t('GuidesPage.identification.subtitle') }}</p>
                    </div>

                    <div class="warning-box">
                        <div class="warning-title">
                            <span class="warning-icon">⚠️</span>
                            <span class="warning-title-text">{{ $t('GuidesPage.identification.warning.title') }}</span>
                        </div>
                        <div class="warning-content">
                            <p>{{ $t('GuidesPage.identification.warning.description1') }}</p>
                            <p v-html="$t('GuidesPage.identification.warning.description2', {}, { raw: true })"></p>
                        </div>
                    </div>

                    <div class="traits-grid">
                        <div class="trait-card">
                            <div class="trait-icon">{{ $t('GuidesPage.identification.traits.perfectTeeth.icon') }}</div>
                            <h3>{{ $t('GuidesPage.identification.traits.perfectTeeth.title') }}</h3>
                            <p>{{ $t('GuidesPage.identification.traits.perfectTeeth.description') }}</p>
                        </div>

                        <div class="trait-card">
                            <div class="trait-icon">{{ $t('GuidesPage.identification.traits.dirtyNails.icon') }}</div>
                            <h3>{{ $t('GuidesPage.identification.traits.dirtyNails.title') }}</h3>
                            <p v-html="$t('GuidesPage.identification.traits.dirtyNails.description', {}, { raw: true })"></p>
                        </div>

                        <div class="trait-card">
                            <div class="trait-icon">{{ $t('GuidesPage.identification.traits.bloodshotEyes.icon') }}</div>
                            <h3>{{ $t('GuidesPage.identification.traits.bloodshotEyes.title') }}</h3>
                            <p>{{ $t('GuidesPage.identification.traits.bloodshotEyes.description') }}</p>
                        </div>

                        <div class="trait-card">
                            <div class="trait-icon">{{ $t('GuidesPage.identification.traits.hairlessArmpits.icon') }}</div>
                            <h3>{{ $t('GuidesPage.identification.traits.hairlessArmpits.title') }}</h3>
                            <p>{{ $t('GuidesPage.identification.traits.hairlessArmpits.description') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Survival Strategies Section -->
        <section id="survival" class="section survival">
            <div class="container">
                <div class="survival-wrapper">
                    <div class="section-header">
                        <h2 class="home-title">{{ $t('GuidesPage.survival.title') }}</h2>
                        <p class="section-subtitle" v-html="$t('GuidesPage.survival.subtitle', {}, { raw: true })"></p>
                    </div>

                    <div class="critical-rule">
                        <div class="rule-title">
                            <span class="clock-icon">🕐</span>
                            <span class="bell-icon">🔔</span>
                            <span class="rule-title-text">{{ $t('GuidesPage.survival.criticalRule.title') }}</span>
                        </div>
                        <div class="rule-content">
                            <p v-html="$t('GuidesPage.survival.criticalRule.description1', {}, { raw: true })"></p>
                            <p v-html="$t('GuidesPage.survival.criticalRule.description2', {}, { raw: true })"></p>
                            <p v-html="$t('GuidesPage.survival.criticalRule.description3', {}, { raw: true })"></p>
                        </div>
                    </div>

                    <div class="strategies-grid">
                        <div class="strategy-column">
                            <div class="strategy-header">
                                <div class="strategy-icon">🛡️</div>
                                <h3>{{ $t('GuidesPage.survival.advancedTips.title') }}</h3>
                            </div>

                            <div class="strategy-section">
                                <h4>{{ $t('GuidesPage.survival.advancedTips.energyConservation.title') }}</h4>
                                <ul>
                                    <li>{{ $t('GuidesPage.survival.advancedTips.energyConservation.tip1') }}</li>
                                    <li>{{ $t('GuidesPage.survival.advancedTips.energyConservation.tip2') }}</li>
                                    <li v-html="$t('GuidesPage.survival.advancedTips.energyConservation.tip3', {}, { raw: true })"></li>
                                    <li>{{ $t('GuidesPage.survival.advancedTips.energyConservation.tip4') }}</li>
                                </ul>
                            </div>

                            <div class="strategy-section">
                                <h4>{{ $t('GuidesPage.survival.advancedTips.riskManagement.title') }}</h4>
                                <ul>
                                    <li>{{ $t('GuidesPage.survival.advancedTips.riskManagement.tip1') }}</li>
                                    <li v-html="$t('GuidesPage.survival.advancedTips.riskManagement.tip2', {}, { raw: true })"></li>
                                    <li>{{ $t('GuidesPage.survival.advancedTips.riskManagement.tip3') }}</li>
                                    <li>{{ $t('GuidesPage.survival.advancedTips.riskManagement.tip4') }}</li>
                                </ul>
                            </div>
                        </div>

                        <div class="strategy-column">
                            <div class="strategy-header">
                                <div class="strategy-icon">💀</div>
                                <h3 v-html="$t('GuidesPage.survival.fatalMistakes.title', {}, { raw: true })"></h3>
                            </div>

                            <div class="mistakes-list">
                                <div class="mistake-item">
                                    <h4>{{ $t('GuidesPage.survival.fatalMistakes.mistake1.title') }}</h4>
                                    <p v-html="$t('GuidesPage.survival.fatalMistakes.mistake1.description', {}, { raw: true })"></p>
                                </div>
                                <div class="mistake-item">
                                    <h4>{{ $t('GuidesPage.survival.fatalMistakes.mistake2.title') }}</h4>
                                    <p>{{ $t('GuidesPage.survival.fatalMistakes.mistake2.description') }}</p>
                                </div>
                                <div class="mistake-item">
                                    <h4>{{ $t('GuidesPage.survival.fatalMistakes.mistake3.title') }}</h4>
                                    <p>{{ $t('GuidesPage.survival.fatalMistakes.mistake3.description') }}</p>
                                </div>
                                <div class="mistake-item">
                                    <h4>{{ $t('GuidesPage.survival.fatalMistakes.mistake4.title') }}</h4>
                                    <p>{{ $t('GuidesPage.survival.fatalMistakes.mistake4.description') }}</p>
                                </div>
                                <div class="mistake-item">
                                    <h4>{{ $t('GuidesPage.survival.fatalMistakes.mistake5.title') }}</h4>
                                    <p>{{ $t('GuidesPage.survival.fatalMistakes.mistake5.description') }}</p>
                                </div>
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

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
</script>

<style scoped>
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

.updated-badge {
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

.update-icon {
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

.guide-icon {
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

.highlight-text {
    color: #00ff88;
    font-weight: 600;
}

/* Guide Navigation Cards */
.guide-nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.nav-card {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
}

.nav-card:hover {
    background: rgba(0, 0, 0, 0.8);
    border-color: #ffffff;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.nav-card span {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
}


/* Section Headers */
.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.section-subtitle {
    font-size: 18px;
    color: #d1d5db;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Common Styles */
.home-title {
    font-family: 'Creepster', cursive;
    font-size: 48px;
    text-align: center;
    color: #00ff88;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px #00ff88;
    font-weight: normal;
    text-transform: uppercase;
    position: relative;
    z-index: 3;
}

.mechanics-wrapper,
.energy-wrapper,
.guests-wrapper,
.identification-wrapper,
.survival-wrapper {
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 255, 136, 0.1);
    border: 1px solid rgba(0, 255, 136, 0.2);
    margin: 0 auto;
    max-width: 1200px;
    position: relative;
    z-index: 2;
}

/* 各板块差异化边框和阴影效果 */
.mechanics-wrapper {
    border: 1px solid rgba(0, 150, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 150, 0, 0.1), 
                inset 0 1px 0 rgba(0, 200, 0, 0.1);
}

.energy-wrapper {
    border: 1px solid rgba(255, 100, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 100, 0, 0.1), 
                inset 0 1px 0 rgba(255, 150, 0, 0.1);
}

.guests-wrapper {
    border: 1px solid rgba(150, 0, 200, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(150, 0, 200, 0.1), 
                inset 0 1px 0 rgba(200, 0, 255, 0.1);
}

.identification-wrapper {
    border: 1px solid rgba(200, 0, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(200, 0, 0, 0.1), 
                inset 0 1px 0 rgba(255, 0, 0, 0.1);
}

.survival-wrapper {
    border: 1px solid rgba(0, 100, 200, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 100, 200, 0.1), 
                inset 0 1px 0 rgba(0, 150, 255, 0.1);
}

/* Game Flow Stages - 学习阶段绿色主题 */
.flow-stages {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.stage-card {
    background: rgba(0, 20, 0, 0.6);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0, 150, 0, 0.3);
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    transition: all 0.3s ease;
    flex: 1;
    box-shadow: 0 8px 25px rgba(0, 100, 0, 0.1), inset 0 1px 0 rgba(0, 200, 0, 0.1);
}

.stage-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 150, 0, 0.2), inset 0 1px 0 rgba(0, 250, 0, 0.2);
    border-color: rgba(0, 200, 0, 0.5);
}

.stage-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 24px;
    font-weight: bold;
}

.stage-1 .stage-icon {
    background: linear-gradient(135deg, #10B981, #059669);
}

.stage-2 .stage-icon {
    background: linear-gradient(135deg, #F59E0B, #D97706);
}

.stage-3 .stage-icon {
    background: linear-gradient(135deg, #EF4444, #DC2626);
}

.stage-number {
    color: white;
}

.stage-card h3 {
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 600;
}

.stage-card p {
    color: #d1d5db;
    font-size: 14px;
    line-height: 1.5;
}

/* Night Details */
.night-details {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.night-card {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.night-card:nth-child(1) {
    border: 1px solid rgba(16, 185, 129, 0.5);
}

.night-card:nth-child(2) {
    border: 1px solid rgba(245, 158, 11, 0.5);
}

.night-card:nth-child(3) {
    border: 1px solid rgba(239, 68, 68, 0.5);
}

.night-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
}

.night-card:nth-child(1) .night-header {
    border-bottom: 1px solid rgba(16, 185, 129, 0.3);
}

.night-card:nth-child(2) .night-header {
    border-bottom: 1px solid rgba(245, 158, 11, 0.3);
}

.night-card:nth-child(3) .night-header {
    border-bottom: 1px solid rgba(239, 68, 68, 0.3);
}

.night-header h3 {
    font-size: 24px;
    margin: 0;
    font-family: 'Creepster', cursive;
}

.night-card:nth-child(1) .night-header h3 {
    color: #10B981;
}

.night-card:nth-child(2) .night-header h3 {
    color: #F59E0B;
}

.night-card:nth-child(3) .night-header h3 {
    color: #EF4444;
}

.difficulty-tag {
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
}

.difficulty-tag.easy {
    background: #10B981;
    color: white;
}

.difficulty-tag.medium {
    background: #F59E0B;
    color: white;
}

.difficulty-tag.hard {
    background: #EF4444;
    color: white;
}

.night-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
}

.night-left {
    color: #e0e0e0;
}

.night-description {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #d1d5db;
}

.playtime {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
    color: #a0a0a0;
    font-size: 14px;
}

.time-icon {
    font-size: 16px;
}

.visitor-types h4,
.strategy-tips h4 {
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 600;
}

.strategy-tips p {
    margin-bottom: 10px;
    font-size: 14px;
}

.visitor-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.visitor-tag {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.strategy-tips {
    margin-top: 20px;
}

.tip-icon {
    margin-right: 5px;
}

.night-right {
    color: #e0e0e0;
}

.key-points h4 {
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 15px;
    font-weight: 600;
}

.key-points ul {
    list-style: none;
    padding: 0;
}

.key-points li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    color: #d1d5db;
    font-size: 14px;
    line-height: 1.5;
}

.key-points li::before {
    content: '•';
    color: #00ff41;
    position: absolute;
    left: 0;
    font-weight: bold;
}


.mechanics-card {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 30px;
    border-radius: 12px;
    border: 1px solid rgba(0, 255, 136, 0.3);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 255, 136, 0.1);
    transition: all 0.3s ease;
}

.mechanics-card:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 136, 0.5);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 136, 0.2);
}


.mechanics-card h3 {
    color: #00ff88;
    font-size: 24px;
    margin-bottom: 16px;
    text-shadow: 0 0 10px #00ff88;
}

.mechanics-card p {
    color: #d1d5db;
    line-height: 1.6;
    margin-bottom: 16px;
}

.mechanics-list {
    color: #d1d5db;
    padding-left: 20px;
}

.mechanics-list li {
    margin-bottom: 8px;
    line-height: 1.5;
}

/* Energy Section - 能量管理橙红色主题 */
.energy-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.energy-card {
    background: rgba(20, 5, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 30px;
    border-radius: 12px;
    border: 1px solid rgba(255, 100, 0, 0.3);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 150, 0, 0.1);
    transition: all 0.3s ease;
}

.energy-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 150, 0, 0.5);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 100, 0, 0.2);
}

.energy-costs {
    background: rgba(0, 0, 0, 0.3);
    padding: 20px 0;
    border-radius: 8px;
}

.energy-costs h4 {
    color: #00ff88;
    margin-bottom: 16px;
    font-size: 18px;
}

.cost-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.cost-action {
    color: #d1d5db;
    font-weight: 500;
}

.cost-value {
    background: #dc2626;
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
}

.cost-value.free {
    background: #374151;
    color: #9ca3af;
}

.strategy-list {
    color: #d1d5db;
    padding-left: 20px;
}

.strategy-list li {
    margin-bottom: 12px;
    line-height: 1.5;
}

/* Guests Section - 访客交互紫色主题 */
.guests-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.guest-card {
    background: rgba(10, 0, 20, 0.6);
    backdrop-filter: blur(8px);
    padding: 25px;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(150, 0, 200, 0.1);
}

.guest-card.always-human {
    border: 1px solid rgba(16, 185, 129, 0.4);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(16, 185, 129, 0.1);
}

.guest-card.always-human:hover {
    border-color: rgba(16, 185, 129, 0.6);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(16, 185, 129, 0.2);
    transform: translateY(-5px);
}

.guest-card.always-visitor {
    border: 1px solid rgba(239, 68, 68, 0.4);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(239, 68, 68, 0.1);
}

.guest-card.always-visitor:hover {
    border-color: rgba(239, 68, 68, 0.6);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(239, 68, 68, 0.2);
    transform: translateY(-5px);
}

.guest-card.variable {
    border: 1px solid rgba(245, 158, 11, 0.4);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(245, 158, 11, 0.1);
}

.guest-card.variable:hover {
    border-color: rgba(245, 158, 11, 0.6);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(245, 158, 11, 0.2);
    transform: translateY(-5px);
}

.guest-card h3 {
    color: #00ff88;
    font-size: 20px;
    margin-bottom: 16px;
    text-shadow: 0 0 8px #00ff88;
}

.guest-card p {
    color: #d1d5db;
    margin-bottom: 16px;
    line-height: 1.5;
}

.guest-list {
    color: #d1d5db;
    text-align: left;
    padding-left: 20px;
}

.guest-list li {
    margin-bottom: 8px;
    line-height: 1.4;
}

.warning-text {
    color: #f59e0b;
    font-weight: 600;
    font-size: 14px;
}

/* Identification Section */
.warning-box {
    background: rgba(200, 0, 0, 0.15);
    border: 1px solid rgba(255, 0, 0, 0.4);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 40px;
    text-align: left;
    box-shadow: 0 8px 25px rgba(255, 0, 0, 0.15), inset 0 1px 0 rgba(255, 50, 0, 0.2);
    position: relative;
}

.warning-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 0, 0, 0.05) 50%, transparent 70%);
    border-radius: 12px;
    pointer-events: none;
}

.warning-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}

.warning-icon {
    font-size: 18px;
    color: #ffffff;
}

.warning-title-text {
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    font-family: Arial, sans-serif;
}

.warning-content p {
    color: #ff0000;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 8px;
    font-family: Arial, sans-serif;
}

.warning-content p:last-child {
    color: #ffffff;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 0;
}

.warning-content strong {
    color: #ffffcc;
    font-weight: bold;
}

.traits-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.trait-card {
    background: rgba(20, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 25px;
    border-radius: 12px;
    border: 1px solid rgba(200, 0, 0, 0.3);
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 0, 0, 0.1);
}

.trait-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 0, 0, 0.5);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(200, 0, 0, 0.2);
}

.trait-icon {
    font-size: 48px;
    margin-bottom: 16px;
}

.trait-card h3 {
    color: #00ff88;
    font-size: 18px;
    margin-bottom: 12px;
    text-shadow: 0 0 8px #00ff88;
}

.trait-card p {
    color: #d1d5db;
    font-size: 14px;
    line-height: 1.5;
}

/* Survival Section */
.critical-rule {
    background: rgba(200, 0, 0, 0.15);
    border: 1px solid rgba(255, 0, 0, 0.4);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 40px;
    text-align: left;
    box-shadow: 0 8px 25px rgba(255, 0, 0, 0.15), inset 0 1px 0 rgba(255, 50, 0, 0.2);
    position: relative;
}

.critical-rule::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 0, 0, 0.05) 50%, transparent 70%);
    border-radius: 12px;
    pointer-events: none;
}

.rule-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}

.clock-icon {
    font-size: 18px;
    color: #94a3b8;
}

.bell-icon {
    font-size: 18px;
    color: #fbbf24;
}

.rule-title-text {
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    font-family: Arial, sans-serif;
}

.rule-content p {
    color: #ff0000;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 8px;
    font-family: Arial, sans-serif;
}

.rule-content p:last-child {
    color: #ffffff;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 0;
}

.rule-content strong {
    color: #ffffcc;
    font-weight: bold;
}

.strategies-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.strategy-column {
    background: rgba(0, 5, 20, 0.6);
    backdrop-filter: blur(8px);
    padding: 30px;
    border-radius: 12px;
    border: 1px solid rgba(0, 100, 200, 0.3);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 150, 255, 0.1);
    transition: all 0.3s ease;
}

.strategy-column:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 150, 255, 0.5);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 100, 200, 0.2);
}

.strategy-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
}

.strategy-icon {
    font-size: 24px;
}

.strategy-header h3 {
    color: #00ff88;
    font-size: 20px;
    text-shadow: 0 0 8px #00ff88;
}

.fatal-text {
    color: #ef4444;
}

.strategy-section {
    margin-bottom: 24px;
}

.strategy-section h4 {
    color: #00ff88;
    font-size: 16px;
    margin-bottom: 12px;
    text-shadow: 0 0 6px #00ff88;
}

.strategy-section ul {
    color: #d1d5db;
    padding-left: 20px;
}

.strategy-section li {
    margin-bottom: 8px;
    line-height: 1.5;
}

.mistakes-list {
    color: #d1d5db;
}

.mistake-item {
    border-left: 3px solid #ef4444;
    padding-left: 16px;
    margin-bottom: 20px;
}

.mistake-item h4 {
    color: #ef4444;
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 600;
}

.mistake-item p {
    color: #d1d5db;
    font-size: 14px;
    line-height: 1.5;
}

/* Section Backgrounds - 恐怖主题差异化颜色 */
.section.mechanics {
    background: linear-gradient(135deg, #0d1b0d 0%, #0a0a0a 50%, #0d1b0d 100%);
    position: relative;
}

.section.mechanics::before {
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

.section.energy {
    background: linear-gradient(135deg, #1a0d0d 0%, #111111 50%, #1a0d0d 100%);
    position: relative;
}

.section.energy::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(255, 100, 0, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(255, 50, 0, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

.section.guests {
    background: linear-gradient(135deg, #0d0d1a 0%, #0a0a0a 50%, #0d0d1a 100%);
    position: relative;
}

.section.guests::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 40% 60%, rgba(100, 0, 150, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 60% 40%, rgba(150, 0, 200, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

.section.identification {
    background: linear-gradient(135deg, #1a0d0d 0%, #111111 50%, #1a0d0d 100%);
    position: relative;
}

.section.identification::before {
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

.section.survival {
    background: linear-gradient(135deg, #0d0d1a 0%, #0a0a0a 50%, #0d0d1a 100%);
    position: relative;
}

.section.survival::before {
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
.night-description a,
.guest-card a,
.trait-card a,
.strategy-section a,
.mistake-item a,
.rule-content a {
    color: #00ff88;
    text-decoration: underline;
    text-decoration-color: #00ff88;
    text-underline-offset: 3px;
    transition: all 0.3s ease;
    font-weight: 600;
}

.hero-description a:hover,
.section-subtitle a:hover,
.night-description a:hover,
.guest-card a:hover,
.trait-card a:hover,
.strategy-section a:hover,
.mistake-item a:hover,
.rule-content a:hover {
    color: #00cc66;
    text-decoration-color: #00cc66;
    text-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
    .section {
        padding: 40px 0;
    }

    .section.hero {
        padding: 100px 0 2 0;
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
        font-size: 24px;
    }

    .mechanics-wrapper,
    .energy-wrapper,
    .guests-wrapper,
    .identification-wrapper,
    .survival-wrapper {
        padding: 20px;
    }

    .mechanics-grid,
    .energy-grid,
    .guests-grid,
    .traits-grid,
    .strategies-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .guide-nav {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    .nav-card {
        padding: 15px;
        min-height: 50px;
    }

    .nav-card span {
        font-size: 14px;
    }

    .flow-stages {
        gap: 20px;
        margin-bottom: 30px;
    }

    .stage-card {
        padding: 20px;
    }

    .night-content {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .visitor-tags {
        gap: 8px;
    }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .section {
        padding: 20px 0;
    }

    .section.hero {
        padding: 70px 0 20px 0;
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

    .hero-title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .section-subtitle {
        font-size: 12px;
    }

    .section-header {
        margin-bottom: 10px;
    }

    .hero-description {
        margin-bottom: 10px;
    }

    .hero-description p {
        font-size: 12px;
        line-height: 1.5;
    }


    .home-title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .night-content {
        gap: 10px;
    }

    .key-points h4 {
        margin-bottom: 10px;
    }

    .key-points li {
        font-size: 12px;
        margin-bottom: 5px;
    }

    .energy-costs {
        padding: 10px 0;
    }

    .energy-costs h4 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .cost-item {
        margin-bottom: 10px;
        padding: 0 0 10px 0;
    }

    .guest-list li {
        font-size: 12px;
    }

    .mechanics-wrapper,
    .energy-wrapper,
    .guests-wrapper,
    .identification-wrapper,
    .survival-wrapper {
        padding: 10px;
    }

    .mechanics-grid,
    .energy-grid,
    .guests-grid,
    .traits-grid,
    .strategies-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .mechanics-card,
    .energy-card,
    .guest-card,
    .trait-card,
    .strategy-column {
        padding: 10px;
    }

    .mechanics-card h3,
    .energy-card h3,
    .guest-card h3,
    .trait-card h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .mechanics-card p,
    .energy-card p,
    .guest-card p,
    .trait-card p,
    .strategy-column p,
    .strategy-column li {
        font-size: 12px;
        line-height: 1.5;
    }

    .strategy-tips p {
        font-size: 12px;
        line-height: 1.5;
    }

    .warning-box,
    .critical-rule {
        padding: 10px;
    }

    .warning-title,
    .rule-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .warning-content p,
    .critical-rule p {
        font-size: 12px;
        line-height: 1.5;
    }

    .guide-nav {
        gap: 10px;
    }

    .nav-card {
        padding: 12px;
        min-height: 45px;
    }

    .nav-card span {
        font-size: 12px;
    }

    .flow-stages {
        gap: 10px;
        margin-bottom: 10px;
    }

    .stage-card {
        padding: 10px;
    }

    .stage-icon {
        width: 50px;
        height: 50px;
        font-size: 20px;
    }

    .stage-card h3 {
        font-size: 14px;
    }

    .stage-card p {
        font-size: 12px;
    }

    .night-card {
        padding: 10px;
    }

    .night-header {
        margin-bottom: 10px;
        padding-bottom: 10px;
    }

    .night-header h3 {
        font-size: 16px;
    }

    .night-description {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .playtime {
        margin-bottom: 10px;
    }

    .visitor-tags {
        gap: 5px;
        margin-bottom: 10px;
    }

    .visitor-tag {
        font-size: 10px;
        padding: 4px 8px;
    }
}
</style>
