<template>
    <div class="about-page">
        <AppHeader />

        <!-- Hero Section -->
        <section class="section hero">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title" v-html="$t('AboutPage.hero.title', {}, { raw: true })"></h1>
                    <p class="hero-subtitle">{{ $t('AboutPage.hero.subtitle') }}</p>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="section main-content">
            <div class="container">
                <div class="content-wrapper">
                    <div class="about-content">
                        <h2>{{ $t('AboutPage.whoWeAre.title') }}</h2>
                        <p>{{ $t('AboutPage.whoWeAre.content') }}</p>

                        <h2>{{ $t('AboutPage.mission.title') }}</h2>
                        <p>{{ $t('AboutPage.mission.content') }}</p>

                        <h2>{{ $t('AboutPage.whatWeOffer.title') }}</h2>
                        <ul>
                            <li v-html="$t('AboutPage.whatWeOffer.item1', {}, { raw: true })"></li>
                            <li v-html="$t('AboutPage.whatWeOffer.item2', {}, { raw: true })"></li>
                            <li v-html="$t('AboutPage.whatWeOffer.item3', {}, { raw: true })"></li>
                            <li v-html="$t('AboutPage.whatWeOffer.item4', {}, { raw: true })"></li>
                            <li v-html="$t('AboutPage.whatWeOffer.item5', {}, { raw: true })"></li>
                            <li v-html="$t('AboutPage.whatWeOffer.item6', {}, { raw: true })"></li>
                        </ul>

                        <h2>{{ $t('AboutPage.commitment.title') }}</h2>
                        <p>{{ $t('AboutPage.commitment.content') }}</p>

                        <h2>{{ $t('AboutPage.communityFocus.title') }}</h2>
                        <p>{{ $t('AboutPage.communityFocus.content') }}</p>

                        <h2>{{ $t('AboutPage.qualityAssurance.title') }}</h2>
                        <p>{{ $t('AboutPage.qualityAssurance.content') }}</p>

                        <h2>{{ $t('AboutPage.regularUpdates.title') }}</h2>
                        <p>{{ $t('AboutPage.regularUpdates.content') }}</p>

                        <h2>{{ $t('AboutPage.contactUs.title') }}</h2>
                        <p>{{ $t('AboutPage.contactUs.content') }} <a
                                href="mailto:wyong@iamnotahuman.org">wyong@iamnotahuman.org</a> {{
                                    $t('AboutPage.contactUs.content2') }}</p>

                        <h2>{{ $t('AboutPage.joinCommunity.title') }}</h2>
                        <p>{{ $t('AboutPage.joinCommunity.content') }}</p>
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
</script>

<style scoped>
.about-page {
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

.about-content {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 50px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.about-content h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #00ff41;
    position: relative;
    padding-left: 20px;
    line-height: 1.5;
}

.about-content h2:before {
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

.about-content p {
    font-size: 1rem;
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.about-content ul {
    margin-bottom: 1.5rem;
    padding-left: 0;
}

.about-content li {
    list-style: none;
    position: relative;
    padding: 10px 0 10px 25px;
    color: #ccc;
    font-size: 1rem;
    line-height: 1.6;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.about-content li:before {
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

.about-content strong {
    color: #fff;
    font-weight: 600;
}

.about-content a {
    color: #00ff41;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.about-content a:hover {
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

    .about-content {
        padding: 30px 20px;
        border-radius: 16px;
    }

    .about-content h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding-left: 15px;
    }

    .about-content h2:before {
        width: 3px;
        height: 25px;
    }

    .about-content p,
    .about-content li {
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .about-content li {
        padding: 8px 0 8px 20px;
    }
}
</style>
