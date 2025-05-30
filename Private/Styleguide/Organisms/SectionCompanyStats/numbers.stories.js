// == Numbers
//

import sectionCompanyStats from './section-company-stats.html';

export default {
  title: 'Organisms/SectionCompanyStats',
  parameters: {
    docs: {
      description: {
        component: 'Section Company Stats - Netinera Design System. "Netinera in Zahlen" section with header and statistics grid. Desktop: 3×2 grid → Tablet: 2×3 → Mobile: 1×6 stacked. Figma Node: 1827-5972.',
      },
    },
  },
};

export const Default = () => sectionCompanyStats;
Default.storyName = 'Section Company Stats';

export const CompanyStatsSection = {
  render: () => `
    <div class="netinera-section-company-stats netinera-company-stats-fade-in">
      <div class="netinera-section-company-stats-wrapper">
        
        <!-- Company Stats Header -->
        <div class="netinera-company-stats-header">
          <h3 class="netinera-company-stats-header-title">NETINERA IN ZAHLEN</h3>
          <p class="netinera-company-stats-header-subtitle">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
        
        <!-- Company Stats Grid -->
        <div class="netinera-company-stats-grid">
          
          <!-- Stat 1: Züge -->
          <div class="netinera-company-stats-card netinera-company-stats-interactive netinera-company-stats-count-up">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-train" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">439</div>
                <div class="netinera-company-stats-label">Züge</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Täglich verbinden Fernzüge Städte und Regionen effizient und nachhaltig.
            </div>
          </div>
          
          <!-- Stat 2: Werkstätten -->
          <div class="netinera-company-stats-card netinera-company-stats-interactive netinera-company-stats-count-up">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-tools" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">99</div>
                <div class="netinera-company-stats-label">Werkstätten</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Ein echtes Netzwerk, das für effizienten Service und zuverlässige Wartung sorgt.
            </div>
          </div>
          
          <!-- Stat 3: Umsatz -->
          <div class="netinera-company-stats-card netinera-company-stats-interactive netinera-company-stats-count-up">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-euro" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">2,4B</div>
                <div class="netinera-company-stats-label">Umsatz</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Milliarden Euro Jahresumsatz durch nachhaltige Mobilität und Innovation.
            </div>
          </div>
          
          <!-- Stat 4: Mitarbeiter -->
          <div class="netinera-company-stats-card netinera-company-stats-interactive netinera-company-stats-count-up">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-people" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">35.000</div>
                <div class="netinera-company-stats-label">Mitarbeiter</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Qualifizierte Fachkräfte sorgen täglich für reibungslose Mobilität.
            </div>
          </div>
          
          <!-- Stat 5: Busse -->
          <div class="netinera-company-stats-card netinera-company-stats-interactive netinera-company-stats-count-up">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-bus" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">1.200</div>
                <div class="netinera-company-stats-label">Busse</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Moderne Busflotte für urbane und regionale Verkehrsverbindungen.
            </div>
          </div>
          
          <!-- Stat 6: Streckenkilometer -->
          <div class="netinera-company-stats-card netinera-company-stats-interactive netinera-company-stats-count-up">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-track" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">25.000</div>
                <div class="netinera-company-stats-label">Strecken-KM</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Kilometer Streckennetz verbinden Menschen und Regionen in ganz Deutschland.
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  `,
  name: 'Company Stats Section',
  parameters: {
    docs: {
      description: {
        story: 'Complete company statistics section with header and 6 statistics cards in responsive grid layout.',
      },
    },
  },
};

