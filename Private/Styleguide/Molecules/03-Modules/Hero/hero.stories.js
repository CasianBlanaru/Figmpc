// == Hero / ZI-40
//

import hero from './hero.html';
import heroSlider from './hero-slider.html';

export default {
  title: 'Molecules/Modules/Hero',
  parameters: {
    docs: {
      description: {
        component: 'Hero Component - Netinera Design System. Large hero sections with background images, content overlays, and call-to-action elements. Support for static hero and hero slider variants. Responsive design with mobile-first approach.',
      },
    },
  },
};

export const Default = () => hero;
Default.storyName = 'Hero Component';

export const Hero = {
  render: () => hero,
  name: 'Static Hero',
  parameters: {
    docs: {
      description: {
        story: 'Static hero component with background image, overlay content, and call-to-action buttons.',
      },
    },
  },
};

export const HeroSlider = {
  render: () => heroSlider,
  name: 'Hero Slider',
  parameters: {
    docs: {
      description: {
        story: 'Hero slider component with multiple slides, navigation controls, and dynamic content.',
      },
    },
  },
};

export const HeroLandingpage = {
  render: () => `
    <div class="netinera-hero netinera-hero-landingpage">
      <div class="netinera-hero-container">
        <!-- Background Image -->
        <div class="netinera-hero-background">
          <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80" 
               alt="Moderne Züge der Netinera Gruppe" 
               class="netinera-hero-image" />
          <div class="netinera-hero-overlay"></div>
        </div>
        
        <!-- Hero Content -->
        <div class="netinera-hero-content">
          <div class="netinera-hero-content-wrapper">
            <div class="netinera-hero-overline">NACHHALTIGE MOBILITÄT</div>
            <h1 class="netinera-hero-headline">
              Die Zukunft der Mobilität beginnt heute
            </h1>
            <p class="netinera-hero-description">
              Als führendes Verkehrsunternehmen in Deutschland gestalten wir nachhaltige 
              Mobilität für Millionen von Fahrgästen. Innovative Technologien, 
              umweltfreundliche Lösungen und exzellenter Service stehen im Mittelpunkt unserer Arbeit.
            </p>
            <div class="netinera-hero-actions">
              <button class="netinera-hero-button-primary">Mehr erfahren</button>
              <button class="netinera-hero-button-secondary">Karriere</button>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="netinera-hero-scroll-indicator">
          <button class="netinera-hero-scroll-button" aria-label="Nach unten scrollen">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  name: 'Hero Landingpage',
  parameters: {
    docs: {
      description: {
        story: 'Full-screen landingpage hero with background image, centered content, and scroll indicator.',
      },
    },
  },
};

export const HeroService = {
  render: () => `
    <div class="netinera-hero netinera-hero-service">
      <div class="netinera-hero-container">
        <!-- Background Image -->
        <div class="netinera-hero-background">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80" 
               alt="Service Excellence" 
               class="netinera-hero-image" />
          <div class="netinera-hero-overlay netinera-hero-overlay-service"></div>
        </div>
        
        <!-- Hero Content -->
        <div class="netinera-hero-content netinera-hero-content-left">
          <div class="netinera-hero-content-wrapper">
            <div class="netinera-hero-overline">SERVICE EXCELLENCE</div>
            <h1 class="netinera-hero-headline">
              Erstklassiger Service für unsere Fahrgäste
            </h1>
            <p class="netinera-hero-description">
              Kundenzufriedenheit steht im Mittelpunkt unserer Arbeit. 
              Vom ersten Kontakt bis zur Ankunft am Ziel bieten wir 
              einen umfassenden Service, der keine Wünsche offen lässt.
            </p>
            <div class="netinera-hero-actions">
              <button class="netinera-hero-button-primary">Service entdecken</button>
              <button class="netinera-hero-button-secondary">Kontakt</button>
            </div>
          </div>
        </div>
        
        <!-- Service Features -->
        <div class="netinera-hero-features">
          <div class="netinera-hero-feature">
            <div class="netinera-hero-feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div class="netinera-hero-feature-text">
              <h3>Ausgezeichnet</h3>
              <p>Mehrfach prämierte Servicequalität</p>
            </div>
          </div>
          <div class="netinera-hero-feature">
            <div class="netinera-hero-feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div class="netinera-hero-feature-text">
              <h3>Zuverlässig</h3>
              <p>95% Pünktlichkeit im Fernverkehr</p>
            </div>
          </div>
          <div class="netinera-hero-feature">
            <div class="netinera-hero-feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <div class="netinera-hero-feature-text">
              <h3>Persönlich</h3>
              <p>24/7 Kundenbetreuung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Hero Service',
  parameters: {
    docs: {
      description: {
        story: 'Service-focused hero with left-aligned content and feature highlights showcasing key service benefits.',
      },
    },
  },
};

