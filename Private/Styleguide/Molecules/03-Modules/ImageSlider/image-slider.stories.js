import imageSlider from './image-slider.html';

export default {
  title: 'Molecules/Modules/ImageSlider',
  parameters: {
    docs: {
      description: {
        component: 'Image Slider Component - Netinera Design System. Responsive image slider with navigation and pagination. Mobile: 328×185px → Desktop: 768×434px. Figma Nodes: 1780:35047 (Desktop), 1731:23716 (Mobile).',
      },
    },
  },
};

export const Default = () => imageSlider;
Default.storyName = 'Image Slider Component';

export const Responsive = {
  render: () => `
    <div class="netinera-image-slider" id="slider-responsive">
      <div class="netinera-image-slider-content">
        <div class="netinera-image-slider-navigation">
          <button class="netinera-image-slider-nav-button" onclick="previousSlide('slider-responsive')" aria-label="Vorheriges Bild">
            <div class="netinera-image-slider-nav-button-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </div>
          </button>
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
          <button class="netinera-image-slider-nav-button" onclick="nextSlide('slider-responsive')" aria-label="Nächstes Bild">
            <div class="netinera-image-slider-nav-button-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="netinera-image-slider-pagination">
        <button class="netinera-image-slider-dot active" onclick="goToSlide('slider-responsive', 0)" aria-label="Bild 1"></button>
        <button class="netinera-image-slider-dot" onclick="goToSlide('slider-responsive', 1)" aria-label="Bild 2"></button>
        <button class="netinera-image-slider-dot" onclick="goToSlide('slider-responsive', 2)" aria-label="Bild 3"></button>
        <button class="netinera-image-slider-dot" onclick="goToSlide('slider-responsive', 3)" aria-label="Bild 4"></button>
      </div>
      <div class="netinera-image-slider-caption">
        Nachhaltige Bahntechnologie: Moderne Züge für umweltfreundliche Mobilität
      </div>
    </div>
  `,
  name: 'Responsive Image Slider',
  parameters: {
    docs: {
      description: {
        story: 'Responsive image slider that adapts from mobile (328×185px) to desktop (768×434px) with navigation buttons and pagination dots.',
      },
    },
  },
};

export const ColorVariants = {
  render: () => `
    <div class="netinera-image-slider-grid">
      <!-- Default Variant -->
      <div class="netinera-image-slider" id="slider-default">
        <div class="netinera-image-slider-content">
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
        </div>
        <div class="netinera-image-slider-pagination">
          <button class="netinera-image-slider-dot active"></button>
          <button class="netinera-image-slider-dot"></button>
          <button class="netinera-image-slider-dot"></button>
        </div>
        <div class="netinera-image-slider-caption">Default Variant</div>
      </div>

      <!-- Dark Variant -->
      <div class="netinera-image-slider netinera-image-slider-dark" id="slider-dark">
        <div class="netinera-image-slider-content">
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
        </div>
        <div class="netinera-image-slider-pagination">
          <button class="netinera-image-slider-dot active"></button>
          <button class="netinera-image-slider-dot"></button>
          <button class="netinera-image-slider-dot"></button>
        </div>
        <div class="netinera-image-slider-caption">Dark Variant</div>
      </div>

      <!-- Primary Variant -->
      <div class="netinera-image-slider netinera-image-slider-primary" id="slider-primary">
        <div class="netinera-image-slider-content">
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
        </div>
        <div class="netinera-image-slider-pagination">
          <button class="netinera-image-slider-dot"></button>
          <button class="netinera-image-slider-dot active"></button>
          <button class="netinera-image-slider-dot"></button>
        </div>
        <div class="netinera-image-slider-caption">Primary Variant</div>
      </div>
    </div>
  `,
  name: 'Color Variants',
  parameters: {
    docs: {
      description: {
        story: 'Image slider color variants: Default (transparent), Dark (dark background with white text), Primary (teal background with white text).',
      },
    },
  },
};

export const BorderPatterns = {
  render: () => `
    <div class="netinera-image-slider-grid">
      <!-- Secondary Pattern -->
      <div class="netinera-image-slider netinera-image-slider-pattern-secondary" id="slider-secondary">
        <div class="netinera-image-slider-content">
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
        </div>
        <div class="netinera-image-slider-pagination">
          <button class="netinera-image-slider-dot active"></button>
          <button class="netinera-image-slider-dot"></button>
        </div>
        <div class="netinera-image-slider-caption">Secondary Pattern</div>
      </div>

      <!-- Simple Pattern -->
      <div class="netinera-image-slider netinera-image-slider-pattern-simple" id="slider-simple">
        <div class="netinera-image-slider-content">
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
        </div>
        <div class="netinera-image-slider-pagination">
          <button class="netinera-image-slider-dot"></button>
          <button class="netinera-image-slider-dot active"></button>
        </div>
        <div class="netinera-image-slider-caption">Simple Pattern</div>
      </div>
    </div>
  `,
  name: 'Border Pattern Variants',
  parameters: {
    docs: {
      description: {
        story: 'Image slider border pattern variants: Secondary (border with hover effects), Simple (reduced shadow and border radius).',
      },
    },
  },
};

