import { html } from 'lit';
import sectionHeader from './section-header.html';

export default {
  title: 'Organisms/SectionHeader/SectionHeader',
  parameters: {
    docs: {
      description: {
        component: 'Section Header Component - Phase 10 Priority 3 - Figma Node 1717-4928. Responsive header component with variants LG Center/Left, MD Center, SM Center.',
      },
    },
  },
};

export const SectionHeader = () => sectionHeader;

export const LGCenter = () => html`
  <div class="section-header-lg-center">
    <div class="section-header-lg-center-title">
      Hauptüberschrift LG Center
    </div>
    <div class="section-header-lg-center-subtitle">
      Untertitel für die große zentrierte Variante
    </div>
  </div>
`;

export const LGLeft = () => html`
  <div class="section-header-lg-left">
    <div class="section-header-lg-left-title">
      Hauptüberschrift LG Left
    </div>
    <div class="section-header-lg-left-subtitle">
      Untertitel für die große linksbündige Variante
    </div>
  </div>
`;

export const MDCenter = () => html`
  <div class="section-header-md-center">
    <div class="section-header-md-center-title">
      Hauptüberschrift MD Center
    </div>
  </div>
`;

export const SMCenter = () => html`
  <div class="section-header-sm-center">
    <div class="section-header-sm-center-title">
      Hauptüberschrift SM Center
    </div>
  </div>
`; 