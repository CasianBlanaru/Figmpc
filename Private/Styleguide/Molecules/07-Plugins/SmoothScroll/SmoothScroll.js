/**
 * Enhanced Smooth Scroll Component
 * Provides advanced smooth scrolling functionality with easing and customization options
 * Optionally integrates with GSAP ScrollTrigger if available
 */
class SmoothScroll {
  constructor(options = {}) {
    this.options = {
      // Default scroll duration in milliseconds
      duration: 800,
      // Easing function - can be 'linear', 'easeInOut', 'easeIn', 'easeOut'
      easing: 'easeInOut',
      // Offset from top when scrolling to target
      offset: 32,
      // Selector for smooth scroll links
      selector: 'a[href^="#"]',
      // Whether to update URL hash
      updateURL: true,
      // Callback functions
      onStart: null,
      onComplete: null,
      // Whether to respect prefers-reduced-motion
      respectMotionPreference: true,
      // Whether to integrate with ScrollTrigger if available
      useScrollTrigger: true,
      ...options,
    };

    this.isScrolling = false;
    this.clickHandler = null;
    this.popstateHandler = null;
    this.scrollTrigger = null;
    this.gsap = null;

    this.init();
  }

  /**
   * Initialize the smooth scroll functionality
   */
  init() {
    // Check for reduced motion preference
    if (this.options.respectMotionPreference && this.prefersReducedMotion()) {
      return;
    }

    // Try to detect GSAP and ScrollTrigger
    this.detectGSAP();

    this.bindEvents();
    this.handleInitialHash();
  }

  /**
   * Detect if GSAP and ScrollTrigger are available
   */
  detectGSAP() {
    if (this.options.useScrollTrigger) {
      // Check if GSAP is available globally
      if (typeof window !== 'undefined' && window.gsap) {
        this.gsap = window.gsap;

        // Check if ScrollTrigger is available
        if (window.ScrollTrigger || (this.gsap.plugins && this.gsap.plugins.ScrollTrigger)) {
          this.scrollTrigger = window.ScrollTrigger || this.gsap.plugins.ScrollTrigger;
          console.log('SmoothScroll: ScrollTrigger integration enabled');
        }
      }
    }
  }

  /**
   * Check if user prefers reduced motion
   */
  prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Bind click events to smooth scroll links
   */
  bindEvents() {
    this.clickHandler = (e) => {
      const link = e.target.closest(this.options.selector);

      if (!link) return;

      const href = link.getAttribute('href');

      if (!href || href === '#') return;

      // Check if it's a same-page anchor link
      if (href.startsWith('#')) {
        e.preventDefault();
        this.scrollToTarget(href, link);
      }
    };

    this.popstateHandler = () => {
      if (window.location.hash) {
        this.scrollToTarget(window.location.hash);
      }
    };

    document.addEventListener('click', this.clickHandler);
    window.addEventListener('popstate', this.popstateHandler);
  }

