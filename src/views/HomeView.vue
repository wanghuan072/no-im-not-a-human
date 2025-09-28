<template>
    <div class="home-page">
        <AppHeader />

        <!-- Hero Section -->
        <section class="section hero">
            <div class="container">
                <div class="hero-wrapper">
                    <!-- Hot Recommendation Banner -->
                    <div class="hero-banner">
                        <div class="banner-left">
                            <div class="hot-badge">
                                <span class="flame-icon">🔥</span>
                                <span>Hot Recommendation</span>
                            </div>
                        </div>
                        <div class="banner-right">
                            <span class="star-icon">✨</span>
                            <span>No I'm not a Human Complete Guide Now Live - Your Path to Perfect Completion</span>
                        </div>
                    </div>
                    <h1 class="hero-title">
                        Master the Ultimate <span class="highlight">No I'm not a Human</span> Strategy Guide
                    </h1>
                    <div class="hero-description">
                        <p>Dive deep into the world of this acclaimed psychological horror game. We provide the most
                            comprehensive No I'm not a Human guides, detailed system requirement analysis, secure
                            download channels, and professional gaming tutorials. Whether you're a newcomer or a veteran
                            player seeking to collect all endings, you'll find everything you need here.</p>
                    </div>
                    <div class="hero-buttons">
                        <a href="https://store.steampowered.com/" target="_blank" class="btn btn-primary btn-download">
                            <span class="btn-icon">⬇️</span>
                            <span>Download Game Now</span>
                        </a>
                        <a href="#" class="btn btn-secondary btn-guide">
                            <span class="btn-icon">📖</span>
                            <span>Start Learning Guides</span>
                        </a>
                    </div>

                    <!-- Footer Text -->
                    <div class="hero-footer">
                        <div class="footer-icon">⚡</div>
                        <p>Expertly crafted by our professional guide team to help you survive and discover all secrets
                            in the horror world</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Video Section -->
        <section class="section video">
            <div class="container">
                <div class="video-wrapper">
                    <h2 class="home-title">Watch the Trailer</h2>
                    <div class="video-container">
                        <div class="video-overlay" v-if="!videoPlaying" @click="playVideo">
                            <div class="video-poster">
                                <img src="/images/video-bg.webp" alt="No I'm not a Human Video Poster" />
                                <div class="video-mask"></div>
                            </div>
                            <div class="play-button">
                                <svg class="play-icon" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <iframe v-if="videoPlaying" :src="videoUrl" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen class="video-iframe"></iframe>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="section about">
            <div class="container">
                <div class="about-wrapper">
                    <h2 class="home-title">About No I'm not a Human</h2>
                    <div class="about-content">
                        <div class="about-text">
                            <p>As the sun draws closer to Earth, civilization has collapsed. The extreme heat during the
                                day makes outdoor survival impossible, forcing the remaining population to seek shelter.
                                But something else emerged in this new world - visitors who can mimic human appearance
                                and behavior, but whose intentions remain unknown and deadly.</p>

                            <h3 class="subsection-title">The Challenge</h3>
                            <p>You play as a survivor barricaded in an apartment, trying to last until... what? Rescue?
                                A solution? Or simply one more day? Your survival depends on identifying who is human
                                and who is a visitor. Every decision is critical, as letting in the wrong person could
                                be fatal. The game explores themes of trust, paranoia, and survival in extreme
                                circumstances, where the greatest threat might be the person you choose to help.</p>
                        </div>
                        <div class="about-image">
                            <div class="game-image">
                                <img src="/images/about-img.webp" alt="No I'm not a Human Game Screenshot" />
                            </div>
                        </div>
                    </div>
                    <div class="features-grid">
                        <div class="feature-card">
                            <h3>Complex Multi-Branching Ending System</h3>
                            <p>No I'm not a Human features over 15 different ending paths, where each player's choice
                                creates a butterfly effect, influencing the story's final direction. This design makes
                                every gameplay experience unique, greatly enhancing the game's replay value and
                                exploration fun.</p>
                        </div>
                        <div class="feature-card">
                            <h3>Three-Night Progressive Horror Challenge</h3>
                            <p>The game cleverly divides the horror experience into three nights, with each night's
                                difficulty and complexity increasing progressively. Players need to learn to identify
                                real and fake visitors, master survival skills, and make correct judgments under
                                pressure.</p>
                        </div>
                        <div class="feature-card">
                            <h3>Deep Psychological Horror Experience</h3>
                            <p>No I'm not a Human doesn't rely on cheap jump scares, but creates sustained tension
                                through carefully constructed atmosphere, subtle sound design, and clever visual cues,
                                allowing players to experience true psychological horror.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Section -->
        <section class="section why">
            <div class="container">
                <div class="why-wrapper">
                    <h2 class="home-title">Why Our Game Guide is Essential</h2>
                    <p class="why-intro">Get everything you need to master the intense survival horror experience - from
                        beginner tips to advanced strategies for this challenging game.</p>
                    <div class="why-grid">
                        <div class="why-card">
                            <div class="why-image">
                                <img src="/images/why-01.webp" alt="No I'm not a Human Game Screenshot" />
                            </div>
                            <h3>Complete Walkthrough</h3>
                            <p>Day-by-day survival strategy including critical Night 4 Intruder survival and guest
                                management techniques for optimal gameplay.</p>
                        </div>
                        <div class="why-card">
                            <div class="why-image">
                                <img src="/images/why-02.webp" alt="No I'm not a Human Game Screenshot" />
                            </div>
                            <h3>All Endings Guide</h3>
                            <p>Unlock every possible outcome with step-by-step achievement guides and decision trees for
                                all six different endings.</p>
                        </div>
                        <div class="why-card">
                            <div class="why-image">
                                <img src="/images/why-03.webp" alt="No I'm not a Human Game Screenshot" />
                            </div>
                            <h3>Expert Strategies</h3>
                            <p>Advanced tips for energy efficiency, guest prioritization, and avoiding fatal mistakes
                                that lead to game over.</p>
                        </div>
                        <div class="why-card">
                            <div class="why-image">
                                <img src="/images/why-04.webp" alt="No I'm not a Human Game Screenshot" />
                            </div>
                            <h3>Psychological Warfare Guide</h3>
                            <p>Master stress management, visitor psychological analysis, and decision-making techniques
                                to maintain sanity and judgment in this paranoid world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Guide Section -->
        <section class="section guide">
            <div class="container">
                <div class="guide-wrapper">
                    <h2 class="home-title">Complete Guide Features</h2>
                    <p class="guide-intro">Everything you need to master this survival horror experience and become an
                        expert at the challenging paranoia-driven gameplay. Our comprehensive guides cover all aspects
                        of this intense horror survival adventure.</p>
                    <div class="guide-grid">
                        <div class="guide-card">
                            <h3>Visitor Identification Guide</h3>
                            <p>Comprehensive guide to detecting dangerous Visitors through physical traits, behavioral
                                patterns, and investigation techniques. Master survival strategies with detailed
                                identification methods.</p>
                        </div>
                        <div class="guide-card">
                            <h3>All 6 Endings Walkthrough</h3>
                            <p>Step-by-step guides to unlock every ending including the secret best ending with detailed
                                choice explanations and survival strategies. Complete walkthrough for all six possible
                                outcomes.</p>
                        </div>
                        <div class="guide-card">
                            <h3>Energy Management System</h3>
                            <p>Master the energy-based investigation system with optimization strategies for maximum
                                efficiency.</p>
                        </div>
                        <div class="guide-card">
                            <h3>Survival Strategies</h3>
                            <p>Advanced tips for shelter management, guest prioritization, and avoiding fatal mistakes
                                in gameplay.</p>
                        </div>
                        <div class="guide-card">
                            <h3>Achievement Guide</h3>
                            <p>Complete achievement hunting guide with requirements and unlock strategies for 100%
                                completion.</p>
                        </div>
                        <div class="guide-card">
                            <h3>Night 4 Intruder Guide</h3>
                            <p>Critical survival strategies for the most challenging night including intruder detection
                                and defense.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="section faq">
            <div class="container">
                <div class="faq-wrapper">
                    <h2 class="home-title">Frequently Asked Questions</h2>
                    <p class="faq-intro">Learn more about this acclaimed horror visual novel.</p>
                    <div class="faq-content">
                        <div class="faq-list">
                            <div class="faq-item">
                                <h3 class="faq-question">What is No I'm not a Human?</h3>
                                <p class="faq-answer">No I'm not a Human is a psychological horror visual novel where
                                    extreme solar activity has made daytime survival impossible. You must survive the
                                    night by identifying dangerous Visitors disguised as humans seeking shelter in your
                                    apartment, making critical decisions that determine your fate.</p>
                            </div>
                            <div class="faq-item">
                                <h3 class="faq-question">Who developed the game?</h3>
                                <p class="faq-answer">The game was developed by Russian indie studio Trioskaz and
                                    published by Critical Reflex. It's available on Steam for PC, with console versions
                                    planned for future release.</p>
                            </div>
                            <div class="faq-item">
                                <h3 class="faq-question">How does the energy system work?</h3>
                                <p class="faq-answer">You have limited daily energy for investigating guests. Each
                                    inspection of body parts, conversation, or action costs energy. You can eat, drink,
                                    or rest to pass time, but must balance investigation needs with energy conservation.
                                </p>
                            </div>
                            <div class="faq-item">
                                <h3 class="faq-question">What makes this game unique?</h3>
                                <p class="faq-answer">The game combines psychological horror with moral dilemmas and
                                    resource management. You must make split-second decisions about who to trust, with
                                    each choice having potentially deadly consequences in this atmospheric
                                    post-apocalyptic setting.</p>
                            </div>
                            <div class="faq-item">
                                <h3 class="faq-question">How many endings are there?</h3>
                                <p class="faq-answer">The game features multiple endings based on your choices and
                                    interactions with visitors. Each playthrough can lead to different outcomes
                                    depending on how you handle the mysterious visitors and manage your survival
                                    strategy.</p>
                            </div>
                            <div class="faq-item">
                                <h3 class="faq-question">Where can I play it?</h3>
                                <p class="faq-answer">No I'm not a Human is available on Steam for Windows PC. Console
                                    versions are planned for future release. A demo is available on Steam for players to
                                    try before purchasing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section cta">
            <div class="container">
                <div class="cta-wrapper">
                    <h2 class="home-title">Face the Night</h2>
                    <p class="cta-text">Join thousands of survivors in this intense psychological horror experience. Can
                        you survive until dawn?</p>
                    <div class="cta-buttons">
                        <a href="https://store.steampowered.com/" target="_blank" class="btn btn-primary btn-large">Play
                            on Steam</a>
                        <a href="#" class="btn btn-secondary btn-large">Try Free Demo</a>
                    </div>
                </div>
            </div>
        </section>

        <AppFooter />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/css/public.css'

