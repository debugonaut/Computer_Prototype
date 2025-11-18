// Products data with enhanced features
const products = [
    { id: 1, name: "iPhone 15 Pro", category: "smartphones", price: 1199, originalPrice: 1299, image: "images/iphone-15-pro.png", rating: 4.8, reviews: 1247, description: "Latest iPhone with A17 Pro chip and titanium design", inStock: true, discount: 8 },
    { id: 2, name: "MacBook Air M2", category: "laptops", price: 1299, originalPrice: 1399, image: "images/macbook-air-m2.jpg", rating: 4.9, reviews: 892, description: "Supercharged by M2 chip with incredible performance", inStock: true, discount: 7 },
    { id: 3, name: "AirPods Pro", category: "headphones", price: 249, originalPrice: 279, image: "images/airpods-pro.jpg", rating: 4.7, reviews: 2156, description: "Active noise cancellation and spatial audio", inStock: true, discount: 11 },
    { id: 4, name: "iPad Pro", category: "tablets", price: 1099, originalPrice: 1199, image: "images/ipad12.9", rating: 4.8, reviews: 743, description: "Most advanced iPad with M2 chip", inStock: true, discount: 8 },
    { id: 5, name: "Galaxy S24", category: "smartphones", price: 899, originalPrice: 999, image: "images/s24.jpeg", rating: 4.6, reviews: 1089, description: "AI-powered smartphone with advanced photography", inStock: true, discount: 10 },
    { id: 6, name: "Dell XPS 13", category: "laptops", price: 999, originalPrice: 1099, image: "images/dellxps13.webp", rating: 4.5, reviews: 567, description: "Ultra-portable laptop with InfinityEdge display", inStock: true, discount: 9 },
    { id: 7, name: "Sony WH-1000XM5", category: "headphones", price: 399, originalPrice: 449, image: "images/sonyxm5.png", rating: 4.9, reviews: 1834, description: "Industry-leading noise canceling headphones", inStock: true, discount: 11 },
    { id: 8, name: "Apple Watch Series 9", category: "accessories", price: 429, originalPrice: 479, image: "images/apple-watch-series-9.png", rating: 4.7, reviews: 923, description: "Most advanced Apple Watch with Double Tap", inStock: true, discount: 10 },
    { id: 9, name: "Google Pixel 8 Pro", category: "smartphones", price: 999, originalPrice: 1099, image: "images/googlepixel8pro.jpeg", rating: 4.6, reviews: 678, description: "Google's flagship with advanced AI photography", inStock: true, discount: 9 },
    { id: 10, name: "Bose QuietComfort 45", category: "headphones", price: 329, originalPrice: 379, image: "images/bosequietcomfort45.jpeg", rating: 4.8, reviews: 1456, description: "Premium noise-canceling headphones", inStock: true, discount: 13 },
    { id: 11, name: "Samsung Galaxy Tab S9", category: "tablets", price: 799, originalPrice: 899, image: "images/samsungtabs9.webp", rating: 4.5, reviews: 432, description: "Premium Android tablet with S Pen", inStock: true, discount: 11 },
    { id: 12, name: "Nintendo Switch OLED", category: "gaming", price: 349, originalPrice: 379, image: "images/nintendoswitcholed.jpg", rating: 4.9, reviews: 2341, description: "Portable gaming console with vibrant OLED screen", inStock: true, discount: 8 },
    { id: 13, name: "Sony A7 IV", category: "cameras", price: 2499, originalPrice: 2699, image: "images/sony i7 iv.jpeg", rating: 4.8, reviews: 234, description: "Full-frame mirrorless camera for professionals", inStock: true, discount: 7 },
    { id: 14, name: "GoPro Hero 12", category: "cameras", price: 399, originalPrice: 449, image: "images/goprohero12.jpeg", rating: 4.7, reviews: 1123, description: "Action camera with incredible stabilization", inStock: true, discount: 11 },
    { id: 15, name: "Google Nest Hub", category: "smart-home", price: 99, originalPrice: 129, image: "images/googlenesthub.jpg", rating: 4.4, reviews: 876, description: "Smart display for controlling home devices", inStock: true, discount: 23 },
    { id: 16, name: "Philips Hue Starter Kit", category: "smart-home", price: 199, originalPrice: 229, image: "images/philipshuestarterkit.jpeg", rating: 4.6, reviews: 654, description: "Smart lighting system with millions of colors", inStock: true, discount: 13 },
    { id: 17, name: "Razer DeathAdder V3", category: "accessories", price: 99, originalPrice: 119, image: "images/deathadderv3.jpeg", rating: 4.7, reviews: 1789, description: "Professional gaming mouse with Focus Pro sensor", inStock: true, discount: 17 },
    { id: 18, name: "Logitech MX Master 3S", category: "accessories", price: 99, originalPrice: 119, image: "images/mxmaster3s.jpeg", rating: 4.8, reviews: 1234, description: "Advanced wireless mouse for productivity", inStock: true, discount: 17 },
    { id: 19, name: "Anker PowerCore 10000", category: "accessories", price: 29, originalPrice: 39, image: "images/anker-powercore-10000-mah-power-bank-a1223h11-digital-o491615222-p590036653-0-202009260348.webp", rating: 4.5, reviews: 3456, description: "Compact portable charger with high-speed charging", inStock: true, discount: 26 }
];

