import serviceCard from './service-card.html';

export default {
  title: 'Molecules/Modules/ServiceCard',
  parameters: {
    docs: {
      description: {
        component: 'Service Card Component - Netinera Design System. Responsive service cards with distinctive border patterns. Mobile: 328×185px → Desktop: 366×285px. Figma Nodes: 1815:8423 (Desktop), 1815:6096 (Mobile).',
      },
    },
  },
};

export const Default = () => serviceCard;
Default.storyName = 'Service Card Component';

export const BasicServiceCard = {
  render: () => `
    <div class="netinera-service-card">
      <div class="netinera-service-card-image" 
           style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
      </div>
      <div class="netinera-service-card-content">
        <div class="netinera-service-card-overline">Mobilität</div>
        <h3 class="netinera-service-card-headline">Zugverbindungen</h3>
      </div>
    </div>
  `,
  name: 'Basic Service Card',
  parameters: {
    docs: {
      description: {
        story: 'Basic service card with image, overline category, and headline title. Features Netinera signature border radius pattern.',
      },
    },
  },
};

export const ServiceCardGrid = {
  render: () => `
    <div class="netinera-service-card-grid">
      <div class="netinera-service-card">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Mobilität</div>
          <h3 class="netinera-service-card-headline">Zugverbindungen</h3>
        </div>
      </div>
      
      <div class="netinera-service-card">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Innovation</div>
          <h3 class="netinera-service-card-headline">Smart Mobility</h3>
        </div>
      </div>
      
      <div class="netinera-service-card">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Service</div>
          <h3 class="netinera-service-card-headline">Kundenbetreuung</h3>
        </div>
      </div>
    </div>
  `,
  name: 'Service Card Grid',
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid layout for service cards. Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns.',
      },
    },
  },
};

export const ColorVariants = {
  render: () => `
    <div class="netinera-service-card-grid">
      <!-- Default -->
      <div class="netinera-service-card">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Default</div>
          <h3 class="netinera-service-card-headline">Standard Card</h3>
        </div>
      </div>
      
      <!-- White Variant -->
      <div class="netinera-service-card variant-white">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">White Variant</div>
          <h3 class="netinera-service-card-headline">Mit Shadow</h3>
        </div>
      </div>
      
      <!-- Dark Variant -->
      <div class="netinera-service-card variant-dark">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Dark Variant</div>
          <h3 class="netinera-service-card-headline">White Text</h3>
        </div>
      </div>
    </div>
  `,
  name: 'Color Variants',
  parameters: {
    docs: {
      description: {
        story: 'Service card color variants: Default (transparent), White (with shadow), Dark (dark background with white text).',
      },
    },
  },
};

export const CompactVariant = {
  render: () => `
    <div class="netinera-service-card-grid">
      <div class="netinera-service-card variant-compact">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Compact</div>
          <h3 class="netinera-service-card-headline">Kleinere Variante</h3>
        </div>
      </div>
      
      <div class="netinera-service-card variant-compact">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Compact</div>
          <h3 class="netinera-service-card-headline">Space Efficient</h3>
        </div>
      </div>
      
      <div class="netinera-service-card variant-compact">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Compact</div>
          <h3 class="netinera-service-card-headline">Dense Layout</h3>
        </div>
      </div>
    </div>
  `,
  name: 'Compact Variant',
  parameters: {
    docs: {
      description: {
        story: 'Compact service card variant with smaller dimensions and reduced padding for dense layouts.',
      },
    },
  },
};

