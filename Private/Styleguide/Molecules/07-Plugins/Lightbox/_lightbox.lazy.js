window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('.lightbox').length) {
    import('./_lightbox.js').then((module) => {
      module.LightboxInit();
    });
  }
});

export default {};
