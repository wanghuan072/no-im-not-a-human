<template>
    <div class="guides-page">
        <AppHeader />

        <!-- Hero Section -->
        <section class="section hero">
            <div class="container">
                <div class="hero-wrapper">
                    <!-- Main Title -->
                    <h1 class="hero-title">
                        <span class="highlight">No I'm Not a Human Guides - Complete Gameplay Guide</span>
                    </h1>

                    <!-- Description -->
                    <div class="hero-description">
                        <p>Master the paranoia-driven horror experience with our comprehensive <span
                                class="highlight-text">"No I'm Not a Human Guides"</span> covering <span
                                class="highlight-text">game mechanics</span>, <span class="highlight-text">energy
                                management</span>, and <span class="highlight-text">survival strategies</span>. Learn to
                            distinguish between genuine human survivors and dangerous Visitors in this apocalyptic
                            nightmare.</p>
                    </div>

                    <!-- Navigation Cards -->
                    <div class="guide-nav">
                        <div class="nav-card" @click="scrollToSection('core-mechanics')">
                            <span>Game Mechanics</span>
                        </div>
                        <div class="nav-card" @click="scrollToSection('energy')">
                            <span>Energy System</span>
                        </div>
                        <div class="nav-card" @click="scrollToSection('guests')">
                            <span>Guest Types</span>
                        </div>
                        <div class="nav-card" @click="scrollToSection('survival')">
                            <span>Survival Tips</span>
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
                        <h2 class="home-title">Game Flow Overview</h2>
                        <p class="section-subtitle">Master the three critical stages of your survival journey with our
                            "No I'm Not a Human Guides" - this psychological horror experience that tests your ability
                            to distinguish friend from foe.</p>
                    </div>

                    <div class="flow-stages">
                        <div class="stage-card stage-1">
                            <div class="stage-icon">
                                <div class="stage-number">1</div>
                            </div>
                            <h3>Learning Stage</h3>
                            <p>Master basic survival mechanics and visitor identification techniques</p>
                        </div>
                        <div class="stage-card stage-2">
                            <div class="stage-icon">
                                <div class="stage-number">2</div>
                            </div>
                            <h3>Challenge Stage</h3>
                            <p>Navigate complex situations with sophisticated visitor disguises</p>
                        </div>
                        <div class="stage-card stage-3">
                            <div class="stage-icon">
                                <div class="stage-number">3</div>
                            </div>
                            <h3>Final Stage</h3>
                            <p>Face ultimate judgment challenges that determine your ending</p>
                        </div>
                    </div>

                    <div class="night-details">
                        <div class="night-card">
                            <div class="night-header">
                                <h3>Night 1: First Contact</h3>
                                <span class="difficulty-tag easy">Easy</span>
                            </div>
                            <div class="night-content">
                                <div class="night-left">
                                    <p class="night-description">The introductory night where you learn basic mechanics
                                        and visitor identification methods. Our "No I'm Not a Human Guides" will help
                                        you master these fundamentals.</p>
                                    <div class="playtime">
                                        <span class="time-icon">⏱️</span>
                                        <span>Estimated Play Time: 30-45 minutes</span>
                                    </div>
                                    <div class="visitor-types">
                                        <h4>Main Visitor Types:</h4>
                                        <div class="visitor-tags">
                                            <span class="visitor-tag">Friendly Visitor</span>
                                            <span class="visitor-tag">Suspicious Stranger</span>
                                            <span class="visitor-tag">Delivery Person</span>
                                        </div>
                                    </div>
                                    <div class="strategy-tips">
                                        <h4><span class="tip-icon">💡</span>Strategy Tips</h4>
                                        <p>Focus on familiarizing yourself with game mechanics. Carefully observe
                                            visitors' appearance and behavioral characteristics.</p>
                                    </div>
                                </div>
                                <div class="night-right">
                                    <div class="key-points">
                                        <h4>Key Points:</h4>
                                        <ul>
                                            <li>Learn basic visitor identification methods</li>
                                            <li>Familiarize with game interface and controls</li>
                                            <li>Establish initial judgment criteria</li>
                                            <li>Avoid first fatal mistakes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="night-card">
                            <div class="night-header">
                                <h3>Night 2: Deepening Challenge</h3>
                                <span class="difficulty-tag medium">Medium</span>
                            </div>
                            <div class="night-content">
                                <div class="night-left">
                                    <p class="night-description">Difficulty increases with more complex visitors and
                                        choice situations. Our "No I'm Not a Human Guides" provide advanced strategies
                                        for this challenging phase.</p>
                                    <div class="playtime">
                                        <span class="time-icon">⏱️</span>
                                        <span>Estimated Play Time: 45-60 minutes</span>
                                    </div>
                                    <div class="visitor-types">
                                        <h4>Main Visitor Types:</h4>
                                        <div class="visitor-tags">
                                            <span class="visitor-tag">Disguised Visitor</span>
                                            <span class="visitor-tag">Emergency Help Seeker</span>
                                            <span class="visitor-tag">Maintenance Worker</span>
                                            <span class="visitor-tag">Mysterious Woman</span>
                                        </div>
                                    </div>
                                    <div class="strategy-tips">
                                        <h4><span class="tip-icon">💡</span>Strategy Tips</h4>
                                        <p>Night 2 is the turning point of the game, visitors' disguises are more
                                            sophisticated. Pay special attention to details and intuition.</p>
                                    </div>
                                </div>
                                <div class="night-right">
                                    <div class="key-points">
                                        <h4>Key Points:</h4>
                                        <ul>
                                            <li>Handle more complex disguised visitors</li>
                                            <li>Deal with moral choices in emergencies</li>
                                            <li>Identify subtle abnormal signals</li>
                                            <li>Manage increased psychological pressure</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="night-card">
                            <div class="night-header">
                                <h3>Night 3: Final Trial</h3>
                                <span class="difficulty-tag hard">Hard</span>
                            </div>
                            <div class="night-content">
                                <div class="night-left">
                                    <p class="night-description">The most challenging night, with key choices that
                                        determine the final ending. Our "No I'm Not a Human Guides" offer crucial
                                        insights for this decisive moment.</p>
                                    <div class="playtime">
                                        <span class="time-icon">⏱️</span>
                                        <span>Estimated Play Time: 60-90 minutes</span>
                                    </div>
                                    <div class="visitor-types">
                                        <h4>Main Visitor Types:</h4>
                                        <div class="visitor-tags">
                                            <span class="visitor-tag">Advanced Impersonator</span>
                                            <span class="visitor-tag">Familiar Mimic</span>
                                            <span class="visitor-tag">Authority Figure</span>
                                            <span class="visitor-tag">Final Boss</span>
                                        </div>
                                    </div>
                                    <div class="strategy-tips">
                                        <h4><span class="tip-icon">💡</span>Strategy Tips</h4>
                                        <p>Night 3 determines the game ending. Experience and choices from the first two
                                            nights will affect this night's situation.</p>
                                    </div>
                                </div>
                                <div class="night-right">
                                    <div class="key-points">
                                        <h4>Key Points:</h4>
                                        <ul>
                                            <li>Face the highest difficulty judgment challenges</li>
                                            <li>Handle conflicts between emotion and reason</li>
                                            <li>Make key choices that affect the ending</li>
                                            <li>Endure maximum psychological pressure</li>
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
                        <h2 class="home-title">Energy Management System</h2>
                        <p class="section-subtitle">Energy is the most critical resource in the game. Master its usage
                            with our "No I'm Not a Human Guides" to survive the paranoid nightmare.</p>
                    </div>

                    <div class="energy-grid">
                        <div class="energy-card">
                            <h3>Daily Energy Allocation</h3>
                            <p>Energy serves as your most precious resource in the game. Each day provides you with a
                                finite amount of energy, and when completely exhausted, the day concludes automatically,
                                leaving you to deal with the outcomes of your choices. Our "No I'm Not a Human Guides"
                                will help you master this crucial system.</p>

                            <div class="energy-costs">
                                <h4>💰 Energy Costs:</h4>
                                <div class="cost-item">
                                    <span class="cost-action">Talking to guests:</span>
                                    <span class="cost-value free">FREE</span>
                                </div>
                                <div class="cost-item">
                                    <span class="cost-action">Physical examination:</span>
                                    <span class="cost-value">1 Energy</span>
                                </div>
                                <div class="cost-item">
                                    <span class="cost-action">Room investigation:</span>
                                    <span class="cost-value">1-2 Energy</span>
                                </div>
                                <div class="cost-item">
                                    <span class="cost-action">Item examination:</span>
                                    <span class="cost-value">1 Energy</span>
                                </div>
                            </div>
                        </div>

                        <div class="energy-card">
                            <h3>Strategic Energy Management</h3>
                            <ol class="strategy-list">
                                <li><strong>Begin with dialogue:</strong> Start each day by conversing with all visitors
                                    to collect initial behavioral data and verbal indicators.</li>
                                <li><strong>Monitor broadcast updates:</strong> Daily news reports frequently contain
                                    vital information about new identification methods for detecting threats.</li>
                                <li><strong>Target high-risk individuals:</strong> Allocate energy resources to guests
                                    displaying unusual behavior patterns or suspicious responses.</li>
                                <li><strong>Concentrate on primary indicators:</strong> Focus your energy on the most
                                    reliable physical characteristics rather than minor details.</li>
                                <li><strong>Maintain emergency reserves:</strong> Always preserve some energy for
                                    unexpected late-day arrivals or critical situations.</li>
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
                        <h2 class="home-title">Guest Interaction Basics</h2>
                        <p class="section-subtitle">Learn how to safely assess new arrivals and categorize different
                            character types with our "No I'm Not a Human Guides" to survive.</p>
                    </div>

                    <div class="guests-grid">
                        <div class="guest-card always-human">
                            <h3>Confirmed Safe Characters</h3>
                            <p>These individuals are guaranteed to be genuine humans in every game session. Our "No I'm
                                Not a Human Guides" will help you identify them:</p>
                            <ul class="guest-list">
                                <li>The Elderly Gentleman</li>
                                <li>Young Survivor Girl</li>
                                <li>Scarred Veteran</li>
                                <li>Grieving Mother</li>
                            </ul>
                        </div>

                        <div class="guest-card always-visitor">
                            <h3>Confirmed Threats</h3>
                            <p>These entities should be removed immediately upon identification:</p>
                            <ul class="guest-list">
                                <li>Hostile Stranger</li>
                                <li>Mysterious Figure in Unusual Attire</li>
                                <li>Prediction Specialist</li>
                                <li>Service Worker</li>
                            </ul>
                        </div>

                        <div class="guest-card variable">
                            <h3>Uncertain Individuals</h3>
                            <p>These visitors have inconsistent status across different game sessions, making them
                                unpredictable.</p>
                            <p class="warning-text">Thorough physical examination and behavioral analysis are essential
                                for accurate identification.</p>
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
                        <h2 class="home-title">Visitor Identification Basics</h2>
                        <p class="section-subtitle">Master the four key physical traits that expose dangerous Visitors
                            with our "No I'm Not a Human Guides"</p>
                    </div>

                    <div class="warning-box">
                        <div class="warning-title">
                            <span class="warning-icon">⚠️</span>
                            <span class="warning-title-text">Critical Warning</span>
                        </div>
                        <div class="warning-content">
                            <p>Never trust a single sign! Even humans can appear suspicious in the apocalypse.</p>
                            <p>You need at least <strong>TWO</strong> confirmed traits to safely identify a
                                <strong>Visitor</strong> - never rely on just one sign.
                            </p>
                        </div>
                    </div>

                    <div class="traits-grid">
                        <div class="trait-card">
                            <div class="trait-icon">🦷</div>
                            <h3>Perfect White Teeth</h3>
                            <p>Visitors have unnaturally perfect, gleaming white teeth that stand out during
                                conversations or examinations.</p>
                        </div>

                        <div class="trait-card">
                            <div class="trait-icon">💅</div>
                            <h3>Dirty/Black Nails</h3>
                            <p>Look for fingernails that appear unusually dirty or blackened, contrasting with otherwise
                                clean appearance.</p>
                        </div>

                        <div class="trait-card">
                            <div class="trait-icon">👁️</div>
                            <h3>Severely Bloodshot Eyes</h3>
                            <p>Eyes that are intensely red and bloodshot, more severe than normal tiredness or stress.
                            </p>
                        </div>

                        <div class="trait-card">
                            <div class="trait-icon">🚫</div>
                            <h3>Completely Hairless Armpits</h3>
                            <p>Visitors lack any armpit hair, which can be checked during physical examinations.</p>
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
                        <h2 class="home-title">Essential Survival Strategies</h2>
                        <p class="section-subtitle">Critical rules and advanced tips to survive the paranoid nightmare
                            with our "No I'm Not a Human Guides"</p>
                    </div>

                    <div class="critical-rule">
                        <div class="rule-title">
                            <span class="clock-icon">🕐</span>
                            <span class="bell-icon">🔔</span>
                            <span class="rule-title-text">The Critical Night 4 Rule</span>
                        </div>
                        <div class="rule-content">
                            <p>You <strong>MUST</strong> have at least one guest in your home on <strong>Night
                                    4</strong>.</p>
                            <p>When the shirtless "Intruder" arrives and asks if you're alone, you must answer
                                "<strong>No</strong>" and have someone present to survive.</p>
                            <p>This means you cannot eliminate every guest, even if you suspect them. Always maintain at
                                least one confirmed human guest for the <strong>Night 4</strong> encounter. Our "No I'm
                                Not a Human Guides" emphasize this critical rule. Being alone when the Intruder arrives
                                results in <strong>immediate game over</strong>.</p>
                        </div>
                    </div>

                    <div class="strategies-grid">
                        <div class="strategy-column">
                            <div class="strategy-header">
                                <div class="strategy-icon">🛡️</div>
                                <h3>Advanced Survival Tips</h3>
                            </div>

                            <div class="strategy-section">
                                <h4>Energy Conservation:</h4>
                                <ul>
                                    <li>Always exhaust free conversation options first</li>
                                    <li>Focus investigations on genuinely suspicious behavior</li>
                                    <li>Don't waste energy on clearly safe "Always Human" characters</li>
                                    <li>Save energy for unexpected late-day arrivals</li>
                                </ul>
                            </div>

                            <div class="strategy-section">
                                <h4>Risk Management:</h4>
                                <ul>
                                    <li>Eliminate confirmed Visitors immediately</li>
                                    <li>Keep one confirmed human for Night 4 safety</li>
                                    <li>Monitor guest interactions for behavioral changes</li>
                                    <li>Trust patterns over single suspicious incidents</li>
                                </ul>
                            </div>
                        </div>

                        <div class="strategy-column">
                            <div class="strategy-header">
                                <div class="strategy-icon">💀</div>
                                <h3>Common <span class="fatal-text">Fatal Mistakes</span> to Avoid</h3>
                            </div>

                            <div class="mistakes-list">
                                <div class="mistake-item">
                                    <h4>Eliminating all guests:</h4>
                                    <p>This guarantees death on Night 4 when the Intruder arrives</p>
                                </div>
                                <div class="mistake-item">
                                    <h4>Relying on single traits:</h4>
                                    <p>One suspicious feature doesn't confirm Visitor status</p>
                                </div>
                                <div class="mistake-item">
                                    <h4>Ignoring daily news:</h4>
                                    <p>Missing new Visitor identification information</p>
                                </div>
                                <div class="mistake-item">
                                    <h4>Energy wastage:</h4>
                                    <p>Using energy on obvious humans or minor details</p>
                                </div>
                                <div class="mistake-item">
                                    <h4>Hasty decisions:</h4>
                                    <p>Making elimination choices without sufficient evidence</p>
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
    padding: 100px 0 0 0;
    background: #000;
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