export const BorderPatterns = {
  render: () => `
    <div class="netinera-service-card-grid">
      <!-- Default Pattern -->
      <div class="netinera-service-card">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Default</div>
          <h3 class="netinera-service-card-headline">96px Radius Pattern</h3>
        </div>
      </div>
      
      <!-- Secondary Pattern -->
      <div class="netinera-service-card pattern-secondary">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Secondary</div>
          <h3 class="netinera-service-card-headline">48px Border Pattern</h3>
        </div>
      </div>
      
      <!-- Simple Pattern -->
      <div class="netinera-service-card pattern-simple">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Simple</div>
          <h3 class="netinera-service-card-headline">12px Standard Radius</h3>
        </div>
      </div>
    </div>
  `,
  name: 'Border Patterns',
  parameters: {
    docs: {
      description: {
        story: 'Different border radius patterns: Default (96px Netinera pattern), Secondary (48px with border), Simple (12px standard).',
      },
    },
  },
};

export const LinkCards = {
  render: () => `
    <div class="netinera-service-card-grid">
      <a href="#" class="netinera-service-card is-link">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Clickable</div>
          <h3 class="netinera-service-card-headline">Link Card</h3>
        </div>
      </a>
      
      <a href="#" class="netinera-service-card is-link pattern-secondary">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Navigation</div>
          <h3 class="netinera-service-card-headline">Service Portal</h3>
        </div>
      </a>
      
      <a href="#" class="netinera-service-card is-link variant-white">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">External</div>
          <h3 class="netinera-service-card-headline">External Link</h3>
        </div>
      </a>
    </div>
  `,
  name: 'Link Cards',
  parameters: {
    docs: {
      description: {
        story: 'Service cards as clickable links with enhanced hover effects and gradient overlays.',
      },
    },
  },
};

export const AccessibleCards = {
  render: () => `
    <div class="netinera-service-card-grid">
      <!-- ARIA Button Card -->
      <div class="netinera-service-card" role="button" tabindex="0" aria-label="Zugverbindungen Service auswählen">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Accessibility</div>
          <h3 class="netinera-service-card-headline">ARIA Support</h3>
        </div>
      </div>
      
      <!-- Pressed State Card -->
      <div class="netinera-service-card" role="button" tabindex="0" aria-pressed="true" aria-label="Innovation Service ausgewählt">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Selected</div>
          <h3 class="netinera-service-card-headline">Pressed State</h3>
        </div>
      </div>
      
      <!-- Keyboard Navigation Card -->
      <div class="netinera-service-card" role="button" tabindex="0" aria-label="Kundenbetreuung Service auswählen">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Keyboard</div>
          <h3 class="netinera-service-card-headline">Tab Navigation</h3>
        </div>
      </div>
    </div>
  `,
  name: 'Accessible Cards',
  parameters: {
    docs: {
      description: {
        story: 'Service cards with full accessibility support including ARIA roles, keyboard navigation, and pressed states.',
      },
    },
  },
};

export const LoadingStates = {
  render: () => `
    <div class="netinera-service-card-grid">
      <div class="netinera-service-card is-loading">
        <div class="netinera-service-card-image"></div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Loading...</div>
          <h3 class="netinera-service-card-headline">Service wird geladen</h3>
        </div>
      </div>
      
      <div class="netinera-service-card is-loading">
        <div class="netinera-service-card-image"></div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Loading...</div>
          <h3 class="netinera-service-card-headline">Daten werden abgerufen</h3>
        </div>
      </div>
      
      <div class="netinera-service-card is-loading">
        <div class="netinera-service-card-image"></div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Loading...</div>
          <h3 class="netinera-service-card-headline">Inhalte werden geladen</h3>
        </div>
      </div>
    </div>
  `,
  name: 'Loading States',
  parameters: {
    docs: {
      description: {
        story: 'Service cards in loading state with skeleton placeholders and shimmer animations.',
      },
    },
  },
};

