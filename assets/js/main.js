jQuery(document).ready(function () {
  swiper__sliders();
});


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