
jQuery(document).ready(function () {
  bbc_header();
  swiper_sliders();
  parallax();
  modal();
  preloadImages();
});


function modal() {
  var mcFoundersModal = new bootstrap.Modal(document.getElementById('mcFoundersModal'), {
    keyboard: false
  });

  jQuery('.bbbc-mc-founder-box-img').click(function (e) {
    $image = jQuery(this).attr('big-image');
    $title = jQuery(this).attr('big-title');
    jQuery('#mcFoundersModal').find('.bbbc-mc-founder-box-img img').attr('src', $image);
    jQuery('#mcFoundersModal').find('.bbbc-mc-founder-box-title img').attr('src', $title);

    mcFoundersModal.show();

  });
}


function parallax() {
  setTimeout(function () {
    $screen = window.innerWidth;
    if ($screen > 991) {
      jQuery('[data-type="background"]').each(function () {
        var $bgobj = jQuery(this); // assigning the object
        var $transform = 0;
        var $lastScrollTop = 0;
        var $height = jQuery(window).height();
        var $position = $bgobj.offset().top - $height;
        console.log($position);
        jQuery(window).scroll(function () {

          $scroll = jQuery(this).scrollTop();

          if ($scroll > $position) {

            var $speed = parseInt($bgobj.data('speed'));

            console.log($position);
            console.log($scroll);

            if ($scroll > $lastScrollTop) {
              $transform = $transform - $speed;
            } else {
              $transform = $transform + $speed;
            }


            // Put together our final background position
            var coords = $transform + 'px';

            // Move the background
            $bgobj.css({
              transform: 'translateY(' + coords + ')'
            });
            $lastScrollTop = $scroll;
          } else {
            jQuery('[data-type="background"]').removeAttr('style');
          }
        });
      });
    } else {
      jQuery('[data-type="background"]').removeAttr('style');
    }
  }, 2000);
}


function swiper_sliders() {
  var mySwiperLoop = new Swiper(".mySwiperLoop", {
    spaceBetween: 10,
    freeMode: true,
    loop: true,
    simulateTouch: false,
    speed: 5000,
    allowTouchMove: false,
    freeModeMomentum: false,
    slidesPerView: 'auto',
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: false
    },

  });

  var mySwiperLoop = new Swiper(".mySwiperLoop-3", {
    spaceBetween: 10,
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
      reverseDirection: false
    },
  });

  var mySwiperLoopReverse = new Swiper(".mySwiperLoop-Reverse", {
    spaceBetween: 10,
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

  var glowboxmySwiper = new Swiper(".glowbox-mySwiper", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      reverseDirection: true
    },
  });

  if (window.innerWidth < 992) {
    jQuery('.swiper-js-roadmap').addClass('swiper');
    jQuery('.swiper-js-roadmap .row').addClass('swiper-wrapper').removeClass('row');
    jQuery('.swiper-js-roadmap .col-lg-4').addClass('swiper-slide');

    const swiperRoadmap = new Swiper('.swiper-js-roadmap', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      // Navigation arrows

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

    jQuery('.swiper-js-founder').addClass('swiper');
    jQuery('.swiper-js-founder .row').addClass('swiper-wrapper').removeClass('row');
    jQuery('.swiper-js-founder .col-xl-3').addClass('swiper-slide');

    const swiperFounder = new Swiper('.swiper-js-founder', {
      // Optional parameters
      loop: true,
      spaceBetween: 30,
      // Navigation arrows
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });
  }
  if (window.innerWidth < 768) {
    jQuery('.swiper-js-team').addClass('swiper');
    jQuery('.swiper-js-team .row').addClass('swiper-wrapper').removeClass('row');
    jQuery('.swiper-js-team .col-4').addClass('swiper-slide');

    const swiperTeam = new Swiper('.swiper-js-team', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      // Navigation arrows

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });


  }
}

function bbc_header() {
  $('.bbbc-header .navbar-toggler').click(function () {

    $('.bbbc-header').toggleClass('mobile-menu-open');

  });



  $('a[href^="#"]').on('click', function (e) {

    e.preventDefault();

    var target = this.hash;

    var $target = $(target);

    $('html, body').stop().animate({

      'scrollTop': $target.offset().top - 146

    }, 900, 'swing', function () {

      // window.location.hash = target;

    });

  });
}

function preloadImages() {
  jQuery('.bbbc-mc-founder-box-img:not(.bbbc-mc-founder-box-img-modal').each(function (index, element) {
    $image = jQuery(this).attr('big-image');
    $title = jQuery(this).attr('big-title');
    jQuery('<img src="' + $image + '"/>').appendTo('.preload-images');
    jQuery('<img src="' + $title + '"/>').appendTo('.preload-images');
  });

}