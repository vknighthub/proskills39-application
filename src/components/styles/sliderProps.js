import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);
export const homeSlider = {
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  centeredSlides: true,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 3,
  initialSlide: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".homeslider-nav .swiper-button-next",
    prevEl: ".homeslider-nav .swiper-button-prev",
  }
};

export const featuredCarousel = {
  slidesPerView: 4,
  speed: 400,
  spaceBetween: 20,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".featured-carousel-icon.swiper-button-next",
    prevEl: ".featured-carousel-icon.swiper-button-prev",
  },
};

export const categoriesBar = {
  slidesPerView: "auto",
  speed: 400,
  spaceBetween: 10,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  loopedSlides: 11,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
export const artworksSlider = {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 0,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  navigation: {
    nextEl: ".artworks-carousel .swiper-button-next",
    prevEl: ".artworks-carousel .swiper-button-prev",
  },
};

export const artworksCarousel = {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 0,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
export const iconSlider = {
  slidesPerView: 5,
  spaceBetween: 8,
  initialSlide: 0,
  watchSlidesProgress: true,
  slideVisibleClass: "swiper-slide-visible",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
