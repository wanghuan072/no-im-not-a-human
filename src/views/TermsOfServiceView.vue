<template>
    <div class="terms-page">
        <AppHeader />

        <!-- Hero Section -->
        <section class="section hero">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title" v-html="$t('TermsOfServicePage.hero.title', {}, { raw: true })"></h1>
                    <p class="hero-subtitle">{{ $t('TermsOfServicePage.hero.subtitle') }}</p>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="section main-content">
            <div class="container">
                <div class="content-wrapper">
                    <div class="terms-content">
                        <h2>Terms of Service</h2>
                        <p><strong>Last updated:</strong> September 30, 2025</p>

                        <section>
                            <h2>General Information</h2>
                            <p>
                                The following Terms of Service (the "Agreement") are important and require careful
                                reading. Your acceptance of these "Terms of Service" signifies your agreement to be
                                bound by them. This Agreement is between you and <strong>No I'm Not a Human
                                    Guide</strong> (hereinafter: "Site", "us", "we", or "our") and pertains to your use
                                of our website, including any materials and services available therein, and any
                                successor site(s) thereto (the "Site").
                            </p>
                            <p>
                                <strong>BY USING THE SITE, YOU AGREE TO THESE TERMS OF SERVICE AND CONFIRM THAT YOU ARE
                                    OLDER THAN 16 YEARS.</strong> Any reference to "you" or "your" in this Agreement
                                applies to the individual who uses the Site.
                            </p>
                            <p>
                                This Agreement includes a mandatory arbitration provision, explained in Section 11
                                below. This provision requires arbitration on an individual basis to resolve disputes,
                                rather than jury trials, court proceedings, or class actions. Please review this section
                                carefully.
                            </p>
                        </section>

                        <section>
                            <h2>Changes</h2>
                            <p>
                                This Agreement may be amended periodically, and we will notify you of such changes
                                through reasonable means, which may include posting a revised Agreement on the Site. Any
                                changes made will not apply to disputes that arose prior to the date of such changes.
                            </p>
                            <p>
                                By using the Site after changes are posted, you agree to be bound by the revised terms.
                                Continued use will be deemed acceptance of the changes.
                            </p>
                            <p>
                                We reserve the right to modify or discontinue all or part of the Site, adjust or waive
                                fees, or offer special opportunities to some or all Site users at any time, without
                                liability.
                            </p>
                        </section>

                        <section>
                            <h2>Information Submitted Through the Site</h2>
                            <p>
                                The submission of information through the Site is subject to the <a
                                    href="/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>. By using
                                the Site, you acknowledge and agree to the Privacy Policy.
                            </p>
                            <p>
                                You affirm that all information you provide is accurate and complete, and you agree to
                                maintain and update it. If discrepancies arise between this Agreement and the Privacy
                                Policy regarding personal data, the Privacy Policy will prevail.
                            </p>
                        </section>

                        <section>
                            <h2>Jurisdictional Issues</h2>
                            <p>
                                The Site is controlled and operated from within the European Economic Area, and is not
                                intended to subject us to any jurisdiction outside this area. The Site may not be
                                suitable or accessible everywhere. By using the Site, you assume all risks and are
                                responsible for complying with applicable laws.
                            </p>
                            <p>
                                We may restrict or limit access to the Site, in whole or in part, to any person,
                                location, or jurisdiction at any time.
                            </p>
                        </section>

                        <section>
                            <h2>Rules of Conduct</h2>
                            <ul>
                                <li>You must not post or transmit material that is threatening, harassing, defamatory,
                                    obscene, unlawful, or infringes on others' rights.</li>
                                <li>You must not use the Site for unauthorized commercial, fraudulent, or unlawful
                                    purposes.</li>
                                <li>You may not collect information about users except as permitted by the Privacy
                                    Policy.</li>
                                <li>You must not interfere with or disrupt the operation of the Site or its servers and
                                    networks.</li>
                                <li>You must not restrict or inhibit others from using the Site.</li>
                                <li>You may not reproduce, modify, sell, distribute, or exploit any portion of the Site
                                    without our prior written consent.</li>
                                <li>You may not reverse engineer or decompile the Site except where prohibited by law.
                                </li>
                                <li>You must not remove copyright or trademark notices from the Site.</li>
                                <li>You may not frame, mirror, or systematically download content without consent.</li>
                                <li>You may not use bots, spiders, scrapers, or similar tools without consent.</li>
                                <li>You are responsible for all hardware, internet, and service costs needed to use the
                                    Site.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Monitoring</h2>
                            <p>
                                We may, but are not obligated to, monitor, evaluate, or remove content submitted to the
                                Site. We may analyze your usage and disclose related information as permitted by law and
                                our Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2>Third-Party Materials & Links</h2>
                            <p>
                                The Site may provide access to third-party materials (including content, products,
                                services, advertisements, and promotions). We do not control or endorse third-party
                                materials and are not responsible for their accuracy, legality, or safety.
                            </p>
                            <p>
                                <strong>Use of third-party materials is at your own risk</strong> and subject to the
                                terms and policies of those third parties.
                            </p>
                        </section>

                        <section>
                            <h2>Disclaimer of Warranties</h2>
                            <p>
                                TO THE FULLEST EXTENT PERMITTED BY LAW: (A) THE SITE AND ALL PRODUCTS AND THIRD-PARTY
                                MATERIALS ARE PROVIDED "AS IS," "WHERE IS," AND "WHERE AVAILABLE," WITHOUT WARRANTIES OF
                                ANY KIND; AND (B) <strong>No I'm Not a Human Guide</strong> DISCLAIMS ALL WARRANTIES,
                                INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND
                                TITLE.
                            </p>
                            <p>
                                Although we strive for accuracy and security, we cannot guarantee that the Site will
                                always be correct, secure, or uninterrupted. If you notice unauthorized alterations,
                                please contact us at <a href="mailto:wyong@iamnotahuman.org">wyong@iamnotahuman.org</a>.
                            </p>
                        </section>

                        <section>
                            <h2>Filtering</h2>
                            <p>
                                Parental control protections are available to help restrict access to harmful material.
                                More information can be found <a
                                    href="https://en.wikipedia.org/wiki/Comparison_of_content-control_software_and_providers"
                                    target="_blank" rel="noopener">here</a>. We do not endorse any listed products or
                                services.
                            </p>
                        </section>

                        <section>
                            <h2>Copyright Infringement Claims</h2>
                            <p>
                                If you believe materials on the Site violate your copyright, you may send us a notice
                                requesting removal. If you believe a claim was wrongly filed against you, you may send a
                                counter-notice. We recommend seeking legal advice before filing notices. Contact: <a
                                    href="mailto:wyong@iamnotahuman.org">wyong@iamnotahuman.org</a>.
                            </p>
                        </section>

                        <section>
                            <h2>Miscellaneous</h2>
                            <p>
                                This Agreement does not create any partnership, joint venture, employment, or agency
                                relationship between you and <strong>No I'm Not a Human Guide</strong>. If any provision
                                is unenforceable, it will be removed without affecting the remaining terms.
                            </p>
                            <p>
                                You may not transfer your rights or obligations without our consent, but we may assign
                                ours without restriction. Failure to enforce any provision does not waive our right to
                                enforce it later.
                            </p>
                            <p>
                                This Agreement, together with incorporated terms, is the entire agreement between you
                                and <strong>No I'm Not a Human Guide</strong> and supersedes all prior agreements.
                                Notices may be delivered by email, mail, or posting on the Site.
                            </p>
                            <p>
                                <strong>No I'm Not a Human Guide</strong> shall not be liable for failure to perform due
                                to causes beyond its control.
                            </p>
                        </section>
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
.terms-page {
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

.terms-content {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 50px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.terms-content section {
    margin-bottom: 2rem;
}

.terms-content section:last-child {
    margin-bottom: 0;
}

.terms-content h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #00ff41;
    position: relative;
    padding-left: 20px;
    line-height: 1.5;
}

.terms-content h2:before {
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

.terms-content p {
    font-size: 1rem;
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.terms-content ul {
    margin-bottom: 1.5rem;
    padding-left: 0;
}

.terms-content li {
    list-style: none;
    position: relative;
    padding: 10px 0 10px 25px;
    color: #ccc;
    font-size: 1rem;
    line-height: 1.6;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.terms-content li:before {
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

.terms-content strong {
    color: #fff;
    font-weight: 600;
}

.terms-content a {
    color: #00ff41;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.terms-content a:hover {
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

    .terms-content {
        padding: 30px 20px;
        border-radius: 16px;
    }

    .terms-content h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding-left: 15px;
    }

    .terms-content h2:before {
        width: 3px;
        height: 25px;
    }

    .terms-content p,
    .terms-content li {
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .terms-content li {
        padding: 8px 0 8px 20px;
    }

    .terms-content section {
        margin-bottom: 1.5rem;
    }
}
</style>
