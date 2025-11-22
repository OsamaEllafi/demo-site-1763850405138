// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
  renderCart();

  document.getElementById('checkoutBtn')?.addEventListener('click', function() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Proceeding to checkout... (Mock)');
  });
});

function renderCart() {
  const cartItemsEl = document.getElementById('cartItems');
  const emptyCartEl = document.getElementById('cartEmpty');
  const itemsCountEl = document.getElementById('itemsCount');
  const subtotalEl = document.getElementById('subtotal');
  const totalEl = document.getElementById('total');

  if (cart.length === 0) {
    cartItemsEl.style.display = 'none';
    emptyCartEl.style.display = 'block';
    return;
  }

  cartItemsEl.style.display = 'block';
  emptyCartEl.style.display = 'none';

  let subtotal = 0;
  let totalItems = 0;

  cartItemsEl.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.img.replace('/500/500/', '/100/100/')}" alt="${item.name}">
      <div class="details">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)} each</p>
      </div>
      <div class="qty">
        <button onclick="changeQty(${index}, -1)">-</button>
        <input type="number" value="${item.quantity}" min="1" onchange="changeQty(${index}, this.value - ${item.quantity})">
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>
      <p class="subtotal">$${(item.price * item.quantity).toFixed(2)}</p>
      <button class="remove" onclick="removeItem(${index})">Remove</button>
    </div>
  `).join('');

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    totalItems += item.quantity;
  });

  itemsCountEl.textContent = totalItems;
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  totalEl.textContent = `$${subtotal.toFixed(2)}`;
  updateCartCount();
}

function changeQty(index, delta) {
  if (typeof delta === 'number') {
    const newQty = Math.max(1, cart[index].quantity + delta);
    cart[index].quantity = newQty;
  } else {
    cart[index].quantity = parseInt(delta) || 1;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  if (confirm('Remove this item from cart?')) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
}