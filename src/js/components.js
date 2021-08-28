
$(document).ready(function(){
  $(function () {

    let header = $('.header'),
      html = $('html'),
      burgerBtn = header.find('.js-burger'),
      closeBtn = header.find('.js-close-btn'),
      menuMob = header.find('.js-navbar-mobile'),
      overlay = header.find('.navbar-overlay');

    burgerBtn.on('click', function () {
      if (burgerBtn.hasClass('opened')) {
        closeMenu ();
      } else {
        burgerBtn.addClass('opened');
        menuMob.addClass('opened');
        overlay.fadeIn(700);
        html.addClass('opened');
      }
    });

    function closeMenu () {
      menuMob.removeClass('opened');
      menuMob.addClass('closed');
      html.removeClass('opened');
      burgerBtn.removeClass('opened');
      overlay.fadeOut(700);
      setTimeout(function() {
        menuMob.removeClass('closed');
      },750);
    }

    overlay.on('click', function () {
      closeMenu ();
    });

    closeBtn.on('click', function () { 
      closeMenu ();
    });

    $(window).resize(function () {
      if ($(this).width() > 991 && menuMob.hasClass('opened')) {
        closeMenu ();
      }
    });
  });
});