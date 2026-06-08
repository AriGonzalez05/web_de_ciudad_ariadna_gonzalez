(function () {
  const pages = [
    { label: '東京',                     href: 'index.html',       key: 'home' },
    { label: 'Visitas',                  href: 'visitas.html',     key: 'visitas' },
    { label: 'Localización y Transporte',href: 'localizacion.html',key: 'localizacion' },
    { label: 'Clima',                    href: 'clima.html',       key: 'clima' },
    { label: 'Consejos',                 href: 'consejos.html',    key: 'consejos' },
  ];

  const currentPage = document.body.getAttribute('data-page') || 'home';

  /* NAV */
  const navLinksHTML = pages.map(p =>
    `<li><a href="${p.href}"${p.key === currentPage ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join('');

  const mobileLinksHTML = pages.map(p =>
    `<li><a href="${p.href}"${p.key === currentPage ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join('');

  const navEl = document.getElementById('mainNav');
  if (navEl) {
    navEl.innerHTML = `
      <a class="nav-logo" href="index.html">東京</a>
      <ul class="nav-links">${navLinksHTML}</ul>
      <button class="hamburger" id="hamburger" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>
    `;
  }

  const mobileMenuEl = document.getElementById('mobileMenu');
  if (mobileMenuEl) {
    mobileMenuEl.innerHTML = `
      <div class="mobile-menu-header">
        <a class="nav-logo" href="index.html">東京</a>
        <button class="close-menu" id="closeMenu" aria-label="Cerrar menú">✕</button>
      </div>
      <ul>${mobileLinksHTML}</ul>
    `;
  }

  /* FOOTER */
  const footerEl = document.getElementById('mainFooter');
  if (footerEl) {
    footerEl.innerHTML = `
      <span class="footer-kanji">東 京</span>
      <span class="footer-logo">Tokio</span>
      <div class="footer-divider"></div>
      <ul class="footer-links">
        ${pages.filter(p => p.key !== 'home').map(p =>
          `<li><a href="${p.href}">${p.label}</a></li>`
        ).join('')}
      </ul>
      <div class="footer-divider"></div>
      <p class="footer-copy">© 2024 Tokio · Una ciudad que no se visita: se vive.</p>
    `;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlayBg  = document.getElementById('overlayBg');
    const closeMenu  = document.getElementById('closeMenu');

    const open  = () => { mobileMenu.classList.add('open'); overlayBg.classList.add('open'); document.body.style.overflow='hidden'; };
    const close = () => { mobileMenu.classList.remove('open'); overlayBg.classList.remove('open'); document.body.style.overflow=''; };

    if (hamburger) hamburger.addEventListener('click', open);
    if (closeMenu) closeMenu.addEventListener('click', close);
    if (overlayBg) overlayBg.addEventListener('click', close);
  });
})();
