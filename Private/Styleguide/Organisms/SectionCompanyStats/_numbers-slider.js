import Swiper from 'swiper';
import { Pagination, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CountUp } from 'countup.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

class NumbersSlider {
  constructor() {
    this.sliders = [];
    this.init();
    this.initCountUp();
  }

  init() {
    gsap.registerPlugin(ScrollTrigger);
    const sliderElements = document.querySelectorAll('.ce-slider-numbers');

    if (!sliderElements.length) {
      return;
    }

    sliderElements.forEach(section => {
      const items = section.querySelectorAll('.swiper-slide');

      // GSAP Animation für jedes Item
      items.forEach((item, index) => {
        gsap.set(item, {
          opacity: 0,
          y: 30,
        });

        ScrollTrigger.create({
          trigger: item,
          start: 'top bottom-=100',
          onEnter: () => {
            gsap.to(item, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.2,
              ease: 'power2.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(item, {
              opacity: 0,
              y: 30,
              duration: 0.6,
              ease: 'power2.in',
            });
          },
        });
      });

      // Swiper Initialisierung
      try {
        const swiperContainer = section.querySelector('.swiper');
        const sliderId = section.id || `numbers-slider-${this.sliders.length}`;
        const paginationElement = section.querySelector('.swiper-pagination');
        const slides = swiperContainer.querySelectorAll('.swiper-slide');

        if (!section.id) {
          section.setAttribute('id', sliderId);
        }

        section.setAttribute('role', 'region');
        section.setAttribute('aria-roledescription', 'Numbers Navigation');

        slides.forEach((slide, index) => {
          slide.setAttribute('role', 'group');
          slide.setAttribute('aria-roledescription', 'Number');
          slide.setAttribute('aria-label', `Zahl ${index + 1} von ${slides.length}`);
        });

        const swiper = new Swiper(swiperContainer, {
          modules: [Pagination, A11y, Keyboard],
          a11y: {
            enabled: true,
            paginationBulletMessage: 'Zu Zahl {{index}} wechseln',
            slideLabelMessage: 'Zahl {{index}} von {{slidesLength}}',
            containerMessage: 'Numbers Navigation',
            notificationClass: 'swiper-notification sr-only',
            id: `swiper-${sliderId}`,
          },
          keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
          },
          pagination: {
            el: paginationElement,
            enabled: true,
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: (index, className) => {
              return `<button class="${className}" aria-label="Zu Zahl ${index + 1} wechseln" role="tab"></button>`;
            },
          },
          breakpoints: {
            0: {
              enabled: true,
              slidesPerView: 1,
              spaceBetween: 16,
              width: null,
            },
            640: {
              enabled: true,
              slidesPerView: 2,
              spaceBetween: 24,
              width: null,
            },
            1024: {
              enabled: false,
              slidesPerView: 3,
              spaceBetween: 32,
              width: null,
            },
          },
          grabCursor: true,
          preventClicks: true,
          preventClicksPropagation: true,
          observer: true,
          observeParents: true,
          resizeObserver: true,
          speed: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300,
          on: {
            slideChange: () => {
              this.initCountUp();
            },
          },
        });

        this.sliders.push(swiper);
      } catch (error) {
        console.error('Error initializing numbers slider:', error);
      }
    });
  }

  initCountUp() {
    const numberElements = document.querySelectorAll('.numbers-value');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target;
            const value = el.textContent.replace(/[^0-9.,]/g, '').replace(',', '.');

            if (!el.classList.contains('counted')) {
              const countUp = new CountUp(el, Number.parseFloat(value), {
                duration: 2,
                separator: '.',
                decimal: ',',
              });

              if (!countUp.error) {
                countUp.start();
                el.classList.add('counted');
              }
            }
            obs.unobserve(el);
          }
        }
      }, { threshold: 0.5 });

      for (const el of numberElements) {
        observer.observe(el);
      }
    }
  }

  destroy() {
    for (const slider of this.sliders) {
      if (slider?.destroy) {
        try {
          slider.destroy(true, true);
        } catch (error) {
          console.error('Error destroying numbers slider:', error);
        }
      }
    }
    this.sliders = [];
  }
}

export default NumbersSlider;
