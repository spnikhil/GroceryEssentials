// Cart Data
let cart = JSON.parse(localStorage.getItem('groceryCart')) || [];
let currentEditIndex = null;

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 1500);
    
    // Initialize particles
    initParticles();
    
    // Load cart data
    loadCart();
    
    // Setup event listeners
    setupEventListeners();
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
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: (Math.random() - 0.5) * 0.2,
            color: `rgba(37, 99, 235, ${Math.random() * 0.08 + 0.02})`
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

// Load Cart Data
function loadCart() {
    const cartTableBody = document.getElementById('cartTableBody');
    const emptyCart = document.getElementById('emptyCart');
    
    if (cart.length === 0) {
        cartTableBody.innerHTML = '';
        emptyCart.style.display = 'block';
        updateOrderSummary();
        return;
    }
    
    emptyCart.style.display = 'none';
    cartTableBody.innerHTML = '';
    
    // Calculate totals
    let totalMRP = 0;
    let totalDiscount = 0;
    
    cart.forEach((item, index) => {
        totalMRP += item.mrp;
        totalDiscount += item.discountAmount;
        
        const row = document.createElement('tr');
        row.dataset.index = index;
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.weight}</td>
            <td>${item.company}</td>
            <td>₹${item.mrp.toFixed(2)}</td>
            <td>₹${item.discountAmount.toFixed(2)} (${item.discount}%)</td>
            <td>₹${item.payable.toFixed(2)}</td>
            <td>
                <div class="table-actions">
                    <button class="table-btn edit-btn" data-index="${index}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="table-btn delete-btn" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        
        cartTableBody.appendChild(row);
    });
    
    // Attach event listeners to table buttons
    attachTableEventListeners();
    
    // Update order summary
    updateOrderSummary();
}

// Update Order Summary
function updateOrderSummary() {
    const totalItems = cart.length;
    
    // Calculate totals
    const totalMRP = cart.reduce((sum, item) => sum + item.mrp, 0);
    const totalDiscount = cart.reduce((sum, item) => sum + item.discountAmount, 0);
    const subtotal = totalMRP - totalDiscount;
    const gst = subtotal * 0.18; // Fixed 18% GST
    const grandTotal = subtotal + gst;
    
    // Update display
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalAmount').textContent = grandTotal.toFixed(2);
    
    document.getElementById('summaryItems').textContent = totalItems;
    document.getElementById('summaryMRP').textContent = `₹${totalMRP.toFixed(2)}`;
    document.getElementById('summaryDiscount').textContent = `-₹${totalDiscount.toFixed(2)}`;
    document.getElementById('summarySubtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('summaryGST').textContent = `+₹${gst.toFixed(2)}`;
    document.getElementById('summaryTotal').textContent = `₹${grandTotal.toFixed(2)}`;
}

// Attach Event Listeners to Table Buttons
function attachTableEventListeners() {
    // Edit buttons
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            openEditModal(index);
        });
    });
    
    // Delete buttons
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            removeCartItem(index);
        });
    });
}

// Open Edit Modal
function openEditModal(index) {
    currentEditIndex = index;
    const item = cart[index];
    
    document.getElementById('editWeightInput').value = item.weight;
    
    const modal = document.getElementById('editWeightModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        document.getElementById('editWeightInput').focus();
    }, 100);
}

