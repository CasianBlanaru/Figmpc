/**
 * Cookie Banner Implementation for TYPO3
 */
export default class CookieBanner {
  constructor() {
    this.banner = document.getElementById('cookie-banner');
    this.settingsModal = document.getElementById('cookie-settings-modal');
    this.acceptAllButton = document.getElementById('accept-all-cookies');
    this.acceptEssentialButton = document.getElementById('accept-essential-cookies');
    this.openSettingsButton = document.getElementById('cookie-settings-button');
    this.saveSettingsButton = document.getElementById('save-cookie-settings');
    this.closeSettingsButton = document.getElementById('close-cookie-settings');
    this.cookieStatistics = document.getElementById('cookie-statistics');
    this.cookieMarketing = document.getElementById('cookie-marketing');

    // Create floating settings button that appears after accepting cookies
    this.createFloatingSettingsButton();

    // Exit early if elements are not found
    if (!this.banner) {
      return;
    }

    // Cookie preferences
    this.preferences = {
      essential: true, // Always activated
      statistics: false,
      marketing: false,
    };

    // Check if preferences already exist
    this.loadPreferences();

    // Show banner if no preferences are set
    if (!this.hasPreferences()) {
      this.showBanner();
    } else {
      // Apply existing preferences and show floating button
      this.applyPreferences();
      this.showFloatingSettingsButton();
    }

    this.initEventListeners();
  }

