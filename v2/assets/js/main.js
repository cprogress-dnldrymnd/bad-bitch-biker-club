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
}