export const HeroNews = {
  render: () => `
    <div class="netinera-hero netinera-hero-news">
      <div class="netinera-hero-container">
        <!-- Background Image -->
        <div class="netinera-hero-background">
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
               alt="Aktuelle Nachrichten" 
               class="netinera-hero-image" />
          <div class="netinera-hero-overlay netinera-hero-overlay-news"></div>
        </div>
        
        <!-- Hero Content -->
        <div class="netinera-hero-content netinera-hero-content-center">
          <div class="netinera-hero-content-wrapper">
            <div class="netinera-hero-breadcrumb">
              <span>Home</span>
              <span>/</span>
              <span>Newsroom</span>
              <span>/</span>
              <span class="active">Pressemitteilungen</span>
            </div>
            <div class="netinera-hero-overline">NEWSROOM</div>
            <h1 class="netinera-hero-headline">
              Aktuelle Nachrichten und Pressemitteilungen
            </h1>
            <p class="netinera-hero-description">
              Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen 
              bei Netinera. Hier finden Sie aktuelle Pressemitteilungen, 
              Unternehmensnachrichten und wichtige Ankündigungen.
            </p>
            <div class="netinera-hero-meta">
              <div class="netinera-hero-meta-item">
                <span class="netinera-hero-meta-label">Zuletzt aktualisiert:</span>
                <span class="netinera-hero-meta-value">15. März 2024</span>
              </div>
              <div class="netinera-hero-meta-item">
                <span class="netinera-hero-meta-label">Kategorie:</span>
                <span class="netinera-hero-meta-value">Pressemitteilungen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Hero News',
  parameters: {
    docs: {
      description: {
        story: 'News/press hero with breadcrumb navigation, centered content, and meta information display.',
      },
    },
  },
};

export const HeroResponsive = {
  render: () => `
    <div class="netinera-hero netinera-hero-responsive">
      <div class="netinera-hero-container">
        <!-- Background Image -->
        <div class="netinera-hero-background">
          <picture>
            <source media="(min-width: 1024px)" 
                    srcset="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80">
            <source media="(min-width: 768px)" 
                    srcset="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&h=768&q=80">
            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=1024&q=80" 
                 alt="Responsive Hero Image" 
                 class="netinera-hero-image" />
          </picture>
          <div class="netinera-hero-overlay"></div>
        </div>
        
        <!-- Hero Content -->
        <div class="netinera-hero-content">
          <div class="netinera-hero-content-wrapper">
            <div class="netinera-hero-overline">RESPONSIVE DESIGN</div>
            <h1 class="netinera-hero-headline">
              <span class="netinera-hero-headline-mobile">Mobile First</span>
              <span class="netinera-hero-headline-desktop">Optimiert für alle Geräte</span>
            </h1>
            <p class="netinera-hero-description">
              Unser Hero-Component passt sich automatisch an verschiedene 
              Bildschirmgrößen an. Von Smartphone bis Desktop - 
              optimale Darstellung auf allen Geräten.
            </p>
            <div class="netinera-hero-actions">
              <button class="netinera-hero-button-primary">
                <span class="netinera-hero-button-mobile">Demo</span>
                <span class="netinera-hero-button-desktop">Live Demo ansehen</span>
              </button>
              <button class="netinera-hero-button-secondary">
                <span class="netinera-hero-button-mobile">Info</span>
                <span class="netinera-hero-button-desktop">Mehr Informationen</span>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Device Indicators -->
        <div class="netinera-hero-device-indicator">
          <div class="netinera-hero-device-indicator-item">
            <div class="netinera-hero-device-icon">📱</div>
            <span>Mobile</span>
          </div>
          <div class="netinera-hero-device-indicator-item">
            <div class="netinera-hero-device-icon">💻</div>
            <span>Desktop</span>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Hero Responsive',
  parameters: {
    docs: {
      description: {
        story: 'Fully responsive hero with adaptive content, responsive images, and device-specific text variations.',
      },
    },
  },
};

