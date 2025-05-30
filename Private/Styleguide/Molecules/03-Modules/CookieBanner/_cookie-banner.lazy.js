import CookieBanner from './_cookie-banner';

const initializeCookieBanner = () => {
  new CookieBanner();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCookieBanner);
} else {
  initializeCookieBanner();
}

// Fallback for dynamically loaded content
window.addEventListener('load', initializeCookieBanner);

export default {};
