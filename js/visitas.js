$(document).ready(function () {
  $('.accordion-trigger').on('click', function () {
    const targetId = $(this).data('target');
    const $content = $('#' + targetId);
    const $arrow   = $(this).find('.accordion-arrow');
    const isOpen   = $(this).hasClass('open');

    // cerrar
    $('.accordion-content').slideUp(300);
    $('.accordion-trigger').removeClass('open');

    // abrir si está cerrad o
    if (!isOpen) {
      $content.slideDown(350);
      $(this).addClass('open');
    }
  });
});
