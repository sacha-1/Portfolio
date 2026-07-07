// Menu mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Ferme le menu après un clic sur un lien (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Année automatique dans le footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===========================================================
// Cartothèque : filtres + lightbox
// ===========================================================
const mapGrid = document.getElementById('mapGrid');

if (mapGrid) {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const mapCards = Array.from(mapGrid.querySelectorAll('.map-card'));

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentIndex = 0;

  // --- Filtres ---
  function applyFilter(filter) {
    mapCards.forEach(card => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden-by-filter', !matches);
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      applyFilter(tab.dataset.filter);
    });
  });

  // --- Cartes actuellement visibles (respecte le filtre actif) ---
  function visibleCards() {
    return mapCards.filter(card => !card.classList.contains('hidden-by-filter'));
  }

  // --- Lightbox ---
  function openLightbox(card) {
    // Ne pas ouvrir la lightbox pour une carte "à venir" (sans image réelle)
    if (card.classList.contains('no-image')) return;

    const visible = visibleCards();
    currentIndex = visible.indexOf(card);
    showCurrent(visible);

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function showCurrent(visible) {
    const list = visible || visibleCards();
    if (!list.length) return;
    if (currentIndex < 0) currentIndex = list.length - 1;
    if (currentIndex >= list.length) currentIndex = 0;

    const card = list[currentIndex];
    const img = card.querySelector('img');
    const caption = card.querySelector('.map-card-caption');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showNext(step) {
    const list = visibleCards();
    currentIndex += step;
    showCurrent(list);
  }

  mapCards.forEach(card => {
    card.addEventListener('click', () => openLightbox(card));
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => showNext(-1));
  lightboxNext.addEventListener('click', () => showNext(1));

  // Fermer en cliquant en dehors de l'image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Navigation clavier
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showNext(-1);
    if (e.key === 'ArrowRight') showNext(1);
  });
}
