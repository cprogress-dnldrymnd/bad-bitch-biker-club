jQuery(document).ready(function () {
  swiper_sliders();
});

function swiper_sliders() {
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