export const CompanyStatsCards = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; max-width: 1200px; margin: 0 auto;">
      
      <!-- Individual Stat Cards -->
      <div class="netinera-company-stats-card netinera-company-stats-interactive">
        <div class="netinera-company-stats-layout-group">
          <div class="netinera-company-stats-icon">
            <i class="icon icon-train" aria-hidden="true"></i>
          </div>
          <div class="netinera-company-stats-text-group">
            <div class="netinera-company-stats-number">439</div>
            <div class="netinera-company-stats-label">Züge</div>
          </div>
        </div>
        <div class="netinera-company-stats-subline">
          Täglich verbinden Fernzüge Städte und Regionen effizient und nachhaltig.
        </div>
      </div>
      
      <div class="netinera-company-stats-card netinera-company-stats-interactive">
        <div class="netinera-company-stats-layout-group">
          <div class="netinera-company-stats-icon">
            <i class="icon icon-tools" aria-hidden="true"></i>
          </div>
          <div class="netinera-company-stats-text-group">
            <div class="netinera-company-stats-number">99</div>
            <div class="netinera-company-stats-label">Werkstätten</div>
          </div>
        </div>
        <div class="netinera-company-stats-subline">
          Ein echtes Netzwerk, das für effizienten Service und zuverlässige Wartung sorgt.
        </div>
      </div>
      
      <div class="netinera-company-stats-card netinera-company-stats-interactive">
        <div class="netinera-company-stats-layout-group">
          <div class="netinera-company-stats-icon">
            <i class="icon icon-euro" aria-hidden="true"></i>
          </div>
          <div class="netinera-company-stats-text-group">
            <div class="netinera-company-stats-number">2,4B</div>
            <div class="netinera-company-stats-label">Umsatz</div>
          </div>
        </div>
        <div class="netinera-company-stats-subline">
          Milliarden Euro Jahresumsatz durch nachhaltige Mobilität und Innovation.
        </div>
      </div>
      
    </div>
  `,
  name: 'Company Stats Cards',
  parameters: {
    docs: {
      description: {
        story: 'Individual company statistics cards with icons, numbers, labels and descriptions.',
      },
    },
  },
};

export const ResponsiveStatsGrid = {
  render: () => `
    <div class="netinera-section-company-stats">
      <div class="netinera-section-company-stats-wrapper">
        
        <div class="netinera-company-stats-header">
          <h3 class="netinera-company-stats-header-title">RESPONSIVE GRID LAYOUT</h3>
          <p class="netinera-company-stats-header-subtitle">
            Adaptives Grid-System: Desktop 3×2 → Tablet 2×3 → Mobile 1×6 stacked layout.
          </p>
        </div>
        
        <div class="netinera-company-stats-grid">
          
          <div class="netinera-company-stats-card netinera-company-stats-interactive">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-train" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">Desktop</div>
                <div class="netinera-company-stats-label">3 Columns</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Optimale Darstellung auf großen Bildschirmen mit 3-spaltiger Anordnung.
            </div>
          </div>
          
          <div class="netinera-company-stats-card netinera-company-stats-interactive">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-tools" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">Tablet</div>
                <div class="netinera-company-stats-label">2 Columns</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Tablet-optimierte Ansicht mit 2-spaltiger Anordnung für bessere Lesbarkeit.
            </div>
          </div>
          
          <div class="netinera-company-stats-card netinera-company-stats-interactive">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-people" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">Mobile</div>
                <div class="netinera-company-stats-label">1 Column</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Mobile-first Design mit gestapeltem Layout für optimale Touch-Bedienung.
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  `,
  name: 'Responsive Stats Grid',
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid system that adapts from desktop 3-column to tablet 2-column to mobile stacked layout.',
      },
    },
  },
};

export const AnimatedStatsCounter = {
  render: () => `
    <div class="netinera-section-company-stats netinera-company-stats-fade-in">
      <div class="netinera-section-company-stats-wrapper">
        
        <div class="netinera-company-stats-header">
          <h3 class="netinera-company-stats-header-title">ANIMATED COUNTERS</h3>
          <p class="netinera-company-stats-header-subtitle">
            Staggered entrance animations mit count-up effects und hover interactions.
          </p>
        </div>
        
        <div class="netinera-company-stats-grid">
          
          <div class="netinera-company-stats-card netinera-company-stats-interactive netinera-company-stats-count-up" style="animation-delay: 0.1s;">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-train" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">439</div>
                <div class="netinera-company-stats-label">Züge</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Count-up Animation von 0 auf 439 mit Slide-in Effect.
            </div>
          </div>
          
          <div class="netinera-company-stats-card netinera-company-stats-interactive netinera-company-stats-count-up" style="animation-delay: 0.2s;">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-euro" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number netinera-company-stats-number-pulse">2,4B</div>
                <div class="netinera-company-stats-label">Umsatz</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Pulse-Animation bei Hover für besondere Zahlen-Hervorhebung.
            </div>
          </div>
          
          <div class="netinera-company-stats-card netinera-company-stats-interactive netinera-company-stats-count-up" style="animation-delay: 0.3s;">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon">
                <i class="icon icon-people" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number">35.000</div>
                <div class="netinera-company-stats-label">Mitarbeiter</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Staggered Timing sorgt für sequentielle Erscheinung der Statistiken.
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  `,
  name: 'Animated Stats Counter',
  parameters: {
    docs: {
      description: {
        story: 'Company statistics with animated counters, staggered entrance timing, and interactive hover effects.',
      },
    },
  },
};

export const StatsVariants = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 48px;">
      
      <!-- Financial Focus -->
      <div class="netinera-section-company-stats">
        <div class="netinera-section-company-stats-wrapper">
          <div class="netinera-company-stats-header">
            <h3 class="netinera-company-stats-header-title">FINANCIAL PERFORMANCE</h3>
            <p class="netinera-company-stats-header-subtitle">
              Finanzielle Kennzahlen und Unternehmenserfolg in nachhaltiger Mobilität.
            </p>
          </div>
          <div class="netinera-company-stats-grid">
            <div class="netinera-company-stats-card netinera-company-stats-interactive">
              <div class="netinera-company-stats-layout-group">
                <div class="netinera-company-stats-icon">
                  <i class="icon icon-euro" aria-hidden="true"></i>
                </div>
                <div class="netinera-company-stats-text-group">
                  <div class="netinera-company-stats-number">2,4B</div>
                  <div class="netinera-company-stats-label">Umsatz</div>
                </div>
              </div>
              <div class="netinera-company-stats-subline">
                Milliarden Euro Jahresumsatz durch nachhaltige Mobilität.
              </div>
            </div>
            <div class="netinera-company-stats-card netinera-company-stats-interactive">
              <div class="netinera-company-stats-layout-group">
                <div class="netinera-company-stats-icon">
                  <i class="icon icon-tools" aria-hidden="true"></i>
                </div>
                <div class="netinera-company-stats-text-group">
                  <div class="netinera-company-stats-number">15%</div>
                  <div class="netinera-company-stats-label">Wachstum</div>
                </div>
              </div>
              <div class="netinera-company-stats-subline">
                Jährliches Wachstum durch Innovation und Expansion.
              </div>
            </div>
            <div class="netinera-company-stats-card netinera-company-stats-interactive">
              <div class="netinera-company-stats-layout-group">
                <div class="netinera-company-stats-icon">
                  <i class="icon icon-route" aria-hidden="true"></i>
                </div>
                <div class="netinera-company-stats-text-group">
                  <div class="netinera-company-stats-number">95%</div>
                  <div class="netinera-company-stats-label">Pünktlichkeit</div>
                </div>
              </div>
              <div class="netinera-company-stats-subline">
                Hohe Servicequalität und Zuverlässigkeit im Bahnverkehr.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Operational Focus -->
      <div class="netinera-section-company-stats">
        <div class="netinera-section-company-stats-wrapper">
          <div class="netinera-company-stats-header">
            <h3 class="netinera-company-stats-header-title">OPERATIONAL EXCELLENCE</h3>
            <p class="netinera-company-stats-header-subtitle">
              Operative Kennzahlen für effiziente und nachhaltige Verkehrslösungen.
            </p>
          </div>
          <div class="netinera-company-stats-grid">
            <div class="netinera-company-stats-card netinera-company-stats-interactive">
              <div class="netinera-company-stats-layout-group">
                <div class="netinera-company-stats-icon">
                  <i class="icon icon-train" aria-hidden="true"></i>
                </div>
                <div class="netinera-company-stats-text-group">
                  <div class="netinera-company-stats-number">439</div>
                  <div class="netinera-company-stats-label">Züge</div>
                </div>
              </div>
              <div class="netinera-company-stats-subline">
                Moderne Fahrzeugflotte für zuverlässigen Bahnverkehr.
              </div>
            </div>
            <div class="netinera-company-stats-card netinera-company-stats-interactive">
              <div class="netinera-company-stats-layout-group">
                <div class="netinera-company-stats-icon">
                  <i class="icon icon-bus" aria-hidden="true"></i>
                </div>
                <div class="netinera-company-stats-text-group">
                  <div class="netinera-company-stats-number">1.200</div>
                  <div class="netinera-company-stats-label">Busse</div>
                </div>
              </div>
              <div class="netinera-company-stats-subline">
                Umweltfreundliche Busflotte für urbane Mobilität.
              </div>
            </div>
            <div class="netinera-company-stats-card netinera-company-stats-interactive">
              <div class="netinera-company-stats-layout-group">
                <div class="netinera-company-stats-icon">
                  <i class="icon icon-people" aria-hidden="true"></i>
                </div>
                <div class="netinera-company-stats-text-group">
                  <div class="netinera-company-stats-number">35.000</div>
                  <div class="netinera-company-stats-label">Mitarbeiter</div>
                </div>
              </div>
              <div class="netinera-company-stats-subline">
                Qualifizierte Teams für erstklassigen Service.
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  `,
  name: 'Stats Variants',
  parameters: {
    docs: {
      description: {
        story: 'Different company statistics variants showcasing financial performance and operational excellence themes.',
      },
    },
  },
};

