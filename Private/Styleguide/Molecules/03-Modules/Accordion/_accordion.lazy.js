window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('.ce-accordion').length) {
    import('./_accordion.js').then((module) => {
      module.AccordionInit();
    });
  }
});

export default {};
