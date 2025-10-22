<template>
    <footer class="app-footer">
        <div class="container">
            <div class="footer-content">
                <!-- Brand Section -->
                <div class="footer-section brand-section">
                    <div class="brand-logo">
                        <h3>{{ $t('footer.brandTitle') }}</h3>
                    </div>
                    <p>{{ $t('footer.brandDesc') }}</p>
                    <div class="social-links">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" class="social-link"
                            aria-label="Follow us on Twitter">
                            <svg t="1758708044348" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3778" id="mx_n_1758708044349" width="200"
                                height="200" aria-hidden="true">
                                <path
                                    d="M761.759375 122h132.320625L605 452.4003125 945.08 902H678.8L470.24 629.3196875 231.599375 902H99.2l309.1996875-353.4L82.16 122h273.0403125l188.52 249.24z m-46.4390625 700.8h73.32L315.359375 197.0403125h-78.680625z"
                                    fill="#ffffff" p-id="3779"></path>
                            </svg>
                            <span class="sr-only">Follow us on Twitter</span>
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" class="social-link"
                            aria-label="Follow us on Facebook">
                            <svg t="1758708072403" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4807" width="200" height="200"
                                aria-hidden="true">
                                <path
                                    d="M353.869094 229.97761l0 114.076484-99.834448 0 0 165.385471 99.834448 0 0 476.225546 196.743124 0L550.612218 509.438542l131.297507 0.020467 16.991791-165.405938L550.613242 344.053071 550.613242 249.923828c0-31.458965 18.255635-51.304894 48.49169-51.304894l99.797608 0L698.902539 33.192529 564.875744 33.192529C430.603344 33.192529 353.869094 96.438955 353.869094 229.97761z"
                                    fill="#ffffff" p-id="4808"></path>
                            </svg>
                            <span class="sr-only">Follow us on Facebook</span>
                        </a>
                        <a href="https://viesearch.com/">Viesearch - The Human-curated Search Engine</a>
                    </div>
                </div>

                <!-- Quick Links Section -->
                <div class="footer-section">
                    <h4>{{ $t('footer.quickLinksTitle') }}</h4>
                    <ul>
                        <li><a href="/">{{ $t('footer.quickLinksHome') }}</a></li>
                        <li><a href="/guides">{{ $t('footer.quickLinksGuides') }}</a></li>
                        <li><a href="/endings">{{ $t('footer.quickLinksEndings') }}</a></li>
                        <li><a href="/wiki">{{ $t('footer.quickLinksWiki') }}</a></li>
                        <li><a href="/visitors">{{ $t('footer.quickLinksVisitors') }}</a></li>
                        <li><a href="/download">{{ $t('footer.quickLinksDownload') }}</a></li>
                    </ul>
                </div>

                <!-- Legal Section -->
                <div class="footer-section">
                    <h4>{{ $t('footer.legalTitle') }}</h4>
                    <ul>
                        <li><a href="/privacy-policy">{{ $t('footer.legalPrivacy') }}</a></li>
                        <li><a href="/terms-of-service">{{ $t('footer.legalTerms') }}</a></li>
                        <li><a href="/copyright">{{ $t('footer.legalCopyright') }}</a></li>
                        <li><a href="/about-us">{{ $t('footer.legalAbout') }}</a></li>
                        <li><a href="/contact-us">{{ $t('footer.legalContact') }}</a></li>
                    </ul>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <p class="copyright-text">© 2025 iamnotahuman.org. All rights reserved.</p>
                <p class="disclaimer-text">
                    {{ $t('footer.disclaimer') }}
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
// Footer component logic
// 全局CSS已在main.js中导入
</script>

<style scoped>
.app-footer {
    background: #1a1a2e;
    color: #fff;
    padding: 40px 0 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    align-items: start;
}

.brand-section {
    max-width: 400px;
}

.brand-logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.brand-section h3 {
    font-size: 24px;
    font-weight: 700;
    color: #00ff41;
    margin: 0;
    background: linear-gradient(135deg, #00ff41, #00cc33);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 15px #00ff41;
}

.brand-section p {
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 14px;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-link:hover {
    background: rgba(0, 255, 65, 0.3);
    transform: translateY(-2px);
}

.footer-section h4 {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-section li {
    margin-bottom: 0.75rem;
}

.footer-section a {
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.footer-section a:hover {
    color: #00ff41;
}

@media (max-width: 768px) {
    .app-footer {
        padding: 20px 0;
    }

    .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    .brand-section h3{
        font-size: 20px;
    }

    .footer-content .brand-section {
        grid-column: 1 / -1;
        grid-row: 1;
    }

    .footer-content .footer-section:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
    }

    .footer-content .footer-section:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
    }

    .brand-logo {
        margin-bottom: 10px;
    }

    .brand-section p {
        margin-bottom: 10px;
    }

    .footer-section h4 {
        font-size: 16px;
        margin-bottom: 10px;
        line-height: 1.5;
    }

    .footer-section li {
        margin-bottom: 0;
    }
}

/* Screen reader only text */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Footer Bottom */
.footer-bottom {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
}

.copyright-text {
    color: #999;
    font-size: 14px;
    margin: 0;
    font-weight: 400;
}

.disclaimer-text {
    color: #888;
    font-size: 12px;
    margin: 10px 0 0 0;
    font-weight: 400;
    line-height: 1.5;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}
</style>