export const AccessibleStats = {
  render: () => `
    <div class="netinera-section-company-stats" 
         role="region" 
         aria-label="Unternehmensstatistiken von Netinera"
         tabindex="0">
      <div class="netinera-section-company-stats-wrapper">
        
        <div class="netinera-company-stats-header">
          <h3 class="netinera-company-stats-header-title">ACCESSIBLE STATISTICS</h3>
          <p class="netinera-company-stats-header-subtitle">
            Vollständig zugängliche Statistiken mit ARIA-Labels und Keyboard-Navigation.
          </p>
        </div>
        
        <div class="netinera-company-stats-grid">
          
          <div class="netinera-company-stats-card netinera-company-stats-interactive" 
               role="button"
               tabindex="0"
               aria-label="Fahrzeugstatistik: 439 Züge"
               title="Klicken für Details zu Zugflotte">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon" aria-hidden="true">
                <i class="icon icon-train" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number" aria-label="439 Züge">439</div>
                <div class="netinera-company-stats-label">Züge</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Vollständig zugängliche Implementierung mit Screen Reader Support.
            </div>
          </div>
          
          <div class="netinera-company-stats-card netinera-company-stats-interactive" 
               role="button"
               tabindex="0"
               aria-label="Umsatzstatistik: 2,4 Milliarden Euro"
               title="Klicken für Finanz-Details">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon" aria-hidden="true">
                  <i class="icon icon-euro" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number" aria-label="2,4 Milliarden Euro Umsatz">2,4B</div>
                <div class="netinera-company-stats-label">Umsatz</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              ARIA-Labels und Keyboard-Navigation für optimale Zugänglichkeit.
            </div>
          </div>
          
          <div class="netinera-company-stats-card netinera-company-stats-interactive" 
               role="button"
               tabindex="0"
               aria-label="Personalstatistik: 35.000 Mitarbeiter"
               title="Klicken für HR-Informationen">
            <div class="netinera-company-stats-layout-group">
              <div class="netinera-company-stats-icon" aria-hidden="true">
                <i class="icon icon-people" aria-hidden="true"></i>
              </div>
              <div class="netinera-company-stats-text-group">
                <div class="netinera-company-stats-number" aria-label="35.000 Mitarbeiter">35.000</div>
                <div class="netinera-company-stats-label">Mitarbeiter</div>
              </div>
            </div>
            <div class="netinera-company-stats-subline">
              Hohe Kontraste und Focus-States für optimale Bedienbarkeit.
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  `,
  name: 'Accessible Stats',
  parameters: {
    docs: {
      description: {
        story: 'Company statistics with full accessibility features including ARIA labels, keyboard navigation, and screen reader support.',
      },
    },
  },
};