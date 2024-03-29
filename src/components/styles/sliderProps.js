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
  slidesPerView: 7,
  speed: 400,
  spaceBetween: 10,
  slideToClickedSlide: false,
  createElements: true,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
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

export const featuredNewestService = {
  slidesPerView: 5,
  speed: 600,
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
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slideVisibleClass: "swiper-slide-visible",
  navigation: {
    prevEl: ".swiper-button-prev-newest-service",
    nextEl: ".swiper-button-next-newest-service"
  },
};


export const featuredOtherService = {
  slidesPerView: 2,
  speed: 600,
  spaceBetween: 10,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slideVisibleClass: "swiper-slide-visible",
  navigation: {
    prevEl: ".swiper-button-prev-other-service",
    nextEl: ".swiper-button-next-other-service"
  },
};


export const featuredFreelancer = {
  slidesPerView: 5,
  speed: 600,
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
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slideVisibleClass: "swiper-slide-visible",
  navigation: {
    prevEl: ".swiper-button-prev-freelancer",
    nextEl: ".swiper-button-next-freelancer"
  },
};


export const featuredCarouselPopuplarCategories = {
  slidesPerView: 4,
  speed: 400,
  spaceBetween: 20,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-prev-most-popular",
    prevEl: ".swiper-button-next-most-popular",
  },
};


export const sliderAcademy = {
  slidesPerView: 3,
  speed: 400,
  spaceBetween: 20,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  breakpoints: {
    380: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-academy-next",
    prevEl: ".swiper-button-academy-prev",
  }
};

export const sliderPhoneAcademy = {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 20,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};


export const sliderPopularCategories = {
  slidesPerView: 1,
  speed: 400,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};

export const featuredMoileNewestService = {
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 20,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
};

export const featuredMoileUserProfile = {
  slidesPerView: 1,
  speed: 600,
  spaceBetween: 20,
  slideToClickedSlide: true,
  createElements: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
};