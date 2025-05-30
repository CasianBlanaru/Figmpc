import Swiper from 'swiper';
import { Pagination, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

class TeaserTopicSlider {
  constructor() {
    this.sliders = [];
    this.init();
  }

  init() {
    const sliderElements = document.querySelectorAll('.ce-slider-teaser-topic');

    if (!sliderElements.length) {
      return;
    }

    for (const element of sliderElements) {
      try {
        const swiperContainer = element.querySelector('.swiper');
        const sliderId = element.id || `teaser-topic-slider-${this.sliders.length}`;
        const paginationElement = element.querySelector('.swiper-pagination');
        const slides = swiperContainer.querySelectorAll('.swiper-slide');

        // Skip initialization if there are only 2 slides (handled by grid in template)
        // EXCEPT for mobile teaser topic sliders that should always be initialized
        if (slides.length === 2 && !element.id.includes('teaser-topic-mobile')) {
          continue;
        }

        if (!element.id) {
          element.setAttribute('id', sliderId);
        }

        element.setAttribute('role', 'region');
        element.setAttribute('aria-roledescription', 'Teaser Navigation');

        // Add ARIA roles and labels to slides
        slides.forEach((slide, index) => {
          slide.setAttribute('role', 'group');
          slide.setAttribute('aria-roledescription', 'Teaser');
          slide.setAttribute('aria-label', `Teaser ${index + 1} von ${slides.length}`);
        });

        // Create notification region for screen readers
        const notificationRegion = document.createElement('div');

        notificationRegion.className = 'swiper-notification sr-only';
        notificationRegion.setAttribute('aria-live', 'polite');
        notificationRegion.setAttribute('aria-atomic', 'true');
        swiperContainer.appendChild(notificationRegion);

        const swiper = new Swiper(swiperContainer, {
          modules: [Pagination, A11y, Keyboard],

          // Enhanced accessibility configuration
          a11y: {
            enabled: true,
            paginationBulletMessage: 'Zu Teaser {{index}} wechseln',
            slideLabelMessage: 'Teaser {{index}} von {{slidesLength}}',
            containerMessage: 'Teaser Navigation',
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
          pagination: {
            el: paginationElement,
            enabled: true,
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: (index, className) => {
              return `<button class="${className}" aria-label="Zu Teaser ${index + 1} wechseln" role="tab"></button>`;
            },
            dynamicBullets: false,
          },

          // Responsive settings
          breakpoints: {
            0: {
              enabled: true,
              slidesPerView: 1,
              spaceBetween: 16,
              width: null,
              centeredSlides: true,
              pagination: {
                enabled: true,
              },
            },
            800: {
              enabled: true,
              slidesPerView: Math.min(2, slides.length),
              spaceBetween: 24,
              width: null,
              centeredSlides: slides.length > 2,
              pagination: {
                enabled: true,
              },
            },
            1200: {
              enabled: true,
              slidesPerView: Math.min(3, slides.length),
              spaceBetween: 24,
              width: null,
              centeredSlides: slides.length > 3,
              pagination: {
                enabled: true,
              },
            },
          },

          // General settings
          grabCursor: true,
          slidesPerView: 1,
          spaceBetween: 16,
          loop: slides.length > 3,
          watchSlidesProgress: true,
          preventClicks: true,
          preventClicksPropagation: true,
          observer: true,
          observeParents: true,
          resizeObserver: true,
          centeredSlidesBounds: true,

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
        // error handling
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

      liveRegion.textContent = `Teaser ${currentIndex} von ${total}`;
    }
  }

  // Helper method to update pagination visibility
  updatePaginationVisibility(swiper) {
    if (!swiper?.el) return;

    const paginationElement = swiper.el.querySelector('.swiper-pagination');

    if (!paginationElement) return;

    const slidesCount = swiper.slides.length;
    const isMobile = window.innerWidth < 800;
    const isMobileSlider = swiper.el.closest('[id^="teaser-topic-mobile-"]');

    if (isMobileSlider) {
      paginationElement.style.display = '';
      if (swiper.pagination) {
        swiper.pagination.enabled = true;
        swiper.pagination.update();
      }
      return;
    }

    if (isMobile && slidesCount <= 3) {
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

  // Set equal heights for teaser topics
  setEqualHeights() {
    // For slider teaser topics
    const sliderContainers = document.querySelectorAll('.ce-slider-teaser-topic');

    sliderContainers.forEach(container => {
      // Find all slides within this container
      const slides = container.querySelectorAll('.swiper-slide');

      // Reset heights to auto first to get natural height
      slides.forEach(slide => {
        const linkElement = slide.querySelector('a');

        if (linkElement) {
          linkElement.style.height = 'auto';
        }
      });

      // Find tallest slide
      let maxHeight = 0;

      slides.forEach(slide => {
        const linkElement = slide.querySelector('a');

        if (linkElement && linkElement.offsetHeight > maxHeight) {
          maxHeight = linkElement.offsetHeight;
        }
      });

      // Apply max height to all slides
      if (maxHeight > 0) {
        slides.forEach(slide => {
          const linkElement = slide.querySelector('a');

          if (linkElement) {
            linkElement.style.height = maxHeight + 'px';
          }
        });
      }
    });

    // For grid layout topics (hidden on mobile, visible on desktop for exactly 2 items)
    const gridContainers = document.querySelectorAll('.hidden.sm\\:grid.grid-cols-2');

    gridContainers.forEach(container => {
      // Find all topic links within this container
      const topicLinks = container.querySelectorAll('a');

      // Reset heights to auto first
      topicLinks.forEach(link => {
        link.style.height = 'auto';
      });

      // Find tallest link
      let maxHeight = 0;

      topicLinks.forEach(link => {
        if (link.offsetHeight > maxHeight) {
          maxHeight = link.offsetHeight;
        }
      });

      // Apply max height to all links
      if (maxHeight > 0) {
        topicLinks.forEach(link => {
          link.style.height = maxHeight + 'px';
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
          // error handling
        }
      }
    }
    this.sliders = [];
  }
}

export default TeaserTopicSlider;
