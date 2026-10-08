
// MENU DATA

const menuItems = [
    {
        id: 1,
        name: "Chicken Biryani" ,
        price: 1459 ,
        category: "main",
        rating: 5,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
        description: "Aromatic basmati rice cooked with tender chicken and exotic spices."
    },
    {
        id: 2,
        name: "Chicken Karahi",
        price: 1379,
        category: "main",
        rating: 5,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
        description: "Traditional Pakistani karahi with succulent chicken in rich gravy."
    },
    {
        id: 3,
        name: "Beef Steak",
        price: 2949,
        category: "main",
        rating: 5,
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80",
        description: "Premium beef steak grilled to perfection with herb butter."
    },
    {
        id: 4,
        name: "Grilled Fish",
        price: 3299,
        category: "main",
        rating: 4,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
        description: "Fresh catch of the day grilled with lemon and herbs."
    },
    {
        id: 5,
        name: "Chicken Alfredo Pasta",
        price: 1139,
        category: "main",
        rating: 5,
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80",
        description: "Creamy Alfredo sauce with grilled chicken and fettuccine."
    },
    {
        id: 6,
        name: "Margherita Pizza",
        price: 1799,
        category: "fast",
        rating: 4,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
        description: "Classic Italian pizza with fresh mozzarella and basil."
    },
    {
        id: 7,
        name: "Zinger Burger",
        price: 829,
        category: "fast",
        rating: 4,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
        description: "Crispy fried chicken burger with special sauce and fresh veggies."
    },
    {
        id: 8,
        name: "Club Sandwich",
        price: 759,
        category: "fast",
        rating: 4,
        image: "https://images.unsplash.com/photo-1553909489-cd47e3b4430a?w=400&q=80",
        description: "Triple-layered sandwich with chicken, egg, and fresh vegetables."
    },
    {
        id: 9,
        name: "BBQ Platter",
        price: 3549,
        category: "main",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
        description: "Assorted grilled meats with BBQ sauce and sides."
    },
    {
        id: 10,
        name: "Chocolate Lava Cake",
        price: 1146,
        category: "dessert",
        rating: 5,
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80",
        description: "Warm chocolate cake with a molten center, served with ice cream."
    },
    {
        id: 11,
        name: "Ice Cream",
        price: 1549,
        category: "dessert",
        rating: 4,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
        description: "Creamy homemade ice cream in various flavors."
    },
    {
        id: 12,
        name: "Fresh Juice",
        price: 229,
        category: "drink",
        rating: 4,
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&q=80",
        description: "Freshly squeezed seasonal fruits juice."
    }
];


// CART STATE

let cart = [];


// DOM CONTENT LOADED - INITIALIZE EVERYTHING

document.addEventListener("DOMContentLoaded", function () {
    initLoadingScreen();

    //initStickyNavbar();
    //initMobileNavigation();
    //initDarkMode();
    //initScrollToTop();
    //initSmoothScrolling();
    //initScrollAnimations();
    //initCounterAnimation();
    //initMenuFiltering();
    //initMenuRendering();
    //initMenuDropdown();
    //initCart();
    //initTestimonialsSlider();
    //initReservationValidation();
    //initNewsletterForm();
    //initFixedLogo();
    //initParallax();
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


// MENU FILTERING

window.addEventListener("load", () =>{
    const category= 
    window.location.hash.replace("#", "");

    if(category){
        filterMenuItems(category);
    }
});


function initMenuFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            filterMenuItems(filter);
        });
    });
}

