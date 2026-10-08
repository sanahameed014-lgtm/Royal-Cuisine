// DOM CONTENT LOADED - INITIALIZE EVERYTHING

document.addEventListener('DOMContentLoaded', function() {
    initScrollToTop();
    initSmoothScrolling();
    initFixedLogo();
    initParallax();
});


// FIXED LOGO SCROLL BEHAVIOR

function initFixedLogo() {
    const fixedLogo = document.getElementById('fixed-logo');
    if (!fixedLogo) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            fixedLogo.classList.add('visible');
        } else {
            fixedLogo.classList.remove('visible');
        }
    });
}


// SCROLL TO TOP BUTTON

function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


// SMOOTH SCROLLING

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// PARALLAX EFFECT FOR HERO

function initParallax() {
    const heroBg = document.querySelector('.hero-bg img');
    const heroContent = document.querySelector('.hero-content');
    
    if (!heroBg) return;

    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        
        if (scrolled < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0002})`;
        }
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}
