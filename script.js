// Products Database with 36 items in exact order
const products = [
    { id: 1, name: "Rice", category: "grains", basePrice: 55, discount: 12, weightOptions: ["1 kg", "5 kg", "10 kg", "25 kg"], companyOptions: ["India Gate", "Daawat", "Fortune", "Local"] },
    { id: 2, name: "Wheat Flour (Atta)", category: "flour", basePrice: 50, discount: 10, weightOptions: ["1 kg", "5 kg", "10 kg"], companyOptions: ["Aashirvaad", "Pillsbury", "Fortune", "Local"] },
    { id: 3, name: "Toor Dal", category: "pulses", basePrice: 120, discount: 8, weightOptions: ["500 g", "1 kg", "5 kg"], companyOptions: ["Tata Sampann", "Fortune", "24 Mantra", "Local"] },
    { id: 4, name: "Moong Dal", category: "pulses", basePrice: 100, discount: 10, weightOptions: ["500 g", "1 kg", "2 kg"], companyOptions: ["Tata Sampann", "Fortune", "24 Mantra", "Local"] },
    { id: 5, name: "Masoor Dal", category: "pulses", basePrice: 95, discount: 12, weightOptions: ["500 g", "1 kg", "2 kg"], companyOptions: ["Tata Sampann", "Fortune", "24 Mantra", "Local"] },
    { id: 6, name: "Chana Dal", category: "pulses", basePrice: 110, discount: 8, weightOptions: ["500 g", "1 kg", "2 kg"], companyOptions: ["Tata Sampann", "Fortune", "24 Mantra", "Local"] },
    { id: 7, name: "Poha", category: "grains", basePrice: 45, discount: 5, weightOptions: ["500 g", "1 kg", "2 kg"], companyOptions: ["MTR", "Gits", "Haldiram", "Local"] },
    { id: 8, name: "Chana (Whole Chickpeas)", category: "pulses", basePrice: 85, discount: 15, weightOptions: ["500 g", "1 kg", "2 kg"], companyOptions: ["Tata Sampann", "Fortune", "24 Mantra", "Local"] },
    { id: 9, name: "Muttor (Green Peas)", category: "pulses", basePrice: 150, discount: 10, weightOptions: ["500 g", "1 kg"], companyOptions: ["Tata Sampann", "Fortune", "24 Mantra", "Local"] },
    { id: 10, name: "Suji (Semolina)", category: "flour", basePrice: 60, discount: 8, weightOptions: ["500 g", "1 kg", "2 kg"], companyOptions: ["Aashirvaad", "Tata Sampann", "Fortune", "Local"] },
    { id: 11, name: "Besan (Gram Flour)", category: "flour", basePrice: 70, discount: 10, weightOptions: ["500 g", "1 kg", "2 kg"], companyOptions: ["Aashirvaad", "Tata Sampann", "Fortune", "Local"] },
    { id: 12, name: "Maida (Refined Flour)", category: "flour", basePrice: 40, discount: 5, weightOptions: ["500 g", "1 kg", "2 kg"], companyOptions: ["Aashirvaad", "Tata Sampann", "Fortune", "Local"] },
    { id: 13, name: "Rajma (Kidney Beans)", category: "pulses", basePrice: 130, discount: 12, weightOptions: ["500 g", "1 kg"], companyOptions: ["Tata Sampann", "Fortune", "24 Mantra", "Local"] },
    { id: 14, name: "Dates (Khajoor)", category: "dry_fruits", basePrice: 250, discount: 15, weightOptions: ["250 g", "500 g", "1 kg"], companyOptions: ["Dry Fruit Hub", "Ratnadeep", "Local"] },
    { id: 15, name: "Sugar", category: "packaged", basePrice: 45, discount: 5, weightOptions: ["1 kg", "2 kg", "5 kg"], companyOptions: ["Dhampur", "Sakthi", "Local"] },
    { id: 16, name: "Salt", category: "packaged", basePrice: 20, discount: 0, weightOptions: ["1 kg"], companyOptions: ["Tata", "Safed", "Local"] },
    { id: 17, name: "Washing Detergent", category: "packaged", basePrice: 200, discount: 20, weightOptions: ["500 g", "1 kg", "3 kg"], companyOptions: ["Surf Excel", "Tide", "Ariel", "Local"] },
    { id: 18, name: "Tea", category: "packaged", basePrice: 200, discount: 15, weightOptions: ["250 g", "500 g", "1 kg"], companyOptions: ["Taj Mahal", "Red Label", "Tata Tea", "Local"] },
    { id: 19, name: "Turmeric Powder", category: "spices", basePrice: 80, discount: 10, weightOptions: ["100 g", "200 g", "500 g"], companyOptions: ["Everest", "MDH", "Catch", "Local"] },
    { id: 20, name: "Red Chilli Powder", category: "spices", basePrice: 100, discount: 12, weightOptions: ["100 g", "200 g", "500 g"], companyOptions: ["Everest", "MDH", "Catch", "Local"] },
    { id: 21, name: "Coriander Powder", category: "spices", basePrice: 90, discount: 10, weightOptions: ["100 g", "200 g", "500 g"], companyOptions: ["Everest", "MDH", "Catch", "Local"] },
    { id: 22, name: "Cumin Seeds", category: "spices", basePrice: 120, discount: 15, weightOptions: ["100 g", "200 g", "500 g"], companyOptions: ["Everest", "MDH", "Catch", "Local"] },
    { id: 23, name: "Cashew (Kaju)", category: "dry_fruits", basePrice: 800, discount: 8, weightOptions: ["100 g", "250 g", "500 g"], companyOptions: ["Dry Fruit Hub", "Ratnadeep", "Local"] },
    { id: 24, name: "Raisins (Kishmish)", category: "dry_fruits", basePrice: 180, discount: 10, weightOptions: ["100 g", "250 g", "500 g"], companyOptions: ["Dry Fruit Hub", "Ratnadeep", "Local"] },
    { id: 25, name: "Almonds (Badam)", category: "dry_fruits", basePrice: 700, discount: 8, weightOptions: ["100 g", "250 g", "500 g"], companyOptions: ["Dry Fruit Hub", "Ratnadeep", "Local"] },
    { id: 26, name: "Pistachios (Pista)", category: "dry_fruits", basePrice: 900, discount: 10, weightOptions: ["100 g", "250 g", "500 g"], companyOptions: ["Dry Fruit Hub", "Ratnadeep", "Local"] },
    { id: 27, name: "Walnuts (Akhrot)", category: "dry_fruits", basePrice: 600, discount: 12, weightOptions: ["100 g", "250 g", "500 g"], companyOptions: ["Dry Fruit Hub", "Ratnadeep", "Local"] },
    { id: 28, name: "Fox Nuts (Makhana)", category: "dry_fruits", basePrice: 300, discount: 15, weightOptions: ["100 g", "250 g", "500 g"], companyOptions: ["Dry Fruit Hub", "Ratnadeep", "Local"] },
    { id: 29, name: "Refined Oil", category: "oils", basePrice: 180, discount: 12, weightOptions: ["1 L", "2 L", "5 L"], companyOptions: ["Fortune", "Saffola", "Emami", "Local"] },
    { id: 30, name: "Mustard Oil", category: "oils", basePrice: 160, discount: 10, weightOptions: ["1 L", "2 L", "5 L"], companyOptions: ["Fortune", "Dhara", "Emami", "Local"] },
    { id: 31, name: "Biscuits", category: "packaged", basePrice: 40, discount: 5, weightOptions: ["100 g pack", "200 g pack", "400 g pack"], companyOptions: ["Parle-G", "Britannia", "Sunfeast"] },
    { id: 32, name: "Bath Soap", category: "packaged", basePrice: 40, discount: 8, weightOptions: ["Single", "3 Pack", "5 Pack"], companyOptions: ["Dettol", "Lifebuoy", "Lux"] },
    { id: 33, name: "Toothpaste", category: "packaged", basePrice: 80, discount: 10, weightOptions: ["100 g", "200 g"], companyOptions: ["Colgate", "Pepsodent", "Dabur"] },
    { id: 34, name: "Toothbrush", category: "packaged", basePrice: 30, discount: 5, weightOptions: ["Single", "2 Pack"], companyOptions: ["Colgate", "Oral-B", "Patanjali"] },
    { id: 35, name: "Dishwash Bar / Liquid", category: "packaged", basePrice: 50, discount: 15, weightOptions: ["Bar", "500 ml", "1 L"], companyOptions: ["Vim", "Pril", "Local"] },
    { id: 36, name: "Dry Coconut (Sukha Nariyal)", category: "packaged", basePrice: 180, discount: 12, weightOptions: ["200 g", "500 g", "1 kg"], companyOptions: ["Farm Fresh", "Local"] }
];

