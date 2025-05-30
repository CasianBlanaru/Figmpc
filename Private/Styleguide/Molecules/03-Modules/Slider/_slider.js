// Swiper Slider
import Swiper from 'swiper';
import { Navigation, Pagination, A11y, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class ImageSlider {
  constructor() {
    this.sliders = [];
    this.init();
  }

  init() {

    const sliderElements = document.querySelectorAll('.ce-slider.swiper, .ce-slider-hero.swiper');

    if (!sliderElements.length) {
      return;
    }

    for (const element of sliderElements) {
      try {
        const swiperContainer = element;
        const sliderId = element.id || `slider-${this.sliders.length}`;
        const isHeroSlider = element.classList.contains('ce-slider-hero');

        if (!element.id) {
          element.setAttribute('id', sliderId);
        }

        element.setAttribute('role', 'region');
        element.setAttribute('aria-roledescription', element.dataset.sliderLabel || 'Bildergalerie');

        const skipLink = element.querySelector('.sr-only');
        const skipTarget = element.nextElementSibling;

        if (skipLink && skipTarget) {
          const skipTargetId = skipTarget.id || `content-after-${sliderId}`;

          if (!skipTarget.id) {
            skipTarget.setAttribute('id', skipTargetId);
          }
          skipLink.setAttribute('href', `#${skipTargetId}`);
          skipTarget.setAttribute('tabindex', '-1');
        }

        const slides = swiperContainer.querySelectorAll('.swiper-slide');
        const hasEnoughSlides = slides.length > 1;

        // Add ARIA roles and labels to slides
        slides.forEach((slide, index) => {
          slide.setAttribute('role', 'group');
          slide.setAttribute('aria-roledescription', 'Slide');
          slide.setAttribute('aria-label', `Slide ${index + 1} von ${slides.length}`);
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
          bulletClass: 'swiper-pagination-bullet w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-gray-200',
          bulletActiveClass: 'swiper-pagination-bullet-active bg-gray-300 w-5 h-2.5',
          renderBullet: (index, className) => {
            return `<button class="${className}" aria-label="Zu Bild ${index + 1} wechseln" role="tab"></button>`;
          },
          enabled: hasEnoughSlides,
          dynamicBullets: false,
        };

        const swiper = new Swiper(swiperContainer, {
          modules: [Navigation, Pagination, A11y, Keyboard, Autoplay],

          // Enhanced accessibility configuration
          a11y: {
            enabled: true,
            prevSlideMessage: 'Vorheriges Bild',
            nextSlideMessage: 'Nächstes Bild',
            firstSlideMessage: 'Dies ist das erste Bild',
            lastSlideMessage: 'Dies ist das letzte Bild',
            paginationBulletMessage: 'Zu Bild {{index}} wechseln',
            slideLabelMessage: 'Bild {{index}} von {{slidesLength}}',
            containerMessage: element.dataset.sliderLabel || 'Bildergalerie',
            notificationClass: 'swiper-notification sr-only',
            id: `swiper-${sliderId}`,
          },

          // Enhanced keyboard support
          keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
          },

          // Responsive navigation arrows
          navigation: {
            nextEl: element.querySelector('.swiper-button-next'),
            prevEl: element.querySelector('.swiper-button-prev'),
            enabled: hasEnoughSlides,
            hideOnClick: true,
          },

          // Enhanced pagination with responsive configuration
          pagination: isHeroSlider ? {
            ...paginationConfig,
            el: element.querySelector('.md\\:hidden .swiper-pagination'),
          } : paginationConfig,

          // Responsive settings
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          },

          // General settings
          grabCursor: false,
          slidesPerView: 1,
          spaceBetween: 30,
          loop: hasEnoughSlides && slides.length > 1,
          centeredSlides: true,
          watchSlidesProgress: true,
          preventClicks: true,
          preventClicksPropagation: true,

          // Autoplay with accessibility
          autoplay: hasEnoughSlides ? {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          } : false,

          // Respect reduced motion preferences
          speed: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 600,

          on: {
            init: (swiperInstance) => {
              this.updateA11yNotification(swiperInstance);
              this.setupAutoplayControl(swiperInstance, element);
            },
            slideChange: (swiperInstance) => {
              this.updateA11yNotification(swiperInstance);
            },
            resize: (swiperInstance) => {
              this.updateA11yNotification(swiperInstance);
            },
          },
        });

        this.sliders.push(swiper);
      } catch (error) {
        // Fehler still behandeln, aber nicht loggen
      }
    }
  }

  setupAutoplayControl(swiper, element) {
    const autoplayButton = element.querySelector('.swiper-autoplay-control');

    if (!autoplayButton || !swiper.autoplay?.running) return;

    const playIcon = autoplayButton.querySelector('.play-icon');
    const stopIcon = autoplayButton.querySelector('.stop-icon');

    if (!playIcon || !stopIcon) return;

    function updateButtonUI(isPlaying) {
      if (isPlaying) {
        playIcon.classList.add('hidden');
        playIcon.classList.remove('text-secondary-700');
        stopIcon.classList.remove('hidden');
        autoplayButton.classList.add('bg-secondary-700');
        autoplayButton.classList.remove('bg-white');
      } else {
        stopIcon.classList.add('hidden');
        playIcon.classList.remove('hidden');
        playIcon.classList.add('text-secondary-700');
        autoplayButton.classList.remove('bg-secondary-700');
        autoplayButton.classList.add('bg-white');
      }

      autoplayButton.setAttribute('data-action', isPlaying ? 'stop' : 'play');
      autoplayButton.setAttribute('aria-label', isPlaying ? 'Wiedergabe stoppen' : 'Wiedergabe starten');
    }

    // Initial state - Check if autoplay is actually running
    updateButtonUI(swiper.autoplay.running);

    // Click handler
    autoplayButton.addEventListener('click', () => {
      const isCurrentlyPlaying = swiper.autoplay.running;

      if (isCurrentlyPlaying) {
        swiper.autoplay.stop();
        updateButtonUI(false);
      } else {
        swiper.autoplay.start();
        updateButtonUI(true);
      }
    });

    // Swiper event handlers
    swiper.on('autoplayStart', () => {
      updateButtonUI(true);
    });

    swiper.on('autoplayStop', () => {
      updateButtonUI(false);
    });

    // Handle reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      swiper.autoplay.stop();
      updateButtonUI(false);
    }
  }

  // Helper method to update ARIA notification
  updateA11yNotification(swiper) {
    if (!swiper?.el) return;

    const liveRegion = swiper.el.querySelector('.swiper-notification');

    if (liveRegion) {
      const currentIndex = swiper.realIndex + 1;
      const total = swiper.slides.length;

      liveRegion.textContent = `Bild ${currentIndex} von ${total}`;
    }
  }

  // Enhanced destroy method
  destroy() {
    for (const slider of this.sliders) {
      if (slider?.destroy) {
        try {
          slider.destroy(true, true);
        } catch (error) {
          // Fehler still behandeln, aber nicht loggen
        }
      }
    }
    this.sliders = [];
  }
}

export default ImageSlider;
