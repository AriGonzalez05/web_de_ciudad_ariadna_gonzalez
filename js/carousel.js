document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const imgs = Array.from(track.querySelectorAll('img'));
  if (imgs.length === 0) return;

  let current = 0;

  imgs.forEach((img, i) => {
    img.style.position = 'absolute';
    img.style.top      = '0';
    img.style.left     = '0';
    img.style.width    = '100%';
    img.style.height   = '100%';
    img.style.objectFit = 'cover';
    img.style.opacity  = i === 0 ? '1' : '0';
    img.style.transition = 'opacity 0.4s ease';
  });

  setInterval(() => {
    imgs[current].style.opacity = '0';
    current = (current + 1) % imgs.length;
    imgs[current].style.opacity = '1';
  }, 2000);
});
