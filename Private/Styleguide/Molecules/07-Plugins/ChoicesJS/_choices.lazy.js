window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('.selectpicker').length) {
    import('./_choices.js').then((module) => {
      module.ChoicesInit();
    });
  }
});

export default {};