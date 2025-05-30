// Numbers Animation
import { CountUp } from 'countup.js';

document.addEventListener('DOMContentLoaded', () => {
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
});