// Close Edit Modal
function closeEditModal() {
    const modal = document.getElementById('editWeightModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentEditIndex = null;
}

// Remove Cart Item
function removeCartItem(index) {
    if (confirm('Are you sure you want to remove this item from your cart?')) {
        cart.splice(index, 1);
        localStorage.setItem('groceryCart', JSON.stringify(cart));
        loadCart();
        showNotification('Item removed from cart', 'warning');
    }
}

// Update Cart Item Weight
function updateCartItemWeight(index, newWeight) {
    if (!newWeight.trim()) {
        showNotification('Please enter a valid weight', 'warning');
        return;
    }
    
    const item = cart[index];
    const oldWeight = item.weight;
    
    item.weight = newWeight;
    
    // Adjust price based on weight change
    const oldWeightNum = extractWeightNumber(oldWeight);
    const newWeightNum = extractWeightNumber(newWeight);
    
    if (oldWeightNum && newWeightNum) {
        const multiplier = newWeightNum / oldWeightNum;
        item.mrp *= multiplier;
        item.discountAmount = item.mrp * (item.discount / 100);
        item.payable = item.mrp - item.discountAmount;
    }
    
    localStorage.setItem('groceryCart', JSON.stringify(cart));
    loadCart();
    showNotification('Weight updated successfully', 'success');
}

// Extract numeric value from weight string
function extractWeightNumber(weightStr) {
    const match = weightStr.match(/(\d+(\.\d+)?)/);
    return match ? parseFloat(match[1]) : null;
}

// Setup Event Listeners
function setupEventListeners() {
    // Back to shop button
    document.getElementById('backToShopBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    // Shop now button
    document.getElementById('shopNowBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    // Clear cart button
    document.getElementById('clearCartBtn').addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Cart is already empty', 'warning');
            return;
        }
        
        if (confirm('Are you sure you want to clear your entire cart?')) {
            cart = [];
            localStorage.setItem('groceryCart', JSON.stringify(cart));
            loadCart();
            showNotification('Cart cleared successfully', 'success');
        }
    });
    
    // Continue shopping button
    document.getElementById('continueShoppingBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    // Confirm order button
    document.getElementById('confirmOrderBtn').addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Add items to cart first', 'warning');
            return;
        }
        
        // Generate order ID
        const orderId = 'GE-' + Date.now().toString().slice(-8);
        document.getElementById('orderId').textContent = orderId;
        
        // Show success modal
        const modal = document.getElementById('successModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Edit modal buttons
    document.querySelector('#editWeightModal .modal-close').addEventListener('click', closeEditModal);
    document.getElementById('cancelEditBtn').addEventListener('click', closeEditModal);
    document.getElementById('saveEditBtn').addEventListener('click', function() {
        if (currentEditIndex === null) return;
        
        const newWeight = document.getElementById('editWeightInput').value.trim();
        updateCartItemWeight(currentEditIndex, newWeight);
        closeEditModal();
    });
    
    // Success modal close button
    document.getElementById('closeSuccessBtn').addEventListener('click', function() {
        const modal = document.getElementById('successModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Clear cart after successful order
        cart = [];
        localStorage.setItem('groceryCart', JSON.stringify(cart));
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    });
    
    // Share buttons
    document.getElementById('shareWhatsAppBtn').addEventListener('click', createAndShareWhatsAppImage);
    document.getElementById('shareImageBtn').addEventListener('click', createDownloadableImage);
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                if (this.id === 'editWeightModal') closeEditModal();
                if (this.id === 'successModal') {
                    this.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });
    
    // Enter key in edit modal
    document.getElementById('editWeightInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('saveEditBtn').click();
        }
    });
}

