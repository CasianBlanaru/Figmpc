import Swiper from 'swiper';
import { Pagination, A11y, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

class ServiceCardSlider {
  constructor() {
    this.sliders = [];
    this.init();
  }

  init() {
    const sliderElements = document.querySelectorAll('.ce-slider-service-cards');

    if (!sliderElements.length) {
      return;
    }

    for (const element of sliderElements) {
      try {
        const swiperContainer = element.querySelector('.swiper');

        if (!swiperContainer) continue;

        const sliderId = element.id || `service-cards-slider-${this.sliders.length}`;

        if (!element.id) {
          element.setAttribute('id', sliderId);
        }

        element.setAttribute('role', 'region');
        element.setAttribute('aria-roledescription', 'Service Card Navigation');

        const slides = swiperContainer.querySelectorAll('.swiper-slide');

        // Add ARIA roles and labels to slides
        slides.forEach((slide, index) => {
          slide.setAttribute('role', 'group');
          slide.setAttribute('aria-roledescription', 'Service Card');
          slide.setAttribute('aria-label', `Service Card ${index + 1} von ${slides.length}`);
        });

        // Create notification region for screen readers
        const notificationRegion = document.createElement('div');

        notificationRegion.className = 'swiper-notification sr-only';
        notificationRegion.setAttribute('aria-live', 'polite');
        notificationRegion.setAttribute('aria-atomic', 'true');
        swiperContainer.appendChild(notificationRegion);

        const paginationConfig = {
          el: element.querySelector('.swiper-pagination'),
          type: 'bullets',
          clickable: true,
          bulletElement: 'button',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          renderBullet: (index, className) => {
            return `<button class="${className}" aria-label="Zu Service Card ${index + 1} wechseln" role="tab"></button>`;
          },
          enabled: false,
          dynamicBullets: false,
        };

        const hasMobileLoop = slides.length > 1;  // Mobile: 1 slidesPerView
        const hasTabletLoop = slides.length > 1;  // Tablet: 1 slidesPerView
        const hasDesktopLoop = slides.length > 3; // Desktop: 3 slidesPerView

        const mobileMinSlides = 2 * 1; // 2 Slides für Mobile (1 slidesPerView)
        const tabletMinSlides = 2 * 1; // 2 Slides für Tablet (1 slidesPerView)
        const desktopMinSlides = 2 * 3; // 6 Slides für Desktop (3 slidesPerView)

        const hasSlidesForMobileLoop = slides.length >= mobileMinSlides;
        const hasSlidesForTabletLoop = slides.length >= tabletMinSlides;
        const hasSlidesForDesktopLoop = slides.length >= desktopMinSlides;

        const swiper = new Swiper(swiperContainer, {
          modules: [Pagination, A11y, Keyboard, Navigation],

          // Enhanced accessibility configuration
          a11y: {
            enabled: true,
            paginationBulletMessage: 'Zu Service Card {{index}} wechseln',
            slideLabelMessage: 'Service Card {{index}} von {{slidesLength}}',
            containerMessage: 'Service Card Navigation',
            notificationClass: 'swiper-notification sr-only',
            id: `swiper-${sliderId}`,
            prevSlideMessage: 'Vorherige Karte',
            nextSlideMessage: 'Nächste Karte',
          },

          // Navigation buttons
          navigation: {
            nextEl: element.querySelector('.swiper-button-next'),
            prevEl: element.querySelector('.swiper-button-prev'),
            disabledClass: 'opacity-50 cursor-not-allowed',
            lockClass: 'swiper-button-lock',
            hiddenClass: 'swiper-button-hidden',
          },

          // Enhanced keyboard support
          keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
          },

          // Pagination configuration
          pagination: paginationConfig,

          // Responsive settings
          breakpoints: {
            0: {
              enabled: true,
              slidesPerView: 1,
              spaceBetween: 16,
              width: null,
              centeredSlides: true,
              slidesPerGroup: 1,
              loop: hasMobileLoop && hasSlidesForMobileLoop,
              pagination: {
                ...paginationConfig,
                enabled: true,
              },
            },
            640: {  // sm
              enabled: true,
              slidesPerView: 1,
              spaceBetween: 24,
              width: null,
              centeredSlides: false,
              slidesPerGroup: 1,
              loop: hasTabletLoop && hasSlidesForTabletLoop,
              pagination: {
                ...paginationConfig,
                enabled: true,
              },
            },
            1024: { // lg
              enabled: true,
              slidesPerView: Math.min(3, slides.length),
              spaceBetween: 30,
              width: null,
              slidesPerGroup: 1,
              centeredSlides: false,
              loop: hasDesktopLoop && hasSlidesForDesktopLoop,
              pagination: {
                ...paginationConfig,
                enabled: true,
              },
            },
          },

          // General settings
          grabCursor: false,
          slidesPerView: 1,
          spaceBetween: 16,
          loop: hasMobileLoop && hasSlidesForMobileLoop,
          watchSlidesProgress: true,
          preventClicks: true,
          preventClicksPropagation: true,
          observer: true,
          observeParents: true,
          resizeObserver: true,
          centeredSlidesBounds: true,
          loopAdditionalSlides: 1,
          loopPreventsSlide: true,

          // Respect reduced motion preferences
          speed: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300,

          on: {
            init: (swiperInstance) => {
              this.updateA11yNotification(swiperInstance);
              this.updatePaginationVisibility(swiperInstance);
              this.setEqualHeights();
            },
            slideChange: (swiperInstance) => {
              this.updateA11yNotification(swiperInstance);
              this.setEqualHeights();
            },
            resize: (swiperInstance) => {
              this.updateA11yNotification(swiperInstance);
              this.updatePaginationVisibility(swiperInstance);
              this.setEqualHeights();
            },
            breakpoint: () => {
              this.setEqualHeights();
            },
          },
        });

        this.sliders.push(swiper);
      } catch (error) {
        console.error('Error initializing ServiceCardSlider:', error);
      }
    }

    // Set up window events for equal heights
    setTimeout(() => this.setEqualHeights(), 100);
    window.addEventListener('resize', () => this.setEqualHeights());
    window.addEventListener('load', () => setTimeout(() => this.setEqualHeights(), 300));
  }

  // Helper method to update ARIA notification
  updateA11yNotification(swiper) {
    if (!swiper?.el) return;

    const liveRegion = swiper.el.querySelector('.swiper-notification');

    if (liveRegion) {
      const currentIndex = swiper.realIndex + 1;
      const total = swiper.slides.length;

      liveRegion.textContent = `Service Card ${currentIndex} von ${total}`;
    }
  }

  // Helper method to update pagination visibility
  updatePaginationVisibility(swiper) {
    if (!swiper?.el) return;

    const paginationElement = swiper.el.querySelector('.swiper-pagination');

    if (!paginationElement) return;

    const isMobile = window.innerWidth < 640; // sm breakpoint

    if (isMobile) {
      paginationElement.style.display = 'none';
      if (swiper.pagination) {
        swiper.pagination.enabled = false;
        swiper.pagination.update();
      }
    } else {
      paginationElement.style.display = '';
      if (swiper.pagination) {
        swiper.pagination.enabled = true;
        swiper.pagination.update();
      }
    }
  }

  // Set equal heights for service cards
  setEqualHeights() {
    // For slider service cards
    const sliderContainers = document.querySelectorAll('.ce-slider-service-cards');

    sliderContainers.forEach(container => {
      // Find all slides within this container
      const slides = container.querySelectorAll('.swiper-slide');

      // Reset heights to auto first to get natural height
      slides.forEach(slide => {
        const article = slide.querySelector('article');

        if (article) {
          article.style.height = 'auto';
        }
      });

      // Find tallest slide
      let maxHeight = 0;

      slides.forEach(slide => {
        const article = slide.querySelector('article');

        if (article && article.offsetHeight > maxHeight) {
          maxHeight = article.offsetHeight;
        }
      });

      // Apply max height to all slides
      if (maxHeight > 0) {
        slides.forEach(slide => {
          const article = slide.querySelector('article');

          if (article) {
            article.style.height = maxHeight + 'px';
          }
        });
      }
    });

    // For grid layout cards
    const gridContainers = document.querySelectorAll('.grid.h-full');

    gridContainers.forEach(container => {
      // Find all cards within this container
      const cards = container.querySelectorAll('article');

      // Reset heights to auto first
      cards.forEach(card => {
        card.style.height = 'auto';
      });

      // Find tallest card
      let maxHeight = 0;

      cards.forEach(card => {
        if (card.offsetHeight > maxHeight) {
          maxHeight = card.offsetHeight;
        }
      });

      // Apply max height to all cards
      if (maxHeight > 0) {
        cards.forEach(card => {
          card.style.height = maxHeight + 'px';
        });
      }
    });
  }

  // Enhanced destroy method
  destroy() {
    for (const slider of this.sliders) {
      if (slider?.destroy) {
        try {
          slider.destroy(true, true);
        } catch (error) {
          console.error('Error destroying ServiceCardSlider:', error);
        }
      }
    }
    this.sliders = [];
  }
}

export default ServiceCardSlider;
