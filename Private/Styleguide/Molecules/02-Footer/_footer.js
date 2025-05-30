/**
 * Footer accordion functionality for mobile devices
 */
class FooterAccordion {
  constructor() {
    this.accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');
    this.init();
  }

  init() {
    // Add click event to all accordion triggers
    this.accordionTriggers.forEach(trigger => {
      trigger.addEventListener('click', this.handleTriggerClick.bind(this));
    });

    // Handle window resize event
    window.addEventListener('resize', this.handleResize.bind(this));

    // Set initial state
    this.setInitialState();
  }

  handleTriggerClick(event) {
    const accordionSection = event.currentTarget.closest('[data-accordion]');

    // Only handle accordion behavior on mobile screens
    if (window.innerWidth < 1024) { // 1024px corresponds to lg: breakpoint in Tailwind
      // Toggle the current accordion
      const isOpen = accordionSection.hasAttribute('data-open');

      if (isOpen) {
        accordionSection.removeAttribute('data-open');
      } else {
        accordionSection.setAttribute('data-open', '');
      }
    }
  }

  handleResize() {
    const accordionSections = document.querySelectorAll('[data-accordion]');

    if (window.innerWidth >= 1024) {
      // On desktop, ensure all sections are expanded
      accordionSections.forEach(section => {
        section.setAttribute('data-open', '');
      });
    } else {
      // On mobile, collapse all sections by default
      accordionSections.forEach(section => {
        section.removeAttribute('data-open');
      });
    }
  }

  setInitialState() {
    if (window.innerWidth >= 1024) {
      const accordionSections = document.querySelectorAll('[data-accordion]');

      accordionSections.forEach(section => {
        section.setAttribute('data-open', '');
      });
    }
  }
}


export class FooterComponent {
  constructor(element) {
    this.element = element;
    this.footerLinks = [];
    this.socialLinks = [];
    this.copyrightElement = null;
    this.logoElement = null;
    this.currentYear = new Date().getFullYear();
    this.analytics = {
      footerClicks: 0,
      socialClicks: 0,
      logoClicks: 0
    };
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
    
    // Auto-update copyright year
    this.updateCopyrightYear();
    
    // Setup link tracking
    this.setupLinkTracking();
    
    // Initialize SEO enhancements
    this.setupSEOEnhancements();
  }

  cacheElements() {
    this.footerLinks = [...this.element.querySelectorAll('.netinera-footer-link')];
    this.socialLinks = [...this.element.querySelectorAll('.netinera-footer-social-link')];
    this.copyrightElement = this.element.querySelector('.netinera-footer-copyright');
    this.logoElement = this.element.querySelector('.netinera-footer-logo');
    this.navElement = this.element.querySelector('.netinera-footer-nav');
    this.socialContainer = this.element.querySelector('.netinera-footer-social');
  }

