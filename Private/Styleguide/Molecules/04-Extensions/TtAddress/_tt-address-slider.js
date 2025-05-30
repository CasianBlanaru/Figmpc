import Swiper from 'swiper';
import { Pagination, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

class TtAddressSlider {
  constructor() {
    this.sliders = [];
    this.init();
  }

  init() {
    // Search for tt-address containers (with or without slider classes)
    const addressContainers = document.querySelectorAll('.tt-address, [id^="tt-address-slider-"]');

    if (!addressContainers.length) {
      return;
    }

    for (const container of addressContainers) {
      try {
        // Check if slider structure already exists
        const swiperContainerInitial = container.querySelector('.swiper');
        const listContainer = container.querySelector('.tt_address_list');

        let sliderId;

        let swiperContainer = swiperContainerInitial;

        // If no slider structure exists but a list is present, convert it
        if (!swiperContainer && listContainer) {
          sliderId = `tt-address-slider-${Math.floor(Math.random() * 1000)}`;

          // Set container ID
          container.setAttribute('id', sliderId);
          container.classList.add('relative');

          // Create swiper container
          swiperContainer = document.createElement('div');
          swiperContainer.className = 'swiper relative w-full';

          // Create swiper wrapper
          const swiperWrapper = document.createElement('div');

          swiperWrapper.className = 'swiper-wrapper';

          // Add pagination
          const pagination = document.createElement('div');

          pagination.className = 'swiper-pagination js-pagination-conditional relative flex justify-center items-center gap-1 mt-8';
          pagination.setAttribute('role', 'group');
          pagination.setAttribute('aria-label', 'Address list navigation');

          // Move all articles to the wrapper
          const articles = Array.from(listContainer.querySelectorAll('article'));

          for (const article of articles) {
            const slide = document.createElement('div');

            slide.className = 'swiper-slide flex flex-col items-center';
            slide.appendChild(article.cloneNode(true));
            swiperWrapper.appendChild(slide);
          }

          // Build DOM
          swiperContainer.appendChild(swiperWrapper);

          // Replace list with new swiper container
          listContainer.innerHTML = '';
          listContainer.appendChild(swiperContainer);
          listContainer.appendChild(pagination);

          // Set ARIA attributes for container
          container.setAttribute('role', 'region');
          container.setAttribute('aria-roledescription', 'Address list');
        } else {
          // Use existing ID or create a new one
          sliderId = container.id || `tt-address-slider-${Math.floor(Math.random() * 1000)}`;

          if (!container.id) {
            container.setAttribute('id', sliderId);
          }

          // If swiper structure already exists, use it
          if (!swiperContainer) {
            return;
          }
        }

        // Set ARIA attributes
        container.setAttribute('role', 'region');
        container.setAttribute('aria-roledescription', 'Address list');

        // Find slides
        const slides = swiperContainer.querySelectorAll('.swiper-slide');

        if (!slides.length) {
          return;
        }

        // Add ARIA attributes to slides
        slides.forEach((slide, index) => {
          slide.setAttribute('role', 'group');
          slide.setAttribute('aria-roledescription', 'Address');
          slide.setAttribute('aria-label', `Address ${index + 1} of ${slides.length}`);
        });

        // Create notification region for screen readers
        const notificationRegion = document.createElement('div');

        notificationRegion.className = 'swiper-notification sr-only';
        notificationRegion.setAttribute('aria-live', 'polite');
        notificationRegion.setAttribute('aria-atomic', 'true');
        swiperContainer.appendChild(notificationRegion);

        // Find or create pagination
        const paginationElement = container.querySelector('.js-pagination-conditional') ||
                                  container.querySelector('.swiper-pagination');

        const paginationConfig = {
          el: paginationElement,
          type: 'bullets',
          clickable: true,
          bulletElement: 'button',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          renderBullet: (index, className) => {
            return `<button class="${className}" aria-label="Go to address ${index + 1}" role="tab"></button>`;
          },
          enabled: false,
          dynamicBullets: false,
        };

        // Determine if we have enough slides for loop mode (need at least one more than slidesPerView)
        const hasMobileLoop = slides.length > 1;
        const hasTabletLoop = slides.length > 2;
        const hasDesktopLoop = slides.length > 3;

        // Check if we have exactly 2 slides (for centering)
        const hasExactlyTwoSlides = slides.length === 2;

        // Calculate swiper width based on slides
        const calculateWidth = () => {
          if (hasExactlyTwoSlides && window.innerWidth >= 768 && window.innerWidth < 1024) {
            // If viewing on tablet with exactly 2 slides, use 80% width
            return '90%';
          }
          return null; // Default: full width
        };

        const swiper = new Swiper(swiperContainer, {
          modules: [Pagination, A11y, Keyboard],

          // Enhanced accessibility
          a11y: {
            enabled: true,
            paginationBulletMessage: 'Go to address {{index}}',
            slideLabelMessage: 'Address {{index}} of {{slidesLength}}',
            containerMessage: 'Address list',
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

          // Responsive settings
          breakpoints: {
            0: {
              enabled: true,
              slidesPerView: 1,
              spaceBetween: 16,
              width: null,
              centeredSlides: false,
              loop: hasMobileLoop,
              pagination: {
                enabled: true,
              },
            },
            768: {
              enabled: true,
              slidesPerView: hasExactlyTwoSlides ? 2 : 2,
              spaceBetween: hasExactlyTwoSlides ? 40 : 16,
              width: calculateWidth(),
              centeredSlides: hasExactlyTwoSlides,
              centerInsufficientSlides: hasExactlyTwoSlides,
              loopAdditionalSlides: hasExactlyTwoSlides ? 0 : 1,
              loopFillGroupWithBlank: hasExactlyTwoSlides,
              loop: hasTabletLoop,
              pagination: {
                ...paginationConfig,
                enabled: true,
              },
            },
            1024: {
              enabled: false,
              slidesPerView: 3,
              spaceBetween: 24,
              width: null,
              centeredSlides: false,
              loop: hasDesktopLoop,
              pagination: {
                ...paginationConfig,
                enabled: false,
              },
            },
          },

          // General settings
          grabCursor: true,
          slidesPerView: 1,
          spaceBetween: 16,
          loop: hasMobileLoop, // Default is mobile setting
          watchSlidesProgress: true,
          preventClicks: false,
          preventClicksPropagation: false,
          observer: true,
          observeParents: true,
          resizeObserver: true,
          centeredSlidesBounds: hasExactlyTwoSlides,

          // Respect reduced motion preferences
          speed: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300,

          on: {
            init: (swiperInstance) => {
              this.updateA11yNotification(swiperInstance);
              this.updateSliderState(swiperInstance);
            },
            slideChange: (swiperInstance) => {
              this.updateA11yNotification(swiperInstance);
            },
            resize: (swiperInstance) => {
              this.updateA11yNotification(swiperInstance);
              this.updateSliderState(swiperInstance);
            },
          },
        });

        this.sliders.push(swiper);
      } catch (error) {
        console.error('Error initializing TtAddressSlider:', error);
      }
    }
  }

  // Helper method to update ARIA notification
  updateA11yNotification(swiper) {
    if (!swiper?.el) return;

    const liveRegion = swiper.el.querySelector('.swiper-notification');

    if (liveRegion) {
      const currentIndex = swiper.realIndex + 1;
      const total = swiper.slides.length;

      liveRegion.textContent = `Address ${currentIndex} of ${total}`;
    }
  }

  // Helper method to update slider state based on screen size
  updateSliderState(swiper) {
    if (!swiper?.el) return;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const paginationElement = swiper.el.querySelector('.swiper-pagination');
    const hasExactlyTwoSlides = swiper.slides.length === 2;

    // On mobile and tablet: enable slider and pagination
    if (isMobile || isTablet) {
      // Enable swiper for mobile and tablet view
      swiper.enable();

      // Apply centered slides for exactly 2 slides on tablet view
      if (isTablet && hasExactlyTwoSlides) {
        swiper.params.centeredSlides = true;
        swiper.params.centerInsufficientSlides = true;
        swiper.params.centeredSlidesBounds = true;
        swiper.params.slidesPerView = 2;
        swiper.params.spaceBetween = 40;
        swiper.params.width = '90%';

        // Apply inline style to wrapper
        if (swiper.el && swiper.el.style) {
          swiper.el.style.margin = '0 auto';
        }

        // Ensure each slide is properly sized
        swiper.slides.forEach(slide => {
          if (slide && slide.style) {
            slide.style.width = 'calc(50% - 20px)';
          }
        });
      }

      if (paginationElement) {
        paginationElement.style.display = 'flex';
      }
      if (swiper.pagination) {
        swiper.pagination.enabled = true;
        swiper.pagination.update();
      }

      // Force swiper update after size change
      swiper.update();

      // Final update with delay to ensure proper rendering
      setTimeout(() => {
        swiper.update();
      }, 100);
    }
    // On desktop: disable slider and enable grid view
    else {
      // First disable the swiper
      swiper.disable();

      if (paginationElement) {
        paginationElement.style.display = 'none';
      }
      if (swiper.pagination) {
        swiper.pagination.enabled = false;
        swiper.pagination.update();
      }
    }
  }

  // Destroy method
  destroy() {
    for (const slider of this.sliders) {
      if (slider?.destroy) {
        try {
          slider.destroy(true, true);
        } catch (error) {
          console.error('Error destroying TtAddressSlider:', error);
        }
      }
    }
    this.sliders = [];
  }
}

export default TtAddressSlider;

