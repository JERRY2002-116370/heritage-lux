// ============================================
// home.js — renders the "Trending Pieces" cards
// on the home page using data from data.js.
// ============================================

function renderGarmentCard(garment) {
  const wishlisted = getWishlist().includes(garment.id);
  return `
    <a href="outfit.html?id=${garment.id}" class="g-card">
      <div class="g-card-image">
        <img src="${garment.image}" alt="${garment.name}" loading="lazy">
        ${garment.badge ? `<span class="g-badge">${garment.badge}</span>` : ''}
        <button class="g-save ${wishlisted ? 'is-saved' : ''}" data-wishlist-id="${garment.id}" aria-label="Add to wishlist">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${wishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="g-card-body">
        <div class="g-card-row">
          <h3>${garment.name}</h3>
          <span class="g-price">$${garment.price}<span> / day</span></span>
        </div>
        <p class="g-meta">${garment.fabric} • ${garment.culture}</p>
        <div class="g-tags">${garment.tags.map((t) => `<span class="g-tag">${t}</span>`).join('')}</div>
      </div>
    </a>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('trending-grid');
  if (!grid) return;
  const trending = GARMENTS.slice(0, 3);
  grid.innerHTML = trending.map(renderGarmentCard).join('');
  initWishlistButtons();
});
