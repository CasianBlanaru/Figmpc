import navigation from './navigation.html';

export default {
  title: 'Molecules/Modules/Navigation',
  parameters: {
    docs: {
      description: {
        component: 'Navigation Component - Netinera Design System. Responsive navigation with logo, menu links and mobile toggle. Desktop: 20px×56px padding, Mobile: 20px×16px padding.',
      },
    },
  },
};

export const Default = () => navigation;
Default.storyName = 'Navigation Component';

export const Responsive = {
  render: () => `
    <nav class="navigation-responsive">
      <div class="navigation-responsive-logo">
        <div class="netinera-logo">
          <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="10" width="40" height="20" fill="#00685E"/>
            <rect x="45" y="10" width="40" height="20" fill="#00685E"/>
            <rect x="90" y="10" width="20" height="20" fill="#DD052B"/>
            <text x="120" y="25" font-family="Titillium Web" font-weight="700" font-size="18" fill="#00685E">NETINERA</text>
          </svg>
        </div>
      </div>
      
      <div class="navigation-responsive-menu">
        <a href="#" class="navigation-responsive-link active">Startseite</a>
        <a href="#" class="navigation-responsive-link">Unternehmen</a>
        <a href="#" class="navigation-responsive-link">Leistungen</a>
        <a href="#" class="navigation-responsive-link">Karriere</a>
        <a href="#" class="navigation-responsive-link">Presse</a>
        <a href="#" class="navigation-responsive-link">Kontakt</a>
        <a href="#" class="navigation-responsive-cta">Fahrplan</a>
      </div>
      
      <button class="navigation-responsive-toggle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      
      <div class="navigation-responsive-mobile-menu">
        <a href="#" class="navigation-responsive-link active">Startseite</a>
        <a href="#" class="navigation-responsive-link">Unternehmen</a>
        <a href="#" class="navigation-responsive-link">Leistungen</a>
        <a href="#" class="navigation-responsive-link">Karriere</a>
        <a href="#" class="navigation-responsive-link">Presse</a>
        <a href="#" class="navigation-responsive-link">Kontakt</a>
        <a href="#" class="navigation-responsive-cta">Fahrplan</a>
      </div>
    </nav>
  `,
  name: 'Responsive Navigation',
  parameters: {
    docs: {
      description: {
        story: 'Responsive navigation that adapts from desktop horizontal layout (20px×56px padding, 200px logo) to mobile toggle menu (20px×16px padding).',
      },
    },
  },
};

export const DesktopXL = {
  render: () => `
    <nav class="navigation-xl">
      <div class="navigation-xl-logo">
        <div class="netinera-logo">
          <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="10" width="40" height="20" fill="#00685E"/>
            <rect x="45" y="10" width="40" height="20" fill="#00685E"/>
            <rect x="90" y="10" width="20" height="20" fill="#DD052B"/>
            <text x="120" y="25" font-family="Titillium Web" font-weight="700" font-size="18" fill="#00685E">NETINERA</text>
          </svg>
        </div>
      </div>
      
      <div class="navigation-xl-menu">
        <a href="#" class="navigation-xl-link active">Startseite</a>
        <a href="#" class="navigation-xl-link">Unternehmen</a>
        <a href="#" class="navigation-xl-link">Leistungen</a>
        <a href="#" class="navigation-xl-link">Karriere</a>
        <a href="#" class="navigation-xl-link">Presse</a>
        <a href="#" class="navigation-xl-link">Kontakt</a>
        <a href="#" class="navigation-xl-cta">Fahrplan</a>
      </div>
    </nav>
  `,
  name: 'Desktop XL',
  parameters: {
    docs: {
      description: {
        story: 'Fixed desktop XL navigation: Full width, 20px×56px padding, 200px logo width, 32px menu gap.',
      },
    },
  },
};

export const MobileSM = {
  render: () => `
    <nav class="navigation-sm">
      <div class="navigation-sm-logo">
        <div class="netinera-logo">
          <svg viewBox="0 0 150 32" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="8" width="32" height="16" fill="#00685E"/>
            <rect x="36" y="8" width="32" height="16" fill="#00685E"/>
            <rect x="72" y="8" width="16" height="16" fill="#DD052B"/>
            <text x="96" y="20" font-family="Titillium Web" font-weight="700" font-size="14" fill="#00685E">NETINERA</text>
          </svg>
        </div>
      </div>
      
      <button class="navigation-sm-toggle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      
      <div class="navigation-sm-mobile-menu">
        <a href="#" class="navigation-sm-link active">Startseite</a>
        <a href="#" class="navigation-sm-link">Unternehmen</a>
        <a href="#" class="navigation-sm-link">Leistungen</a>
        <a href="#" class="navigation-sm-link">Karriere</a>
        <a href="#" class="navigation-sm-link">Presse</a>
        <a href="#" class="navigation-sm-link">Kontakt</a>
        <a href="#" class="navigation-sm-cta">Fahrplan</a>
      </div>
    </nav>
  `,
  name: 'Mobile SM',
  parameters: {
    docs: {
      description: {
        story: 'Fixed mobile SM navigation: 328px max-width, 20px×16px padding, 150px logo width, toggle menu.',
      },
    },
  },
};

