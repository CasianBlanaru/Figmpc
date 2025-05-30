import portrait from './portrait.html';

export default {
  title: 'Molecules/Modules/Portrait',
  parameters: {
    docs: {
      description: {
        component: 'Portrait Component - Netinera Design System. "Im Portrait" section with header and 3 background image cards. Desktop: 1+2 grid layout → Mobile: stacked layout. Figma Node: 1829-8426.',
      },
    },
  },
};

export const Default = () => portrait;
Default.storyName = 'Portrait Component';

export const PortraitSection = {
  render: () => `
    <div class="netinera-portrait-section netinera-portrait-fade-in">
      <div class="netinera-portrait-content-wrapper">
        
        <!-- Portrait Header -->
        <div class="netinera-portrait-header">
          <h3 class="netinera-portrait-header-title">IM PORTRAIT</h3>
          <p class="netinera-portrait-header-subtitle">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
        
        <!-- Portrait Grid -->
        <div class="netinera-portrait-grid">
          
          <!-- Top Large Card -->
          <div class="netinera-portrait-grid-top">
            <div class="netinera-portrait-card netinera-portrait-card-top-left netinera-portrait-interactive netinera-portrait-slide-in" 
                 style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80');">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">ODEG</div>
                  <h3 class="netinera-portrait-card-headline">Im Osten Deutschlands unverzichtbar</h3>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Bottom Two Cards -->
          <div class="netinera-portrait-grid-bottom">
            
            <!-- Left Card -->
            <div class="netinera-portrait-card netinera-portrait-interactive netinera-portrait-slide-in" 
                 style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'); animation-delay: 0.2s;">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">ODEG</div>
                  <h3 class="netinera-portrait-card-headline">Regionale Verbindungen stärken</h3>
                </div>
              </div>
            </div>
            
            <!-- Right Card -->
            <div class="netinera-portrait-card netinera-portrait-card-bottom-right netinera-portrait-interactive netinera-portrait-slide-in" 
                 style="background-image: url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80'); animation-delay: 0.3s;">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">ODEG</div>
                  <h3 class="netinera-portrait-card-headline">Nachhaltige Mobilität</h3>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  `,
  name: 'Portrait Section',
  parameters: {
    docs: {
      description: {
        story: 'Complete portrait section with header and 3 background image cards in responsive grid layout.',
      },
    },
  },
};

