/**
 * Cookie Banner Implementation for TYPO3
 */
class CookieBanner {
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
    floatingButton.className = 'opacity-0 invisible transform translate-y-2';
    floatingButton.setAttribute('aria-hidden', 'true');
    floatingButton.setAttribute('role', 'button');
    floatingButton.setAttribute('tabindex', '0');
    floatingButton.setAttribute('aria-label', 'Cookie-Einstellungen öffnen');

    // Add button content with SVG icon and fingerprint motif (similar to the attached image)
    floatingButton.innerHTML = `
      <button class="flex items-center justify-center p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
        <span class="sr-only">Cookie-Einstellungen</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1a11 11 0 0 0-11 11c0 6.075 4.925 11 11 11s11-4.925 11-11c0-6.075-4.925-11-11-11zm0 20a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"/>
          <path d="M12 5a3 3 0 0 0-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
          <path d="M13.535 12.514a.999.999 0 0 0-1.535.848v3.637a1 1 0 0 0 2 0v-3.637a.999.999 0 0 0-.465-.848z"/>
          <path d="M12 6.626c-.909 0-1.647-.738-1.647-1.647 0-.909.738-1.647 1.647-1.647s1.647.738 1.647 1.647c0 .909-.738 1.647-1.647 1.647z"/>
          <path d="M16.96 7.04a2 2 0 0 0-2.828 0 2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0 2 2 0 0 0 0-2.828zm-1.414 1.414a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"/>
          <path d="M19.314 11.148a2 2 0 0 0-2.828 0 2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0 2 2 0 0 0 0-2.828zm-1.414 1.414a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"/>
          <path d="M7.04 16.96a2 2 0 0 0-2.828 0 2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0 2 2 0 0 0 0-2.828zm-1.414 1.414a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"/>
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
        this.saveSettingsButton?.focus();
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
}

// Initialize Cookie Banner
document.addEventListener('DOMContentLoaded', () => {
  new CookieBanner();
});
