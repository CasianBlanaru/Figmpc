// Contact Cards Slider
import Swiper from 'swiper';
import { Pagination, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

class ContactCardsSlider {
  constructor() {
    this.sliders = [];
    this.init();
  }

  init() {

    const sliderElements = document.querySelectorAll('.ce-slider-contact-cards');

    if (sliderElements.length === 0) return;

    sliderElements.forEach((sliderElement, index) => {
      const sliderId = `contact-cards-${index}`;

      sliderElement.setAttribute('id', sliderId);

      const swiperContainer = sliderElement.querySelector('.swiper');

      if (!swiperContainer) return;

      const slides = sliderElement.querySelectorAll('.swiper-slide');

      if (slides.length === 0) return;

      const paginationElement = sliderElement.querySelector('.swiper-pagination');

      // Pagination configuration
      const paginationConfig = {
        el: paginationElement,
        type: 'bullets',
        clickable: true,
        bulletElement: 'button',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        renderBullet: (index, className) => {
          return `<button class="${className}" aria-label="Contact person ${index + 1}" role="tab"></button>`;
        },
        enabled: true,
        dynamicBullets: false,
      };


      // Initialize swiper
      const swiper = new Swiper(swiperContainer, {
        modules: [Pagination, A11y, Keyboard],

        // Enhanced accessibility
        a11y: {
          enabled: true,
          paginationBulletMessage: 'Contact person {{index}}',
          slideLabelMessage: 'Contact person {{index}} of {{slidesLength}}',
          containerMessage: 'Contact person list',
          notificationClass: 'swiper-notification sr-only',
          id: `swiper-${sliderId}`,
        },

        // Enhanced keyboard support
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },

        // Pagination configuration
        pagination: paginationConfig,

        // Responsive settings (mobile only)
        breakpoints: {
          // Mobile (hidden by sm:hidden CSS class on larger screens)
          0: {
            enabled: true,
            slidesPerView: 1,
            spaceBetween: 16,
            width: null,
            centeredSlides: false,
            loop: slides.length > 1,
            pagination: {
              ...paginationConfig,
              enabled: true,
            },
          },
        },

        // General settings
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 16,
        loop: slides.length > 1,
        watchSlidesProgress: true,
        preventClicks: false,
        speed: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300,
      });

      this.sliders.push(swiper);
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new ContactCardsSlider();
});

export default ContactCardsSlider;