export const WithNavigation = {
  render: () => `
    <div class="netinera-image-slider" id="slider-navigation">
      <div class="netinera-image-slider-content">
        <div class="netinera-image-slider-navigation">
          <button class="netinera-image-slider-nav-button" onclick="previousSlide('slider-navigation')" aria-label="Vorheriges Bild">
            <div class="netinera-image-slider-nav-button-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </div>
          </button>
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
          <button class="netinera-image-slider-nav-button" onclick="nextSlide('slider-navigation')" aria-label="Nächstes Bild">
            <div class="netinera-image-slider-nav-button-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="netinera-image-slider-pagination">
        <button class="netinera-image-slider-dot" onclick="goToSlide('slider-navigation', 0)" aria-label="Bild 1"></button>
        <button class="netinera-image-slider-dot active" onclick="goToSlide('slider-navigation', 1)" aria-label="Bild 2"></button>
        <button class="netinera-image-slider-dot" onclick="goToSlide('slider-navigation', 2)" aria-label="Bild 3"></button>
      </div>
      <div class="netinera-image-slider-caption">
        Interactive Navigation: Hover über das Bild um die Navigation zu sehen
      </div>
    </div>
  `,
  name: 'With Navigation',
  parameters: {
    docs: {
      description: {
        story: 'Image slider with full navigation including previous/next buttons and pagination dots. Navigation buttons appear on hover.',
      },
    },
  },
};

export const MinimalSlider = {
  render: () => `
    <div class="netinera-image-slider">
      <div class="netinera-image-slider-content">
        <div class="netinera-image-slider-image" 
             style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
      </div>
      <div class="netinera-image-slider-caption">
        Minimal Image Slider ohne Navigation
      </div>
    </div>
  `,
  name: 'Minimal Slider',
  parameters: {
    docs: {
      description: {
        story: 'Minimal image slider without navigation or pagination, showing only the image and caption.',
      },
    },
  },
};

export const AccessibleSlider = {
  render: () => `
    <div class="netinera-image-slider" role="region" aria-label="Bildergalerie" tabindex="0" id="slider-accessible">
      <div class="netinera-image-slider-content">
        <div class="netinera-image-slider-navigation">
          <button class="netinera-image-slider-nav-button" 
                  onclick="previousSlide('slider-accessible')" 
                  aria-label="Vorheriges Bild anzeigen" 
                  title="Vorheriges Bild">
            <div class="netinera-image-slider-nav-button-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </div>
          </button>
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');"
               role="img"
               aria-label="Moderne Zugverbindung in nachhaltiger Mobilität">
          </div>
          <button class="netinera-image-slider-nav-button" 
                  onclick="nextSlide('slider-accessible')" 
                  aria-label="Nächstes Bild anzeigen" 
                  title="Nächstes Bild">
            <div class="netinera-image-slider-nav-button-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="netinera-image-slider-pagination" role="tablist" aria-label="Bildauswahl">
        <button class="netinera-image-slider-dot" 
                onclick="goToSlide('slider-accessible', 0)" 
                role="tab" 
                aria-label="Bild 1 von 4 auswählen" 
                aria-selected="false"
                title="Zu Bild 1">
        </button>
        <button class="netinera-image-slider-dot active" 
                onclick="goToSlide('slider-accessible', 1)" 
                role="tab" 
                aria-label="Bild 2 von 4 auswählen" 
                aria-selected="true"
                title="Zu Bild 2">
        </button>
        <button class="netinera-image-slider-dot" 
                onclick="goToSlide('slider-accessible', 2)" 
                role="tab" 
                aria-label="Bild 3 von 4 auswählen" 
                aria-selected="false"
                title="Zu Bild 3">
        </button>
        <button class="netinera-image-slider-dot" 
                onclick="goToSlide('slider-accessible', 3)" 
                role="tab" 
                aria-label="Bild 4 von 4 auswählen" 
                aria-selected="false"
                title="Zu Bild 4">
        </button>
      </div>
      <div class="netinera-image-slider-caption">
        Zugänglicher Image Slider mit vollständiger ARIA-Unterstützung
      </div>
    </div>
  `,
  name: 'Accessible Slider',
  parameters: {
    docs: {
      description: {
        story: 'Fully accessible image slider with ARIA labels, keyboard navigation support, and screen reader compatibility.',
      },
    },
  },
};

export const SliderGrid = {
  render: () => `
    <div class="netinera-image-slider-grid">
      <div class="netinera-image-slider">
        <div class="netinera-image-slider-content">
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
        </div>
        <div class="netinera-image-slider-pagination">
          <button class="netinera-image-slider-dot active"></button>
          <button class="netinera-image-slider-dot"></button>
        </div>
        <div class="netinera-image-slider-caption">Bahntechnologie</div>
      </div>

      <div class="netinera-image-slider">
        <div class="netinera-image-slider-content">
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
        </div>
        <div class="netinera-image-slider-pagination">
          <button class="netinera-image-slider-dot"></button>
          <button class="netinera-image-slider-dot active"></button>
        </div>
        <div class="netinera-image-slider-caption">Smart Mobility</div>
      </div>

      <div class="netinera-image-slider">
        <div class="netinera-image-slider-content">
          <div class="netinera-image-slider-image" 
               style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
        </div>
        <div class="netinera-image-slider-pagination">
          <button class="netinera-image-slider-dot active"></button>
          <button class="netinera-image-slider-dot"></button>
        </div>
        <div class="netinera-image-slider-caption">Nachhaltigkeit</div>
      </div>
    </div>
  `,
  name: 'Slider Grid',
  parameters: {
    docs: {
      description: {
        story: 'Multiple image sliders in a responsive grid layout. Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns.',
      },
    },
  },
}; 