let cart = [];
let wishlist = [];
let filteredProducts = [...products];
let currentView = 'products';
let searchQuery = '';

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-site').style.display = 'block';
        loadProducts();
    } else {
        alert('Please enter username and password');
    }
}

// Logout function
function logout() {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('main-site').style.display = 'none';
    document.getElementById('checkout-page').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Load products with enhanced features
function loadProducts() {
    const grid = document.getElementById(currentView === 'wishlist' ? 'wishlist-grid' : 'products-grid');
    const productsToShow = currentView === 'wishlist' ? wishlist : filteredProducts;
    
    grid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        grid.innerHTML = `<div class="no-products">${currentView === 'wishlist' ? '💔 Your wishlist is empty' : '🔍 No products found'}</div>`;
        return;
    }
    
    productsToShow.forEach(product => {
        const isInWishlist = wishlist.some(item => item.id === product.id);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const discountBadge = product.discount > 0 ? `<div class="discount-badge">-${product.discount}%</div>` : '';
        const originalPriceHTML = product.originalPrice > product.price ? `<span class="original-price">$${product.originalPrice}</span>` : '';
        const stockStatus = product.inStock ? '<span class="in-stock">✅ In Stock</span>' : '<span class="out-stock">❌ Out of Stock</span>';
        
        productCard.innerHTML = `
            ${discountBadge}
            <div class="product-actions-top">
                <button class="wishlist-heart ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                    ${isInWishlist ? '❤️' : '🤍'}
                </button>
                <button class="quick-view" onclick="showQuickView(${product.id})">👁️</button>
            </div>
            <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmMWViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzhiNzM1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg=='">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="rating">
                    ${'⭐'.repeat(Math.floor(product.rating))} ${product.rating} (${product.reviews} reviews)
                </div>
                <p class="description">${product.description}</p>
                <div class="price-section">
                    ${originalPriceHTML}
                    <div class="price">$${product.price}</div>
                </div>
                ${stockStatus}
                <div class="product-actions">
                    <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        🛒 Add to Cart
                    </button>
                    <button class="view-reviews" onclick="showReviews(${product.id})">📝 Reviews</button>
                </div>
            </div>
        `;
        grid.appendChild(productCard);
    });
}

// Search products
function searchProducts() {
    searchQuery = document.getElementById('search-input').value.toLowerCase();
    filterProducts();
}

// Toggle wishlist
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification(`💔 ${product.name} removed from wishlist`);
    } else {
        wishlist.push(product);
        showNotification(`❤️ ${product.name} added to wishlist`);
    }
    
    updateWishlistCount();
    loadProducts();
}

// Toggle wishlist view
function toggleWishlistView() {
    const productsGrid = document.getElementById('products-grid');
    const wishlistView = document.getElementById('wishlist-view');
    
    if (currentView === 'products') {
        currentView = 'wishlist';
        productsGrid.style.display = 'none';
        wishlistView.style.display = 'block';
        loadProducts();
    } else {
        currentView = 'products';
        productsGrid.style.display = 'grid';
        wishlistView.style.display = 'none';
        loadProducts();
    }
}