export const ResponsiveServiceCard = {
  render: () => `
    <div style="max-width: 1200px; margin: 0 auto;">
      <div class="netinera-service-card-grid">
        <div class="netinera-service-card">
          <div class="netinera-service-card-image" 
               style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
          <div class="netinera-service-card-content">
            <div class="netinera-service-card-overline">Responsive</div>
            <h3 class="netinera-service-card-headline">Mobile First Design</h3>
          </div>
        </div>
        
        <div class="netinera-service-card variant-white">
          <div class="netinera-service-card-image" 
               style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
          <div class="netinera-service-card-content">
            <div class="netinera-service-card-overline">Adaptive</div>
            <h3 class="netinera-service-card-headline">Grid Layout System</h3>
          </div>
        </div>
        
        <div class="netinera-service-card pattern-secondary">
          <div class="netinera-service-card-image" 
               style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
          <div class="netinera-service-card-content">
            <div class="netinera-service-card-overline">Flexible</div>
            <h3 class="netinera-service-card-headline">Breakpoint System</h3>
          </div>
        </div>
        
        <div class="netinera-service-card variant-dark">
          <div class="netinera-service-card-image" 
               style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
          <div class="netinera-service-card-content">
            <div class="netinera-service-card-overline">Scalable</div>
            <h3 class="netinera-service-card-headline">Typography System</h3>
          </div>
        </div>
        
        <div class="netinera-service-card pattern-simple">
          <div class="netinera-service-card-image" 
               style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
          <div class="netinera-service-card-content">
            <div class="netinera-service-card-overline">Optimized</div>
            <h3 class="netinera-service-card-headline">Performance Ready</h3>
          </div>
        </div>
        
        <div class="netinera-service-card variant-compact">
          <div class="netinera-service-card-image" 
               style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
          </div>
          <div class="netinera-service-card-content">
            <div class="netinera-service-card-overline">Efficient</div>
            <h3 class="netinera-service-card-headline">Space Optimized</h3>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Responsive Service Grid',
  parameters: {
    docs: {
      description: {
        story: 'Complete responsive service card grid demonstrating all variants and responsive behavior across different screen sizes.',
      },
    },
  },
};

export const InteractiveServiceCard = {
  render: () => `
    <div class="netinera-service-card-grid" id="interactive-service-cards">
      <div class="netinera-service-card" role="button" tabindex="0" aria-label="Interaktive Mobilität Service">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Interaktiv</div>
          <h3 class="netinera-service-card-headline">Hover & Click Effekte</h3>
        </div>
      </div>
      
      <div class="netinera-service-card" role="button" tabindex="0" aria-label="Fokussierbare Innovation">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Accessibility</div>
          <h3 class="netinera-service-card-headline">Keyboard Navigation</h3>
        </div>
      </div>
      
      <a href="#" class="netinera-service-card is-link" aria-label="Link zu Service Portal">
        <div class="netinera-service-card-image" 
             style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');">
        </div>
        <div class="netinera-service-card-content">
          <div class="netinera-service-card-overline">Link</div>
          <h3 class="netinera-service-card-headline">Service Portal</h3>
        </div>
      </a>
    </div>

    <script>
      // Add interactive behavior for demonstration
      setTimeout(() => {
        const interactiveCards = document.querySelectorAll('#interactive-service-cards .netinera-service-card[role="button"]');
        const linkCards = document.querySelectorAll('#interactive-service-cards .netinera-service-card.is-link');
        
        interactiveCards.forEach((card, index) => {
          card.addEventListener('click', function() {
            // Toggle pressed state
            const isPressed = this.getAttribute('aria-pressed') === 'true';
            this.setAttribute('aria-pressed', !isPressed);
            
            console.log('Service card clicked:', this.querySelector('.netinera-service-card-headline').textContent);
          });
          
          card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.click();
            }
          });
          
          card.addEventListener('mouseenter', function() {
            console.log('Service card hovered:', this.querySelector('.netinera-service-card-headline').textContent);
          });
        });
        
        linkCards.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Service card link clicked:', this.querySelector('.netinera-service-card-headline').textContent);
          });
        });
      }, 100);
    </script>
  `,
  name: 'Interactive Service Cards',
  parameters: {
    docs: {
      description: {
        story: 'Interactive service cards with live hover effects, click states, and keyboard navigation demonstrations.',
      },
    },
  },
}; 