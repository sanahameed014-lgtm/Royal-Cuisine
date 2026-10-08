document.addEventListener('DOMContentLoaded', function() {
    initStickyNavbar();
    initMobileNavigation();
    initMenuDropdown();
});
// STICKY NAVBAR

function initStickyNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}


// MOBILE NAVIGATION

function initMobileNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    if (!mobileToggle || !navLinks) return;

    const navLinkItems = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}
// NAVBAR DROPDOWN MENU

function initMenuDropdown(){
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

if (!dropdown || !dropdownToggle){
// Open / Close Dropdown
dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("active");
});

// Click Category
dropdownLinks.forEach(link => {

    link.addEventListener("click", function (e) {
        e.preventDefault();

        const category = this.dataset.menu;

        document.getElementById("menu").scrollIntoView({
            behavior: "smooth"
        });

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");

            if (btn.dataset.filter === category) {
                btn.classList.add("active");
            }
        });

        filterMenuItems(category);

        dropdown.classList.remove("active");
    });

});
}
// Close when click outside
document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});
}
