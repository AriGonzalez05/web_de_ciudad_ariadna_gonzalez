document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slides img");
  let index = 0;

  // mostrar la primera imagen
  images[index].classList.add("active");

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 500); // cambia cada 0.5s
});
