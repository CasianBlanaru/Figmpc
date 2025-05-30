// Import GSAP for animations
import gsap from 'gsap';

class MainMenu {
  constructor() {
    // Menu elements
    this.menuButton = document.querySelector('[data-menu-toggle]');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.mainNavigation = document.getElementById('anchor-header-content');

    // Error handling for required elements
    if (!this.menuButton || !this.mobileMenu || !this.mainNavigation) {
      console.error('MainMenu: Required elements not found - mobile menu initialization aborted');
      return;
    }

    this.closeMenuButton = this.mobileMenu.querySelector('[data-menu-close]');
    if (!this.closeMenuButton) {
      console.error('MainMenu: Close button not found - menu might not work correctly');
    }

    // Search elements
    this.searchButtons = document.querySelectorAll('[data-search-toggle]');
    this.searchModal = document.getElementById('search-modal');

    if (!this.searchModal) {
      console.error('MainMenu: Search modal not found - search functionality disabled');
      return;
    }

    this.closeSearchButton = this.searchModal.querySelector('[data-search-close]');
    this.searchInput = this.searchModal.querySelector('#search-input-modal');

    // Backdrop element
    this.backdrop = document.getElementById('menu-backdrop');
    if (!this.backdrop) {
      console.error('MainMenu: Backdrop not found - visual effects will be limited');
      return;
    }

    // Search icon elements
    this.searchIconElements = Array.from(this.searchButtons).map(button => ({
      button,
      searchIcon: button.querySelector('.search-icon'),
      closeIcon: button.querySelector('.close-icon'),
    }));

    // Submenu elements
    this.submenuToggles = Array.from(document.querySelectorAll('button.submenu-toggle'));
    this.menuItems = Array.from(document.querySelectorAll('.flex.items-center.justify-between'));

    // State management
    this.isMenuOpen = false;
    this.isSearchOpen = false;
    this.announcer = this.createAnnouncer();
    this.isScrolled = false;
    this.isHidden = false;
    this.scrollThreshold = 80; // Pixel threshold for scroll animation
    this.hideThreshold = 120; // Additional threshold for hiding menu
    this.showThreshold = 30; // Threshold for showing menu when scrolling up
    this.lastScrollY = 0;
    this.scrollDirection = 'down';
    this.scrollDelta = 0; // Track scroll distance
    this.isDesktop = window.innerWidth >= 1024; // Desktop detection
    this.animationTween = null; // Store current GSAP animation

    // Calculate scrollbar width to prevent page jump
    this.setScrollbarWidth();

    this.init();
  }

  // Berechnet die Scrollbar-Breite und setzt sie als CSS-Variable
  setScrollbarWidth() {
    // Erstelle temporäres Element, um die Breite zu messen
    const outer = document.createElement('div');

    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    // Inneres Element, um die Differenz zu berechnen
    const inner = document.createElement('div');

    outer.appendChild(inner);

    // Berechnung: äußere Breite - innere Breite = Scrollbar-Breite
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Entferne temporäre Elemente
    outer.parentNode.removeChild(outer);

    // Setze CSS-Variable
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  }