function filterMenuItems(category) {
    const menuCards = document.querySelectorAll('.menu-card');
    
    menuCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            setTimeout(() => {
                card.style.transition = 'all 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 50);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// MENU RENDERING

function initMenuRendering() {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    menuItems.forEach(item => {
        const card = createMenuCard(item);
        menuGrid.appendChild(card);
    });
}

function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.setAttribute('data-category', item.category);

    const stars = generateStars(item.rating);

    card.innerHTML = `
        <div class="menu-card-img">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <span class="menu-card-badge">${item.category}</span>
        </div>
        <div class="menu-card-content">
            <div class="menu-card-header">
                <div>
                    <h3 class="menu-card-title">${item.name}</h3>
                    <div class="menu-card-rating">${stars}</div>
                </div>
                <span class="menu-card-price">Rs.${item.price}</span>
            </div>
            <p class="menu-card-desc">${item.description}</p>
            <button class="add-to-cart" onclick="addToCart(${item.id}, this)">
                <i class="fas fa-shopping-cart"></i>
                <span>Add to Cart</span>
            </button>
        </div>
    `;

    return card;
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

 // CART FUNCTIONALITY
        function initCart() {
            const cartBtn = document.getElementById('cart-btn');
            const cartSidebar = document.getElementById('cart-sidebar');
            const cartClose = document.getElementById('cart-close');
            const cartOverlay = document.getElementById('cart-overlay');
        
            if (!cartBtn || !cartSidebar) return;
        
            cartBtn.addEventListener('click', function() {
                cartSidebar.classList.add('open');
                if (cartOverlay) cartOverlay.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
        
            function closeCart() {
                cartSidebar.classList.remove('open');
                if (cartOverlay) cartOverlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        
            if (cartClose) cartClose.addEventListener('click', closeCart);
            if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
        }
        
        function addToCart(itemId, button) {
            const item = menuItems.find(i => i.id === itemId);
            if (!item) return;
        
            const existingItem = cart.find(c => c.id === itemId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...item, quantity: 1 });
            }
        
            button.classList.add('added');
            button.innerHTML = '<i class="fas fa-check"></i> <span>Added!</span>';
            
            setTimeout(() => {
                button.classList.remove('added');
                button.innerHTML = '<i class="fas fa-shopping-cart"></i> <span>Add to Cart</span>';
            }, 1500);
        
            updateCartUI();
            
            const cartSidebar = document.getElementById('cart-sidebar');
            const cartOverlay = document.getElementById('cart-overlay');
            if (cartSidebar) cartSidebar.classList.add('open');
            if (cartOverlay) cartOverlay.classList.add('open');
        }
        
        function updateCartUI() {
            const cartItemsContainer = document.getElementById('cart-items');
            const cartCount = document.getElementById('cart-count');
            const cartTotalPrice = document.getElementById('cart-total-price');
        
            if (!cartItemsContainer) return;
        
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            if (cartCount) cartCount.textContent = totalItems;
        
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-basket"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
            } else {
                cartItemsContainer.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <span class="price">Rs${item.price}</span>
                        </div>
                        <div class="cart-item-qty">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('');
            }
        
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (cartTotalPrice) cartTotalPrice.textContent = `Rs${total.toFixed(2)}`;
        }
        
        function updateQuantity(itemId, change) {
            const item = cart.find(c => c.id === itemId);
            if (!item) return;
        
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(itemId);
            } else {
                updateCartUI();
            }
        }
        
        function removeFromCart(itemId) {
            cart = cart.filter(item => item.id !== itemId);
            updateCartUI();
        }
        
                                                                                                                                                                                               
        
// GALLERY LIGHTBOX

const galleryItems = document.querySelectorAll(".gallery-item");
const pageButtons = document.querySelectorAll("[data-page]");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

const imagesPerPage = 6;
let currentPage = 1;
let currentImage = 0;

// Pagination 

function showPage(page){

    currentPage = page;

    galleryItems.forEach((item,index)=>{

        if(index >= (page-1)*imagesPerPage &&
           index < page*imagesPerPage){

            item.style.display = "block";

        }else{

            item.style.display = "none";

        }

    });

    pageButtons.forEach(btn=>{
        btn.classList.remove("active");
    });

    const activeBtn = document.querySelector(`[data-page="${page}"]`);

    if (activeBtn) {
        activeBtn.classList.add("active");
    }

}

showPage(1);

pageButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        showPage(Number(button.dataset.page));

    });

});

if (galleryItems.length > 0 && prevPage && nextPage) {

    showPage(1);

    pageButtons.forEach(button => {
        button.addEventListener("click", () => {
            showPage(Number(button.dataset.page));
        });
    });
    if (prevPage){
    prevPage.addEventListener("click", () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });
}

    nextPage.addEventListener("click", () => {
        if (currentPage < 3) {
            showPage(currentPage + 1);
        }
    });

}
    if(nextPage){
        nextPage.addEventListener("click",()=>{

    if(currentPage<3){

        showPage(currentPage+1);
     }
});
    }

// Lightbox 
if (lightbox && lightboxImg && closeBtn && prevBtn && nextBtn) {
galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        currentImage=index;

        lightbox.classList.add("active");

        lightboxImg.src=item.querySelector("img").src;

    });

});


closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});


prevBtn.addEventListener("click",()=>{

    currentImage--;

    if(currentImage<0){

        currentImage=galleryItems.length-1;

    }

    lightboxImg.src=
    galleryItems[currentImage]
    .querySelector("img").src;

});


