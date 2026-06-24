// ============================================
// outfit.js — reads ?id= from the URL, finds the
// matching garment in data.js, and renders the
// full detail page: gallery, info, booking card
// with live price calculation, reviews, and
// "Complete the Look" accessories.
// ============================================

function getGarmentFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  return GARMENTS.find((g) => g.id === id) || GARMENTS[0];
}

const DURATIONS = [
  { label: '3 Days', tag: 'Essential', multiplier: 1 },
  { label: '7 Days', tag: 'Leisure', multiplier: 2.2 },
  { label: '14 Days', tag: 'Immersion', multiplier: 3.8 }
];

let activeDuration = 0;
let activeImage = null;
let garment = null;

function renderDetailLayout() {
  const wishlisted = getWishlist().includes(garment.id);

  document.getElementById('detail-layout').innerHTML = `
    <div class="gallery">
      <div class="gallery-main">
        <img id="gallery-main-img" src="${activeImage}" alt="${garment.name}">
      </div>
      <div class="gallery-thumbs" id="gallery-thumbs">
        ${garment.gallery.map((src, i) => `
          <button class="thumb ${src === activeImage ? 'active' : ''}" data-src="${src}" aria-label="View image ${i + 1}">
            <img src="${src}" alt="">
          </button>
        `).join('')}
      </div>
    </div>

    <div class="info">
      <div class="info-tags">
        <span class="collection-pill">Heritage Collection</span>
        <span class="origin">${garment.origin}</span>
      </div>
      <h1>${garment.name}</h1>
      <p class="designer">Designed by <strong>${garment.designer}</strong></p>

      <div class="price-row">
        <span class="price">$${garment.price}</span>
        <span class="price-note">Starting Price / 3 Days</span>
      </div>

      <div class="thread" style="margin: 20px 0;"></div>

      <p class="eyebrow">Description</p>
      <p class="description">${garment.description}</p>
      <a href="#sizing" class="size-link">Size Guide &amp; Fit</a>

      <div class="booking-card">
        <p class="booking-label">Rental Duration</p>
        <div class="duration-row" id="duration-row">
          ${DURATIONS.map((d, i) => `
            <button class="duration-pill ${i === activeDuration ? 'active' : ''}" data-index="${i}">
              <span class="duration-tag">${d.tag}</span>
              <span class="duration-value">${d.label}</span>
            </button>
          `).join('')}
        </div>

        <label class="booking-label" for="event-date">Event Date</label>
        <input id="event-date" type="date">

        <div class="total-row">
          <span>Total Rental Price:</span>
          <strong id="total-price">$${garment.price.toFixed(2)}</strong>
        </div>

        <button class="btn btn-primary btn-block" id="add-to-cart-btn">🛍 Add to Cart</button>
        <button class="btn btn-secondary btn-block ${wishlisted ? 'is-saved' : ''}" id="save-later-btn" data-wishlist-id="${garment.id}">♡ Save for Later</button>
      </div>
    </div>
  `;

  document.querySelectorAll('.thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      activeImage = thumb.getAttribute('data-src');
      document.getElementById('gallery-main-img').src = activeImage;
      document.querySelectorAll('.thumb').forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  document.querySelectorAll('.duration-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      activeDuration = parseInt(pill.getAttribute('data-index'), 10);
      document.querySelectorAll('.duration-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      updateTotal();
    });
  });

  document.getElementById('add-to-cart-btn').addEventListener('click', (e) => {
    addToCart({
      id: garment.id,
      name: garment.name,
      price: getTotal(),
      duration: DURATIONS[activeDuration].label
    });
    e.target.textContent = 'Added to Cart ✓';
    showToast(`${garment.name} added to cart`);
    setTimeout(() => { e.target.innerHTML = '🛍 Add to Cart'; }, 1800);
  });

  initWishlistButtons();
}

function getTotal() {
  return Math.round(garment.price * DURATIONS[activeDuration].multiplier);
}

function updateTotal() {
  document.getElementById('total-price').textContent = `$${getTotal().toFixed(2)}`;
}

function renderReviews() {
  document.getElementById('reviews-layout').innerHTML = `
    <div class="reviews-summary">
      <h2>Customer Impressions</h2>
      <p class="rating-line">★★★★★ <strong>${garment.rating}/5</strong> from ${garment.reviewCount} reviews</p>
      <blockquote>"Wore this to a winter wedding. The fabric weight is perfect and the embroidery is even more stunning in person. Truly felt like royalty."</blockquote>
      <div class="review-thumbs">
        <img src="https://images.pexels.com/photos/35357616/pexels-photo-35357616.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Sasha K., Lagos, Nigeria">
        <img src="https://images.pexels.com/photos/32939462/pexels-photo-32939462.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Marcus R., London, UK">
        <span class="more-thumb">+12</span>
      </div>
    </div>
    <div class="reviews-list">
      ${REVIEWS.map((r) => `
        <div class="review">
          <div class="review-head">
            <div>
              <p class="review-name">${r.name}</p>
              <p class="review-loc">${r.location}</p>
            </div>
            <span class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
          </div>
          <p class="review-text">${r.text}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderAccessories() {
  document.getElementById('ctl-grid').innerHTML = ACCESSORIES.map((a) => `
    <div class="ctl-card">
      <img src="${a.image}" alt="${a.name}">
      <h4>${a.name}</h4>
      <p class="ctl-cat">${a.category}</p>
      <p class="ctl-price">$${a.price} / 3 Days</p>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  garment = getGarmentFromURL();
  activeImage = garment.image;
  document.title = `${garment.name} — Heritage Lux`;
  renderDetailLayout();
  renderReviews();
  renderAccessories();
});