export const PortraitCards = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 1200px; margin: 0 auto;">
      
      <!-- Single Large Card -->
      <div class="netinera-portrait-card netinera-portrait-card-top-left netinera-portrait-interactive" 
           style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'); max-width: 100%;">
        <div class="netinera-portrait-card-overlay">
          <div class="netinera-portrait-card-content">
            <div class="netinera-portrait-card-overline">TRANSPORT</div>
            <h3 class="netinera-portrait-card-headline">Moderne Bahntechnologie für die Zukunft</h3>
            <p class="netinera-portrait-card-description">
              Innovative Lösungen für nachhaltigen öffentlichen Verkehr mit modernster Technologie.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Grid of Two Cards -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        
        <div class="netinera-portrait-card netinera-portrait-interactive" 
             style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');">
          <div class="netinera-portrait-card-overlay">
            <div class="netinera-portrait-card-content">
              <div class="netinera-portrait-card-overline">SERVICE</div>
              <h3 class="netinera-portrait-card-headline">Kundenorientierte Lösungen</h3>
            </div>
          </div>
        </div>
        
        <div class="netinera-portrait-card netinera-portrait-card-bottom-right netinera-portrait-interactive" 
             style="background-image: url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80');">
          <div class="netinera-portrait-card-overlay">
            <div class="netinera-portrait-card-content">
              <div class="netinera-portrait-card-overline">INNOVATION</div>
              <h3 class="netinera-portrait-card-headline">Zukunftsweisende Technologien</h3>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  `,
  name: 'Portrait Cards',
  parameters: {
    docs: {
      description: {
        story: 'Individual portrait cards with different configurations and border radius variants.',
      },
    },
  },
};

export const ResponsivePortrait = {
  render: () => `
    <div class="netinera-portrait-section">
      <div class="netinera-portrait-content-wrapper">
        
        <div class="netinera-portrait-header">
          <h3 class="netinera-portrait-header-title">RESPONSIVE LAYOUT</h3>
          <p class="netinera-portrait-header-subtitle">
            Adaptives Design für alle Bildschirmgrößen - von Desktop bis Mobile optimiert.
          </p>
        </div>
        
        <div class="netinera-portrait-grid">
          
          <div class="netinera-portrait-grid-top">
            <div class="netinera-portrait-card netinera-portrait-card-top-left netinera-portrait-interactive" 
                 style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80');">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">RESPONSIVE</div>
                  <h3 class="netinera-portrait-card-headline">Desktop: 1+2 Grid Layout</h3>
                  <p class="netinera-portrait-card-description">
                    Optimale Darstellung auf großen Bildschirmen mit horizontaler Anordnung.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="netinera-portrait-grid-bottom">
            
            <div class="netinera-portrait-card netinera-portrait-interactive" 
                 style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">MOBILE</div>
                  <h3 class="netinera-portrait-card-headline">Stacked Layout</h3>
                </div>
              </div>
            </div>
            
            <div class="netinera-portrait-card netinera-portrait-card-bottom-right netinera-portrait-interactive" 
                 style="background-image: url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80');">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">ADAPTIVE</div>
                  <h3 class="netinera-portrait-card-headline">Breakpoint System</h3>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  `,
  name: 'Responsive Portrait',
  parameters: {
    docs: {
      description: {
        story: 'Fully responsive portrait section that adapts from desktop grid to mobile stacked layout.',
      },
    },
  },
};

export const AnimatedPortrait = {
  render: () => `
    <div class="netinera-portrait-section netinera-portrait-fade-in">
      <div class="netinera-portrait-content-wrapper">
        
        <div class="netinera-portrait-header">
          <h3 class="netinera-portrait-header-title">ANIMATION SHOWCASE</h3>
          <p class="netinera-portrait-header-subtitle">
            Staggered entrance animations with smooth transitions und hover effects.
          </p>
        </div>
        
        <div class="netinera-portrait-grid">
          
          <div class="netinera-portrait-grid-top">
            <div class="netinera-portrait-card netinera-portrait-card-top-left netinera-portrait-interactive netinera-portrait-slide-in" 
                 style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'); animation-delay: 0.1s;">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">ANIMATION</div>
                  <h3 class="netinera-portrait-card-headline">Slide In Effect</h3>
                  <p class="netinera-portrait-card-description">
                    Smooth entrance animation mit scale und translate effects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="netinera-portrait-grid-bottom">
            
            <div class="netinera-portrait-card netinera-portrait-interactive netinera-portrait-slide-in" 
                 style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'); animation-delay: 0.2s;">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">STAGGERED</div>
                  <h3 class="netinera-portrait-card-headline">Zeitversetzte Animation</h3>
                </div>
              </div>
            </div>
            
            <div class="netinera-portrait-card netinera-portrait-card-bottom-right netinera-portrait-interactive netinera-portrait-slide-in" 
                 style="background-image: url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80'); animation-delay: 0.3s;">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">INTERACTIVE</div>
                  <h3 class="netinera-portrait-card-headline">Hover Effects</h3>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  `,
  name: 'Animated Portrait',
  parameters: {
    docs: {
      description: {
        story: 'Portrait section with staggered entrance animations and interactive hover effects.',
      },
    },
  },
};

export const PortraitVariants = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 48px;">
      
      <!-- ODEG Variant -->
      <div class="netinera-portrait-section">
        <div class="netinera-portrait-content-wrapper">
          <div class="netinera-portrait-header">
            <h3 class="netinera-portrait-header-title">ODEG PORTRAIT</h3>
            <p class="netinera-portrait-header-subtitle">
              Ostdeutsche Eisenbahn GmbH - Regionale Verbindungen im Osten Deutschlands.
            </p>
          </div>
          <div class="netinera-portrait-grid">
            <div class="netinera-portrait-grid-top">
              <div class="netinera-portrait-card netinera-portrait-card-top-left netinera-portrait-interactive" 
                   style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80');">
                <div class="netinera-portrait-card-overlay">
                  <div class="netinera-portrait-card-content">
                    <div class="netinera-portrait-card-overline">ODEG</div>
                    <h3 class="netinera-portrait-card-headline">Im Osten Deutschlands unverzichtbar</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="netinera-portrait-grid-bottom">
              <div class="netinera-portrait-card netinera-portrait-interactive" 
                   style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');">
                <div class="netinera-portrait-card-overlay">
                  <div class="netinera-portrait-card-content">
                    <div class="netinera-portrait-card-overline">REGIONAL</div>
                    <h3 class="netinera-portrait-card-headline">Lokale Verbindungen</h3>
                  </div>
                </div>
              </div>
              <div class="netinera-portrait-card netinera-portrait-card-bottom-right netinera-portrait-interactive" 
                   style="background-image: url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80');">
                <div class="netinera-portrait-card-overlay">
                  <div class="netinera-portrait-card-content">
                    <div class="netinera-portrait-card-overline">SERVICE</div>
                    <h3 class="netinera-portrait-card-headline">Zuverlässige Mobilität</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Technology Variant -->
      <div class="netinera-portrait-section">
        <div class="netinera-portrait-content-wrapper">
          <div class="netinera-portrait-header">
            <h3 class="netinera-portrait-header-title">TECHNOLOGIE PORTRAIT</h3>
            <p class="netinera-portrait-header-subtitle">
              Innovative Lösungen für nachhaltige Mobilität und moderne Verkehrssysteme.
            </p>
          </div>
          <div class="netinera-portrait-grid">
            <div class="netinera-portrait-grid-top">
              <div class="netinera-portrait-card netinera-portrait-card-top-left netinera-portrait-interactive" 
                   style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80');">
                <div class="netinera-portrait-card-overlay">
                  <div class="netinera-portrait-card-content">
                    <div class="netinera-portrait-card-overline">INNOVATION</div>
                    <h3 class="netinera-portrait-card-headline">Zukunft der Bahntechnologie</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="netinera-portrait-grid-bottom">
              <div class="netinera-portrait-card netinera-portrait-interactive" 
                   style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');">
                <div class="netinera-portrait-card-overlay">
                  <div class="netinera-portrait-card-content">
                    <div class="netinera-portrait-card-overline">NACHHALTIGKEIT</div>
                    <h3 class="netinera-portrait-card-headline">Umweltfreundliche Lösungen</h3>
                  </div>
                </div>
              </div>
              <div class="netinera-portrait-card netinera-portrait-card-bottom-right netinera-portrait-interactive" 
                   style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80');">
                <div class="netinera-portrait-card-overlay">
                  <div class="netinera-portrait-card-content">
                    <div class="netinera-portrait-card-overline">SMART CITY</div>
                    <h3 class="netinera-portrait-card-headline">Vernetzte Mobilität</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  `,
  name: 'Portrait Variants',
  parameters: {
    docs: {
      description: {
        story: 'Different portrait section variants showcasing ODEG regional transport and technology themes.',
      },
    },
  },
};

