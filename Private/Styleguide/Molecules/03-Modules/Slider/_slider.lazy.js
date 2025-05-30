import ImageSlider from './_slider';

const initializeSlider = () => {
  new ImageSlider();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSlider);
} else {
  initializeSlider();
}

// Fallback for dynamically loaded content
window.addEventListener('load', initializeSlider);

export default {};
