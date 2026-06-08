const transportData = {
  metro: {
    title: 'Metro de Tokio',
    content: `
      <p>El metro de Tokio es uno de los sistemas de transporte subterráneo más eficientes y concurridos del mundo. Operado principalmente por Tokyo Metro y Toei, conecta prácticamente todos los rincones de la ciudad.</p>
      <p>Con más de 300 estaciones y 13 líneas, el metro transporta a más de 8 millones de pasajeros al día. Los trenes circulan con una puntualidad casi mítica, con retrasos medios de apenas 30 segundos.</p>
      <p><strong style="color:var(--rojo)">Consejos prácticos:</strong></p>
      <ul>
        <li>Compra una tarjeta IC (Suica o Pasmo) para pagar sin billete físico</li>
        <li>Los trenes tienen vagones reservados para mujeres en hora punta</li>
        <li>Se habla en voz baja y los teléfonos se ponen en silencio</li>
        <li>Las líneas de colores facilitan mucho la orientación</li>
        <li>La app Tokyo Subway Navigation es muy útil para planificar rutas</li>
      </ul>
    `
  },
  trenes: {
    title: 'Trenes — Shinkansen y JR',
    content: `
      <p>Japón es famoso por sus trenes de alta velocidad, los Shinkansen, que conectan Tokio con el resto del país a velocidades de hasta 320 km/h. Desde la estación de Tokio salen líneas hacia Kioto, Osaka, Hiroshima y más.</p>
      <p>Dentro de la ciudad, la red de trenes JR (Japan Railways) es fundamental. La línea Yamanote es especialmente útil, ya que forma un bucle que une las principales zonas de Tokio.</p>
      <p><strong style="color:var(--rojo)">Lo más destacado:</strong></p>
      <ul>
        <li>JR Pass: bono para turistas que permite viajes ilimitados en JR durante 7, 14 o 21 días</li>
        <li>La Línea Yamanote conecta Shibuya, Shinjuku, Harajuku, Akihabara y Ueno</li>
        <li>Los Shinkansen son la forma más rápida de llegar a Kioto o Osaka</li>
        <li>Siempre puntualidad casi perfecta</li>
      </ul>
    `
  },
  otros: {
    title: 'Otros medios de transporte',
    content: `
      <p>Además del metro y los trenes, Tokio cuenta con una amplia red de autobuses, taxis y medios alternativos que complementan el sistema de transporte público.</p>
      <p>Los autobuses son útiles para zonas no cubiertas por el metro, aunque sus rutas pueden ser más difíciles de entender. Los taxis son abundantes pero más caros que en Europa.</p>
      <p><strong style="color:var(--rojo)">Opciones disponibles:</strong></p>
      <ul>
        <li>Autobuses urbanos: cubren zonas alejadas del metro, aceptan tarjeta IC</li>
        <li>Taxis: abundantes, pero caros para distancias largas</li>
        <li>Bicicleta: muchos barrios tienen servicio de bikesharing (Docomo Cycle)</li>
        <li>Tranvía Arakawa: el único tranvía que queda en Tokio, pintoresco</li>
        <li>Ferry: conecta algunos barrios a lo largo del río Sumida</li>
      </ul>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const overlay    = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody  = document.getElementById('modalBody');
  const closeBtn   = document.getElementById('modalClose');

  document.querySelectorAll('.transport-card').forEach(card => {
    card.addEventListener('click', () => {
      const key  = card.getAttribute('data-modal');
      const data = transportData[key];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalBody.innerHTML    = data.content;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