  setupEventListeners() {
    // Footer navigation links
    this.footerLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleFooterLinkClick(e, link));
      link.addEventListener('mouseenter', (e) => this.handleLinkHover(e, link));
    });

    // Social media links
    this.socialLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleSocialLinkClick(e, link));
      link.addEventListener('mouseenter', (e) => this.handleSocialHover(e, link));
    });

    // Footer logo click
    if (this.logoElement) {
      this.logoElement.addEventListener('click', (e) => this.handleLogoClick(e));
    }

    // Copyright click (for easter egg or additional info)
    if (this.copyrightElement) {
      this.copyrightElement.addEventListener('click', (e) => this.handleCopyrightClick(e));
    }

    // Keyboard navigation
    this.setupKeyboardNavigation();
  }

  setupAccessibility() {
    // Set proper ARIA labels
    if (this.navElement) {
      this.navElement.setAttribute('aria-label', 'Footer Navigation');
      this.navElement.setAttribute('role', 'navigation');
    }

    if (this.socialContainer) {
      this.socialContainer.setAttribute('aria-label', 'Social Media Links');
      this.socialContainer.setAttribute('role', 'navigation');
    }

    // Enhance social links with proper ARIA labels
    this.socialLinks.forEach(link => {
      const title = link.getAttribute('title');
      if (title && !link.getAttribute('aria-label')) {
        link.setAttribute('aria-label', `${title} (öffnet in neuem Fenster)`);
      }

      // Mark external links
      if (this.isExternalLink(link.href)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });

    // Enhance footer links
    this.footerLinks.forEach(link => {
      if (this.isExternalLink(link.href)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        
        const text = link.textContent.trim();
        link.setAttribute('aria-label', `${text} (öffnet in neuem Fenster)`);
      }
    });
  }

  setupKeyboardNavigation() {
    const allLinks = [...this.footerLinks, ...this.socialLinks];
    
    allLinks.forEach((link, index) => {
      link.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && index > 0) {
          e.preventDefault();
          allLinks[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < allLinks.length - 1) {
          e.preventDefault();
          allLinks[index + 1].focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          allLinks[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          allLinks[allLinks.length - 1].focus();
        }
      });
    });
  }

  updateCopyrightYear() {
    if (this.copyrightElement) {
      const currentText = this.copyrightElement.textContent;
      
      // Replace any year (4 digits) with current year
      const updatedText = currentText.replace(/\b\d{4}\b/, this.currentYear);
      
      if (updatedText !== currentText) {
        this.copyrightElement.textContent = updatedText;
      }
    }
  }

  setupLinkTracking() {
    // Set up tracking attributes for analytics
    this.footerLinks.forEach((link, index) => {
      link.setAttribute('data-footer-link', index + 1);
      link.setAttribute('data-link-text', link.textContent.trim());
    });

    this.socialLinks.forEach((link, index) => {
      const platform = link.getAttribute('title') || `social-${index + 1}`;
      link.setAttribute('data-social-platform', platform.toLowerCase());
      link.setAttribute('data-social-position', index + 1);
    });
  }

  setupSEOEnhancements() {
    // Add structured data for organization
    if (!document.querySelector('[data-footer-structured-data]')) {
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Netinera Deutschland GmbH',
        'url': window.location.origin,
        'logo': window.location.origin + '/path/to/logo.svg',
        'sameAs': this.socialLinks.map(link => link.href).filter(href => href && href !== '#')
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-footer-structured-data', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  handleFooterLinkClick(event, link) {
    const linkText = link.textContent.trim();
    const href = link.getAttribute('href');

    // Analytics tracking
    this.analytics.footerClicks++;
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('netinera:footer:link-click', {
      detail: {
        link: link,
        text: linkText,
        href: href,
        isExternal: this.isExternalLink(href),
        totalClicks: this.analytics.footerClicks
      }
    }));

    // Handle special links
    if (href === '#' || !href) {
      event.preventDefault();
      this.handleSpecialLink(linkText);
    } else if (this.isExternalLink(href)) {
      // Let external links open naturally
      console.log('Opening external footer link:', linkText, href);
    }

    // Add click animation
    this.addClickAnimation(link);
  }

  handleSocialLinkClick(event, link) {
    const platform = link.getAttribute('title') || 'Unknown';
    const href = link.getAttribute('href');

    // Analytics tracking
    this.analytics.socialClicks++;

    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('netinera:footer:social-click', {
      detail: {
        platform: platform,
        link: link,
        href: href,
        isExternal: this.isExternalLink(href),
        totalClicks: this.analytics.socialClicks
      }
    }));

    // Handle demo links
    if (href === '#' || !href) {
      event.preventDefault();
      console.log(`${platform} social link clicked (demo)`);
    }

    // Add click animation
    this.addClickAnimation(link, true);
  }

  handleLogoClick(event) {
    event.preventDefault();
    
    // Analytics tracking
    this.analytics.logoClicks++;

    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('netinera:footer:logo-click', {
      detail: {
        logo: this.logoElement,
        totalClicks: this.analytics.logoClicks
      }
    }));

    // Navigate to home page
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    } else {
      // Scroll to top if already on home page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  handleCopyrightClick(event) {
    // Easter egg or additional functionality
    console.log('Copyright clicked - maybe show company info modal?');
    
    this.element.dispatchEvent(new CustomEvent('netinera:footer:copyright-click', {
      detail: {
        year: this.currentYear,
        element: this.copyrightElement
      }
    }));
  }

  handleLinkHover(event, link) {
    const linkText = link.textContent.trim();
    
    // Preload page for better UX (optional)
    if (link.href && !this.isExternalLink(link.href)) {
      this.preloadPage(link.href);
    }

    // Dispatch hover event
    this.element.dispatchEvent(new CustomEvent('netinera:footer:link-hover', {
      detail: {
        link: link,
        text: linkText
      }
    }));
  }

  handleSocialHover(event, link) {
    const platform = link.getAttribute('title') || 'Unknown';
    
    this.element.dispatchEvent(new CustomEvent('netinera:footer:social-hover', {
      detail: {
        platform: platform,
        link: link
      }
    }));
  }

  addClickAnimation(element, isSocial = false) {
    // Add click animation
    const isDesktop = window.innerWidth >= 992;
    const translateY = isSocial ? (isDesktop ? '2px' : '1px') : '1px';
    const scale = isSocial ? 'scale(0.95)' : 'scale(1)';
    
    element.style.transform = `translateY(${translateY}) ${scale}`;
    
    setTimeout(() => {
      if (isSocial) {
        const hoverTranslateY = isDesktop ? '-2px' : '-1px';
        element.style.transform = `translateY(${hoverTranslateY}) scale(1)`;
      } else {
        element.style.transform = 'translateY(0) scale(1)';
      }
    }, 150);
  }

  handleSpecialLink(linkText) {
    // Handle special footer links that might trigger modals or special actions
    switch (linkText.toLowerCase()) {
      case 'impressum':
        console.log('Opening Impressum modal or page');
        break;
      case 'datenschutz':
        console.log('Opening Datenschutz modal or page');
        break;
      case 'kontakt':
        console.log('Opening contact form or page');
        break;
      default:
        console.log('Footer link clicked:', linkText);
    }
  }

  preloadPage(href) {
    // Preload page for better UX (only for internal links)
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    }
  }

  isExternalLink(href) {
    if (!href || href.startsWith('#') || href.startsWith('/')) {
      return false;
    }
    
    try {
      const url = new URL(href, window.location.origin);
      return url.hostname !== window.location.hostname;
    } catch {
      return false;
    }
  }

  /**
   * Update footer links programmatically
   */
  updateFooterLinks(links) {
    if (!this.navElement) return;

    // Clear existing links
    this.navElement.innerHTML = '';
    
    // Add new links
    links.forEach(linkData => {
      const link = this.createFooterLink(linkData);
      this.navElement.appendChild(link);
    });

    // Re-cache elements and setup listeners
    this.cacheElements();
    this.setupEventListeners();
    this.setupAccessibility();
  }

  /**
   * Update social links programmatically
   */
  updateSocialLinks(platforms) {
    if (!this.socialContainer) return;

    // Clear existing social links
    this.socialContainer.innerHTML = '';
    
    // Add new social links
    platforms.forEach(platform => {
      const link = this.createSocialLink(platform);
      this.socialContainer.appendChild(link);
    });

    // Re-cache elements and setup listeners
    this.cacheElements();
    this.setupEventListeners();
    this.setupAccessibility();
  }

  createFooterLink(linkData) {
    const link = document.createElement('a');
    link.className = 'netinera-footer-link';
    link.href = linkData.href || '#';
    link.textContent = linkData.text;
    
    if (linkData.external) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    
    return link;
  }

  createSocialLink(platform) {
    const link = document.createElement('a');
    link.className = 'netinera-footer-social-link';
    link.href = platform.href || '#';
    link.title = platform.name;
    link.setAttribute('aria-label', platform.name);
    
    if (platform.external !== false) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }

    // Add SVG icon
    const svg = document.createElement('svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'currentColor');
    
    const path = document.createElement('path');
    path.setAttribute('d', platform.iconPath || '');
    
    svg.appendChild(path);
    link.appendChild(svg);
    
    return link;
  }

  /**
   * Get analytics data
   */
  getAnalytics() {
    return {
      ...this.analytics,
      linksCount: this.footerLinks.length,
      socialLinksCount: this.socialLinks.length,
      copyrightYear: this.currentYear
    };
  }

  /**
   * Destroy component and cleanup
   */
  destroy() {
    // Remove event listeners
    this.footerLinks.forEach(link => {
      link.removeEventListener('click', this.handleFooterLinkClick);
      link.removeEventListener('mouseenter', this.handleLinkHover);
    });

    this.socialLinks.forEach(link => {
      link.removeEventListener('click', this.handleSocialLinkClick);
      link.removeEventListener('mouseenter', this.handleSocialHover);
    });

    if (this.logoElement) {
      this.logoElement.removeEventListener('click', this.handleLogoClick);
    }

    if (this.copyrightElement) {
      this.copyrightElement.removeEventListener('click', this.handleCopyrightClick);
    }

    // Clear references
    this.element = null;
    this.footerLinks = [];
    this.socialLinks = [];
    this.copyrightElement = null;
    this.logoElement = null;
    this.navElement = null;
    this.socialContainer = null;
  }
}

/**
 * Auto-initialize all footer components
 */
export function initializeFooterComponents() {
  const footers = document.querySelectorAll('.netinera-footer');
  
  footers.forEach(footer => {
    if (!footer.netineraFooterComponent) {
      footer.netineraFooterComponent = new FooterComponent(footer);
    }
  });
}

/**
 * Cleanup all footer components
 */
export function destroyFooterComponents() {
  const footers = document.querySelectorAll('.netinera-footer');
  
  footers.forEach(footer => {
    if (footer.netineraFooterComponent) {
      footer.netineraFooterComponent.destroy();
      delete footer.netineraFooterComponent;
    }
  });
}

/**
 * Social media platform configurations
 */
export const socialPlatforms = {
  linkedin: {
    name: 'LinkedIn',
    iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  twitter: {
    name: 'Twitter',
    iconPath: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
  },
  facebook: {
    name: 'Facebook',
    iconPath: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
  },
  instagram: {
    name: 'Instagram',
    iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  }
};

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFooterComponents);
} else {
  initializeFooterComponents();
} 

export default FooterAccordion;
