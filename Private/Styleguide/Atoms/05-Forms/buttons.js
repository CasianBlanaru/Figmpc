/**
 * Netinera Button Components - JavaScript Module
 * 
 * Handles interactions for:
 * - Button hover effects
 * - Loading states
 * - Keyboard navigation
 * - ARIA accessibility
 * - Click tracking
 * 
 * Usage:
 * import { ButtonComponent } from './buttons.js';
 * new ButtonComponent(document.querySelector('.btn-primary'));
 */

export class ButtonComponent {
  constructor(element) {
    this.element = element;
    this.isLoading = false;
    this.originalText = '';
    this.init();
  }

  init() {
    if (!this.element) return;

    // Store original text for loading state
    this.originalText = this.element.textContent;

    // Setup event listeners
    this.setupEventListeners();
    
    // Setup ARIA attributes
    this.setupAccessibility();
    
    // Initialize loading state if present
    if (this.element.classList.contains('btn-loading')) {
      this.setLoadingState(true);
    }
  }

  setupEventListeners() {
    // Click handler
    this.element.addEventListener('click', (e) => this.handleClick(e));
    
    // Keyboard navigation
    this.element.addEventListener('keydown', (e) => this.handleKeydown(e));
    
    // Focus management
    this.element.addEventListener('focus', () => this.handleFocus());
    this.element.addEventListener('blur', () => this.handleBlur());

    // Touch support for mobile
    this.element.addEventListener('touchstart', () => this.handleTouchStart());
    this.element.addEventListener('touchend', () => this.handleTouchEnd());
  }

  setupAccessibility() {
    // Ensure button has proper role
    if (this.element.tagName.toLowerCase() !== 'button') {
      this.element.setAttribute('role', 'button');
      this.element.setAttribute('tabindex', '0');
    }

    // Add ARIA attributes for loading state
    if (this.element.classList.contains('btn-loading')) {
      this.element.setAttribute('aria-busy', 'true');
      this.element.setAttribute('aria-disabled', 'true');
    }

    // Add ARIA label if only icon is present
    if (this.element.classList.contains('btn-icon-only') && !this.element.getAttribute('aria-label')) {
      this.element.setAttribute('aria-label', 'Icon button');
    }
  }