  /**
   * Handle initial page load with hash
   */
  handleInitialHash() {
    if (window.location.hash) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        this.scrollToTarget(window.location.hash);
      }, 100);
    }
  }

  /**
   * Scroll to target element
   */
  scrollToTarget(targetId, triggerElement = null) {
    const target = document.querySelector(targetId);

    if (!target) return;

    // Call onStart callback
    if (this.options.onStart && typeof this.options.onStart === 'function') {
      this.options.onStart(target, triggerElement);
    }

    const targetPosition = this.getTargetPosition(target);

    // Use GSAP if available for smoother animation
    if (this.gsap && this.options.useScrollTrigger) {
      this.scrollWithGSAP(targetPosition, target, triggerElement);
    } else {
      this.scrollWithNative(targetPosition, target, triggerElement);
    }
  }

  /**
   * Scroll using GSAP for enhanced performance
   */
  scrollWithGSAP(targetPosition, target, triggerElement) {
    this.isScrolling = true;

    this.gsap.to(window, {
      duration: this.options.duration / 1000, // GSAP uses seconds
      scrollTo: { y: targetPosition, autoKill: false },
      ease: this.getGSAPEasing(),
              onComplete: () => {
          this.isScrolling = false;

          // Update URL if enabled
          if (this.options.updateURL && `#${target.id}` !== window.location.hash) {
            history.pushState(null, null, `#${target.id}`);
          }

          // Set focus to target for accessibility
          this.setFocusToTarget(target);

          // Call onComplete callback
          if (this.options.onComplete && typeof this.options.onComplete === 'function') {
            this.options.onComplete(target, triggerElement);
          }
        },
    });
  }

  /**
   * Scroll using native JavaScript animation
   */
  scrollWithNative(targetPosition, target, triggerElement) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    this.isScrolling = true;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.options.duration, 1);
      const easedProgress = this.applyEasing(progress);

      const currentPosition = startPosition + (distance * easedProgress);

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        this.isScrolling = false;

        // Update URL if enabled
        if (this.options.updateURL && `#${target.id}` !== window.location.hash) {
          history.pushState(null, null, `#${target.id}`);
        }

        // Set focus to target for accessibility
        this.setFocusToTarget(target);

        // Call onComplete callback
        if (this.options.onComplete && typeof this.options.onComplete === 'function') {
          this.options.onComplete(target, triggerElement);
        }
      }
    };

    requestAnimationFrame(animateScroll);
  }

  /**
   * Convert easing option to GSAP easing
   */
  getGSAPEasing() {
    switch (this.options.easing) {
      case 'linear':
        return 'none';
      case 'easeIn':
        return 'power2.in';
      case 'easeOut':
        return 'power2.out';
      case 'easeInOut':
      default:
        return 'power2.inOut';
    }
  }

  /**
   * Get target position with offset
   */
  getTargetPosition(target) {
    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return rect.top + scrollTop - this.options.offset;
  }

  /**
   * Apply easing function to progress
   */
  applyEasing(progress) {
    switch (this.options.easing) {
      case 'linear':
        return progress;
      case 'easeIn':
        return progress * progress;
      case 'easeOut':
        return progress * (2 - progress);
      case 'easeInOut':
      default:
        return progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
    }
  }

  /**
   * Set focus to target element for accessibility
   */
  setFocusToTarget(target) {
    // Make target focusable if it isn't already
    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
    }

    target.focus();

    // Remove tabindex after focus if it was added
    if (target.getAttribute('tabindex') === '-1') {
      target.addEventListener('blur', () => {
        target.removeAttribute('tabindex');
      }, { once: true });
    }
  }

  /**
   * Scroll to top of page
   */
  scrollToTop(duration = null) {
    this.scrollToPosition(0, duration);
  }

  /**
   * Scroll to specific position
   */
  scrollToPosition(position, duration = null) {
    const actualDuration = duration || this.options.duration;
    const startPosition = window.pageYOffset;
    const distance = position - startPosition;
    const startTime = performance.now();

    this.isScrolling = true;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / actualDuration, 1);
      const easedProgress = this.applyEasing(progress);

      const currentPosition = startPosition + (distance * easedProgress);

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        this.isScrolling = false;
      }
    };

    requestAnimationFrame(animateScroll);
  }

  /**
   * Check if currently scrolling
   */
  isCurrentlyScrolling() {
    return this.isScrolling;
  }

  /**
   * Update options
   */
  updateOptions(newOptions) {
    this.options = { ...this.options, ...newOptions };
  }

  /**
   * Destroy the smooth scroll instance
   */
  destroy() {
    // Remove event listeners
    if (this.clickHandler) {
      document.removeEventListener('click', this.clickHandler);
      this.clickHandler = null;
    }

    if (this.popstateHandler) {
      window.removeEventListener('popstate', this.popstateHandler);
      this.popstateHandler = null;
    }

    this.isScrolling = false;
  }
}

export default SmoothScroll;
