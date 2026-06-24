// ============================================
// account.js — renders the profile, active rentals,
// history, and wishlist from data.js, and handles
// sidebar tab switching (visual only — all tabs
// currently show the same dashboard content, since
// there's no backend yet to hold separate data).
// ============================================

function renderProfile() {
  document.getElementById('account-name').textContent = ACCOUNT.name;
  document.getElementById('account-since').textContent = `Member since ${ACCOUNT.memberSince}`;
  document.getElementById('account-tier').textContent = ACCOUNT.tier;
  document.getElementById('account-points').textContent = ACCOUNT.points.toLocaleString();
  document.getElementById('account-points-next').textContent = `${ACCOUNT.pointsToNext} pts to Platinum Status`;
}

function renderActiveRentals() {
  document.getElementById('rentals-grid').innerHTML = ACCOUNT.activeRentals.map((r) => `
    <div class="rental-card">
      <div class="rental-image">
        <img src="${r.image}" alt="${r.name}">
        <span class="rental-status">${r.status}</span>
        <div class="rental-image-text">
          <p class="rental-culture">${r.culture}</p>
          <h3>${r.name}</h3>
        </div>
      </div>
      <div class="rental-footer">
        <div>
          <p class="return-label">Return Date</p>
          ${r.returnToday
            ? `<p class="return-urgent">! Return Today</p>`
            : `<p class="return-normal">${r.daysRemaining} Days Remaining</p>`}
        </div>
        <button class="btn btn-secondary">Extend</button>
      </div>
    </div>
  `).join('');
}

function renderHistory() {
  document.getElementById('history-list').innerHTML = ACCOUNT.history.map((h) => `
    <div class="history-item">
      <img src="${h.image}" alt="${h.name}">
      <div class="history-text">
        <p class="history-name">${h.name}</p>
        <p class="history-dates">${h.dates}</p>
      </div>
      <div class="history-actions">
        <button class="btn btn-secondary btn-sm">Review</button>
        <button class="btn btn-primary btn-sm">Rent Again</button>
      </div>
    </div>
  `).join('');
}

function renderWishlist() {
  const grid = document.getElementById('wishlist-grid');
  grid.innerHTML = ACCOUNT.wishlist.map((w) => `<img src="${w.image}" alt="">`).join('')
    + `<a href="browse.html" class="wishlist-add">+ Browse</a>`;
}

function initTabs() {
  document.querySelectorAll('.sidebar-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      // In a future version with a backend, this would swap the
      // visible panel (Profile / Rentals / Payments / Settings).
      // For now the dashboard below always shows the same data.
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderActiveRentals();
  renderHistory();
  renderWishlist();
  initTabs();
});