// Update wishlist count
function updateWishlistCount() {
    document.getElementById('wishlist-count').textContent = wishlist.length;
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Quick view modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('quick-view-modal');
    const details = document.getElementById('quick-view-details');
    
    const isInWishlist = wishlist.some(item => item.id === productId);
    const originalPriceHTML = product.originalPrice > product.price ? `<span class="original-price">$${product.originalPrice}</span>` : '';
    
    details.innerHTML = `
        <div class="quick-view-layout">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="quick-view-info">
                <h2>${product.name}</h2>
                <div class="rating">
                    ${'⭐'.repeat(Math.floor(product.rating))} ${product.rating} (${product.reviews} reviews)
                </div>
                <p>${product.description}</p>
                <div class="price-section">
                    ${originalPriceHTML}
                    <div class="price">$${product.price}</div>
                </div>
                <div class="quick-actions">
                    <button onclick="addToCart(${product.id}); closeQuickView()" ${!product.inStock ? 'disabled' : ''}>
                        🛒 Add to Cart
                    </button>
                    <button onclick="toggleWishlist(${product.id})">
                        ${isInWishlist ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeQuickView() {
    document.getElementById('quick-view-modal').style.display = 'none';
}

// Reviews modal
function showReviews(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('reviews-modal');
    const content = document.getElementById('reviews-content');
    
    // Generate fake reviews for demo
    const reviewNames = ['John D.', 'Sarah M.', 'Mike R.', 'Lisa K.', 'David P.'];
    const reviewTexts = [
        'Excellent product! Highly recommended.',
        'Great quality and fast shipping.',
        'Works perfectly as described.',
        'Amazing value for money.',
        'Outstanding customer service.'
    ];
    
    let reviewsHTML = `
        <h2>Reviews for ${product.name}</h2>
        <div class="overall-rating">
            <div class="rating-large">${'⭐'.repeat(Math.floor(product.rating))} ${product.rating}</div>
            <div>Based on ${product.reviews} reviews</div>
        </div>
        <div class="reviews-list">
    `;
    
    for (let i = 0; i < 5; i++) {
        const rating = Math.floor(Math.random() * 2) + 4; // 4-5 stars
        reviewsHTML += `
            <div class="review-item">
                <div class="review-header">
                    <strong>${reviewNames[i]}</strong>
                    <div class="rating">${'⭐'.repeat(rating)}</div>
                </div>
                <p>${reviewTexts[i]}</p>
            </div>
        `;
    }
    
    reviewsHTML += '</div>';
    content.innerHTML = reviewsHTML;
    modal.style.display = 'block';
}

function closeReviews() {
    document.getElementById('reviews-modal').style.display = 'none';
}

// Sort products
function sortProducts() {
    const sortValue = document.getElementById('sort-filter').value;
    
    switch (sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    loadProducts();
}

// Clear all filters
function clearFilters() {
    document.getElementById('category-filter').value = '';
    document.getElementById('price-filter').value = '';
    document.getElementById('sort-filter').value = '';
    document.getElementById('search-input').value = '';
    searchQuery = '';
    filteredProducts = [...products];
    loadProducts();
    showNotification('🔄 All filters cleared');
}

// Enhanced filter products
function filterProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    
    filteredProducts = products.filter(product => {
        let matchesCategory = !categoryFilter || product.category === categoryFilter;
        let matchesPrice = true;
        let matchesSearch = !searchQuery || 
            product.name.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery);
        
        if (priceFilter) {
            if (priceFilter === '0-100') matchesPrice = product.price <= 100;
            else if (priceFilter === '100-500') matchesPrice = product.price > 100 && product.price <= 500;
            else if (priceFilter === '500-1000') matchesPrice = product.price > 500 && product.price <= 1000;
            else if (priceFilter === '1000+') matchesPrice = product.price > 1000;
        }
        
        return matchesCategory && matchesPrice && matchesSearch;
    });
    
    loadProducts();
}

// Enhanced add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product.inStock) {
        showNotification('❌ Product is out of stock');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showNotification(`🔄 ${product.name} quantity updated in cart`);
    } else {
        cart.push({ ...product, quantity: 1 });
        showNotification(`✅ ${product.name} added to cart`);
    }
    
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Show checkout
function showCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    document.getElementById('main-site').style.display = 'none';
    document.getElementById('checkout-page').style.display = 'block';
    
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    const subtotalAmount = document.getElementById('subtotal-amount');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y1ZjFlYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiM4Yjc0NTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZTwvdGV4dD48L3N2Zz4='">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="cart-item-price">$${item.price * item.quantity}</div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    subtotalAmount.textContent = total;
    totalAmount.textContent = total;
}

// Back to products
function backToProducts() {
    document.getElementById('checkout-page').style.display = 'none';
    document.getElementById('main-site').style.display = 'block';
}

// Complete order
function completeOrder() {
    alert('Order completed successfully!');
    cart = [];
    updateCartCount();
    backToProducts();
}

// Initialize with enhanced features
document.addEventListener('DOMContentLoaded', function() {
    // Focus on username field
    document.getElementById('username').focus();
    
    // Load saved data from localStorage
    const savedWishlist = localStorage.getItem('eleshop-wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
    
    const savedCart = localStorage.getItem('eleshop-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    // Add scroll to top button
    addScrollToTopButton();
    
    // Add keyboard shortcuts
    addKeyboardShortcuts();
    
    // Preload critical images
    preloadImages();
});

// Scroll to top functionality
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

// Keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            closeQuickView();
            closeReviews();
        }
    });
}

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'images/iphone-15-pro.png',
        'images/macbook-air-m2.jpg',
        'images/airpods-pro.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Enhanced loading state
function showLoading() {
    document.getElementById('loading-spinner').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-spinner').style.display = 'none';
}

// Performance optimization - debounced search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Update search to use debounced version
const debouncedSearch = debounce(searchProducts, 300);

// Update the search input to use debounced search
function updateSearchInput() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.oninput = debouncedSearch;
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('eleshop-wishlist', JSON.stringify(wishlist));
    localStorage.setItem('eleshop-cart', JSON.stringify(cart));
}

// Override existing functions to save data
const originalToggleWishlist = toggleWishlist;
toggleWishlist = function(productId) {
    originalToggleWishlist(productId);
    saveData();
};

const originalAddToCart = addToCart;
addToCart = function(productId) {
    originalAddToCart(productId);
    saveData();
};

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    console.log(`Event: ${eventName}`, properties);
    // In production, this would send to analytics service
}

// Track user interactions
function trackProductView(productId) {
    trackEvent('product_viewed', { product_id: productId });
}

function trackAddToCart(productId) {
    trackEvent('add_to_cart', { product_id: productId });
}

function trackPurchase(total, items) {
    trackEvent('purchase', { total, item_count: items.length });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    showNotification('⚠️ Something went wrong. Please refresh the page.');
});

// Service worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}