  init() {
    // Initialize menu event listeners
    this.menuButton.addEventListener('click', () => this.toggleMenu());
    this.closeMenuButton?.addEventListener('click', () => this.closeMenu());

    // Initialize search event listeners
    for (const button of this.searchButtons) {
      button.addEventListener('click', () => this.toggleSearch());
    }
    this.closeSearchButton?.addEventListener('click', () => this.closeSearch());

    // Initialize submenu event listeners
    for (const menuItem of this.menuItems) {
      const toggle = menuItem.querySelector('button.submenu-toggle');
      const link = menuItem.querySelector('a');

      if (toggle && link) {
        menuItem.style.cursor = 'pointer';

        // Handle container click
        menuItem.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleSubmenu(toggle);
        });

        // Handle link click
        link.addEventListener('click', (e) => {
          if (toggle.getAttribute('aria-expanded') === 'true') {
            e.stopPropagation();
          } else {
            e.preventDefault();
            e.stopPropagation();
            this.toggleSubmenu(toggle);
          }
        });
      }
    }

    // Initialize back button functionality
    const backButtons = document.querySelectorAll('.submenu-back');

    for (const button of backButtons) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const submenu = button.closest('.submenu');

        this.closeSubmenu(submenu.id);
      });
    }

    // Handle backdrop click to close menus
    this.backdrop.addEventListener('click', () => {
      if (this.isMenuOpen) this.closeMenu();
      if (this.isSearchOpen) this.closeSearch();
    });

    // Handle escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.isMenuOpen) this.closeMenu();
        if (this.isSearchOpen) this.closeSearch();
      }
    });

    // Focus trap for mobile menu
    this.mobileMenu.addEventListener('keydown', (e) => {
      if (this.isMenuOpen) {
        this.handleTabKey(e, this.mobileMenu);
      }
    });

    // Focus trap for search modal
    this.searchModal.addEventListener('keydown', (e) => {
      if (this.isSearchOpen) {
        this.handleTabKey(e, this.searchModal);
      }
    });

    // Click outside of search modal to close
    this.searchModal.addEventListener('click', (e) => {
      if (e.target === this.searchModal) {
        this.closeSearch();
      }
    });

    // Initialize scroll animation only on desktop
    if (this.isDesktop) {
      this.initScrollAnimation();
    }

        // Handle window resize to update desktop detection
    window.addEventListener('resize', () => {
      const wasDesktop = this.isDesktop;

      this.isDesktop = window.innerWidth >= 1024;

      if (wasDesktop && !this.isDesktop) {
        // Switched from desktop to mobile - reset menu
        this.resetMenuToNormal();
      } else if (!wasDesktop && this.isDesktop) {
        // Switched from mobile to desktop - initialize scroll
        this.initScrollAnimation();
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen ? this.closeMenu() : this.openMenu();
    this.closeAllSubmenus(); // Close submenus when toggling main menu
  }

  toggleSearch() {
    this.isSearchOpen ? this.closeSearch() : this.openSearch();
  }

  showBackdrop() {
    this.backdrop.classList.remove('hidden');
    setTimeout(() => {
      this.backdrop.classList.add('opacity-100');
    }, 10);
  }

  hideBackdrop() {
    this.backdrop.classList.remove('opacity-100');
    setTimeout(() => {
      this.backdrop.classList.add('hidden');
    }, 300);
  }

  openMenu() {
    if (this.isSearchOpen) {
      this.closeSearch();
    }

    this.isMenuOpen = true;
    this.mobileMenu.setAttribute('aria-hidden', 'false');
    this.menuButton.setAttribute('aria-expanded', 'true');
    this.mobileMenu.classList.remove('translate-x-full');
    document.body.classList.add('menu-open');

    const menuIcon = this.menuButton.querySelector('.menu-icon');
    const closeIcon = this.menuButton.querySelector('.close-icon');

    if (menuIcon && closeIcon) {
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }

    this.backdrop.classList.remove('top-24', 'md:top-26');
    this.backdrop.classList.add('inset-0');
    this.showBackdrop();

    // Set focus after animation
    setTimeout(() => {
      this.closeMenuButton.focus();
    }, 100);

    this.announceToScreenReader('Main menu opened');
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.mobileMenu.setAttribute('aria-hidden', 'true');
    this.menuButton.setAttribute('aria-expanded', 'false');
    this.mobileMenu.classList.add('translate-x-full');
    document.body.classList.remove('menu-open');

    const menuIcon = this.menuButton.querySelector('.menu-icon');
    const closeIcon = this.menuButton.querySelector('.close-icon');

    if (menuIcon && closeIcon) {
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }

    if (!this.isSearchOpen) {
      this.hideBackdrop();
    }

    this.menuButton.focus();
    this.closeAllSubmenus();
    this.announceToScreenReader('Main menu closed');
  }

  toggleSubmenu(toggle) {
    const submenuId = toggle.getAttribute('aria-controls');
    const submenu = document.getElementById(submenuId);

    if (!submenu) {
      console.warn('Submenu not found:', submenuId);
      return;
    }

    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    // Close other open submenus
    for (const otherToggle of this.submenuToggles) {
      if (otherToggle !== toggle) {
        const otherId = otherToggle.getAttribute('aria-controls');
        const otherSubmenu = document.getElementById(otherId);

        if (otherSubmenu && otherToggle.getAttribute('aria-expanded') === 'true') {
          this.closeSubmenu(otherId);
        }
      }
    }

    // Toggle current submenu
    toggle.setAttribute('aria-expanded', !isExpanded);

    if (!isExpanded) {
      // Open submenu
      submenu.classList.remove('hidden');
      submenu.removeAttribute('inert');

      requestAnimationFrame(() => {
        submenu.classList.remove('translate-x-full');
        // Set focus to first interactive element
        const backButton = submenu.querySelector('.submenu-back');

        if (backButton) {
          backButton.focus();
        }
      });
    } else {
      // Close submenu
      submenu.classList.add('translate-x-full');

      setTimeout(() => {
        submenu.classList.add('hidden');
        submenu.setAttribute('inert', '');
        // Return focus to toggle button
        toggle.focus();
      }, 300);
    }

    // Animate submenu icon
    const icon = toggle.querySelector('.icon-chevron-right');

    if (icon) {
      icon.style.transform = isExpanded ? '' : 'rotate(180deg)';
    }

    this.announceToScreenReader(
      isExpanded ? 'Submenu closed' : 'Submenu opened',
    );
  }

  closeSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    const toggle = this.submenuToggles.find(
      (t) => t.getAttribute('aria-controls') === submenuId,
    );

    if (submenu && toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      submenu.classList.add('translate-x-full');

      setTimeout(() => {
        submenu.classList.add('hidden');
        submenu.setAttribute('inert', '');
      }, 300);

      const icon = toggle.querySelector('.icon-chevron-right');

      if (icon) {
        icon.style.transform = '';
      }
    }
  }

  closeAllSubmenus() {
    for (const toggle of this.submenuToggles) {
      const submenuId = toggle.getAttribute('aria-controls');

      if (submenuId) {
        this.closeSubmenu(submenuId);
      }
    }
  }

  createAnnouncer() {
    const announcer = document.createElement('div');

    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('class', 'sr-only');
    document.body.appendChild(announcer);
    return announcer;
  }

  announceToScreenReader(message) {
    this.announcer.textContent = message;
  }

  openSearch() {
    if (this.isMenuOpen) {
      this.closeMenu();
    }

    this.isSearchOpen = true;
    this.searchModal.classList.remove('hidden');
    this.searchModal.removeAttribute('inert');

    // Set initial state for GSAP animation
    gsap.set(this.searchModal, {
      opacity: 0,
      visibility: 'visible',
    });

    requestAnimationFrame(() => {
      // Update ARIA attributes and show search modal
      this.searchModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('search-open');

      // GSAP animation for smooth fade-in
      gsap.to(this.searchModal, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    // Update toggle button states
    for (const iconElement of this.searchIconElements) {
      const button = iconElement.button;
      const searchIcon = iconElement.searchIcon;
      const closeIcon = iconElement.closeIcon;

      if (button && searchIcon && closeIcon) {
        button.setAttribute('aria-expanded', 'true');
        searchIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    }

    // Set focus to search input after animation
    setTimeout(() => {
      if (this.searchInput) {
        this.searchInput.focus();
      }
    }, 300);

    this.announceToScreenReader('Search opened');
  }

  closeSearch() {
    this.isSearchOpen = false;

    this.searchModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('search-open');

    // Update toggle button states
    for (const iconElement of this.searchIconElements) {
      const button = iconElement.button;
      const searchIcon = iconElement.searchIcon;
      const closeIcon = iconElement.closeIcon;

      if (button && searchIcon && closeIcon) {
        button.setAttribute('aria-expanded', 'false');
        searchIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }

    // Return focus to the last clicked search button
    let lastFocusedButton = this.searchButtons[0];

    for (const button of this.searchButtons) {
      if (button.getAttribute('aria-expanded') === 'true') {
        lastFocusedButton = button;
        break;
      }
    }

    // GSAP animation for smooth fade-out
    gsap.to(this.searchModal, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        this.searchModal.classList.add('hidden');
        this.searchModal.setAttribute('inert', '');
        gsap.set(this.searchModal, { clearProps: "all" });
        lastFocusedButton.focus();
      },
    });

    this.announceToScreenReader('Search closed');
  }

  handleTabKey(e, container) {
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }

  // Initialize scroll animation functionality
  initScrollAnimation() {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check in case page is already scrolled
    this.updateScrollState();
  }

        // Update scroll state and apply/remove scrolled class
  updateScrollState() {
    // Only run on desktop
    if (!this.isDesktop) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const shouldBeScrolled = scrollY > this.scrollThreshold;

    // Calculate scroll delta
    this.scrollDelta = scrollY - this.lastScrollY;

    // Determine scroll direction with minimum delta to avoid jitter
    if (Math.abs(this.scrollDelta) > 3) {
      if (this.scrollDelta > 0) {
        this.scrollDirection = 'down';
      } else {
        this.scrollDirection = 'up';
      }
    }

    // Update scroll states
    if (shouldBeScrolled !== this.isScrolled) {
      this.isScrolled = shouldBeScrolled;

      if (this.isScrolled) {
        this.showFixedMenu();
      } else {
        this.showNormalMenu();
      }
    }

    // Handle hide/show based on scroll direction when menu is fixed
    if (this.isScrolled) {
      // Hide menu when scrolling down past hideThreshold
      if (this.scrollDirection === 'down' && scrollY > this.hideThreshold && !this.isHidden) {
        this.hideMenu();
      }
      // Show menu when scrolling up - more responsive
      else if (this.scrollDirection === 'up' && this.isHidden) {
        // Show immediately when scrolling up, regardless of distance
        this.showFixedMenu();
      }
    }

    this.lastScrollY = scrollY;
  }

  // Show menu in fixed position with GSAP animation
  showFixedMenu() {
    if (this.animationTween) {
      this.animationTween.kill();
    }

    this.mainNavigation.classList.remove('hidden-up');
    this.mainNavigation.classList.add('scrolled');

        // Smooth GSAP animation for showing fixed menu with shadow
    this.animationTween = gsap.fromTo(this.mainNavigation,
      {
        y: -100,
        xPercent: -50,
        opacity: 0.9,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      },
      {
        y: 0,
        xPercent: -50,
        opacity: 1,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        duration: 0.5,
        ease: "power3.out",
      },
    );

    this.isHidden = false;
    this.announceToScreenReader('Navigation fixed at top');
  }

  // Hide menu by sliding up with GSAP animation
  hideMenu() {
    if (!this.isHidden && this.isScrolled) {
      if (this.animationTween) {
        this.animationTween.kill();
      }

             // Smooth GSAP animation for hiding menu
       this.animationTween = gsap.to(this.mainNavigation, {
         y: -100,
         xPercent: -50,
         opacity: 0.9,
         boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
         duration: 0.4,
         ease: "power3.in",
         onComplete: () => {
           this.mainNavigation.classList.remove('scrolled');
           this.mainNavigation.classList.add('hidden-up');
         },
       });

      this.isHidden = true;
      this.announceToScreenReader('Navigation hidden');
    }
  }

    // Show menu in normal position with GSAP animation
  showNormalMenu() {
    if (this.animationTween) {
      this.animationTween.kill();
    }

    // Check if menu is currently hidden to determine starting position
    const isCurrentlyHidden = this.isHidden || this.mainNavigation.classList.contains('hidden-up');

    // Remove classes immediately to prevent layout jumps
    this.mainNavigation.classList.remove('hidden-up');

        if (isCurrentlyHidden) {
            // If coming from hidden state, animate from hidden position
      this.animationTween = gsap.fromTo(this.mainNavigation,
        {
          y: -100,
          opacity: 0.9,
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        },
        {
          y: 0,
          opacity: 1,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            // Fade out shadow gradually to normal state
            gsap.to(this.mainNavigation, {
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              duration: 0.4,
              ease: "power2.out",
              onComplete: () => {
                this.mainNavigation.classList.remove('scrolled');
                gsap.set(this.mainNavigation, { clearProps: "all" });
                },
              });
           },
         },
       );
     } else {
       // If coming from scrolled state, animate from current position
       this.animationTween = gsap.to(this.mainNavigation, {
         y: 0,
         opacity: 1,
         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
         duration: 0.8,
         ease: "power3.out",
         onComplete: () => {
           // Final fade out of shadow
           gsap.to(this.mainNavigation, {
             boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
             duration: 0.5,
             ease: "power2.out",
             onComplete: () => {
               this.mainNavigation.classList.remove('scrolled');
               gsap.set(this.mainNavigation, { clearProps: "all" });
             },
           });
         },
       });
     }

    this.isHidden = false;
    this.announceToScreenReader('Navigation in normal position');
  }

  // Reset menu to normal state (for mobile)
  resetMenuToNormal() {
    if (this.animationTween) {
      this.animationTween.kill();
    }

    // Immediately reset without animation and clear all transforms
    gsap.set(this.mainNavigation, { clearProps: "all" });
    this.mainNavigation.classList.remove('scrolled', 'hidden-up');
    this.isScrolled = false;
    this.isHidden = false;
    this.lastScrollY = 0;
  }

  // Static initialization method for lazy loading
  static Init() {
    new MainMenu();
  }
}

// Export class for module usage
export default MainMenu;
