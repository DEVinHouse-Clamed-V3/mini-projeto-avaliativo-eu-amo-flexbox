var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.s-banner .container-custom .slide-banner .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.s-banner .container-custom .slide-banner .swiper-button-next',
    prevEl: '.s-banner .container-custom .slide-banner .swiper-button-prev',
  },
});

const tabMedicines = document.querySelector('.tab-medicines');
