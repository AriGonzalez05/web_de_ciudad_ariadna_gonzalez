
document.addEventListener('DOMContentLoaded', () => {


document.addEventListener('DOMContentLoaded', () => {

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu ul a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentFile) {
      link.classList.add('active');
    }
  });

  /* Menú hamburguesa */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const overlayBg   = document.getElementById('overlayBg');
  const closeMenu   = document.getElementById('closeMenu');

  function openMenu() {
    mobileMenu.classList.add('open');
    overlayBg.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    overlayBg.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);
  if (overlayBg) overlayBg.addEventListener('click', closeMobileMenu);
}); 
});