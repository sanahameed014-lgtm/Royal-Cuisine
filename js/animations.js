document.addEventListener("DOMContentLoaded", function () {
    initLoadingScreen();
    initScrollAnimations();
    initCounterAnimation();
    initTestimonialsSlider();


    //initStickyNavbar();
    //initMobileNavigation();
    //initDarkMode();
    //initScrollToTop();
    //initSmoothScrolling();
    //initMenuFiltering();
    //initMenuRendering();
    //initMenuDropdown();
    //initCart();
    //initReservationValidation();
    //initNewsletterForm();
    //initFixedLogo();
    //initParallax();
});
// LOADING SCREEN

function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;

    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    });
}
// SCROLL ANIMATIONS (Intersection Observer)

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll(
        '.section-header, .about-grid, .stat-item, .menu-card, ' +
        '.gallery-item, .chef-card, .testimonial-card, ' +
        '.reservation-wrapper, .contact-card, .footer-grid > div, .page-header-content'
    );

    animateElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        if (el.parentElement && (
            el.parentElement.classList.contains('menu-grid') || 
            el.parentElement.classList.contains('chefs-grid') ||
            el.parentElement.classList.contains('stats-grid') ||
            el.parentElement.classList.contains('gallery-grid') ||
            el.parentElement.classList.contains('contact-info')
        )) {
            el.style.transitionDelay = `${index * 0.1}s`;
        }
        observer.observe(el);
    });
}


// COUNTER ANIMATION

function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length === 0) return;

    const speed = 200;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / speed;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString() + (target > 100 ? '+' : '');
            }
        };

        updateCounter();
    }
}

// TESTIMONIALS SLIDER

function initTestimonialsSlider() {
    const track = document.getElementById('testimonials-track');
    const dotsContainer = document.getElementById('testimonial-dots');
    if (!track || !dotsContainer) return;

    const cards = track.querySelectorAll('.testimonial-card');
    const totalSlides = cards.length;
    if (totalSlides === 0) return;

    let currentSlide = 0;
    let autoSlideInterval;

    cards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    startAutoSlide();

    const slider = document.getElementById('testimonials-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
    }

    let touchStartX = 0;
    let touchEndX = 0;

    if (slider) {
        slider.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoSlide();
        }, { passive: true });

        slider.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoSlide();
        }, { passive: true });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
}


