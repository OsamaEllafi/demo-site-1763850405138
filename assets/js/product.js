document.addEventListener('DOMContentLoaded', function() {
  // Image gallery
  const mainImg = document.getElementById('mainImg');
  const thumbs = document.querySelectorAll('.thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
      thumbs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      mainImg.src = this.dataset.src;
      mainImg.alt = this.alt;
    });
  });

  // Quantity controls
  const qtyInput = document.getElementById('quantity');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');

  qtyMinus.addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) {
      qtyInput.value = parseInt(qtyInput.value) - 1;
    }
  });

  qtyPlus.addEventListener('click', () => {
    if (parseInt(qtyInput.value) < 10) {
      qtyInput.value = parseInt(qtyInput.value) + 1;
    }
  });

  // Add to cart
  const addToCartBtn = document.getElementById('addToCart');
  const product = {
    id: 'wireless-headphones',
    name: 'Wireless Bluetooth Headphones',
    price: 49.99,
    img: 'https://picsum.photos/500/500?random=20',
    quantity: 1
  };

  addToCartBtn.addEventListener('click', function() {
    product.quantity = parseInt(qtyInput.value);
    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += product.quantity;
    } else {
      cart.push({...product});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    this.textContent = 'Added!';
    this.style.backgroundColor = '#28A745';
    setTimeout(() => {
      this.textContent = 'Add to Cart';
      this.style.backgroundColor = '';
    }, 2000);
  });
});