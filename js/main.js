// ============================================
// main.js — shared behavior across every page:
// mobile nav toggle, wishlist heart toggling,
// cart count badge, and a small toast helper.
// Uses localStorage so cart/wishlist persist
// between pages (no backend needed for this).
// ============================================

function getCart() {
  return JSON.parse(localStorage.getItem('hl_cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('hl_cart', JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
}
function updateCartBadge() {
  const badge = document.querySelector('.nav-cart-count');
  if (!badge) return;
  const count = getCart().length;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function getWishlist() {
  return JSON.parse(localStorage.getItem('hl_wishlist') || '[]');
}
function toggleWishlist(id) {
  let list = getWishlist();
  if (list.includes(id)) {
    list = list.filter((x) => x !== id);
  } else {
    list.push(id);
  }
  localStorage.setItem('hl_wishlist', JSON.stringify(list));
  return list.includes(id);
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
}

function initNavToggle() {
  const burger = document.querySelector('.nav-burger');
  const mobile = document.querySelector('.nav-mobile');
  if (!burger || !mobile) return;
  burger.addEventListener('click', () => {
    mobile.classList.toggle('open');
  });
}

function initWishlistButtons() {
  document.querySelectorAll('[data-wishlist-id]').forEach((btn) => {
    const id = btn.getAttribute('data-wishlist-id');
    if (getWishlist().includes(id)) btn.classList.add('is-saved');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const saved = toggleWishlist(id);
      btn.classList.toggle('is-saved', saved);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initWishlistButtons();
  updateCartBadge();
});
