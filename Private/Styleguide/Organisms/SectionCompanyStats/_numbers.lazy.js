import Numbers from './_numbers';

const initializeNumbers = () => {
  new Numbers();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeNumbers);
} else {
  initializeNumbers();
}

// Fallback for dynamically loaded content
window.addEventListener('load', initializeNumbers);

export default {};
