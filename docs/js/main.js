/**
 * Main JavaScript for ImmunoVantage
 * Handles scroll reveal animations using IntersectionObserver.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Logic
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    // Check if the browser supports IntersectionObserver
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: Stop observing once revealed
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // viewport
            rootMargin: '0px 0px -50px 0px', // Trigger slightly before the element fully enters
            threshold: 0.1 // 10% of the element must be visible
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    // Mobile Menu Toggle Logic (Already partially handled in individual files, but good to centralize if possible, though keeping it simple here to not break existing inline scripts)
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('mobile-nav--open');
        });
    }
});