  handleClick(event) {
    // Prevent default if loading or disabled
    if (this.isLoading || this.element.disabled) {
      event.preventDefault();
      return;
    }

    // Add ripple effect
    this.createRippleEffect(event);

    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('netinera:button:click', {
      detail: {
        buttonType: this.getButtonType(),
        buttonText: this.originalText
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

  handleFocus() {
    this.element.classList.add('btn-focused');
  }

  handleBlur() {
    this.element.classList.remove('btn-focused');
  }

  handleTouchStart() {
    this.element.classList.add('btn-pressed');
  }

  handleTouchEnd() {
    setTimeout(() => {
      this.element.classList.remove('btn-pressed');
    }, 150);
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
    ripple.className = 'btn-ripple';
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: btn-ripple-animation 0.6s ease-out;
      pointer-events: none;
    `;

    // Ensure button has relative positioning
    if (getComputedStyle(this.element).position === 'static') {
      this.element.style.position = 'relative';
    }

    this.element.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }

  /**
   * Set loading state
   */
  setLoadingState(loading = true) {
    this.isLoading = loading;

    if (loading) {
      this.element.classList.add('btn-loading');
      this.element.setAttribute('aria-busy', 'true');
      this.element.setAttribute('aria-disabled', 'true');
      this.element.disabled = true;
    } else {
      this.element.classList.remove('btn-loading');
      this.element.removeAttribute('aria-busy');
      this.element.removeAttribute('aria-disabled');
      this.element.disabled = false;
    }
  }

  /**
   * Get button type based on classes
   */
  getButtonType() {
    const classList = this.element.classList;
    
    if (classList.contains('btn-primary')) return 'primary';
    if (classList.contains('btn-secondary')) return 'secondary';
    if (classList.contains('btn-outline')) return 'outline';
    if (classList.contains('btn-ghost')) return 'ghost';
    if (classList.contains('btn-white')) return 'white';
    if (classList.contains('btn-dark')) return 'dark';
    
    return 'unknown';
  }

  /**
   * Destroy component and cleanup
   */
  destroy() {
    // Remove event listeners
    this.element.removeEventListener('click', this.handleClick);
    this.element.removeEventListener('keydown', this.handleKeydown);
    this.element.removeEventListener('focus', this.handleFocus);
    this.element.removeEventListener('blur', this.handleBlur);
    this.element.removeEventListener('touchstart', this.handleTouchStart);
    this.element.removeEventListener('touchend', this.handleTouchEnd);

    // Remove added classes and attributes
    this.element.classList.remove('btn-focused', 'btn-pressed');
    
    // Clear references
    this.element = null;
  }
}

/**
 * Text Link Component
 */
export class TextLinkComponent {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    if (!this.element) return;

    this.setupEventListeners();
    this.setupAccessibility();
  }

  setupEventListeners() {
    this.element.addEventListener('click', (e) => this.handleClick(e));
    this.element.addEventListener('keydown', (e) => this.handleKeydown(e));
  }

  setupAccessibility() {
    // Add ARIA attributes for external links
    if (this.element.classList.contains('text-link-external')) {
      this.element.setAttribute('aria-label', 
        `${this.element.textContent} (öffnet in neuem Fenster)`);
      this.element.setAttribute('target', '_blank');
      this.element.setAttribute('rel', 'noopener noreferrer');
    }
  }

  handleClick(event) {
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('netinera:link:click', {
      detail: {
        href: this.element.href,
        text: this.element.textContent,
        isExternal: this.element.classList.contains('text-link-external')
      }
    }));
  }

  handleKeydown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.element.click();
    }
  }

  destroy() {
    this.element.removeEventListener('click', this.handleClick);
    this.element.removeEventListener('keydown', this.handleKeydown);
    this.element = null;
  }
}

/**
 * Auto-initialize all button and link components
 */
export function initializeButtonComponents() {
  // Initialize all buttons
  const buttons = document.querySelectorAll(`
    .btn-primary, 
    .btn-secondary, 
    .btn-outline, 
    .btn-ghost, 
    .btn-white, 
    .btn-dark
  `);
  
  buttons.forEach(button => {
    if (!button.netineraButtonComponent) {
      button.netineraButtonComponent = new ButtonComponent(button);
    }
  });

  // Initialize all text links
  const textLinks = document.querySelectorAll('.text-link');
  
  textLinks.forEach(link => {
    if (!link.netineraTextLinkComponent) {
      link.netineraTextLinkComponent = new TextLinkComponent(link);
    }
  });
}

/**
 * Cleanup all button components
 */
export function destroyButtonComponents() {
  const buttons = document.querySelectorAll(`
    .btn-primary, 
    .btn-secondary, 
    .btn-outline, 
    .btn-ghost, 
    .btn-white, 
    .btn-dark
  `);
  
  buttons.forEach(button => {
    if (button.netineraButtonComponent) {
      button.netineraButtonComponent.destroy();
      delete button.netineraButtonComponent;
    }
  });

  const textLinks = document.querySelectorAll('.text-link');
  
  textLinks.forEach(link => {
    if (link.netineraTextLinkComponent) {
      link.netineraTextLinkComponent.destroy();
      delete link.netineraTextLinkComponent;
    }
  });
}

// Add CSS for ripple animation if not present
if (!document.querySelector('#netinera-button-styles')) {
  const style = document.createElement('style');
  style.id = 'netinera-button-styles';
  style.textContent = `
    @keyframes btn-ripple-animation {
      from {
        transform: scale(0);
        opacity: 1;
      }
      to {
        transform: scale(1);
        opacity: 0;
      }
    }
    
    .btn-focused {
      outline: 2px solid var(--color-netinera-primary);
      outline-offset: 2px;
    }
    
    .btn-pressed {
      transform: translateY(1px);
    }
  `;
  document.head.appendChild(style);
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeButtonComponents);
} else {
  initializeButtonComponents();
} 