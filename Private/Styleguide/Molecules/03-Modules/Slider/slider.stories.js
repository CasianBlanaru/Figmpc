import slider from './slider.html';

export default {
  title: 'Molecules/Modules/Slider',
  parameters: {
    docs: {
      description: {
        component: 'Slider Component - Netinera Design System. Interactive carousel with navigation controls and pagination. Support for multiple content types including images, cards, and text content. Fully responsive with touch/swipe support.',
      },
    },
  },
};

export const Default = () => slider;
Default.storyName = 'Slider Component';

export const ImageSlider = {
  render: () => `
    <div class="netinera-slider" data-slider="image-demo">
      <!-- Slider Container -->
      <div class="netinera-slider-container">
        <!-- Slider Wrapper -->
        <div class="netinera-slider-wrapper">
          
          <!-- Slide 1 -->
          <div class="netinera-slider-slide">
            <div class="netinera-slider-content">
              <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80" 
                   alt="Moderne Züge der Netinera Gruppe" 
                   class="netinera-slider-image" />
              <div class="netinera-slider-overlay">
                <div class="netinera-slider-text-content">
                  <h3 class="netinera-slider-headline">Moderne Bahntechnologie</h3>
                  <p class="netinera-slider-description">
                    Innovative Züge für nachhaltige Mobilität und zuverlässigen Personenverkehr.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Slide 2 -->
          <div class="netinera-slider-slide">
            <div class="netinera-slider-content">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80" 
                   alt="Bahnhof und Infrastruktur" 
                   class="netinera-slider-image" />
              <div class="netinera-slider-overlay">
                <div class="netinera-slider-text-content">
                  <h3 class="netinera-slider-headline">Infrastruktur Excellence</h3>
                  <p class="netinera-slider-description">
                    Moderne Bahnhöfe und Infrastruktur für optimale Fahrgasterfahrung.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Slide 3 -->
          <div class="netinera-slider-slide">
            <div class="netinera-slider-content">
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80" 
                   alt="Nachhaltige Mobilität" 
                   class="netinera-slider-image" />
              <div class="netinera-slider-overlay">
                <div class="netinera-slider-text-content">
                  <h3 class="netinera-slider-headline">Nachhaltige Zukunft</h3>
                  <p class="netinera-slider-description">
                    Umweltfreundliche Verkehrslösungen für die Mobilität von morgen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- Navigation Controls -->
        <div class="netinera-slider-navigation">
          <button class="netinera-slider-nav netinera-slider-nav-prev" aria-label="Vorheriger Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button class="netinera-slider-nav netinera-slider-nav-next" aria-label="Nächster Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
        
        <!-- Pagination Dots -->
        <div class="netinera-slider-pagination">
          <button class="netinera-slider-dot active" aria-label="Slide 1"></button>
          <button class="netinera-slider-dot" aria-label="Slide 2"></button>
          <button class="netinera-slider-dot" aria-label="Slide 3"></button>
        </div>
        
      </div>
    </div>
  `,
  name: 'Image Slider',
  parameters: {
    docs: {
      description: {
        story: 'Image slider with overlay text content, navigation controls, and pagination dots.',
      },
    },
  },
};