export const HeroAccessible = {
  render: () => `
    <div class="netinera-hero" 
         role="banner"
         aria-label="Hauptbereich der Seite mit Zugänglichkeits-Features">
      <div class="netinera-hero-container">
        <!-- Background Image -->
        <div class="netinera-hero-background" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80" 
               alt="" 
               class="netinera-hero-image"
               role="presentation" />
          <div class="netinera-hero-overlay"></div>
        </div>
        
        <!-- Hero Content -->
        <div class="netinera-hero-content">
          <div class="netinera-hero-content-wrapper">
            <div class="netinera-hero-overline" aria-label="Themenbereich">BARRIEREFREIHEIT</div>
            <h1 class="netinera-hero-headline" id="hero-headline">
              Zugänglich für alle Nutzer
            </h1>
            <p class="netinera-hero-description" 
               aria-describedby="hero-headline">
              Unser Hero-Component ist vollständig barrierefrei gestaltet. 
              ARIA-Labels, Keyboard-Navigation, Screen Reader Support und 
              hohe Kontraste sorgen für optimale Zugänglichkeit.
            </p>
            <div class="netinera-hero-actions" role="group" aria-label="Hauptaktionen">
              <button class="netinera-hero-button-primary" 
                      aria-label="Mehr über Barrierefreiheit erfahren"
                      tabindex="0">
                Barrierefreiheit entdecken
              </button>
              <button class="netinera-hero-button-secondary" 
                      aria-label="Technische Dokumentation öffnen"
                      tabindex="0">
                Dokumentation
              </button>
            </div>
          </div>
        </div>
        
        <!-- Accessibility Features -->
        <div class="netinera-hero-accessibility-features" aria-label="Zugänglichkeits-Features">
          <div class="netinera-hero-a11y-feature">
            <div class="netinera-hero-a11y-icon" aria-hidden="true">♿</div>
            <span>Screen Reader Support</span>
          </div>
          <div class="netinera-hero-a11y-feature">
            <div class="netinera-hero-a11y-icon" aria-hidden="true">⌨️</div>
            <span>Keyboard Navigation</span>
          </div>
          <div class="netinera-hero-a11y-feature">
            <div class="netinera-hero-a11y-icon" aria-hidden="true">🔍</div>
            <span>High Contrast</span>
          </div>
          <div class="netinera-hero-a11y-feature">
            <div class="netinera-hero-a11y-icon" aria-hidden="true">🏷️</div>
            <span>ARIA Labels</span>
          </div>
        </div>
        
        <!-- Skip Links -->
        <div class="netinera-hero-skip-links">
          <a href="#main-content" class="netinera-hero-skip-link">
            Zum Hauptinhalt springen
          </a>
          <a href="#navigation" class="netinera-hero-skip-link">
            Zur Navigation springen
          </a>
        </div>
      </div>
    </div>
  `,
  name: 'Hero Accessible',
  parameters: {
    docs: {
      description: {
        story: 'Fully accessible hero with ARIA labels, keyboard navigation, screen reader support, and accessibility feature highlights.',
      },
    },
  },
};