// Global Variables
let selectedProducts = new Set();
let cart = JSON.parse(localStorage.getItem('groceryCart')) || [];
let isMultiSelect = false;
let currentFilter = 'all';

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    initParticles();
    
    // Hide loading screen
    setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 2000);
    
    // Initialize product table
    renderProductTable();
    
    // Setup event listeners
    setupEventListeners();
    
    // Update cart display
    updateCartDisplay();
});

// Initialize Particles Background
function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            color: `rgba(37, 99, 235, ${Math.random() * 0.1 + 0.05})`
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Render Product Table
function renderProductTable() {
    const tableBody = document.getElementById('productsTableBody');
    const emptyTable = document.getElementById('emptyTable');
    
    // Filter products
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);
    
    if (filteredProducts.length === 0) {
        tableBody.innerHTML = '';
        emptyTable.style.display = 'block';
        return;
    }
    
    emptyTable.style.display = 'none';
    tableBody.innerHTML = '';
    
    filteredProducts.forEach((product, index) => {
        const row = document.createElement('tr');
        row.dataset.id = product.id;
        
        // Calculate payable amount
        const payable = product.basePrice * (1 - product.discount / 100);
        
        // Generate weight options
        const weightOptions = product.weightOptions.map(weight => 
            `<option value="${weight}">${weight}</option>`
        ).join('');
        
        // Generate company options
        const companyOptions = product.companyOptions.map(company => 
            `<option value="${company}">${company}</option>`
        ).join('');
        
        row.innerHTML = `
            <td>
                <input type="checkbox" class="product-checkbox" id="product-${product.id}" data-id="${product.id}">
                <label for="product-${product.id}"></label>
            </td>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>
                <select class="weight-select" data-id="${product.id}">
                    ${weightOptions}
                    <option value="manual">Manual Input</option>
                </select>
                <div class="manual-input-container" data-id="${product.id}">
                    <div class="manual-input-group">
                        <input type="text" class="manual-input" placeholder="e.g., 2 kg, 3 L">
                        <button class="apply-manual-btn" data-id="${product.id}">Apply</button>
                    </div>
                </div>
            </td>
            <td>
                <select class="company-select" data-id="${product.id}">
                    ${companyOptions}
                </select>
            </td>
            <td>
                <div class="mrp-display" data-id="${product.id}">₹${product.basePrice.toFixed(2)}</div>
                <input type="hidden" class="mrp-input" value="${product.basePrice}" data-id="${product.id}">
            </td>
            <td>
                <div class="discount-display">${product.discount}%</div>
                <input type="hidden" class="discount-input" value="${product.discount}" data-id="${product.id}">
            </td>
            <td class="payable-amount" data-id="${product.id}">
                ₹${payable.toFixed(2)}
            </td>
            <td>
                <button class="action-btn add-to-cart-btn" data-id="${product.id}">
                    <i class="fas fa-plus"></i> Add
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Attach event listeners
    attachTableEventListeners();
    updateSelectedCount();
}

// Attach Event Listeners to Table Elements
function attachTableEventListeners() {
    // Product checkboxes
    document.querySelectorAll('.product-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const productId = parseInt(this.dataset.id);
            
            if (this.checked) {
                selectedProducts.add(productId);
            } else {
                selectedProducts.delete(productId);
                document.getElementById('selectAllCheckbox').checked = false;
            }
            
            updateSelectedCount();
        });
    });
    
    // Weight selection
    document.querySelectorAll('.weight-select').forEach(select => {
        select.addEventListener('change', function() {
            const productId = this.dataset.id;
            
            if (this.value === 'manual') {
                // Show manual input
                const manualContainer = document.querySelector(`.manual-input-container[data-id="${productId}"]`);
                manualContainer.style.display = 'block';
            } else {
                // Hide manual input if shown
                const manualContainer = document.querySelector(`.manual-input-container[data-id="${productId}"]`);
                manualContainer.style.display = 'none';
                
                // Update price based on weight
                updatePriceForProduct(productId, this.value);
            }
        });
    });
    
    // Manual weight apply button
    document.querySelectorAll('.apply-manual-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.dataset.id;
            const manualInput = document.querySelector(`.manual-input[data-id="${productId}"]`);
            const weight = manualInput.value.trim();
            
            if (weight) {
                // Update price based on manual weight
                updatePriceForProduct(productId, weight, true);
            }
        });
    });
    
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId);
            
            // Button feedback
            this.innerHTML = '<i class="fas fa-check"></i> Added';
            this.style.background = 'linear-gradient(135deg, var(--secondary-color), #0ea271)';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-plus"></i> Add';
                this.style.background = '';
                this.disabled = false;
            }, 1000);
        });
    });
}

// Update Price Based on Weight
function updatePriceForProduct(productId, weight, isManual = false) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return;
    
    const mrpInput = document.querySelector(`.mrp-input[data-id="${productId}"]`);
    const mrpDisplay = document.querySelector(`.mrp-display[data-id="${productId}"]`);
    const discountInput = document.querySelector(`.discount-input[data-id="${productId}"]`);
    
    let basePrice = product.basePrice;
    let multiplier = 1;
    
    if (isManual) {
        // Extract numeric value from manual input
        const match = weight.match(/(\d+(\.\d+)?)/);
        if (match) {
            const numValue = parseFloat(match[1]);
            
            // Check unit to determine multiplier
            if (weight.toLowerCase().includes('kg')) {
                multiplier = numValue;
            } else if (weight.toLowerCase().includes('g')) {
                multiplier = numValue / 1000;
            } else if (weight.toLowerCase().includes('l')) {
                multiplier = numValue;
            } else if (weight.toLowerCase().includes('ml')) {
                multiplier = numValue / 1000;
            } else {
                multiplier = numValue;
            }
        }
    } else {
        // Standard weight options
        if (weight.includes('kg')) {
            const numMatch = weight.match(/(\d+(\.\d+)?)/);
            if (numMatch) {
                multiplier = parseFloat(numMatch[1]);
            }
        } else if (weight.includes('g')) {
            const numMatch = weight.match(/(\d+(\.\d+)?)/);
            if (numMatch) {
                multiplier = parseFloat(numMatch[1]) / 1000;
            }
        } else if (weight.includes('L')) {
            const numMatch = weight.match(/(\d+(\.\d+)?)/);
            if (numMatch) {
                multiplier = parseFloat(numMatch[1]);
            }
        } else if (weight.includes('ml')) {
            const numMatch = weight.match(/(\d+(\.\d+)?)/);
            if (numMatch) {
                multiplier = parseFloat(numMatch[1]) / 1000;
            }
        } else if (weight.includes('pack') || weight.includes('Pack')) {
            // For packaged items like biscuits, soap packs
            const numMatch = weight.match(/(\d+)/);
            if (numMatch) {
                multiplier = parseInt(numMatch[1]) / product.basePrice;
            }
        }
    }
    
    const newMRP = basePrice * multiplier;
    mrpInput.value = newMRP;
    mrpDisplay.textContent = `₹${newMRP.toFixed(2)}`;
    
    // Update payable amount
    updatePayableForProduct(productId);
}

// Update Payable Amount for Product
function updatePayableForProduct(productId) {
    const mrpInput = document.querySelector(`.mrp-input[data-id="${productId}"]`);
    const discountInput = document.querySelector(`.discount-input[data-id="${productId}"]`);
    const payableElement = document.querySelector(`.payable-amount[data-id="${productId}"]`);
    
    const mrp = parseFloat(mrpInput.value) || 0;
    const discount = parseFloat(discountInput.value) || 0;
    
    const discountAmount = mrp * (discount / 100);
    const payable = mrp - discountAmount;
    
    payableElement.textContent = `₹${payable.toFixed(2)}`;
}

// Update Selected Count
function updateSelectedCount() {
    const selectedCount = document.getElementById('selectedCount');
    const bulkCount = document.getElementById('bulkCount');
    const bulkActions = document.getElementById('bulkActions');
    
    selectedCount.textContent = selectedProducts.size;
    bulkCount.textContent = selectedProducts.size;
    
    // Show/hide bulk actions
    if (selectedProducts.size > 0) {
        bulkActions.style.display = 'flex';
    } else {
        bulkActions.style.display = 'none';
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.category;
            renderProductTable();
            
            // Clear selection when changing filter
            selectedProducts.clear();
            updateSelectedCount();
        });
    });
    
    // Select All checkbox
    document.getElementById('selectAllCheckbox').addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('.product-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
            const productId = parseInt(checkbox.dataset.id);
            
            if (this.checked) {
                selectedProducts.add(productId);
            } else {
                selectedProducts.delete(productId);
            }
        });
        
        updateSelectedCount();
    });
    
    // Single/Multi select buttons
    document.getElementById('singleSelectBtn').addEventListener('click', function() {
        document.querySelectorAll('.selection-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        isMultiSelect = false;
        
        // Clear selection when switching to single mode
        selectedProducts.clear();
        document.querySelectorAll('.product-checkbox').forEach(cb => cb.checked = false);
        document.getElementById('selectAllCheckbox').checked = false;
        updateSelectedCount();
    });
    
    document.getElementById('multiSelectBtn').addEventListener('click', function() {
        document.querySelectorAll('.selection-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        isMultiSelect = true;
    });
    
    // Clear selection button
    document.getElementById('clearSelectionBtn').addEventListener('click', function() {
        selectedProducts.clear();
        document.querySelectorAll('.product-checkbox').forEach(cb => cb.checked = false);
        document.getElementById('selectAllCheckbox').checked = false;
        updateSelectedCount();
    });
    
    // Add selected to cart button
    document.getElementById('addSelectedToCart').addEventListener('click', function() {
        if (selectedProducts.size === 0) {
            showNotification('Please select items first!', 'warning');
            return;
        }
        
        const selectedArray = Array.from(selectedProducts);
        selectedArray.forEach(productId => {
            addToCart(productId);
        });
        
        showNotification(`${selectedProducts.size} items added to cart!`, 'success');
        
        // Clear selection after adding
        selectedProducts.clear();
        document.querySelectorAll('.product-checkbox').forEach(cb => cb.checked = false);
        document.getElementById('selectAllCheckbox').checked = false;
        updateSelectedCount();
    });
    
    // View cart button
    document.getElementById('viewCartBtn').addEventListener('click', showCartPreview);
    
    // Cart indicator
    document.getElementById('cartIndicator').addEventListener('click', showCartPreview);
    
    // Modal close button
    document.querySelector('.modal-close').addEventListener('click', hideCartPreview);
    
    // Continue shopping button
    document.getElementById('continueShoppingBtn').addEventListener('click', hideCartPreview);
    
    // Go to cart button
    document.getElementById('goToCartBtn').addEventListener('click', goToCart);
}

// Add Product to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return;
    
    const row = document.querySelector(`tr[data-id="${productId}"]`);
    if (!row) return;
    
    // Get selected values
    const weightSelect = row.querySelector('.weight-select');
    let weight;
    
    if (weightSelect.value === 'manual') {
        const manualInput = row.querySelector('.manual-input');
        weight = manualInput.value.trim();
        if (!weight) weight = product.weightOptions[0]; // Default if manual input is empty
    } else {
        weight = weightSelect.value;
    }
    
    const companySelect = row.querySelector('.company-select');
    const company = companySelect.value;
    
    const mrpInput = row.querySelector('.mrp-input');
    const mrp = parseFloat(mrpInput.value) || product.basePrice;
    
    const discountInput = row.querySelector('.discount-input');
    const discount = parseFloat(discountInput.value) || product.discount;
    
    const discountAmount = mrp * (discount / 100);
    const payable = mrp - discountAmount;
    
    // Create cart item object
    const cartItem = {
        id: productId,
        name: product.name,
        weight: weight,
        company: company,
        mrp: mrp,
        discount: discount,
        discountAmount: discountAmount,
        payable: payable,
        timestamp: Date.now()
    };
    
    // Check if item already exists in cart
    const existingIndex = cart.findIndex(item => 
        item.id === cartItem.id && 
        item.weight === cartItem.weight && 
        item.company === cartItem.company
    );
    
    if (existingIndex >= 0) {
        // Update existing item
        cart[existingIndex] = cartItem;
    } else {
        // Add new item
        cart.push(cartItem);
    }
    
    // Save to localStorage
    localStorage.setItem('groceryCart', JSON.stringify(cart));
    
    // Update cart display
    updateCartDisplay();
    
    // Show success animation
    const addBtn = row.querySelector('.add-to-cart-btn');
    if (addBtn) {
        addBtn.style.animation = 'none';
        setTimeout(() => {
            addBtn.style.animation = 'pulse 0.5s ease';
        }, 10);
    }
}

// Update Cart Display
function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Show Cart Preview Modal
function showCartPreview() {
    const modal = document.getElementById('cartPreviewModal');
    const cartPreview = document.getElementById('cartPreview');
    
    if (cart.length === 0) {
        cartPreview.innerHTML = `
            <div class="preview-item">
                <div>
                    <div class="preview-item-name">Your cart is empty</div>
                    <div class="preview-item-details">Add some items to get started</div>
                </div>
            </div>
        `;
    } else {
        cartPreview.innerHTML = cart.slice(0, 5).map(item => `
            <div class="preview-item">
                <div>
                    <div class="preview-item-name">${item.name}</div>
                    <div class="preview-item-details">${item.weight} • ${item.company}</div>
                </div>
                <div class="preview-item-price">₹${item.payable.toFixed(2)}</div>
            </div>
        `).join('');
        
        if (cart.length > 5) {
            cartPreview.innerHTML += `
                <div class="preview-item">
                    <div class="preview-item-details">... and ${cart.length - 5} more items</div>
                </div>
            `;
        }
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide Cart Preview Modal
function hideCartPreview() {
    const modal = document.getElementById('cartPreviewModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Go to Cart Page
function goToCart() {
    window.location.href = 'cart.html';
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: white;
        border: 1px solid ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
        border-left: 4px solid ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius-sm);
        font-family: 'Inter', sans-serif;
        color: ${type === 'success' ? '#065f46' : type === 'warning' ? '#92400e' : '#1e40af'};
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animation styles
if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}