export const CardSlider = {
  render: () => `
    <div class="netinera-slider netinera-slider-cards" data-slider="card-demo">
      <div class="netinera-slider-container">
        <div class="netinera-slider-wrapper">
          
          <!-- Card Slide 1 -->
          <div class="netinera-slider-slide">
            <div class="netinera-slider-card">
              <div class="netinera-slider-card-image">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80" 
                     alt="Service Excellence" 
                     class="w-full h-full object-cover" />
              </div>
              <div class="netinera-slider-card-content">
                <div class="netinera-slider-card-overline">SERVICE</div>
                <h4 class="netinera-slider-card-headline">Excellence in Service</h4>
                <p class="netinera-slider-card-description">
                  Hohe Servicequalität und Kundenzufriedenheit stehen im Mittelpunkt unserer Arbeit.
                </p>
                <button class="netinera-slider-card-button">Mehr erfahren</button>
              </div>
            </div>
          </div>
          
          <!-- Card Slide 2 -->
          <div class="netinera-slider-slide">
            <div class="netinera-slider-card">
              <div class="netinera-slider-card-image">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80" 
                     alt="Innovation Hub" 
                     class="w-full h-full object-cover" />
              </div>
              <div class="netinera-slider-card-content">
                <div class="netinera-slider-card-overline">INNOVATION</div>
                <h4 class="netinera-slider-card-headline">Innovation Hub</h4>
                <p class="netinera-slider-card-description">
                  Zukunftsweisende Technologien und innovative Lösungen für moderne Mobilität.
                </p>
                <button class="netinera-slider-card-button">Mehr erfahren</button>
              </div>
            </div>
          </div>
          
          <!-- Card Slide 3 -->
          <div class="netinera-slider-slide">
            <div class="netinera-slider-card">
              <div class="netinera-slider-card-image">
                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80" 
                     alt="Nachhaltigkeit" 
                     class="w-full h-full object-cover" />
              </div>
              <div class="netinera-slider-card-content">
                <div class="netinera-slider-card-overline">NACHHALTIGKEIT</div>
                <h4 class="netinera-slider-card-headline">Green Mobility</h4>
                <p class="netinera-slider-card-description">
                  Umweltfreundliche Verkehrslösungen für eine nachhaltige Zukunft.
                </p>
                <button class="netinera-slider-card-button">Mehr erfahren</button>
              </div>
            </div>
          </div>
          
          <!-- Card Slide 4 -->
          <div class="netinera-slider-slide">
            <div class="netinera-slider-card">
              <div class="netinera-slider-card-image">
                <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80" 
                     alt="Digitalisierung" 
                     class="w-full h-full object-cover" />
              </div>
              <div class="netinera-slider-card-content">
                <div class="netinera-slider-card-overline">DIGITAL</div>
                <h4 class="netinera-slider-card-headline">Digital Transform</h4>
                <p class="netinera-slider-card-description">
                  Digitale Transformation im öffentlichen Verkehr für bessere Effizienz.
                </p>
                <button class="netinera-slider-card-button">Mehr erfahren</button>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- Navigation Controls -->
        <div class="netinera-slider-navigation">
          <button class="netinera-slider-nav netinera-slider-nav-prev" aria-label="Vorherige Karte">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button class="netinera-slider-nav netinera-slider-nav-next" aria-label="Nächste Karte">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
        
        <!-- Pagination Dots -->
        <div class="netinera-slider-pagination">
          <button class="netinera-slider-dot active" aria-label="Karte 1"></button>
          <button class="netinera-slider-dot" aria-label="Karte 2"></button>
          <button class="netinera-slider-dot" aria-label="Karte 3"></button>
          <button class="netinera-slider-dot" aria-label="Karte 4"></button>
        </div>
        
      </div>
    </div>
  `,
  name: 'Card Slider',
  parameters: {
    docs: {
      description: {
        story: 'Card-based slider with image, text content, and action buttons for each slide.',
      },
    },
  },
};

export const AutoplaySlider = {
  render: () => `
    <div class="netinera-slider netinera-slider-autoplay" data-slider="autoplay-demo" data-autoplay="true" data-autoplay-delay="4000">
      <div class="netinera-slider-container">
        <div class="netinera-slider-wrapper">
          
          <div class="netinera-slider-slide">
            <div class="netinera-slider-content">
              <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
                   alt="Autoplay Slide 1" 
                   class="netinera-slider-image" />
              <div class="netinera-slider-overlay">
                <div class="netinera-slider-text-content">
                  <h3 class="netinera-slider-headline">Automatische Wiedergabe</h3>
                  <p class="netinera-slider-description">
                    Dieser Slider wechselt automatisch alle 4 Sekunden zum nächsten Slide.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="netinera-slider-slide">
            <div class="netinera-slider-content">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
                   alt="Autoplay Slide 2" 
                   class="netinera-slider-image" />
              <div class="netinera-slider-overlay">
                <div class="netinera-slider-text-content">
                  <h3 class="netinera-slider-headline">Pause bei Hover</h3>
                  <p class="netinera-slider-description">
                    Bewegen Sie die Maus über den Slider, um die Autoplay-Funktion zu pausieren.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="netinera-slider-slide">
            <div class="netinera-slider-content">
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
                   alt="Autoplay Slide 3" 
                   class="netinera-slider-image" />
              <div class="netinera-slider-overlay">
                <div class="netinera-slider-text-content">
                  <h3 class="netinera-slider-headline">Touch & Swipe</h3>
                  <p class="netinera-slider-description">
                    Auf mobilen Geräten können Sie durch Wischen zwischen den Slides navigieren.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- Navigation Controls -->
        <div class="netinera-slider-navigation">
          <button class="netinera-slider-nav netinera-slider-nav-prev" aria-label="Vorheriger Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button class="netinera-slider-nav netinera-slider-nav-next" aria-label="Nächster Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
        
        <!-- Pagination with Progress -->
        <div class="netinera-slider-pagination netinera-slider-pagination-progress">
          <button class="netinera-slider-dot netinera-slider-dot-progress active" aria-label="Slide 1">
            <div class="netinera-slider-progress-ring"></div>
          </button>
          <button class="netinera-slider-dot netinera-slider-dot-progress" aria-label="Slide 2">
            <div class="netinera-slider-progress-ring"></div>
          </button>
          <button class="netinera-slider-dot netinera-slider-dot-progress" aria-label="Slide 3">
            <div class="netinera-slider-progress-ring"></div>
          </button>
        </div>
        
        <!-- Autoplay Controls -->
        <div class="netinera-slider-autoplay-controls">
          <button class="netinera-slider-play-pause" aria-label="Autoplay pausieren/fortsetzen">
            <svg class="netinera-slider-pause-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
            <svg class="netinera-slider-play-icon hidden" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  `,
  name: 'Autoplay Slider',
  parameters: {
    docs: {
      description: {
        story: 'Slider with automatic progression, pause on hover, and play/pause controls with progress indicators.',
      },
    },
  },
};

