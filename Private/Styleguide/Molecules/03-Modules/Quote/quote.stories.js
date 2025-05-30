import quote from './quote.html';

export default {
  title: 'Molecules/Modules/Quote',
  parameters: {
    docs: {
      description: {
        component: 'Quote Component - Netinera Design System. Responsive quote component with portrait images and gradient overlays. Desktop XL: 968×207px Row Layout → Mobile SM: 768×184px Column Layout. Figma Node: 1841-1247.',
      },
    },
  },
};

export const Default = () => quote;
Default.storyName = 'Quote Component';

export const QuoteXL = {
  render: () => `
    <div class="netinera-quote-xl netinera-quote-interactive">
      <!-- Portrait Image with Gradient -->
      <div class="netinera-quote-xl-image">
        <div class="netinera-quote-portrait-image" style="background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=368&h=207&q=80');">
          <div class="netinera-quote-gradient-overlay">
            <div class="netinera-quote-person-info">
              <div class="netinera-quote-person-name-xl">Andreas Müller</div>
              <div class="netinera-quote-person-title-xl">CEO</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Quote Content -->
      <div class="netinera-quote-xl-content">
        <div class="netinera-quote-xl-overline">Netinera</div>
        <div class="netinera-quote-xl-text">
          "Wir gestalten die Zukunft der Mobilität nachhaltig und innovativ. Unsere Züge und Busse verbinden Menschen und Regionen effizient."
        </div>
      </div>
    </div>
  `,
  name: 'Quote XL (Desktop)',
  parameters: {
    docs: {
      description: {
        story: 'Desktop quote component with row layout (968×207px). Features portrait image with gradient overlay and person information.',
      },
    },
  },
};

export const QuoteSM = {
  render: () => `
    <div class="netinera-quote-sm netinera-quote-interactive">
      <!-- Portrait Image with Gradient -->
      <div class="netinera-quote-sm-image">
        <div class="netinera-quote-portrait-image" style="background-image: url('https://images.unsplash.com/photo-1494790108755-2616b332c886?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=184&q=80');">
          <div class="netinera-quote-gradient-overlay-sm">
            <div class="netinera-quote-person-info">
              <div class="netinera-quote-person-name-sm">Dr. Sarah Weber</div>
              <div class="netinera-quote-person-title-sm">CTO</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Quote Content -->
      <div class="netinera-quote-sm-content">
        <div class="netinera-quote-sm-overline">Innovation</div>
        <div class="netinera-quote-sm-text">
          "Technologie und Nachhaltigkeit gehen bei uns Hand in Hand. Wir entwickeln Lösungen für die Mobilität von morgen."
        </div>
      </div>
    </div>
  `,
  name: 'Quote SM (Mobile/Tablet)',
  parameters: {
    docs: {
      description: {
        story: 'Mobile/tablet quote component with column layout (768×184px). Responsive variant for smaller screens.',
      },
    },
  },
};

export const ResponsiveQuote = {
  render: () => `
    <div class="netinera-quote-xl netinera-quote-interactive netinera-quote-fade-in">
      <!-- Portrait Image with Gradient -->
      <div class="netinera-quote-xl-image">
        <div class="netinera-quote-portrait-image" style="background-image: url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=368&h=207&q=80');">
          <div class="netinera-quote-gradient-overlay">
            <div class="netinera-quote-person-info">
              <div class="netinera-quote-person-name-xl">Michael Schmidt</div>
              <div class="netinera-quote-person-title-xl">Geschäftsführer</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Quote Content -->
      <div class="netinera-quote-xl-content">
        <div class="netinera-quote-xl-overline">Verantwortung</div>
        <div class="netinera-quote-xl-text">
          "Nachhaltigkeit ist nicht nur ein Trend, sondern unsere Verpflichtung gegenüber zukünftigen Generationen."
        </div>
      </div>
    </div>
  `,
  name: 'Responsive Quote',
  parameters: {
    docs: {
      description: {
        story: 'Fully responsive quote that adapts from desktop XL row layout to mobile SM column layout with animation.',
      },
    },
  },
};