nextBtn.addEventListener("click",()=>{

    currentImage++;

    if(currentImage>=galleryItems.length){

        currentImage=0;

    }

    lightboxImg.src=
    galleryItems[currentImage]
    .querySelector("img").src;

});


lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});
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


// RESERVATION FORM VALIDATION

function initReservationValidation() {
    const form = document.getElementById('reservation-form');
    if (!form) return;

    const inputs = {
        name: document.getElementById('res-name'),
        phone: document.getElementById('res-phone'),
        email: document.getElementById('res-email'),
        guests: document.getElementById('res-guests'),
        date: document.getElementById('res-date'),
        time: document.getElementById('res-time')
    };

    const today = new Date().toISOString().split('T')[0];
    if (inputs.date) inputs.date.setAttribute('min', today);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            showNotification('Reservation submitted successfully! We will contact you shortly.', 'success');
            form.reset();
        }
    });

    Object.keys(inputs).forEach(key => {
        if (inputs[key]) {
            inputs[key].addEventListener('blur', () => validateField(key));
            inputs[key].addEventListener('input', () => clearError(key));
        }
    });

    function validateForm() {
        let isValid = true;
        Object.keys(inputs).forEach(key => {
            if (!validateField(key)) {
                isValid = false;
            }
        });
        return isValid;
    }

    function validateField(fieldName) {
        const input = inputs[fieldName];
        if (!input) return true;

        const value = input.value.trim();
        const errorElement = document.getElementById(`error-${fieldName}`);
        let errorMessage = '';

        switch(fieldName) {
            case 'name':
                if (!value) errorMessage = 'Please enter your full name';
                else if (value.length < 3) errorMessage = 'Name must be at least 3 characters';
                break;
            case 'phone':
                const phoneRegex = /^[\\d\\s\\-\\+\\(\\)]+$/;
                if (!value) errorMessage = 'Please enter your phone number';
                else if (!phoneRegex.test(value) || value.replace(/\\D/g, '').length < 10) {
                    errorMessage = 'Please enter a valid phone number';
                }
                break;
            case 'email':
                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                if (!value) errorMessage = 'Please enter your email';
                else if (!emailRegex.test(value)) errorMessage = 'Please enter a valid email address';
                break;
            case 'guests':
                if (!value) errorMessage = 'Please select number of guests';
                break;
            case 'date':
                if (!value) errorMessage = 'Please select a date';
                else {
                    const selectedDate = new Date(value);
                    const now = new Date();
                    now.setHours(0, 0, 0, 0);
                    if (selectedDate < now) errorMessage = 'Please select a future date';
                }
                break;
            case 'time':
                if (!value) errorMessage = 'Please select a time';
                break;
        }

        if (errorMessage) {
            showError(fieldName, errorMessage);
            return false;
        } else {
            clearError(fieldName);
            return true;
        }
    }

    function showError(fieldName, message) {
        const errorElement = document.getElementById(`error-${fieldName}`);
        const input = inputs[fieldName];
        if (errorElement) errorElement.textContent = message;
        if (input) input.style.borderColor = '#A94442';
    }

    function clearError(fieldName) {
        const errorElement = document.getElementById(`error-${fieldName}`);
        const input = inputs[fieldName];
        if (errorElement) errorElement.textContent = '';
        if (input) input.style.borderColor = '';
    }
}

// NEWSLETTER FORM

function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            this.reset();
        }
    });
}


// NOTIFICATION SYSTEM

function showNotification(message, type = 'success') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%) translateY(-20px);
        background: ${type === 'success' ? '#6B1E1E' : '#A94442'};
        color: #fff;
        padding: 15px 30px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.95rem;
        font-weight: 500;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        z-index: 10000;
        opacity: 0;
        transition: all 0.4s ease;
        border: 2px solid #D4AF37;
        font-family: 'Montserrat', sans-serif;
    `;

    document.body.appendChild(notification);

    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
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

// NAVBAR DROPDOWN MENU


    const dropdown = document.querySelector(".dropdown");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

    if (dropdown && dropdownToggle){
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
// Checkout button on menu page
const checkoutBtn = document.getElementById("checkout-btn");

if (checkoutBtn){
    checkoutBtn.addEventListener("click", function(){
        window.location.href = "checkout.html";
    });
}
// checkout form
const checkoutForm = document.getElementById("checkoutForm");

if(checkoutForm){
    checkoutForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("✅ Your Order has been placed successfully!");

        window.location.href = "order-success.html";
    });
}
