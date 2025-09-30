<template>
    <div class="contact-page">
        <AppHeader />

        <!-- Hero Section -->
        <section class="section hero">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title" v-html="$t('ContactPage.hero.title', {}, { raw: true })"></h1>
                    <p class="hero-subtitle">{{ $t('ContactPage.hero.subtitle') }}</p>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="section main-content">
            <div class="container">
                <div class="content-wrapper">
                    <div class="contact-content">
                        <h2>{{ $t('ContactPage.getInTouch.title') }}</h2>
                        <p>{{ $t('ContactPage.getInTouch.content') }}</p>

                        <h2>{{ $t('ContactPage.contactInfo.title') }}</h2>
                        <p v-html="$t('ContactPage.contactInfo.email', {}, { raw: true })"></p>
                        <p>{{ $t('ContactPage.contactInfo.response') }}</p>

                        <h2>{{ $t('ContactPage.responseTime.title') }}</h2>
                        <ul>
                            <li v-html="$t('ContactPage.responseTime.weekday', {}, { raw: true })"></li>
                            <li v-html="$t('ContactPage.responseTime.weekend', {}, { raw: true })"></li>
                        </ul>

                        <h2>{{ $t('ContactPage.whatWeHelp.title') }}</h2>
                        <ul>
                            <li v-html="$t('ContactPage.whatWeHelp.item1', {}, { raw: true })"></li>
                            <li v-html="$t('ContactPage.whatWeHelp.item2', {}, { raw: true })"></li>
                            <li v-html="$t('ContactPage.whatWeHelp.item3', {}, { raw: true })"></li>
                            <li v-html="$t('ContactPage.whatWeHelp.item4', {}, { raw: true })"></li>
                            <li v-html="$t('ContactPage.whatWeHelp.item5', {}, { raw: true })"></li>
                            <li v-html="$t('ContactPage.whatWeHelp.item6', {}, { raw: true })"></li>
                        </ul>

                        <h2>{{ $t('ContactPage.beforeContact.title') }}</h2>
                        <p>{{ $t('ContactPage.beforeContact.intro') }}</p>
                        <ul>
                            <li>{{ $t('ContactPage.beforeContact.item1') }}</li>
                            <li>{{ $t('ContactPage.beforeContact.item2') }}</li>
                            <li>{{ $t('ContactPage.beforeContact.item3') }}</li>
                            <li>{{ $t('ContactPage.beforeContact.item4') }}</li>
                        </ul>

                        <h2>{{ $t('ContactPage.faq.title') }}</h2>
                        <ul>
                            <li v-html="$t('ContactPage.faq.q1', {}, { raw: true })"></li>
                            <li v-html="$t('ContactPage.faq.q2', {}, { raw: true })"></li>
                            <li v-html="$t('ContactPage.faq.q3', {}, { raw: true })"></li>
                            <li v-html="$t('ContactPage.faq.q4', {}, { raw: true })"></li>
                        </ul>

                        <h2>{{ $t('ContactPage.businessHours.title') }}</h2>
                        <p>{{ $t('ContactPage.businessHours.content') }}</p>

                        <h2>{{ $t('ContactPage.privacy.title') }}</h2>
                        <p>{{ $t('ContactPage.privacy.content') }}</p>

                        <h2>{{ $t('ContactPage.thankYou.title') }}</h2>
                        <p>{{ $t('ContactPage.thankYou.content') }}</p>
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
.contact-page {
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

.contact-content {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 50px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-content h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #00ff41;
    position: relative;
    padding-left: 20px;
    line-height: 1.5;
}

.contact-content h2:before {
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

.contact-content p {
    font-size: 1rem;
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.contact-content ul {
    margin-bottom: 1.5rem;
    padding-left: 0;
}

.contact-content li {
    list-style: none;
    position: relative;
    padding: 10px 0 10px 25px;
    color: #ccc;
    font-size: 1rem;
    line-height: 1.6;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-content li:before {
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

.contact-content strong {
    color: #fff;
    font-weight: 600;
}

.contact-content a {
    color: #00ff41;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.contact-content a:hover {
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

    .contact-content {
        padding: 30px 20px;
        border-radius: 16px;
    }

    .contact-content h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding-left: 15px;
    }

    .contact-content h2:before {
        width: 3px;
        height: 25px;
    }

    .contact-content p,
    .contact-content li {
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .contact-content li {
        padding: 8px 0 8px 20px;
    }
}
</style>