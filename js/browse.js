// ============================================
// browse.js — filtering, search, sort, pagination
// for the Cultural Exchanges (browse) page.
// ============================================

const PER_PAGE = 6;

let state = {
  culture: 'All Traditions',
  search: '',
  sort: 'featured',
  page: 1
};

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

function getFiltered() {
  let list = GARMENTS.filter((g) => {
    const matchesCulture = state.culture === 'All Traditions' || g.culture.includes(state.culture);
    const matchesSearch = g.name.toLowerCase().includes(state.search.toLowerCase());
    return matchesCulture && matchesSearch;
  });

  if (state.sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
  if (state.sort === 'newest') list = [...list].sort((a, b) => (b.badge === 'NEW' ? 1 : 0) - (a.badge === 'NEW' ? 1 : 0));

  return list;
}

function render() {
  const filtered = getFiltered();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  state.page = Math.min(state.page, totalPages);
  const visible = filtered.slice((state.page - 1) * PER_PAGE, state.page * PER_PAGE);

  document.getElementById('results-count').textContent = `${filtered.length} pieces found`;

  const grid = document.getElementById('results-grid');
  const empty = document.getElementById('empty-state');

  if (visible.length === 0) {
    grid.classList.add('hidden');
    empty.classList.remove('hidden');
  } else {
    grid.classList.remove('hidden');
    empty.classList.add('hidden');
    grid.innerHTML = visible.map(renderGarmentCard).join('');
    initWishlistButtons();
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pag = document.getElementById('pagination');
  if (totalPages <= 1) {
    pag.innerHTML = '';
    return;
  }
  let html = `<button id="page-prev" aria-label="Previous page" ${state.page === 1 ? 'disabled' : ''}>‹</button>`;
  for (let n = 1; n <= totalPages; n++) {
    html += `<button data-page="${n}" class="${n === state.page ? 'active' : ''}" aria-current="${n === state.page}">${n}</button>`;
  }
  html += `<button id="page-next" aria-label="Next page" ${state.page === totalPages ? 'disabled' : ''}>›</button>`;
  pag.innerHTML = html;

  document.getElementById('page-prev')?.addEventListener('click', () => { state.page = Math.max(1, state.page - 1); render(); });
  document.getElementById('page-next')?.addEventListener('click', () => { state.page = Math.min(totalPages, state.page + 1); render(); });
  pag.querySelectorAll('[data-page]').forEach((btn) => {
    btn.addEventListener('click', () => { state.page = parseInt(btn.getAttribute('data-page'), 10); render(); });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  render();

  document.getElementById('search-input').addEventListener('input', (e) => {
    state.search = e.target.value;
    state.page = 1;
    render();
  });

  document.getElementById('culture-select').addEventListener('change', (e) => {
    state.culture = e.target.value;
    state.page = 1;
    render();
  });

  document.getElementById('sort-select').addEventListener('change', (e) => {
    state.sort = e.target.value;
    state.page = 1;
    render();
  });

  document.querySelectorAll('.size-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.size-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  document.querySelectorAll('.swatch').forEach((sw) => {
    sw.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach((s) => s.classList.remove('active'));
      sw.classList.add('active');
    });
  });

  function clearAll() {
    state = { culture: 'All Traditions', search: '', sort: 'featured', page: 1 };
    document.getElementById('search-input').value = '';
    document.getElementById('culture-select').value = 'All Traditions';
    document.getElementById('sort-select').value = 'featured';
    render();
  }

  document.getElementById('clear-filters').addEventListener('click', clearAll);
  document.getElementById('empty-clear').addEventListener('click', clearAll);
  document.getElementById('apply-filters').addEventListener('click', () => render());
});