/* Section Wrappers */
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

/* Game Flow Stages */
.flow-stages {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.stage-card {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    transition: all 0.3s ease;
    flex: 1;
}

.stage-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
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

/* Energy Section */
.energy-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.energy-card {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 30px;
    border-radius: 12px;
    border: 1px solid rgba(0, 255, 136, 0.3);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 255, 136, 0.1);
    transition: all 0.3s ease;
}

.energy-card:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 136, 0.5);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 136, 0.2);
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

/* Guests Section */
.guests-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.guest-card {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 25px;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 255, 136, 0.1);
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
    background: #331a1a;
    border: 1px solid #4a2c2c;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 40px;
    text-align: left;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
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
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 25px;
    border-radius: 12px;
    border: 1px solid rgba(0, 255, 136, 0.3);
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 255, 136, 0.1);
}

.trait-card:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 136, 0.5);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 136, 0.2);
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
    background: #331a1a;
    border: 1px solid #4a2c2c;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 40px;
    text-align: left;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
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
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 30px;
    border-radius: 12px;
    border: 1px solid rgba(0, 255, 136, 0.3);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 255, 136, 0.1);
    transition: all 0.3s ease;
}

.strategy-column:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 136, 0.5);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 136, 0.2);
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

/* Section Backgrounds */
.section.mechanics {
    background: #0a0a0a;
}

.section.energy {
    background: #111111;
}

.section.guests {
    background: #0a0a0a;
}

.section.identification {
    background: #111111;
}

.section.survival {
    background: #0a0a0a;
}

/* Responsive Design - 1024px */
@media (max-width: 1024px) {
    .section {
        padding: 40px 0;
    }

    .section.hero {
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