export const ResponsiveSlider = {
  render: () => `
    <div class="netinera-slider netinera-slider-responsive" data-slider="responsive-demo">
      <div class="netinera-slider-container">
        <div class="netinera-slider-wrapper">
          
          <div class="netinera-slider-slide">
            <div class="netinera-slider-content">
              <div class="netinera-slider-responsive-content">
                <div class="netinera-slider-text-section">
                  <div class="netinera-slider-overline">RESPONSIVE</div>
                  <h3 class="netinera-slider-headline">Mobile First Design</h3>
                  <p class="netinera-slider-description">
                    Optimiert für alle Bildschirmgrößen - von Smartphone bis Desktop.
                  </p>
                  <div class="netinera-slider-actions">
                    <button class="netinera-slider-button-primary">Primäre Aktion</button>
                    <button class="netinera-slider-button-secondary">Sekundäre Aktion</button>
                  </div>
                </div>
                <div class="netinera-slider-image-section">
                  <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                       alt="Responsive Design" 
                       class="netinera-slider-content-image" />
                </div>
              </div>
            </div>
          </div>
          
          <div class="netinera-slider-slide">
            <div class="netinera-slider-content">
              <div class="netinera-slider-responsive-content">
                <div class="netinera-slider-text-section">
                  <div class="netinera-slider-overline">ADAPTIVE</div>
                  <h3 class="netinera-slider-headline">Adaptive Layouts</h3>
                  <p class="netinera-slider-description">
                    Layout passt sich automatisch an verfügbaren Platz und Gerätetype an.
                  </p>
                  <div class="netinera-slider-actions">
                    <button class="netinera-slider-button-primary">Mehr Details</button>
                    <button class="netinera-slider-button-secondary">Demo ansehen</button>
                  </div>
                </div>
                <div class="netinera-slider-image-section">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                       alt="Adaptive Layouts" 
                       class="netinera-slider-content-image" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- Navigation Controls -->
        <div class="netinera-slider-navigation">
          <button class="netinera-slider-nav netinera-slider-nav-prev" aria-label="Vorheriger Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button class="netinera-slider-nav netinera-slider-nav-next" aria-label="Nächster Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
        
        <!-- Pagination Dots -->
        <div class="netinera-slider-pagination">
          <button class="netinera-slider-dot active" aria-label="Slide 1"></button>
          <button class="netinera-slider-dot" aria-label="Slide 2"></button>
        </div>
        
      </div>
    </div>
  `,
  name: 'Responsive Slider',
  parameters: {
    docs: {
      description: {
        story: 'Responsive slider with adaptive content layout for different screen sizes and content arrangements.',
      },
    },
  },
};

