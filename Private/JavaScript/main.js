// === LAZY IMPORTS ===
// Components that are loaded on demand
import Accordion from '../Styleguide/Molecules/03-Modules/Accordion/_accordion.lazy';
import Slider from '../Styleguide/Molecules/03-Modules/Slider/_slider.lazy';
import CookieBanner from '../Styleguide/Molecules/03-Modules/CookieBanner/_cookie-banner.lazy';
import MainMenu from '../Styleguide/Molecules/05-Menus/Main-Menu/_main-menu.lazy';
import Select from '../Styleguide/Molecules/07-Plugins/ChoicesJS/_choices.lazy';
import Lightbox from '../Styleguide/Molecules/07-Plugins/Lightbox/_lightbox.lazy';
import BackToTop from '../Styleguide/Molecules/07-Plugins/BackToTop/_backtotop.lazy';
import YoutubeDSGVO from '../Styleguide/Molecules/07-Plugins/VideoDsgvo/_VideoDsgvo.lazy';
import SmoothScroll from '../Styleguide/Molecules/07-Plugins/SmoothScroll/_smoothScroll.lazy';
import PrismJS from '../Styleguide/Molecules/07-Plugins/prismjs/_prismjs.lazy';

// === DIRECT IMPORTS ===
// Components that are always loaded
import ImageSlider from '../Styleguide/Molecules/03-Modules/Slider/_slider';
import TeaserTopicSlider from '../Styleguide/Molecules/03-Modules/Teaser/_teaser-topic';
import ServiceCardSlider from '../Styleguide/Molecules/03-Modules/Teaser/_service-card';
import TtAddressSlider from '../Styleguide/Molecules/04-Extensions/TtAddress/_tt-address-slider';
import NumbersSlider from '../Styleguide/Organisms/SectionCompanyStats/_numbers-slider';
import Footer from '../Styleguide/Molecules/02-Footer/_footer';
import SectionServiceSlider from '../Styleguide/Organisms/SectionService/_section-service-slider';
import Navigation from '../Styleguide/Molecules/05-Menus/Main-Menu/_main-menu';

// === EXPORTS ===
// Export all components for external use
export {
  // Lazy components
  Accordion,
  Slider,
  MainMenu,
  Select,
  Lightbox,
  BackToTop,
  YoutubeDSGVO,
  CookieBanner,
  SmoothScroll,
  PrismJS,
  
  // Direct components
  ImageSlider,
  TeaserTopicSlider,
  ServiceCardSlider,
  TtAddressSlider,
  NumbersSlider,
  Footer,
  SectionServiceSlider,
  Navigation,
};

// === INITIALIZATION ===
// Initialize components when DOM is ready
const initializeComponents = () => {
  try {
    // Initialize core components
    console.log('🚀 Initializing Netinera Design System...');
    
    new ImageSlider();
    new TeaserTopicSlider();
    new ServiceCardSlider();
    new TtAddressSlider();
    new NumbersSlider();
    new Footer();
    new SectionServiceSlider();
    new Navigation();
    
    console.log('✅ All components initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing components:', error);
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
  // DOM already loaded
  initializeComponents();
}

// === DEVELOPMENT HELPERS ===
if (process.env.NODE_ENV === 'development') {
  // Add development utilities
  window.NetineraDesignSystem = {
    components: {
      Accordion,
      Slider,
      MainMenu,
      Select,
      Lightbox,
      BackToTop,
      YoutubeDSGVO,
      CookieBanner,
      SmoothScroll,
      PrismJS,
      ImageSlider,
      TeaserTopicSlider,
      ServiceCardSlider,
      TtAddressSlider,
      NumbersSlider,
      Footer,
      SectionServiceSlider,
      Navigation,
    },
    reinitialize: initializeComponents,
    version: '1.0.0'
  };
  
  console.log('🔧 Development mode enabled - Access components via window.NetineraDesignSystem');
} 