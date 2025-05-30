window.addEventListener('DOMContentLoaded', () => {
  // Check if there are any smooth scroll links on the page
  if (document.querySelectorAll('a[href^="#"]').length) {
    import('./SmoothScroll').then((module) => {
      // Initialize SmoothScroll with default options
      const smoothScroll = new module.default({
        duration: 800,
        easing: 'easeInOut',
        offset: 32,
        updateURL: true,
        respectMotionPreference: true,
        useScrollTrigger: true, // Enable GSAP integration if available
      });

      // Make instance globally available if needed
      window.smoothScrollInstance = smoothScroll;

      // Log integration status
      if (smoothScroll.gsap) {
        console.log('SmoothScroll: Initialized with GSAP integration');
      } else {
        console.log('SmoothScroll: Initialized with native JavaScript animation');
      }
    }).catch((error) => {
      console.error('Failed to load SmoothScroll module:', error);
    });
  }
});

export default {};
