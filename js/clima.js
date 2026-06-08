

document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('climaChart');
  if (!ctx) return;

  const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

  const temperatura = [5.8, 6.1, 9.4, 14.3, 18.8, 22.4, 26.4, 28.1, 24.4, 18.5, 13.4, 8.2];

  const precipitaciones = [5.2, 6.1, 11.7, 13.5, 13.8, 16.8, 15.4, 15.4, 21.4, 19.7, 9.3, 4.4];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: meses,
      datasets: [
        {
          label: 'Temperatura (°C)',
          data: temperatura,
          borderColor: 'rgba(237,39,14,0.9)',
          backgroundColor: 'rgba(237,39,14,0.18)',
          borderWidth: 3,
          fill: true,
          tension: 0.45,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(237,39,14,0.9)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
        },
        {
          label: 'Precipitaciones (mm / 10)',
          data: precipitaciones,
          borderColor: 'rgba(150,150,150,0.7)',
          backgroundColor: 'rgba(150,150,150,0.12)',
          borderWidth: 2,
          fill: true,
          tension: 0.45,
          pointRadius: 3,
          pointBackgroundColor: 'rgba(150,150,150,0.8)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          borderDash: [6, 3],
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index',
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: 'rgba(255,255,255,0.95)',
          borderColor: '#ddd',
          borderWidth: 1,
          titleColor: '#111',
          bodyColor: '#444',
          titleFont: { family: "'Roboto Mono', monospace", size: 11 },
          bodyFont:  { family: "'Roboto Mono', monospace", size: 11 },
          padding: 12,
          callbacks: {
            label: function(context) {
              const ds = context.dataset.label;
              const val = context.parsed.y;
              if (ds.includes('Temp')) return `  Temp. media: ${val} °C`;
              return `  Precipit.: ${(val * 10).toFixed(0)} mm`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: "'Roboto Mono', monospace", size: 11 },
            color: '#555',
          },
          border: { color: '#ccc' }
        },
        y: {
          min: 0,
          max: 35,
          ticks: {
            stepSize: 5,
            font: { family: "'Roboto Mono', monospace", size: 11 },
            color: '#555',
            callback: v => v + ' °C'
          },
          grid: { color: 'rgba(0,0,0,0.06)' },
          border: { color: '#ccc' }
        }
      }
    }
  });
});