export const AccessibleSlider = {
  render: () => `
    <div class="netinera-slider" 
         data-slider="accessible-demo"
         role="region"
         aria-label="Netinera Zugänglichkeits-Slider"
         aria-live="polite">
      <div class="netinera-slider-container">
        <div class="netinera-slider-wrapper" role="tablist">
          
          <div class="netinera-slider-slide" 
               role="tabpanel" 
               tabindex="0"
               aria-label="Slide 1 von 3: Barrierefreiheit"
               id="slide-1">
            <div class="netinera-slider-content">
              <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
                   alt="Barrierefreie Züge mit Rollstuhlrampen und taktilen Leitsystemen" 
                   class="netinera-slider-image" />
              <div class="netinera-slider-overlay">
                <div class="netinera-slider-text-content">
                  <h3 class="netinera-slider-headline">Vollständige Barrierefreiheit</h3>
                  <p class="netinera-slider-description">
                    ARIA-Labels, Keyboard-Navigation und Screen Reader Support für optimale Zugänglichkeit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="netinera-slider-slide" 
               role="tabpanel" 
               tabindex="-1"
               aria-label="Slide 2 von 3: Tastatur-Navigation"
               id="slide-2"
               aria-hidden="true">
            <div class="netinera-slider-content">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
                   alt="Zugängliche Bedienelemente mit Tastatur-Navigation" 
                   class="netinera-slider-image" />
              <div class="netinera-slider-overlay">
                <div class="netinera-slider-text-content">
                  <h3 class="netinera-slider-headline">Tastatur-Navigation</h3>
                  <p class="netinera-slider-description">
                    Vollständige Steuerung per Tastatur mit Pfeiltasten, Tab-Navigation und Enter/Space Aktivierung.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="netinera-slider-slide" 
               role="tabpanel" 
               tabindex="-1"
               aria-label="Slide 3 von 3: Hohe Kontraste"
               id="slide-3"
               aria-hidden="true">
            <div class="netinera-slider-content">
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
                   alt="Hochkontrast-Design für bessere Sichtbarkeit" 
                   class="netinera-slider-image" />
              <div class="netinera-slider-overlay">
                <div class="netinera-slider-text-content">
                  <h3 class="netinera-slider-headline">Hohe Kontraste</h3>
                  <p class="netinera-slider-description">
                    Optimierte Kontraste und Focus-States für Nutzer mit Sehbeeinträchtigungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- Navigation Controls -->
        <div class="netinera-slider-navigation" role="group" aria-label="Slider Navigation">
          <button class="netinera-slider-nav netinera-slider-nav-prev" 
                  aria-label="Zum vorherigen Slide wechseln"
                  aria-controls="slide-1 slide-2 slide-3"
                  tabindex="0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            <span class="sr-only">Vorheriger Slide</span>
          </button>
          <button class="netinera-slider-nav netinera-slider-nav-next" 
                  aria-label="Zum nächsten Slide wechseln"
                  aria-controls="slide-1 slide-2 slide-3"
                  tabindex="0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
            <span class="sr-only">Nächster Slide</span>
          </button>
        </div>
        
        <!-- Pagination Dots -->
        <div class="netinera-slider-pagination" role="tablist" aria-label="Slider Seiten">
          <button class="netinera-slider-dot active" 
                  role="tab"
                  aria-label="Zu Slide 1 wechseln: Barrierefreiheit"
                  aria-selected="true"
                  aria-controls="slide-1"
                  tabindex="0"></button>
          <button class="netinera-slider-dot" 
                  role="tab"
                  aria-label="Zu Slide 2 wechseln: Tastatur-Navigation"
                  aria-selected="false"
                  aria-controls="slide-2"
                  tabindex="-1"></button>
          <button class="netinera-slider-dot" 
                  role="tab"
                  aria-label="Zu Slide 3 wechseln: Hohe Kontraste"
                  aria-selected="false"
                  aria-controls="slide-3"
                  tabindex="-1"></button>
        </div>
        
      </div>
      
      <!-- Screen Reader Instructions -->
      <div class="sr-only" aria-live="polite" id="slider-instructions">
        Verwenden Sie die Pfeiltasten links und rechts oder die Tab-Taste, um zwischen den Slides zu navigieren. Drücken Sie Enter oder Space, um ein Slide auszuwählen.
      </div>
    </div>
  `,
  name: 'Accessible Slider',
  parameters: {
    docs: {
      description: {
        story: 'Fully accessible slider with ARIA labels, keyboard navigation, screen reader support, and high contrast compatibility.',
      },
    },
  },
}; 