export const AccessiblePortrait = {
  render: () => `
    <div class="netinera-portrait-section" 
         role="region" 
         aria-label="Im Portrait Sektion mit Unternehmensbereichen"
         tabindex="0">
      <div class="netinera-portrait-content-wrapper">
        
        <div class="netinera-portrait-header">
          <h3 class="netinera-portrait-header-title">ACCESSIBLE PORTRAIT</h3>
          <p class="netinera-portrait-header-subtitle">
            Vollständig zugängliche Portrait-Sektion mit ARIA-Labels und Keyboard-Navigation.
          </p>
        </div>
        
        <div class="netinera-portrait-grid">
          
          <div class="netinera-portrait-grid-top">
            <div class="netinera-portrait-card netinera-portrait-card-top-left netinera-portrait-interactive" 
                 style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80');"
                 role="button"
                 tabindex="0"
                 aria-label="Hauptbereich: Nachhaltige Bahntechnologie"
                 title="Klicken für mehr Informationen">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">ZUGÄNGLICH</div>
                  <h3 class="netinera-portrait-card-headline">Nachhaltige Bahntechnologie</h3>
                  <p class="netinera-portrait-card-description">
                    Vollständig zugängliche Implementierung mit Screen Reader Support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="netinera-portrait-grid-bottom">
            
            <div class="netinera-portrait-card netinera-portrait-interactive" 
                 style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');"
                 role="button"
                 tabindex="0"
                 aria-label="Servicebereich: Kundenorientierung"
                 title="Klicken für Service-Informationen">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">SERVICE</div>
                  <h3 class="netinera-portrait-card-headline">Kundenorientierung</h3>
                </div>
              </div>
            </div>
            
            <div class="netinera-portrait-card netinera-portrait-card-bottom-right netinera-portrait-interactive" 
                 style="background-image: url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80');"
                 role="button"
                 tabindex="0"
                 aria-label="Innovationsbereich: Zukunftstechnologien"
                 title="Klicken für Innovation-Details">
              <div class="netinera-portrait-card-overlay">
                <div class="netinera-portrait-card-content">
                  <div class="netinera-portrait-card-overline">INNOVATION</div>
                  <h3 class="netinera-portrait-card-headline">Zukunftstechnologien</h3>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  `,
  name: 'Accessible Portrait',
  parameters: {
    docs: {
      description: {
        story: 'Portrait component with full accessibility features including ARIA labels, keyboard navigation, and screen reader support.',
      },
    },
  },
};
