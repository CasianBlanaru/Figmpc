//
// BACK-TO-TOP-BUTTON
//

function backToTopInit() {
  function trackScroll() {
    const goTopBtn = document.getElementById('back-to-top');
    const scrolled = window.pageYOffset;

    let coords = document.documentElement.clientHeight;

    if (goTopBtn) {
      if (scrolled > coords) {
        goTopBtn.classList.add('show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('show');
      }
    }
  }

  window.addEventListener('scroll', trackScroll);
}

export default {};

export const BackToTopInit = backToTopInit;