export const ColorVariants = {
  render: () => `
    <div class="space-y-4">
      <!-- Light Variant -->
      <nav class="navigation-responsive navigation-variant-light">
        <div class="navigation-responsive-logo">
          <div class="netinera-logo">
            <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="10" width="40" height="20" fill="#00685E"/>
              <rect x="45" y="10" width="40" height="20" fill="#00685E"/>
              <rect x="90" y="10" width="20" height="20" fill="#DD052B"/>
              <text x="120" y="25" font-family="Titillium Web" font-weight="700" font-size="18" fill="#00685E">NETINERA</text>
            </svg>
          </div>
        </div>
        <div class="navigation-responsive-menu">
          <a href="#" class="navigation-responsive-link active">Light Background</a>
          <a href="#" class="navigation-responsive-link">Menu Item</a>
          <a href="#" class="navigation-responsive-cta">CTA</a>
        </div>
        <button class="navigation-responsive-toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </nav>
      
      <!-- Dark Variant -->
      <nav class="navigation-responsive navigation-variant-dark">
        <div class="navigation-responsive-logo">
          <div class="netinera-logo">
            <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="10" width="40" height="20" fill="#FFFFFF"/>
              <rect x="45" y="10" width="40" height="20" fill="#FFFFFF"/>
              <rect x="90" y="10" width="20" height="20" fill="#DD052B"/>
              <text x="120" y="25" font-family="Titillium Web" font-weight="700" font-size="18" fill="#FFFFFF">NETINERA</text>
            </svg>
          </div>
        </div>
        <div class="navigation-responsive-menu">
          <a href="#" class="navigation-responsive-link active">Dark Background</a>
          <a href="#" class="navigation-responsive-link">Menu Item</a>
          <a href="#" class="navigation-responsive-cta">CTA</a>
        </div>
        <button class="navigation-responsive-toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </nav>
      
      <!-- Primary Variant -->
      <nav class="navigation-responsive navigation-variant-primary">
        <div class="navigation-responsive-logo">
          <div class="netinera-logo">
            <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="10" width="40" height="20" fill="#FFFFFF"/>
              <rect x="45" y="10" width="40" height="20" fill="#FFFFFF"/>
              <rect x="90" y="10" width="20" height="20" fill="#DD052B"/>
              <text x="120" y="25" font-family="Titillium Web" font-weight="700" font-size="18" fill="#FFFFFF">NETINERA</text>
            </svg>
          </div>
        </div>
        <div class="navigation-responsive-menu">
          <a href="#" class="navigation-responsive-link active">Primary Background</a>
          <a href="#" class="navigation-responsive-link">Menu Item</a>
          <a href="#" class="navigation-responsive-cta">CTA</a>
        </div>
        <button class="navigation-responsive-toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </nav>
    </div>
  `,
  name: 'Color Variants',
  parameters: {
    docs: {
      description: {
        story: 'Navigation color variants: Light (white background), Dark (dark background), Primary (teal background).',
      },
    },
  },
};

export const WithMobileMenu = {
  render: () => `
    <nav class="navigation-responsive">
      <div class="navigation-responsive-logo">
        <div class="netinera-logo">
          <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="10" width="40" height="20" fill="#00685E"/>
            <rect x="45" y="10" width="40" height="20" fill="#00685E"/>
            <rect x="90" y="10" width="20" height="20" fill="#DD052B"/>
            <text x="120" y="25" font-family="Titillium Web" font-weight="700" font-size="18" fill="#00685E">NETINERA</text>
          </svg>
        </div>
      </div>
      
      <div class="navigation-responsive-menu">
        <a href="#" class="navigation-responsive-link active">Startseite</a>
        <a href="#" class="navigation-responsive-link">Unternehmen</a>
        <a href="#" class="navigation-responsive-link">Leistungen</a>
        <a href="#" class="navigation-responsive-link">Karriere</a>
        <a href="#" class="navigation-responsive-link">Presse</a>
        <a href="#" class="navigation-responsive-link">Kontakt</a>
        <a href="#" class="navigation-responsive-cta">Fahrplan</a>
      </div>
      
      <button class="navigation-responsive-toggle" onclick="document.querySelector('.navigation-responsive-mobile-menu').classList.toggle('active')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      
      <div class="navigation-responsive-mobile-menu active">
        <a href="#" class="navigation-responsive-link active">Startseite</a>
        <a href="#" class="navigation-responsive-link">Unternehmen</a>
        <a href="#" class="navigation-responsive-link">Leistungen</a>
        <a href="#" class="navigation-responsive-link">Karriere</a>
        <a href="#" class="navigation-responsive-link">Presse</a>
        <a href="#" class="navigation-responsive-link">Kontakt</a>
        <a href="#" class="navigation-responsive-cta">Fahrplan</a>
      </div>
    </nav>
    
    <script>
      setTimeout(() => {
        console.log('Mobile menu is shown for demonstration');
      }, 100);
    </script>
  `,
  name: 'Mobile Menu Open',
  parameters: {
    docs: {
      description: {
        story: 'Navigation with mobile menu open, showing the dropdown menu items with proper styling and positioning.',
      },
    },
  },
}; 