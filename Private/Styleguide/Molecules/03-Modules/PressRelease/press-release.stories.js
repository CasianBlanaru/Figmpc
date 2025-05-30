import pressRelease from './press-release.html';

export default {
  title: 'Molecules/Modules/PressRelease',
  parameters: {
    docs: {
      description: {
        component: 'Press Release Component - Netinera Design System. Responsive press release items with date/category meta info. Mobile: 18px headlines, Column layout. Desktop: 22px headlines, Row layout.',
      },
    },
  },
};

export const Default = () => pressRelease;
Default.storyName = 'Press Release Component';

export const Responsive = {
  render: () => `
    <div class="press-release-list-responsive">
      <div class="press-release-responsive">
        <div class="press-release-responsive-meta">
          <time class="press-release-responsive-date">15. März 2024</time>
          <div class="press-release-responsive-separator"></div>
          <span class="press-release-responsive-category">Unternehmen</span>
        </div>
        <h3 class="press-release-responsive-headline">
          <a href="#" class="press-release-responsive-link">
            Netinera stellt neue nachhaltige Mobilitätslösungen vor
          </a>
        </h3>
      </div>
      
      <div class="press-release-divider"></div>
      
      <div class="press-release-responsive">
        <div class="press-release-responsive-meta">
          <time class="press-release-responsive-date">8. März 2024</time>
          <div class="press-release-responsive-separator"></div>
          <span class="press-release-responsive-category">Innovation</span>
        </div>
        <h3 class="press-release-responsive-headline">
          <a href="#" class="press-release-responsive-link">
            Digitale Transformation im öffentlichen Verkehr erreicht nächste Stufe
          </a>
        </h3>
      </div>
      
      <div class="press-release-divider"></div>
      
      <div class="press-release-responsive">
        <div class="press-release-responsive-meta">
          <time class="press-release-responsive-date">28. Februar 2024</time>
          <div class="press-release-responsive-separator"></div>
          <span class="press-release-responsive-category">Technologie</span>
        </div>
        <h3 class="press-release-responsive-headline">
          <a href="#" class="press-release-responsive-link">
            KI-gestützte Verkehrsoptimierung erhöht Effizienz um 30%
          </a>
        </h3>
      </div>
    </div>
  `,
  name: 'Responsive Press Release',
  parameters: {
    docs: {
      description: {
        story: 'Responsive press release list that adapts from desktop row meta layout (22px headlines) to mobile column layout (18px headlines).',
      },
    },
  },
};

export const DesktopXL = {
  render: () => `
    <div class="press-release-list-xl">
      <div class="press-release-xl">
        <div class="press-release-xl-meta">
          <time class="press-release-xl-date">15. März 2024</time>
          <div class="press-release-xl-separator"></div>
          <span class="press-release-xl-category">Unternehmen</span>
        </div>
        <h3 class="press-release-xl-headline">
          <a href="#" class="press-release-xl-link">
            Netinera stellt neue nachhaltige Mobilitätslösungen vor
          </a>
        </h3>
      </div>
      
      <div class="press-release-divider"></div>
      
      <div class="press-release-xl">
        <div class="press-release-xl-meta">
          <time class="press-release-xl-date">8. März 2024</time>
          <div class="press-release-xl-separator"></div>
          <span class="press-release-xl-category">Innovation</span>
        </div>
        <h3 class="press-release-xl-headline">
          <a href="#" class="press-release-xl-link">
            Digitale Transformation im öffentlichen Verkehr erreicht nächste Stufe
          </a>
        </h3>
      </div>
      
      <div class="press-release-divider"></div>
      
      <div class="press-release-xl">
        <div class="press-release-xl-meta">
          <time class="press-release-xl-date">28. Februar 2024</time>
          <div class="press-release-xl-separator"></div>
          <span class="press-release-xl-category">Technologie</span>
        </div>
        <h3 class="press-release-xl-headline">
          <a href="#" class="press-release-xl-link">
            KI-gestützte Verkehrsoptimierung erhöht Effizienz um 30%
          </a>
        </h3>
      </div>
    </div>
  `,
  name: 'Desktop XL',
  parameters: {
    docs: {
      description: {
        story: 'Fixed desktop XL press release: 22px headlines, row meta layout, 10px gap, 20px separator, 40px padding.',
      },
    },
  },
};

