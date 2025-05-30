/**
 * Netinera Hero Topic Components - JavaScript Module
 * 
 * Handles interactions for:
 * - Hero topic click events
 * - Content updates
 * - Accessibility features
 * - Responsive behavior
 * - Animation states
 * 
 * Usage:
 * import { HeroTopicComponent } from './hero.js';
 * new HeroTopicComponent(document.querySelector('.hero-topic-no-image'));
 */

export class HeroTopicComponent {
  constructor(element) {
    this.element = element;
    this.overlineElement = null;
    this.headlineElement = null;
    this.placeholderElement = null;
    this.contentElement = null;
    this.init();
  }

  init() {
    if (!this.element) return;

    // Cache DOM elements
    this.cacheElements();
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Setup accessibility
    this.setupAccessibility();
    
    // Initialize intersection observer for animations
    this.setupIntersectionObserver();
  }

  cacheElements() {
    this.overlineElement = this.element.querySelector('.hero-topic-overline');
    this.headlineElement = this.element.querySelector('.hero-topic-headline');
    this.placeholderElement = this.element.querySelector('.hero-topic-placeholder');
    this.contentElement = this.element.querySelector('.hero-topic-content');
  }

  setupEventListeners() {
    // Click handler for hero topic
    this.element.addEventListener('click', (e) => this.handleClick(e));
    
    // Keyboard navigation
    this.element.addEventListener('keydown', (e) => this.handleKeydown(e));
    
    // Touch events for mobile
    this.element.addEventListener('touchstart', () => this.handleTouchStart());
    this.element.addEventListener('touchend', () => this.handleTouchEnd());

    // Resize observer for responsive behavior
    if (window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => this.handleResize());
      this.resizeObserver.observe(this.element);
    }
  }

  setupAccessibility() {
    // Make hero topic focusable if it has click behavior
    this.element.setAttribute('tabindex', '0');
    this.element.setAttribute('role', 'button');
    
    // Add ARIA labels
    if (this.headlineElement) {
      const headlineText = this.headlineElement.textContent;
      const overlineText = this.overlineElement ? this.overlineElement.textContent : '';
      
      this.element.setAttribute('aria-label', 
        `Hero Topic: ${overlineText} ${headlineText}`.trim());
    }

    // Mark as interactive region
    this.element.setAttribute('aria-describedby', 'hero-topic-description');
  }

  setupIntersectionObserver() {
    if (!window.IntersectionObserver) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn();
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.observer.observe(this.element);
  }

  handleClick(event) {
    // Add click ripple effect
    this.createRippleEffect(event);

    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('netinera:hero:click', {
      detail: {
        overline: this.overlineElement ? this.overlineElement.textContent : '',
        headline: this.headlineElement ? this.headlineElement.textContent : '',
        variant: this.getVariant(),
        size: this.getSize()
      }
    }));
  }

  handleKeydown(event) {
    // Handle Enter and Space key activation
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.element.click();
    }
  }

  handleTouchStart() {
    this.element.classList.add('hero-topic-pressed');
  }

  handleTouchEnd() {
    setTimeout(() => {
      this.element.classList.remove('hero-topic-pressed');
    }, 150);
  }

  handleResize() {
    // Update responsive classes based on container width
    const rect = this.element.getBoundingClientRect();
    
    if (rect.width < 768) {
      this.element.classList.add('hero-topic-mobile');
      this.element.classList.remove('hero-topic-desktop');
    } else {
      this.element.classList.add('hero-topic-desktop');
      this.element.classList.remove('hero-topic-mobile');
    }
  }

  /**
   * Create ripple effect on click
   */
  createRippleEffect(event) {
    const rect = this.element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'hero-topic-ripple';
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(0, 104, 94, 0.2);
      border-radius: 50%;
      transform: scale(0);
      animation: hero-ripple-animation 0.8s ease-out;
      pointer-events: none;
      z-index: 1;
    `;

    // Ensure element has relative positioning
    const computedStyle = getComputedStyle(this.element);
    if (computedStyle.position === 'static') {
      this.element.style.position = 'relative';
    }

    this.element.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 800);
  }

  /**
   * Animate hero topic in when visible
   */
  animateIn() {
    this.element.classList.add('hero-topic-animate-in');
    
    // Stagger animation for child elements
    if (this.placeholderElement) {
      setTimeout(() => {
        this.placeholderElement.classList.add('hero-topic-placeholder-animate');
      }, 100);
    }
    
    if (this.contentElement) {
      setTimeout(() => {
        this.contentElement.classList.add('hero-topic-content-animate');
      }, 200);
    }
  }

  /**
   * Update hero topic content
   */
  updateContent(overline, headline) {
    if (this.overlineElement && overline) {
      this.overlineElement.textContent = overline;
    }
    
    if (this.headlineElement && headline) {
      this.headlineElement.textContent = headline;
    }

    // Update accessibility label
    this.setupAccessibility();

    // Dispatch update event
    this.element.dispatchEvent(new CustomEvent('netinera:hero:updated', {
      detail: { overline, headline }
    }));
  }

  /**
   * Get current variant
   */
  getVariant() {
    const classList = this.element.classList;
    
    if (classList.contains('hero-topic-variant-secondary')) return 'secondary';
    if (classList.contains('hero-topic-variant-dark')) return 'dark';
    if (classList.contains('hero-topic-variant-white')) return 'white';
    
    return 'primary';
  }

  /**
   * Get current size
   */
  getSize() {
    const classList = this.element.classList;
    
    if (classList.contains('hero-topic-size-sm')) return 'small';
    if (classList.contains('hero-topic-size-xl')) return 'extra-large';
    
    return 'responsive';
  }

  /**
   * Set color variant
   */
  setVariant(variant) {
    // Remove existing variant classes
    this.element.classList.remove(
      'hero-topic-variant-secondary',
      'hero-topic-variant-dark',
      'hero-topic-variant-white'
    );

    // Add new variant class
    if (variant !== 'primary') {
      this.element.classList.add(`hero-topic-variant-${variant}`);
    }

    // Dispatch variant change event
    this.element.dispatchEvent(new CustomEvent('netinera:hero:variant-changed', {
      detail: { variant }
    }));
  }

  /**
   * Set size variant
   */
  setSize(size) {
    // Remove existing size classes
    this.element.classList.remove('hero-topic-size-sm', 'hero-topic-size-xl');

    // Add new size class
    if (size !== 'responsive') {
      this.element.classList.add(`hero-topic-size-${size === 'small' ? 'sm' : 'xl'}`);
    }

    // Dispatch size change event
    this.element.dispatchEvent(new CustomEvent('netinera:hero:size-changed', {
      detail: { size }
    }));
  }

  /**
   * Destroy component and cleanup
   */
  destroy() {
    // Remove event listeners
    this.element.removeEventListener('click', this.handleClick);
    this.element.removeEventListener('keydown', this.handleKeydown);
    this.element.removeEventListener('touchstart', this.handleTouchStart);
    this.element.removeEventListener('touchend', this.handleTouchEnd);

    // Disconnect observers
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    // Remove added classes and attributes
    this.element.classList.remove('hero-topic-animate-in');
    this.element.removeAttribute('tabindex');
    this.element.removeAttribute('role');
    this.element.removeAttribute('aria-label');
    this.element.removeAttribute('aria-describedby');
    
    // Clear references
    this.element = null;
    this.overlineElement = null;
    this.headlineElement = null;
    this.placeholderElement = null;
    this.contentElement = null;
  }
}

/**
 * Auto-initialize all hero topic components
 */
export function initializeHeroComponents() {
  const heroTopics = document.querySelectorAll('.hero-topic-no-image');
  
  heroTopics.forEach(hero => {
    if (!hero.netineraHeroComponent) {
      hero.netineraHeroComponent = new HeroTopicComponent(hero);
    }
  });
}

/**
 * Cleanup all hero components
 */
export function destroyHeroComponents() {
  const heroTopics = document.querySelectorAll('.hero-topic-no-image');
  
  heroTopics.forEach(hero => {
    if (hero.netineraHeroComponent) {
      hero.netineraHeroComponent.destroy();
      delete hero.netineraHeroComponent;
    }
  });
}

// Add CSS for animations if not present
if (!document.querySelector('#netinera-hero-styles')) {
  const style = document.createElement('style');
  style.id = 'netinera-hero-styles';
  style.textContent = `
    @keyframes hero-ripple-animation {
      from {
        transform: scale(0);
        opacity: 1;
      }
      to {
        transform: scale(1);
        opacity: 0;
      }
    }
    
    .hero-topic-animate-in {
      animation: hero-fade-in 0.6s ease-out;
    }
    
    @keyframes hero-fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .hero-topic-placeholder-animate {
      animation: hero-slide-in 0.4s ease-out;
    }
    
    .hero-topic-content-animate {
      animation: hero-content-in 0.5s ease-out;
    }
    
    @keyframes hero-slide-in {
      from {
        transform: translateX(-20px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes hero-content-in {
      from {
        transform: translateY(10px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    .hero-topic-pressed {
      transform: scale(0.98);
      transition: transform 0.1s ease;
    }
  `;
  document.head.appendChild(style);
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeHeroComponents);
} else {
  initializeHeroComponents();
} 