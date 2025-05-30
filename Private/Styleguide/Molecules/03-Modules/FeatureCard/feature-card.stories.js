import featureCard from './feature-card.html';

export default {
  title: 'Molecules/Modules/FeatureCard',
  parameters: {
    docs: {
      description: {
        component: 'Feature Card Component - Netinera Design System. Responsive feature card with background image, icon and content. Mobile: 328px → Desktop: 368px with gradient overlays.',
      },
    },
  },
};

export const Default = () => featureCard;
Default.storyName = 'Feature Card Component';

export const Responsive = {
  render: () => `
    <div class="feature-card-responsive">
      <div class="feature-card-responsive-image" style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?auto=format&fit=crop&w=1200&q=80');">
        <div class="feature-card-responsive-overlay">
          <div class="feature-card-responsive-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="feature-card-responsive-content">
            <div class="feature-card-responsive-overline">Innovation</div>
            <h3 class="feature-card-responsive-headline">Smart Technology</h3>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Responsive Card',
  parameters: {
    docs: {
      description: {
        story: 'Responsive feature card that adapts from mobile (328px, 200px image, 36px radius) to desktop (368px, 240px image, 64px radius).',
      },
    },
  },
};

export const DesktopXL = {
  render: () => `
    <div class="feature-card-xl">
      <div class="feature-card-xl-image" style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80');">
        <div class="feature-card-xl-overlay">
          <div class="feature-card-xl-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M8 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="feature-card-xl-content">
            <div class="feature-card-xl-overline">Desktop</div>
            <h3 class="feature-card-xl-headline">Desktop XL Card</h3>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Desktop XL',
  parameters: {
    docs: {
      description: {
        story: 'Fixed desktop XL feature card: 368px width, 240px image height, 64px border radius, 24px overlay padding.',
      },
    },
  },
};

export const MobileSM = {
  render: () => `
    <div class="feature-card-sm">
      <div class="feature-card-sm-image" style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80');">
        <div class="feature-card-sm-overlay">
          <div class="feature-card-sm-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="feature-card-sm-content">
            <div class="feature-card-sm-overline">Mobile</div>
            <h3 class="feature-card-sm-headline">Mobile SM Card</h3>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Mobile SM',
  parameters: {
    docs: {
      description: {
        story: 'Fixed mobile SM feature card: 328px width, 200px image height, 36px border radius, 20px overlay padding.',
      },
    },
  },
};

export const ColorVariants = {
  render: () => `
    <div class="feature-card-grid-responsive">
      <!-- Primary Variant -->
      <div class="feature-card-responsive feature-card-variant-primary">
        <div class="feature-card-responsive-image" style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?auto=format&fit=crop&w=1200&q=80');">
          <div class="feature-card-responsive-overlay">
            <div class="feature-card-responsive-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="feature-card-responsive-content">
              <div class="feature-card-responsive-overline">Primary</div>
              <h3 class="feature-card-responsive-headline">Teal Gradient</h3>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Secondary Variant -->
      <div class="feature-card-responsive feature-card-variant-secondary">
        <div class="feature-card-responsive-image" style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80');">
          <div class="feature-card-responsive-overlay">
            <div class="feature-card-responsive-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M8 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="feature-card-responsive-content">
              <div class="feature-card-responsive-overline">Secondary</div>
              <h3 class="feature-card-responsive-headline">Red Gradient</h3>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Dark Variant -->
      <div class="feature-card-responsive feature-card-variant-dark">
        <div class="feature-card-responsive-image" style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80');">
          <div class="feature-card-responsive-overlay">
            <div class="feature-card-responsive-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="feature-card-responsive-content">
              <div class="feature-card-responsive-overline">Dark</div>
              <h3 class="feature-card-responsive-headline">Dark Gradient</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Color Variants',
  parameters: {
    docs: {
      description: {
        story: 'Feature card color variants: Primary (teal gradient), Secondary (red gradient), Dark (dark gradient).',
      },
    },
  },
};

export const GridLayouts = {
  render: () => `
    <div class="space-y-8">
      <div>
        <h4 class="mb-4 text-lg font-semibold">Responsive Grid (Auto-fit)</h4>
        <div class="feature-card-grid-responsive">
          <div class="feature-card-responsive">
            <div class="feature-card-responsive-image" style="background-image: url('https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?auto=format&fit=crop&w=1200&q=80');">
              <div class="feature-card-responsive-overlay">
                <div class="feature-card-responsive-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 18L22 18" stroke="currentColor" stroke-linecap="round"/>
                    <path d="M6 8L18 8" stroke="currentColor" stroke-linecap="round"/>
                    <path d="M6 8L6 18" stroke="currentColor" stroke-linecap="round"/>
                    <path d="M18 8L18 18" stroke="currentColor" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="feature-card-responsive-content">
                  <div class="feature-card-responsive-overline">Mobilität</div>
                  <h3 class="feature-card-responsive-headline">Nahverkehr</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div class="feature-card-responsive">
            <div class="feature-card-responsive-image" style="background-image: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80');">
              <div class="feature-card-responsive-overlay">
                <div class="feature-card-responsive-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="feature-card-responsive-content">
                  <div class="feature-card-responsive-overline">Qualität</div>
                  <h3 class="feature-card-responsive-headline">Zuverlässigkeit</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div class="feature-card-responsive">
            <div class="feature-card-responsive-image" style="background-image: url('https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80');">
              <div class="feature-card-responsive-overlay">
                <div class="feature-card-responsive-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 17l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="feature-card-responsive-content">
                  <div class="feature-card-responsive-overline">Service</div>
                  <h3 class="feature-card-responsive-headline">Support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Grid Layouts',
  parameters: {
    docs: {
      description: {
        story: 'Feature card grid layouts: Responsive grid that adapts from 1 column (mobile) to 2 columns (tablet) to 3 columns (desktop).',
      },
    },
  },
}; 