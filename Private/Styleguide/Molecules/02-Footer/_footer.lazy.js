import FooterAccordion from './_footer';

const initializeFooterAccordion = () => {
  new FooterAccordion();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFooterAccordion);
} else {
  initializeFooterAccordion();
}

// Fallback für dynamisch geladene Inhalte
window.addEventListener('load', initializeFooterAccordion);

export default {};
