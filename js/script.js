document.addEventListener("DOMContentLoaded", () => {
  
  //CARRUSEL
  const images = document.querySelectorAll(".slides img");
  if (images.length > 0) {
    let index = 0;
    images[index].classList.add("active");
    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 500);
  }

  //GRÁFICO DE CLIMA
  const ctx = document.getElementById('climaChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [
          {
            label: 'Temperatura Media (°C)',
            data: [5, 6, 9, 14, 18, 21, 25, 26, 23, 18, 12, 8],
            borderColor: '#ed270e',
            backgroundColor: 'rgba(237, 39, 14, 0.4)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          },
          {
            label: 'Precipitaciones (mm)',
            data: [52, 56, 117, 124, 137, 167, 153, 168, 209, 197, 92, 51],
            borderColor: '#888888',
            backgroundColor: 'rgba(136, 136, 136, 0.2)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
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

//JQUERY
$(function () {
  // Acordeón
  if ($("#accordion").length > 0) {
    $("#accordion").accordion({
      collapsible: true,
      animate: false,
      heightStyle: "content",
    });
  }

  if ($("#draggable").length > 0) {
    $("#draggable").draggable();
  }
});