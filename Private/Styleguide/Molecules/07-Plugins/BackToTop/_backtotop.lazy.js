window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('back-to-top')) {
    import('./_backtotop.js').then((module) => {
      module.BackToTopInit();
    });
  }
});

export default {};
