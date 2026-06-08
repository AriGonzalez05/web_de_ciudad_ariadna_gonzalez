document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const imgs = track.querySelectorAll('img');
  let current = 0;

  // Mostramos solo la img activa
  imgs.forEach((img, i) => {
    img.style.position   = i === 0 ? 'relative' : 'absolute';
    img.style.top        = '0';
    img.style.left       = '0';
    img.style.opacity    = i === 0 ? '1' : '0';
    img.style.transition = 'opacity 0.15s ease';
  });

  // Cambio rápido, efecto gif
  setInterval(() => {
    imgs[current].style.opacity = '0';
    imgs[current].style.position = 'absolute';
    current = (current + 1) % imgs.length;
    imgs[current].style.position = 'relative';
    imgs[current].style.opacity = '1';
  }, 1800);
});

