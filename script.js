$(document).ready(function() {
  $(".container").mouseenter(function() {
      $(".card").stop().animate({
          top: "-90px",
      }, "slow");
  }).mouseleave(function() {
      $(".card").stop().animate({
          top: 0,
      }, "slow");
  });

  // Agrega el evento clic al elemento .heart
  $('.valentines').click(function() {
      // Redirigir a otra página HTML en una nueva pestaña
      window.open('carousel/principal.html');
  });
});