  createFloatingSettingsButton() {
    // Check if the button already exists
    if (document.getElementById('floating-cookie-settings')) {
      return;
    }

    // Create floating button container
    const floatingButton = document.createElement('div');

    floatingButton.id = 'floating-cookie-settings';
    floatingButton.className = 'fixed left-4 bottom-4 z-40 opacity-0 invisible transition-all duration-300 transform translate-y-2';
    floatingButton.setAttribute('aria-hidden', 'true');
    floatingButton.setAttribute('role', 'button');
    floatingButton.setAttribute('tabindex', '0');
    floatingButton.setAttribute('aria-label', 'Cookie-Einstellungen öffnen');

    // Add button content with SVG icon
    floatingButton.innerHTML = `
      <button class="flex items-center p-3 text-sm font-medium text-white bg-primary-600 rounded-full shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors">
        <span class="sr-only">Cookie-Einstellungen</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    `;

    // Append to body
    document.body.appendChild(floatingButton);

    // Add event listener to open settings
    floatingButton.addEventListener('click', () => this.openSettings());

    // Add keyboard accessibility
    floatingButton.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.openSettings();
      }
    });
  }

  showFloatingSettingsButton() {
    const floatingButton = document.getElementById('floating-cookie-settings');

    if (floatingButton) {
      // Wait a bit to show the button after the banner is hidden
      setTimeout(() => {
        floatingButton.classList.remove('opacity-0', 'invisible', 'translate-y-2');
        floatingButton.setAttribute('aria-hidden', 'false');
      }, 500);
    }
  }

  hideFloatingSettingsButton() {
    const floatingButton = document.getElementById('floating-cookie-settings');

    if (floatingButton) {
      floatingButton.classList.add('opacity-0', 'invisible', 'translate-y-2');
      floatingButton.setAttribute('aria-hidden', 'true');
    }
  }

  initEventListeners() {
    if (this.acceptAllButton) {
      this.acceptAllButton.addEventListener('click', () => this.acceptAll());
    }

    if (this.acceptEssentialButton) {
      this.acceptEssentialButton.addEventListener('click', () => this.acceptEssential());
    }

    if (this.openSettingsButton && this.settingsModal) {
      this.openSettingsButton.addEventListener('click', () => this.openSettings());
    }

    if (this.saveSettingsButton && this.settingsModal) {
      this.saveSettingsButton.addEventListener('click', () => this.saveSettings());
    }

    if (this.closeSettingsButton && this.settingsModal) {
      this.closeSettingsButton.addEventListener('click', () => this.closeSettings());
    }

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.settingsModal.classList.contains('hidden')) {
        this.closeSettings();
      }
    });

    // Click outside modal closes it
    this.settingsModal?.addEventListener('click', (e) => {
      if (e.target === this.settingsModal) {
        this.closeSettings();
      }
    });
  }

  showBanner() {
    if (this.banner) {
      // Short delay for better UX
      setTimeout(() => {
        this.banner.classList.remove('translate-y-full');
        this.banner.classList.add('cookie-banner-visible');
        this.banner.setAttribute('aria-hidden', 'false');

        // Set focus on the first button for better accessibility
        this.acceptAllButton?.focus();

        // Enable focus trap for keyboard navigation
        this.trapFocus(this.banner);
      }, 300);
    }
  }

  hideBanner() {
    if (this.banner) {
      this.banner.classList.add('translate-y-full');
      this.banner.classList.remove('cookie-banner-visible');
      this.banner.setAttribute('aria-hidden', 'true');

      // Show the floating settings button
      this.showFloatingSettingsButton();
    }
  }

  openSettings() {
    if (this.settingsModal) {
      this.settingsModal.classList.remove('hidden');

      // Improve accessibility
      this.settingsModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('overflow-hidden');

      // Set current preferences in checkboxes
      if (this.cookieStatistics) {
        this.cookieStatistics.checked = this.preferences.statistics;
      }

      if (this.cookieMarketing) {
        this.cookieMarketing.checked = this.preferences.marketing;
      }

      // Focus on first button in modal for accessibility
      setTimeout(() => {
        // If there are checkboxes, focus on the first interactive checkbox
        const firstInteractiveElement = this.settingsModal.querySelector('input:not([disabled])') || this.saveSettingsButton;

        firstInteractiveElement?.focus();

        // Enable focus trap for keyboard navigation
        this.trapFocus(this.settingsModal);
      }, 50);

      // Hide floating button while settings are open
      this.hideFloatingSettingsButton();
    }
  }

  closeSettings() {
    if (this.settingsModal) {
      this.settingsModal.classList.add('hidden');
      this.settingsModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('overflow-hidden');

      // Return focus to settings button if available, otherwise to floating button
      if (this.openSettingsButton && !this.openSettingsButton.closest('.translate-y-full')) {
        this.openSettingsButton?.focus();
      } else {
        setTimeout(() => {
          const floatingButton = document.getElementById('floating-cookie-settings');

          if (floatingButton) {
            floatingButton.focus();
            this.showFloatingSettingsButton();
          }
        }, 100);
      }
    }
  }

  acceptAll() {
    this.preferences = {
      essential: true,
      statistics: true,
      marketing: true,
    };

    this.savePreferences();
    this.hideBanner();
    this.applyPreferences();

    // Logging for debugging
    console.debug('[Cookie Banner] All cookies accepted');
  }

  acceptEssential() {
    this.preferences = {
      essential: true,
      statistics: false,
      marketing: false,
    };

    this.savePreferences();
    this.hideBanner();
    this.applyPreferences();

    // Logging for debugging
    console.debug('[Cookie Banner] Only essential cookies accepted');
  }

  saveSettings() {
    this.preferences = {
      essential: true, // Always enabled
      statistics: this.cookieStatistics ? this.cookieStatistics.checked : false,
      marketing: this.cookieMarketing ? this.cookieMarketing.checked : false,
    };

    this.savePreferences();
    this.closeSettings();
    this.hideBanner();
    this.applyPreferences();

    // Logging for debugging
    console.debug('[Cookie Banner] Cookie settings saved', this.preferences);
  }

  savePreferences() {
    try {
      // Save cookie preferences to localStorage
      localStorage.setItem('cookiePreferences', JSON.stringify(this.preferences));

      // Set cookie as fallback
      const expiryDate = new Date();

      expiryDate.setMonth(expiryDate.getMonth() + 6); // Valid for 6 months

      document.cookie = `cookiePreferences=${JSON.stringify(this.preferences)};expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`;
    } catch (err) {
      console.error('[Cookie Banner] Error saving preferences', err);
    }
  }

  loadPreferences() {
    try {
      // Try to load preferences from localStorage
      const storedPrefs = localStorage.getItem('cookiePreferences');

      if (storedPrefs) {
        this.preferences = JSON.parse(storedPrefs);
        return;
      }

      // Fallback: Try to load preferences from cookies
      const cookieValue = this.getCookie('cookiePreferences');

      if (cookieValue) {
        this.preferences = JSON.parse(cookieValue);
      }
    } catch (e) {
      console.error('[Cookie Banner] Error loading cookie preferences:', e);
    }
  }

  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  hasPreferences() {
    return localStorage.getItem('cookiePreferences') !== null || this.getCookie('cookiePreferences') !== null;
  }

  applyPreferences() {
    // Dispatch event so other scripts can react
    const event = new CustomEvent('cookiePreferencesChanged', {
      detail: this.preferences,
    });

    document.dispatchEvent(event);

    // Load Google Analytics if statistics cookies are accepted
    if (this.preferences.statistics) {
      this.loadAnalytics();
    }

    // Load marketing scripts if marketing cookies are accepted
    if (this.preferences.marketing) {
      this.loadMarketingScripts();
    }
  }

  loadAnalytics() {
    // Google Analytics or Matomo could be loaded here
    console.debug('[Cookie Banner] Analytics would be loaded now');
  }

  loadMarketingScripts() {
    // Marketing scripts could be loaded here
    console.debug('[Cookie Banner] Marketing scripts would be loaded now');
  }

  /**
   * Helper function to keep focus within a container (focus trap)
   * @param {HTMLElement} container - The container in which focus should be kept
   */
  trapFocus(container) {
    // Find all focusable elements
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Add event listener for Tab key
    container.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        // Shift+Tab and first element is focused
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
        // Tab and last element is focused
        else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }
}

// Initialize Cookie Banner
document.addEventListener('DOMContentLoaded', () => {
  new CookieBanner();
});
