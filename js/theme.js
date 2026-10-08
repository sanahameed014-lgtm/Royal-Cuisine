document.addEventListener("DOMContentLoaded", function () {
    initDarkMode();
    
    //initLoadingScreen();
    //initStickyNavbar();
    //initMobileNavigation();
    //initDarkMode();
    //initScrollToTop();
    //initSmoothScrolling();
    //initScrollAnimations();
    //initCounterAnimation();
    //initMenuFiltering();
    //initMenuRendering();
    //initCart();
    //initTestimonialsSlider();
    //initReservationValidation();
    //initNewsletterForm();
    //initFixedLogo();
    //initParallax();
});
// DARK / LIGHT MODE

function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (!darkModeToggle) return;

    const icon = darkModeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }
    });
}

