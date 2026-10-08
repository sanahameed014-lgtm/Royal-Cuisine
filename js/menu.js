// MENU DATA

const menuItems = [
    {
        id: 1,
        name: "Chicken Biryani" ,
        price: 1459 ,
        category: "main",
        rating: 5,
        image: "images/chicken biryani.jpg",
        description: "Aromatic basmati rice cooked with tender chicken and exotic spices."
    },
    {
        id: 2,
        name: "Chicken Karahi",
        price: 1379,
        category: "main",
        rating: 5,
        image: "images/chicken karahi.jpg",
        description: "Traditional Pakistani karahi with succulent chicken in rich gravy."
    },
    {
        id: 3,
        name: "Beef Steak",
        price: 2949,
        category: "main",
        rating: 5,
        image: "images/beef steak.jpg",
        description: "Premium beef steak grilled to perfection with herb butter."
    },
    {
        id: 4,
        name: "Grilled Fish",
        price: 3299,
        category: "main",
        rating: 4,
        image: "images/grilled fish.jpg",
        description: "Fresh catch of the day grilled with lemon and herbs."
    },
    {
        id: 5,
        name: "Chicken Alfredo Pasta",
        price: 1139,
        category: "main",
        rating: 5,
        image: "images/chicken alfredo pasta.jpg",
        description: "Creamy Alfredo sauce with grilled chicken and fettuccine."
    },
    {
        id: 6,
        name: "Margherita Pizza",
        price: 1799,
        category: "fast",
        rating: 4,
        image: "images/margherita pizza.jpg",
        description: "Classic Italian pizza with fresh mozzarella and basil."
    },
    {
        id: 7,
        name: "Zinger Burger",
        price: 829,
        category: "fast",
        rating: 4,
        image: "images/zinger burger.jpg",
        description: "Crispy fried chicken burger with special sauce and fresh veggies."
    },
    {
        id: 8,
        name: "Club Sandwich",
        price: 759,
        category: "fast",
        rating: 4,
        image: "images/club sandwich.jpg",
        description: "Triple-layered sandwich with chicken, egg, and fresh vegetables."
    },
    {
        id: 9,
        name: "BBQ Platter",
        price: 3549,
        category: "main",
        rating: 5,
        image: "images/barbq platter.jpg",
        description: "Assorted grilled meats with BBQ sauce and sides."
    },
    {
        id: 10,
        name: "Chocolate Lava Cake",
        price: 1146,
        category: "dessert",
        rating: 5,
        image: "images/chocolate lava cake.jpg",
        description: "Warm chocolate cake with a molten center, served with ice cream."
    },
    {
        id: 11,
        name: "Ice Cream",
        price: 1549,
        category: "dessert",
        rating: 4,
        image: "images/signature icecream delight.jpg",
        description: "Creamy delicious ice cream in various flavors."
    },
    {
        id: 12,
        name: "Fresh Juice",
        price: 229,
        category: "drink",
        rating: 4,
        image: "images/fresh juice.jpeg",
        description: "Freshly squeezed seasonal fruits juice."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    initMenuFiltering();
    initMenuRendering();
});
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