// 视频相关状态
const videoPlaying = ref(false)
const videoUrl = ref('')

// 播放视频方法
const playVideo = () => {
    videoPlaying.value = true
    // 这里可以设置实际的视频URL，比如YouTube或Vimeo
    videoUrl.value = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
}
</script>

<style scoped>
.home-page {
    min-height: 100vh;
}

.section {
    position: relative;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
}

.section.hero {
    height: 100vh;
    padding: 70px 0 0 0;
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

.hot-badge {
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

.flame-icon {
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

.star-icon {
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

@keyframes glow {
    from {
        text-shadow: 0 0 20px #00ff41, 0 0 40px #00ff41;
    }

    to {
        text-shadow: 0 0 30px #00ff41, 0 0 60px #00ff41, 0 0 80px #00ff41;
    }
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

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    position: relative;
    z-index: 3;
    margin-bottom: 40px;
}

.btn-download {
    background: linear-gradient(135deg, #00ff41, #00cc33);
    border: 2px solid #00ff41;
    color: black;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 32px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 12px;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
}

.btn-download:hover {
    background: linear-gradient(135deg, #00cc33, #00aa2a);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 255, 65, 0.6);
}

.btn-guide {
    background: transparent;
    border: 2px solid white;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 32px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.btn-guide:hover {
    background: white;
    color: black;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}

.btn-icon {
    font-size: 20px;
}

.hero-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
    z-index: 3;
}

.footer-icon {
    font-size: 24px;
    background: linear-gradient(135deg, #ec4899, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-footer p {
    color: #9ca3af;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
}

/* Section 内容样式 */
.section.hero .hero-wrapper {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    position: relative;
    z-index: 2;
}

.section.about .about-wrapper {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.section.why .why-wrapper {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.section.guide .guide-wrapper {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.section.faq .faq-wrapper {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.section.cta .cta-wrapper {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
}

/* About Section */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    margin-bottom: 40px;
}

.about-text p {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 1.8;
    text-align: left;
}

.subsection-title {
    color: #00ff41;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: left;
    text-shadow: 0 0 15px #00ff41;
    position: relative;
}

.subsection-title::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, #00ff41, #00cc33);
    border-radius: 2px;
    animation: drip 3s ease-in-out infinite;
}

.about-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.game-image {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.game-image img {
    width: 100%;
    height: auto;
    display: block;
}


.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.feature-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
    text-align: center;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: #00ff41;
    margin-bottom: 16px;
    font-size: 20px;
    text-shadow: 0 0 10px #00ff41;
}

.feature-card p {
    font-size: 14px;
    line-height: 1.5;
}

/* Why Section */
.why-intro {
    text-align: center;
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 1.6;
    opacity: 0.9;
}

.why-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.why-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
    text-align: center;
}

.why-card:hover {
    transform: translateY(-5px);
}

.why-image {
    margin-bottom: 16px;
}

.why-image img {
    aspect-ratio: 1/1;
    object-fit: cover;
}


.why-card h3 {
    color: #00ff41;
    margin-bottom: 16px;
    font-size: 18px;
    text-shadow: 0 0 8px #00ff41;
}

.why-card p {
    font-size: 14px;
    line-height: 1.5;
}

/* Guide Section */
.guide-intro {
    text-align: center;
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 1.6;
    opacity: 0.9;
}

.guide-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.guide-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
    text-align: center;
}

.guide-card:hover {
    transform: translateY(-5px);
}

.guide-card h3 {
    color: #00ff41;
    margin-bottom: 16px;
    font-size: 18px;
    text-shadow: 0 0 8px #00ff41;
}

.guide-card p {
    font-size: 14px;
    line-height: 1.5;
}

/* FAQ Section */
.faq-intro {
    text-align: center;
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 1.6;
    opacity: 0.9;
}

.faq-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.faq-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
}

.faq-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.faq-question {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 1.4;
}

.faq-answer {
    color: #ccc;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
}

/* CTA Section */
.cta-text {
    font-size: 19px;
    margin-bottom: 32px;
    opacity: 0.9;
}

.cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Common Styles */
.home-title {
    font-family: 'Creepster', cursive;
    font-size: 2.5rem;
    text-align: center;
    color: #00ff88;
    margin-bottom: 3rem;
    text-shadow: 0 0 10px #00ff88;
    font-weight: normal;
    text-transform: uppercase;
    position: relative;
    z-index: 3;
}

.btn {
    padding: 16px 32px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background: #00ff41;
    color: #000;
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
}

.btn-primary:hover {
    background: #00cc33;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 255, 65, 0.5);
}

.btn-secondary {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
}

.btn-secondary:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
}

.btn-large {
    padding: 24px 48px;
    font-size: 19px;
}

.section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(10, 0, 20, 0.7) 100%);
    z-index: 0;
}

/* Video Section Styles */
.video-wrapper {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
}

.video-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.video-overlay {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.video-poster {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.video-poster img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.video-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
}


.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: rgba(0, 255, 136, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
    z-index: 10;
}

.play-button:hover {
    background: rgba(0, 255, 136, 1);
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.8);
}

.play-icon {
    width: 32px;
    height: 32px;
    color: #000;
    margin-left: 2px;
}

.video-iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
}

.section.hero {
    background-image: url('/images/1.webp');
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    contain: paint;
}

.section.video {
    background-image: url('/images/2.webp');
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.section.about {
    background-image: url('/images/3.webp');
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.section.why {
    background-image: url('/images/4.webp');
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.section.guide {
    background-image: url('/images/5.webp');
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.section.faq {
    background-image: url('/images/7.webp');
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.section.cta {
    background-image: url('/images/6.webp');
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
    .section {
        padding: 40px 0;
    }

    .section.hero {
        height: auto;
        padding-top: 100px;
    }

    .section.hero .hero-wrapper {
        padding: 20px;
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
        font-size: 2rem;
    }

    .video-wrapper {
        padding: 20px;
    }

    .play-button {
        width: 60px;
        height: 60px;
    }

    .play-icon {
        width: 24px;
        height: 24px;
    }

    .about-content {
        grid-template-columns: 1fr;
        gap: 30px;
        margin-bottom: 30px;
    }

    .section.about .about-wrapper {
        padding: 20px;
    }

    .section.why .why-wrapper {
        padding: 20px;
    }

    .features-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .why-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .guide-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .section.guide .guide-wrapper {
        padding: 20px;
    }

    .faq-list {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .section.faq .faq-wrapper {
        padding: 20px;
    }

    .section.cta .cta-wrapper {
        padding: 20px;
    }

    .btn-large {
        padding: 16px 32px;
        font-size: 16px;
    }
}

/* Responsive Design - 768px Mobile */
@media (max-width: 768px) {
    .section {
        padding: 20px 0;
    }

    .section.hero {
        padding-top: 70px;
        padding-bottom: 20px;
    }

    .section.hero .hero-wrapper {
        padding: 10px;
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

    .hero-title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .hero-description {
        margin-bottom: 10px;
    }

    .hero-description p {
        font-size: 14px;
        line-height: 1.5;
    }

    .hero-buttons {
        gap: 10px;
        margin-bottom: 10px;
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


    .btn-download,
    .btn-guide {
        padding: 14px 24px;
        font-size: 16px;
    }

    .hero-footer {
        flex-direction: column;
        gap: 8px;
        text-align: center;
    }

    .hero-footer p {
        font-size: 12px;
    }

    .home-title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .video-wrapper {
        padding: 10px;
    }

    .play-button {
        width: 50px;
        height: 50px;
    }

    .play-icon {
        width: 20px;
        height: 20px;
    }

    .hero-subtitle {
        font-size: 16px;
        margin-bottom: 10px;
    }



    .section.about .about-wrapper,
    .section.why .why-wrapper,
    .section.guide .guide-wrapper,
    .section.faq .faq-wrapper,
    .section.cta .cta-wrapper {
        padding: 10px;
    }

    .about-text p {
        font-size: 12px;
        line-height: 1.5;
        margin-bottom: 10px;
    }

    .about-content {
        grid-template-columns: 1fr;
        gap: 10px;
        margin-bottom: 20px;
    }

    .subsection-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .features-grid {
        grid-template-columns: 1fr;
        gap: 15px;
        margin-top: 20px;
    }

    .feature-card {
        padding: 10px;
    }

    .feature-card h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .feature-card p {
        font-size: 12px;
        line-height: 1.5;
    }

    .why-intro,
    .guide-intro,
    .faq-intro {
        font-size: 12px;
        margin-bottom: 10px;
        line-height: 1.5;
    }

    .why-grid {
        gap: 10px;
    }

    .why-card {
        padding: 10px;
    }

    .why-image{
        margin-bottom: 10px;
    }

    .why-card h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .why-card p {
        font-size: 12px;
        line-height: 1.5;
    }

    .guide-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .guide-card {
        padding: 10px;
    }

    .guide-card h3 {
        font-size: 16px;
        margin-bottom: 12px;
    }

    .guide-card p {
        font-size: 12px;
        line-height: 1.5;
    }

    .faq-question {
        font-size: 16px;
    }

    .faq-answer {
        font-size: 12px;
        line-height: 1.5;
    }

    .cta-text {
        font-size: 14px;
        margin-bottom: 10px;
        line-height: 1.5;
    }

    .cta-buttons {
        gap: 10px;
    }

    .btn {
        padding: 10px 20px;
        font-size: 12px;
    }

    .btn-large {
        padding: 10px 20px;
        font-size: 14px;
    }

    .btn-icon {
        display: none;
    }


    
}
</style>
