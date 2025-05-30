window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('.modal').length) {
    import('./_modal.js').then((module) => {
      module.ModalInit();
    });
  }
});

export default {};