// Create downloadable image with PERFECT ALIGNMENT
function createDownloadableImage() {
    if (cart.length === 0) {
        showNotification('Cart is empty', 'warning');
        return;
    }
    
    showNotification('Creating professional bill...', 'info');
    
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Fixed measurements
        const ROW_HEIGHT = 30;
        const HEADER_HEIGHT = 140; // Increased slightly for better spacing
        const SUMMARY_HEIGHT = 180;
        const FOOTER_HEIGHT = 80; // Increased for better spacing
        const TABLE_HEADER_HEIGHT = 35;
        const BOTTOM_MARGIN = 20; // Add margin at bottom
        
        // Total height calculation with proper margins
        const totalHeight = HEADER_HEIGHT + TABLE_HEADER_HEIGHT + 
                           (cart.length * ROW_HEIGHT) + SUMMARY_HEIGHT + 
                           FOOTER_HEIGHT + BOTTOM_MARGIN;
        
        // Set canvas size
        canvas.width = 1300;
        canvas.height = totalHeight;
        
        // White background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // ===== HEADER =====
        // Gradient header
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, '#2563eb');
        gradient.addColorStop(1, '#4f46e5');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, 80);
        
        // Title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 32px "Arial", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('GROCERY ORDER BILL', canvas.width / 2, 45);
        
        ctx.font = '16px "Arial", sans-serif';
        ctx.fillText('Monthly Essentials Purchase', canvas.width / 2, 70);
        
        // Order info
        ctx.fillStyle = '#374151';
        ctx.font = '14px "Arial", sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`Date: ${new Date().toLocaleDateString('en-IN')}`, 40, 110);
        ctx.fillText(`Bill No: GE-${Date.now().toString().slice(-6)}`, 40, 130);
        
        ctx.textAlign = 'right';
        ctx.fillText(`Items: ${cart.length}`, canvas.width - 40, 110);
        ctx.fillText(`Time: ${new Date().toLocaleTimeString('en-IN', {hour12: true})}`, canvas.width - 40, 130);
        
        // ===== TABLE HEADER =====
        let yPos = HEADER_HEIGHT;
        
        // Header background
        ctx.fillStyle = '#1e40af';
        ctx.fillRect(30, yPos, canvas.width - 60, TABLE_HEADER_HEIGHT);
        
        // Fixed column positions (PERFECT SPACING - NO EXTRA SPACE)
        const cols = {
            sr: { x: 40, width: 40 },
            item: { x: 90, width: 280 },
            weight: { x: 380, width: 90 },
            company: { x: 480, width: 140 },
            mrp: { x: 630, width: 100 },
            discount: { x: 740, width: 120 },
            payable: { x: 870, width: 110 }
        };
        
        // Header text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px "Arial", sans-serif';
        ctx.textAlign = 'left';
        
        // All headers left aligned except amounts
        ctx.fillText('#', cols.sr.x, yPos + 23);
        ctx.fillText('ITEM NAME', cols.item.x, yPos + 23);
        ctx.fillText('WEIGHT', cols.weight.x, yPos + 23);
        ctx.fillText('COMPANY', cols.company.x, yPos + 23);
        
        // Amount headers right aligned
        ctx.textAlign = 'right';
        ctx.fillText('MRP (₹)', cols.mrp.x + 90, yPos + 23);
        ctx.fillText('DISCOUNT (₹)', cols.discount.x + 110, yPos + 23);
        ctx.fillText('PAYABLE (₹)', cols.payable.x + 100, yPos + 23);
        
        yPos += TABLE_HEADER_HEIGHT;
        
        // ===== TABLE ROWS =====
        ctx.textAlign = 'left';
        ctx.font = '14px "Arial", sans-serif';
        
        cart.forEach((item, index) => {
            // Alternate row colors
            ctx.fillStyle = index % 2 === 0 ? '#f9fafb' : '#ffffff';
            ctx.fillRect(30, yPos, canvas.width - 60, ROW_HEIGHT);
            
            // Bottom border
            ctx.strokeStyle = '#e5e7eb';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(30, yPos + ROW_HEIGHT);
            ctx.lineTo(canvas.width - 30, yPos + ROW_HEIGHT);
            ctx.stroke();
            
            // Row data
            ctx.fillStyle = '#111827';
            
            // Serial number
            ctx.fillText((index + 1).toString(), cols.sr.x, yPos + 20);
            
            // Item name (truncate if too long)
            let itemName = item.name;
            if (itemName.length > 30) {
                itemName = itemName.substring(0, 30) + '...';
            }
            ctx.fillText(itemName, cols.item.x, yPos + 20);
            
            // Weight
            ctx.fillText(item.weight, cols.weight.x, yPos + 20);
            
            // Company (truncate if too long)
            let company = item.company;
            if (company.length > 15) {
                company = company.substring(0, 15) + '...';
            }
            ctx.fillText(company, cols.company.x, yPos + 20);
            
            // MRP (right aligned)
            ctx.textAlign = 'right';
            ctx.fillText(`₹${item.mrp.toFixed(2)}`, cols.mrp.x + 90, yPos + 20);
            
            // Discount (right aligned)
            ctx.fillText(`₹${item.discountAmount.toFixed(2)}`, cols.discount.x + 110, yPos + 20);
            
            // Payable (right aligned, bold and green)
            ctx.fillStyle = '#059669';
            ctx.font = 'bold 14px "Arial", sans-serif';
            ctx.fillText(`₹${item.payable.toFixed(2)}`, cols.payable.x + 100, yPos + 20);
            
            // Reset for next row
            ctx.textAlign = 'left';
            ctx.fillStyle = '#111827';
            ctx.font = '14px "Arial", sans-serif';
            
            yPos += ROW_HEIGHT;
        });
        
        // ===== SUMMARY SECTION =====
        yPos += 20;
        
        // Summary background
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(30, yPos, canvas.width - 60, SUMMARY_HEIGHT);
        
        // Summary border
        ctx.strokeStyle = '#d1d5db';
        ctx.lineWidth = 1;
        ctx.strokeRect(30, yPos, canvas.width - 60, SUMMARY_HEIGHT);
        
        // Calculate totals
        const totalMRP = cart.reduce((sum, item) => sum + item.mrp, 0);
        const totalDiscount = cart.reduce((sum, item) => sum + item.discountAmount, 0);
        const subtotal = totalMRP - totalDiscount;
        const gst = subtotal * 0.18;
        const grandTotal = subtotal + gst;
        
        // Summary title
        ctx.fillStyle = '#1e40af';
        ctx.font = 'bold 20px "Arial", sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('PAYMENT SUMMARY', 50, yPos + 30);
        
        // Summary details
        ctx.fillStyle = '#374151';
        ctx.font = '16px "Arial", sans-serif';
        
        const summaryY = yPos + 60;
        const lineSpace = 25;
        
        // Labels (left aligned)
        ctx.textAlign = 'left';
        ctx.fillText('Total Items:', 50, summaryY);
        ctx.fillText('Total MRP:', 50, summaryY + lineSpace);
        ctx.fillText('Total Discount:', 50, summaryY + (lineSpace * 2));
        ctx.fillText('Subtotal:', 50, summaryY + (lineSpace * 3));
        ctx.fillText('GST (18%):', 50, summaryY + (lineSpace * 4));
        
        // Values (right aligned)
        ctx.textAlign = 'right';
        ctx.fillText(cart.length.toString(), canvas.width - 50, summaryY);
        ctx.fillText(`₹${totalMRP.toFixed(2)}`, canvas.width - 50, summaryY + lineSpace);
        ctx.fillText(`-₹${totalDiscount.toFixed(2)}`, canvas.width - 50, summaryY + (lineSpace * 2));
        ctx.fillText(`₹${subtotal.toFixed(2)}`, canvas.width - 50, summaryY + (lineSpace * 3));
        ctx.fillText(`+₹${gst.toFixed(2)}`, canvas.width - 50, summaryY + (lineSpace * 4));
        
        // Grand Total Line
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 16px "Arial", sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Grand Total:', 50, summaryY + (lineSpace * 5) + 10);
        
        ctx.fillStyle = '#059669';
        ctx.font = 'bold 22px "Arial", sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`₹${grandTotal.toFixed(2)}`, canvas.width - 50, summaryY + (lineSpace * 5) + 10);
        
        // ===== FOOTER ===== (FIXED ALIGNMENT - Now properly within canvas)
        const footerY = yPos + SUMMARY_HEIGHT - 10; // Position footer within summary box
        ctx.fillStyle = '#6b7280';
        ctx.font = '13px "Arial", sans-serif';
        ctx.textAlign = 'center';
        
        // First line
        ctx.fillText('Grocery Essentials • Monthly Shopping • Fixed MRP', canvas.width / 2, footerY);
        
        // Second line
        ctx.fillText('Contact: +91 86060 72342 • Email: order@groceryessentials.com', canvas.width / 2, footerY + 22);
        
        // Third line
        ctx.fillText('This bill is computer generated and does not require signature', canvas.width / 2, footerY + 44);
        
        // Add a border around entire bill for visual completeness
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 2;
        ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);
        
        // ===== DOWNLOAD =====
        const imageData = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = imageData;
        const dateStr = new Date().toISOString().slice(0,10).replace(/-/g, '');
        downloadLink.download = `Grocery-Bill-${dateStr}-${cart.length}items.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        showNotification('Professional bill downloaded successfully!', 'success');
        
    } catch (error) {
        console.error('Error:', error);
        showNotification('Failed to create bill', 'warning');
    }
}

// Create and share image via WhatsApp (SIMPLIFIED VERSION)
async function createAndShareWhatsAppImage() {
    if (cart.length === 0) {
        showNotification('Cart is empty', 'warning');
        return;
    }
    
    showNotification('Creating bill for WhatsApp...', 'info');
    
    try {
        // First create the detailed bill
        createDownloadableImage();
        
        // Wait for download to complete
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Then open WhatsApp
        const phoneNumber = '8606072342';
        const message = encodeURIComponent('Here is my grocery order bill! Check the downloaded image.');
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        
        window.open(whatsappURL, '_blank');
        
        showNotification('WhatsApp opened! Share the downloaded bill.', 'success');
        
    } catch (error) {
        console.error('Error:', error);
        showNotification('Failed to open WhatsApp', 'warning');
    }
}

// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
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
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Add notification styles
if (!document.querySelector('#cart-notification-styles')) {
    const style = document.createElement('style');
    style.id = 'cart-notification-styles';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}