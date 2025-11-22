// Global cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(badge => {
    badge.textContent = totalItems || '0';
    badge.style.display = totalItems ? 'flex' : 'none';
  });
}

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');
  if (nav && hamburger) {
    nav.classList.toggle('show');
    hamburger.classList.toggle('active');
  }
}

// Search focus effect
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();

  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }

  const searchInputs = document.querySelectorAll('.search input');
  searchInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.parentElement.style.boxShadow = '0 0 0 3px rgba(255,153,0,0.2)';
    });
    input.addEventListener('blur', function() {
      this.parentElement.parentElement.style.boxShadow = 'var(--shadow-sm)';
    });
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('nav')?.classList.remove('show');
      document.querySelector('.hamburger')?.classList.remove('active');
    });
  });
});