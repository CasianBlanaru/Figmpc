window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('.dsgvo-youtube').length) {
    import('./_VideoDsgvo').then((module) => {
      module.VideoDsgvoInit();
    });
  }
});

export default {};
