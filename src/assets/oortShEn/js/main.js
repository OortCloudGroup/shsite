// OORT.sh - Main JavaScript

// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        navActions.classList.toggle('mobile-open');
        mobileToggle.classList.toggle('active');
    });
}

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.06)';
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.feature-card, .deploy-card, .step-card, .pricing-card, .devtool-card, .studio-feature').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Terminal typing effect
const terminalLines = document.querySelectorAll('.terminal-line');
let delay = 0;

terminalLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(5px)';
    line.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    setTimeout(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
    }, 800 + (index * 400));
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinks.classList.contains('mobile-open')) {
                navLinks.classList.remove('mobile-open');
                navActions.classList.remove('mobile-open');
                mobileToggle.classList.remove('active');
            }
        }
    });
});

// Counter animation for hero stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const hasPlus = target.includes('+');
        const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));

        if (isNaN(numericValue)) return;

        let current = 0;
        const duration = 2000;
        const step = numericValue / (duration / 16);

        const timer = setInterval(() => {
            current += step;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }

            let display = '';
            if (numericValue >= 1000) {
                display = Math.floor(current / 1000) + 'K';
            } else if (isPercentage) {
                display = current.toFixed(1);
            } else {
                display = Math.floor(current).toString();
            }

            if (hasPlus) display += '+';
            if (isPercentage) display += '%';

            counter.textContent = display;
        }, 16);
    });
}

// Trigger counter animation when hero section is in view
const heroSection = document.querySelector('.hero');
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (heroSection) {
    heroObserver.observe(heroSection);
}
