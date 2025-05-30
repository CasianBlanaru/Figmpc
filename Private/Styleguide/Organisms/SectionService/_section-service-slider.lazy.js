window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('.ce-slider-service-cards').length) {
    import('./_section-service-slider.js').then((module) => {
      new module.default();
    });
  }
});

export default {};