export const MobileSM = {
  render: () => `
    <div class="press-release-list-sm">
      <div class="press-release-sm">
        <div class="press-release-sm-meta">
          <time class="press-release-sm-date">15. März 2024</time>
          <span class="press-release-sm-category">Unternehmen</span>
        </div>
        <h3 class="press-release-sm-headline">
          <a href="#" class="press-release-sm-link">
            Netinera stellt neue nachhaltige Mobilitätslösungen vor
          </a>
        </h3>
      </div>
      
      <div class="press-release-divider"></div>
      
      <div class="press-release-sm">
        <div class="press-release-sm-meta">
          <time class="press-release-sm-date">8. März 2024</time>
          <span class="press-release-sm-category">Innovation</span>
        </div>
        <h3 class="press-release-sm-headline">
          <a href="#" class="press-release-sm-link">
            Digitale Transformation im öffentlichen Verkehr erreicht nächste Stufe
          </a>
        </h3>
      </div>
      
      <div class="press-release-divider"></div>
      
      <div class="press-release-sm">
        <div class="press-release-sm-meta">
          <time class="press-release-sm-date">28. Februar 2024</time>
          <span class="press-release-sm-category">Technologie</span>
        </div>
        <h3 class="press-release-sm-headline">
          <a href="#" class="press-release-sm-link">
            KI-gestützte Verkehrsoptimierung erhöht Effizienz um 30%
          </a>
        </h3>
      </div>
    </div>
  `,
  name: 'Mobile SM',
  parameters: {
    docs: {
      description: {
        story: 'Fixed mobile SM press release: 18px headlines, column meta layout, 4px gap, hidden separator, 20px padding.',
      },
    },
  },
};

export const Interactive = {
  render: () => `
    <div class="press-release-list-responsive">
      <div class="press-release-responsive press-release-interactive">
        <div class="press-release-responsive-meta">
          <time class="press-release-responsive-date">20. Februar 2024</time>
          <div class="press-release-responsive-separator"></div>
          <span class="press-release-responsive-category">Nachhaltigkeit</span>
        </div>
        <h3 class="press-release-responsive-headline">
          <a href="#" class="press-release-responsive-link">
            Neue Elektrobus-Flotte reduziert CO2-Emissionen um 40%
          </a>
        </h3>
      </div>
      
      <div class="press-release-divider"></div>
      
      <div class="press-release-responsive press-release-interactive press-release-badges">
        <div class="press-release-responsive-meta">
          <span class="press-release-badge-date">12. Februar 2024</span>
          <span class="press-release-badge-category">Metronom</span>
        </div>
        <h3 class="press-release-responsive-headline">
          <a href="#" class="press-release-responsive-link">
            metronom erhält Zuschlag für Verkehrsvertrag ENNO II
          </a>
        </h3>
      </div>
      
      <div class="press-release-divider"></div>
      
      <div class="press-release-responsive press-release-interactive">
        <div class="press-release-responsive-meta">
          <time class="press-release-responsive-date">5. Februar 2024</time>
          <div class="press-release-responsive-separator"></div>
          <span class="press-release-responsive-category">Verkehr</span>
        </div>
        <h3 class="press-release-responsive-headline">
          <a href="#" class="press-release-responsive-link">
            Pünktlichkeitsrate erreicht mit 96,5% neuen Höchststand
          </a>
        </h3>
      </div>
    </div>
  `,
  name: 'Interactive States',
  parameters: {
    docs: {
      description: {
        story: 'Press release items with interactive hover effects, including shimmer animation and badge variants.',
      },
    },
  },
};

