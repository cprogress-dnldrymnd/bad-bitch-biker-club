jQuery(document).ready(function () {
  swiper__sliders();
  header_social();
  mobile_menu();
  anchor_links();
});

function mobile_menu() {
  if (window.innerWidth < 992) {
    var myOffcanvas = document.getElementById('offCanvasMenu')
    myOffcanvas.addEventListener('show.bs.offcanvas', function () {
      jQuery('body').addClass('menu-active');
    });
    myOffcanvas.addEventListener('shown.bs.offcanvas', function () {
      setTimeout(function () {
        jQuery('body').addClass('show-menu');
      }, 300);
    });
    myOffcanvas.addEventListener('hide.bs.offcanvas', function () {
      jQuery('body').removeClass('show-menu');
    });
    myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
      jQuery('body').removeClass('menu-active');
    });

    jQuery('.nav-link').click(function (e) {
      jQuery('.navbar-toggler').click();
    });
  }
}

function anchor_links() {
  var $root = jQuery('html, body');

  jQuery('a[href^="#"]').click(function () {
    $root.animate({
      scrollTop: (jQuery(jQuery.attr(this, 'href')).offset().top - 123)
    }, 500);

    return false;
  });
}

function header_social() {
  if (window.innerWidth < 992) {
    jQuery('header .social').appendTo('.navbar-collapse').removeClass('d-none');
  }
}

function swiper__sliders() {
  var mySwiperLoop = new Swiper(".mySwiperAvatar", {
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    slidesPerView: 'auto',
    simulateTouch: false,
    speed: 5000,
    allowTouchMove: false,
    freeModeMomentum: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

  });



  var mySwiperLoop = new Swiper(".mySwiperAvatar-Single", {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    simulateTouch: false,
    allowTouchMove: false,
    freeModeMomentum: false,
    autoplay: {
      delay: 350,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

  });





  var mySwiperLoopReverse = new Swiper(".mySwiperAvatar-Reverse", {
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    slidesPerView: 'auto',
    simulateTouch: false,
    speed: 5000,
    allowTouchMove: false,
    freeModeMomentum: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true
    },
  });


  if (window.innerWidth < 768) {
    jQuery('.swiper-js-team').addClass('swiper');
    jQuery('.swiper-js-team .row').addClass('swiper-wrapper').removeClass('row g5');
    jQuery('.swiper-js-team .col-4').addClass('swiper-slide').removeClass('col-4');
    const swiperTeam = new Swiper('.swiper-js-team', {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next-team',
        prevEl: '.swiper-button-prev-team',
      },
    });
  }
}