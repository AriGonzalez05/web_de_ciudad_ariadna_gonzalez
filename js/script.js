document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. LÓGICA DEL CARRUSEL (Solo se ejecuta en el index) ---
  const images = document.querySelectorAll(".slides img");
  if (images.length > 0) { // Comprobamos que las imágenes existen
    let index = 0;
    images[index].classList.add("active");
    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 500);
  }

  // --- 2. GRÁFICO DE CLIMA (Solo se ejecuta en clima.html) ---
  const ctx = document.getElementById('climaChart');
  if (ctx) { // Comprobamos que el canvas del gráfico existe
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [
          {
            label: 'Temperatura Media (°C)',
            data: [5, 6, 9, 14, 18, 21, 25, 26, 23, 18, 12, 8],
            borderColor: '#ed270e', // Rojo del diseño
            backgroundColor: 'rgba(237, 39, 14, 0.4)', // Fondo rojo semitransparente
            borderWidth: 2,
            fill: true,
            tension: 0.4 // Hace que la línea sea una curva (olita)
          },
          {
            label: 'Precipitaciones (mm)',
            data: [52, 56, 117, 124, 137, 167, 153, 168, 209, 197, 92, 51],
            borderColor: '#888888', // Gris
            backgroundColor: 'rgba(136, 136, 136, 0.2)', // Fondo gris semitransparente
            borderWidth: 2,
            fill: true,
            tension: 0.4 // Hace que la línea sea una curva (olita)
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
});

// --- 3. LÓGICA DE JQUERY (Visitas y Transporte) ---
$(function () {
  // Acordeón (solo si existe en la página)
  if ($("#accordion").length > 0) {
    $("#accordion").accordion({
      collapsible: true,
      animate: false,
      heightStyle: "content",
    });
  }

  // Elemento arrastrable (solo si existe en la página)
  if ($("#draggable").length > 0) {
    $("#draggable").draggable();
  }
});