export const ColorVariants = {
  render: () => `
    <div class="space-y-4">
      <!-- Light Variant -->
      <div class="press-release-list-responsive press-release-variant-light">
        <div class="press-release-responsive">
          <div class="press-release-responsive-meta">
            <time class="press-release-responsive-date">15. März 2024</time>
            <div class="press-release-responsive-separator"></div>
            <span class="press-release-responsive-category">Light Background</span>
          </div>
          <h3 class="press-release-responsive-headline">
            <a href="#" class="press-release-responsive-link">
              Light Variant Press Release Demonstration
            </a>
          </h3>
        </div>
      </div>
      
      <!-- Dark Variant -->
      <div class="press-release-list-responsive press-release-variant-dark">
        <div class="press-release-responsive">
          <div class="press-release-responsive-meta">
            <time class="press-release-responsive-date">15. März 2024</time>
            <div class="press-release-responsive-separator"></div>
            <span class="press-release-responsive-category">Dark Background</span>
          </div>
          <h3 class="press-release-responsive-headline">
            <a href="#" class="press-release-responsive-link">
              Dark Variant Press Release Demonstration
            </a>
          </h3>
        </div>
      </div>
      
      <!-- Primary Variant -->
      <div class="press-release-list-responsive press-release-variant-primary">
        <div class="press-release-responsive">
          <div class="press-release-responsive-meta">
            <time class="press-release-responsive-date">15. März 2024</time>
            <div class="press-release-responsive-separator"></div>
            <span class="press-release-responsive-category">Primary Background</span>
          </div>
          <h3 class="press-release-responsive-headline">
            <a href="#" class="press-release-responsive-link">
              Primary Variant Press Release Demonstration
            </a>
          </h3>
        </div>
      </div>
    </div>
  `,
  name: 'Color Variants',
  parameters: {
    docs: {
      description: {
        story: 'Press release color variants: Light (light gray background), Dark (dark background), Primary (teal background).',
      },
    },
  },
};

export const BadgeStyled = {
  render: () => `
    <div class="press-release-list-responsive">
      <div class="press-release-responsive press-release-badges">
        <div class="press-release-responsive-meta">
          <span class="press-release-badge-date">15. März 2024</span>
          <span class="press-release-badge-category">Unternehmen</span>
        </div>
        <h3 class="press-release-responsive-headline">
          <a href="#" class="press-release-responsive-link">
            Badge-Styled Press Release mit farbigen Category Tags
          </a>
        </h3>
      </div>
      
      <div class="press-release-divider"></div>
      
      <div class="press-release-responsive press-release-badges">
        <div class="press-release-responsive-meta">
          <span class="press-release-badge-date">8. März 2024</span>
          <span class="press-release-badge-category">Innovation</span>
        </div>
        <h3 class="press-release-responsive-headline">
          <a href="#" class="press-release-responsive-link">
            Alternative Badge-Variante für bessere visuelle Hierarchie
          </a>
        </h3>
      </div>
      
      <div class="press-release-divider"></div>
      
      <div class="press-release-responsive press-release-badges">
        <div class="press-release-responsive-meta">
          <span class="press-release-badge-date">28. Februar 2024</span>
          <span class="press-release-badge-category">Technologie</span>
        </div>
        <h3 class="press-release-responsive-headline">
          <a href="#" class="press-release-responsive-link">
            Badges bieten klarere Kategorisierung der Press Releases
          </a>
        </h3>
      </div>
    </div>
  `,
  name: 'Badge Variants',
  parameters: {
    docs: {
      description: {
        story: 'Press release items with badge-styled date and category elements for enhanced visual hierarchy.',
      },
    },
  },
};

export const SingleItem = {
  render: () => `
    <div class="press-release-responsive press-release-interactive">
      <div class="press-release-responsive-meta">
        <time class="press-release-responsive-date">15. März 2024</time>
        <div class="press-release-responsive-separator"></div>
        <span class="press-release-responsive-category">Unternehmen</span>
      </div>
      <h3 class="press-release-responsive-headline">
        <a href="#" class="press-release-responsive-link">
          Einzelne Press Release Item Demonstration mit vollständiger Interaktivität
        </a>
      </h3>
    </div>
  `,
  name: 'Single Item',
  parameters: {
    docs: {
      description: {
        story: 'Single press release item showing responsive behavior and interactive hover effects.',
      },
    },
  },
}; 