export const AnimatedQuotes = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 968px; margin: 0 auto;">
      
      <!-- Slide In Animation -->
      <div class="netinera-quote-xl netinera-quote-interactive netinera-quote-slide-in" style="animation-delay: 0.1s;">
        <div class="netinera-quote-xl-image">
          <div class="netinera-quote-portrait-image" style="background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=368&h=207&q=80');">
            <div class="netinera-quote-gradient-overlay">
              <div class="netinera-quote-person-info">
                <div class="netinera-quote-person-name-xl">Lisa Hoffmann</div>
                <div class="netinera-quote-person-title-xl">Head of Innovation</div>
              </div>
            </div>
          </div>
        </div>
        <div class="netinera-quote-xl-content">
          <div class="netinera-quote-xl-overline">Innovation</div>
          <div class="netinera-quote-xl-text">
            "Mit KI und IoT revolutionieren wir den öffentlichen Verkehr und schaffen intelligente Mobilitätslösungen."
          </div>
        </div>
      </div>
      
      <!-- Fade In Animation -->
      <div class="netinera-quote-sm netinera-quote-interactive netinera-quote-fade-in" style="animation-delay: 0.3s;">
        <div class="netinera-quote-sm-image">
          <div class="netinera-quote-portrait-image" style="background-image: url('https://images.unsplash.com/photo-1494790108755-2616b332c886?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=184&q=80');">
            <div class="netinera-quote-gradient-overlay-sm">
              <div class="netinera-quote-person-info">
                <div class="netinera-quote-person-name-sm">Thomas Bauer</div>
                <div class="netinera-quote-person-title-sm">Nachhaltigkeitsbeauftragte</div>
              </div>
            </div>
          </div>
        </div>
        <div class="netinera-quote-sm-content">
          <div class="netinera-quote-sm-overline">Umwelt</div>
          <div class="netinera-quote-sm-text">
            "Jeder elektrische Bus reduziert CO2-Emissionen um 70%. Das ist unser Beitrag zum Klimaschutz."
          </div>
        </div>
      </div>
      
    </div>
  `,
  name: 'Animated Quotes',
  parameters: {
    docs: {
      description: {
        story: 'Quote components with entrance animations - slide in and fade in effects with staggered timing.',
      },
    },
  },
};

export const QuoteVariants = {
  render: () => `
    <div style="display: grid; gap: 40px; max-width: 1200px; margin: 0 auto;">
      
      <!-- Executive Quote -->
      <div class="netinera-quote-xl netinera-quote-interactive">
        <div class="netinera-quote-xl-image">
          <div class="netinera-quote-portrait-image" style="background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=368&h=207&q=80');">
            <div class="netinera-quote-gradient-overlay">
              <div class="netinera-quote-person-info">
                <div class="netinera-quote-person-name-xl">Dr. Elena Rossi</div>
                <div class="netinera-quote-person-title-xl">Vorstandsvorsitzende</div>
              </div>
            </div>
          </div>
        </div>
        <div class="netinera-quote-xl-content">
          <div class="netinera-quote-xl-overline">Führung</div>
          <div class="netinera-quote-xl-text">
            "Wir führen die Transformation des öffentlichen Verkehrs an und setzen neue Standards für Nachhaltigkeit."
          </div>
        </div>
      </div>
      
      <!-- Technical Expert Quote -->
      <div class="netinera-quote-xl netinera-quote-interactive">
        <div class="netinera-quote-xl-image">
          <div class="netinera-quote-portrait-image" style="background-image: url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=368&h=207&q=80');">
            <div class="netinera-quote-gradient-overlay">
              <div class="netinera-quote-person-info">
                <div class="netinera-quote-person-name-xl">Ing. Marc Zimmermann</div>
                <div class="netinera-quote-person-title-xl">Technischer Direktor</div>
              </div>
            </div>
          </div>
        </div>
        <div class="netinera-quote-xl-content">
          <div class="netinera-quote-xl-overline">Technik</div>
          <div class="netinera-quote-xl-text">
            "Unsere Fahrzeuge nutzen modernste Technologie - von autonomen Systemen bis zu nachhaltigen Antrieben."
          </div>
        </div>
      </div>
      
      <!-- Customer Focus Quote -->
      <div class="netinera-quote-sm netinera-quote-interactive">
        <div class="netinera-quote-sm-image">
          <div class="netinera-quote-portrait-image" style="background-image: url('https://images.unsplash.com/photo-1494790108755-2616b332c886?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=184&q=80');">
            <div class="netinera-quote-gradient-overlay-sm">
              <div class="netinera-quote-person-info">
                <div class="netinera-quote-person-name-sm">Anna Lehmann</div>
                <div class="netinera-quote-person-title-sm">Kundenservice-Leiterin</div>
              </div>
            </div>
          </div>
        </div>
        <div class="netinera-quote-sm-content">
          <div class="netinera-quote-sm-overline">Service</div>
          <div class="netinera-quote-sm-text">
            "Zufriedene Fahrgäste sind unser größter Erfolg. Wir verbessern täglich unseren Service."
          </div>
        </div>
      </div>
      
    </div>
  `,
  name: 'Quote Variants',
  parameters: {
    docs: {
      description: {
        story: 'Different quote variants showcasing various roles and responsibilities within the company.',
      },
    },
  },
};

export const AccessibleQuote = {
  render: () => `
    <div class="netinera-quote-xl netinera-quote-interactive" 
         role="blockquote" 
         tabindex="0" 
         aria-label="Zitat von Dr. Julia Frank, Umweltbeauftragte"
         title="Nachhaltigkeits-Zitat">
      <div class="netinera-quote-xl-image">
        <div class="netinera-quote-portrait-image" 
             style="background-image: url('https://images.unsplash.com/photo-1494790108755-2616b332c886?ixlib=rb-4.0.3&auto=format&fit=crop&w=368&h=207&q=80');"
             role="img"
             aria-label="Portrait von Dr. Julia Frank">
          <div class="netinera-quote-gradient-overlay">
            <div class="netinera-quote-person-info">
              <div class="netinera-quote-person-name-xl">Dr. Julia Frank</div>
              <div class="netinera-quote-person-title-xl">Umweltbeauftragte</div>
            </div>
          </div>
        </div>
      </div>
      <div class="netinera-quote-xl-content">
        <div class="netinera-quote-xl-overline">Nachhaltigkeit</div>
        <div class="netinera-quote-xl-text">
          "Jede Fahrt mit unseren umweltfreundlichen Verkehrsmitteln ist ein Schritt in eine nachhaltigere Zukunft."
        </div>
      </div>
    </div>
  `,
  name: 'Accessible Quote',
  parameters: {
    docs: {
      description: {
        story: 'Quote component with full accessibility features including ARIA labels, keyboard navigation, and screen reader support.',
      },
    },
  },
};
