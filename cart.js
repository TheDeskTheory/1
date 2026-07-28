// Cart logic — localStorage based, shared across all pages
const CART_KEY = "looseleaf_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + qty;
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
}

function setQty(id, qty) {
  const cart = getCart();
  if (qty <= 0) {
    delete cart[id];
  } else {
    cart[id] = qty;
  }
  saveCart(cart);
}

function cartCount() {
  const cart = getCart();
  return Object.values(cart).reduce((sum, q) => sum + q, 0);
}

function cartTotal() {
  const cart = getCart();
  let total = 0;
  for (const id in cart) {
    const p = getProduct(id);
    if (p) total += p.price * cart[id];
  }
  return total;
}

function updateCartBadge() {
  const badge = document.querySelector(".cart-badge");
  if (!badge) return;
  const count = cartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? "inline-flex" : "none";
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
