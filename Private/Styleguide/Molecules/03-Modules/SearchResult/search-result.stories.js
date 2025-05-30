import searchResult from './search-result.html';

export default {
  title: 'Molecules/Modules/SearchResult',
  parameters: {
    docs: {
      description: {
        component: 'Search Result Component - Netinera Design System. Comprehensive search result display with various content types, pagination, and empty states. Mobile-first responsive design.',
      },
    },
  },
};

export const Default = () => searchResult;
Default.storyName = 'Search Result Component';

export const BasicSearchResults = {
  render: () => `
    <div class="search-result-header">
      <div class="search-result-header-info">
        <h3 class="search-result-header-title">Suchergebnisse für "Nachhaltigkeit"</h3>
        <p class="search-result-header-count">142 Ergebnisse in 0,28 Sekunden</p>
      </div>
      <div class="search-result-header-actions">
        <div class="search-result-sort">
          <label for="sort-basic" class="search-result-sort-label">Sortieren nach:</label>
          <select id="sort-basic" class="search-result-sort-select">
            <option value="relevance">Relevanz</option>
            <option value="date">Datum</option>
            <option value="title">Titel</option>
          </select>
        </div>
      </div>
    </div>

    <div class="search-result-list">
      <div class="search-result-item">
        <div class="search-result-item-header">
          <div class="search-result-item-category">Unternehmen</div>
          <time class="search-result-item-date">15. März 2024</time>
        </div>
        <h3 class="search-result-item-title">
          <a href="#" class="search-result-item-link">
            Netinera setzt neue Maßstäbe für nachhaltige Mobilität im öffentlichen Verkehr
          </a>
        </h3>
        <div class="search-result-item-url">netinera.de/nachhaltigkeit/mobilitaet</div>
        <p class="search-result-item-snippet">
          Die Netinera Gruppe implementiert innovative Lösungen für umweltfreundliche Verkehrssysteme. Mit modernster Technologie und einer klaren Vision für die Zukunft der Mobilität...
        </p>
        <div class="search-result-item-tags">
          <span class="search-result-tag">Nachhaltigkeit</span>
          <span class="search-result-tag">Innovation</span>
          <span class="search-result-tag">Mobilität</span>
        </div>
      </div>
      
      <div class="search-result-divider"></div>
      
      <div class="search-result-item">
        <div class="search-result-item-header">
          <div class="search-result-item-category">News</div>
          <time class="search-result-item-date">8. März 2024</time>
        </div>
        <h3 class="search-result-item-title">
          <a href="#" class="search-result-item-link">
            Elektrische Busflotte: 40% Reduktion der CO2-Emissionen erreicht
          </a>
        </h3>
        <div class="search-result-item-url">netinera.de/news/elektrobus-flotte-co2</div>
        <p class="search-result-item-snippet">
          Die neue elektrische Busflotte der Netinera Gruppe zeigt beeindruckende Umweltergebnisse. Die Analyse der ersten sechs Monate bestätigt eine signifikante Reduktion...
        </p>
        <div class="search-result-item-actions">
          <button class="search-result-action-btn search-result-save">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
            Speichern
          </button>
          <button class="search-result-action-btn search-result-share">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
            Teilen
          </button>
        </div>
      </div>
    </div>
  `,
  name: 'Basic Search Results',
  parameters: {
    docs: {
      description: {
        story: 'Basic search result list with header, sorting options, and individual result items including actions.',
      },
    },
  },
};

export const DocumentResults = {
  render: () => `
    <div class="search-result-list search-result-list-documents">
      <div class="search-result-item search-result-item-document">
        <div class="search-result-item-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
        </div>
        <div class="search-result-item-content">
          <div class="search-result-item-header">
            <div class="search-result-item-category">Dokument</div>
            <div class="search-result-item-filesize">2.4 MB</div>
          </div>
          <h3 class="search-result-item-title">
            <a href="#" class="search-result-item-link">
              Nachhaltigkeitsstrategie_2024_Netinera.pdf
            </a>
          </h3>
          <div class="search-result-item-url">netinera.de/downloads/sustainability</div>
          <p class="search-result-item-snippet">
            Umfassendes Strategiepapier zur nachhaltigen Unternehmensführung und Umweltzielen für 2024-2030.
          </p>
          <div class="search-result-item-badges">
            <span class="search-result-badge search-result-badge-pdf">PDF</span>
            <span class="search-result-badge search-result-badge-size">2.4 MB</span>
          </div>
        </div>
      </div>
      
      <div class="search-result-divider"></div>
      
      <div class="search-result-item search-result-item-document">
        <div class="search-result-item-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"/>
          </svg>
        </div>
        <div class="search-result-item-content">
          <div class="search-result-item-header">
            <div class="search-result-item-category">Präsentation</div>
            <div class="search-result-item-filesize">5.8 MB</div>
          </div>
          <h3 class="search-result-item-title">
            <a href="#" class="search-result-item-link">
              Green_Mobility_Solutions_Präsentation.pptx
            </a>
          </h3>
          <div class="search-result-item-url">netinera.de/downloads/presentations</div>
          <p class="search-result-item-snippet">
            Präsentation zu innovativen Lösungen für umweltfreundliche Mobilität im öffentlichen Verkehr.
          </p>
          <div class="search-result-item-badges">
            <span class="search-result-badge search-result-badge-ppt">PPTX</span>
            <span class="search-result-badge search-result-badge-size">5.8 MB</span>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Document Search Results',
  parameters: {
    docs: {
      description: {
        story: 'Document-specific search results with file icons, file sizes, and document type badges.',
      },
    },
  },
};

export const VideoResults = {
  render: () => `
    <div class="search-result-list search-result-list-videos">
      <div class="search-result-item search-result-item-video">
        <div class="search-result-item-thumbnail">
          <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
               alt="Video Thumbnail" class="search-result-video-thumbnail">
          <div class="search-result-video-duration">4:32</div>
          <div class="search-result-video-play">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="search-result-item-content">
          <div class="search-result-item-header">
            <div class="search-result-item-category">Video</div>
            <time class="search-result-item-date">12. März 2024</time>
          </div>
          <h3 class="search-result-item-title">
            <a href="#" class="search-result-item-link">
              Nachhaltige Mobilität: Unser Weg in die Zukunft
            </a>
          </h3>
          <div class="search-result-item-url">netinera.de/videos/nachhaltigkeit</div>
          <p class="search-result-item-snippet">
            CEO Andreas Müller erklärt die Vision der Netinera Gruppe für nachhaltige Mobilität und die konkreten Schritte zur Umsetzung.
          </p>
          <div class="search-result-item-badges">
            <span class="search-result-badge search-result-badge-video">Video</span>
            <span class="search-result-badge search-result-badge-duration">4:32</span>
          </div>
        </div>
      </div>
      
      <div class="search-result-divider"></div>
      
      <div class="search-result-item search-result-item-video">
        <div class="search-result-item-thumbnail">
          <img src="https://images.unsplash.com/photo-1558618666-8c5ae2fa6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
               alt="Video Thumbnail" class="search-result-video-thumbnail">
          <div class="search-result-video-duration">6:15</div>
          <div class="search-result-video-play">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="search-result-item-content">
          <div class="search-result-item-header">
            <div class="search-result-item-category">Video</div>
            <time class="search-result-item-date">5. März 2024</time>
          </div>
          <h3 class="search-result-item-title">
            <a href="#" class="search-result-item-link">
              Elektrobusse im Praxistest: Erfahrungen aus dem ersten Jahr
            </a>
          </h3>
          <div class="search-result-item-url">netinera.de/videos/elektrobusse-praxis</div>
          <p class="search-result-item-snippet">
            Detaillierte Analyse der Elektrobus-Flotte nach einem Jahr Betrieb. Technische Daten, Kostenvergleich und Kundenerfahrungen.
          </p>
          <div class="search-result-item-badges">
            <span class="search-result-badge search-result-badge-video">Video</span>
            <span class="search-result-badge search-result-badge-duration">6:15</span>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Video Search Results',
  parameters: {
    docs: {
      description: {
        story: 'Video-specific search results with thumbnails, play buttons, duration badges, and responsive layouts.',
      },
    },
  },
};

export const SearchPagination = {
  render: () => `
    <div class="search-result-pagination">
      <button class="search-result-pagination-btn search-result-pagination-prev" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
        Zurück
      </button>
      
      <div class="search-result-pagination-numbers">
        <button class="search-result-pagination-number search-result-pagination-current" aria-current="page">1</button>
        <button class="search-result-pagination-number">2</button>
        <button class="search-result-pagination-number">3</button>
        <span class="search-result-pagination-ellipsis">...</span>
        <button class="search-result-pagination-number">15</button>
      </div>
      
      <button class="search-result-pagination-btn search-result-pagination-next">
        Weiter
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </div>
  `,
  name: 'Search Pagination',
  parameters: {
    docs: {
      description: {
        story: 'Classic pagination component for search results with previous/next buttons and numbered pages.',
      },
    },
  },
};

export const LoadMorePattern = {
  render: () => `
    <div class="search-result-load-more">
      <div class="search-result-load-more-info">
        <span class="search-result-load-more-count">20 von 142 Ergebnissen angezeigt</span>
      </div>
      <button class="search-result-load-more-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        20 weitere Ergebnisse laden
      </button>
    </div>
  `,
  name: 'Load More Pattern',
  parameters: {
    docs: {
      description: {
        story: 'Progressive loading pattern for search results, ideal for mobile experiences and infinite scroll implementations.',
      },
    },
  },
};

export const EmptyState = {
  render: () => `
    <div class="search-result-empty">
      <div class="search-result-empty-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      </div>
      <h3 class="search-result-empty-title">Keine Ergebnisse gefunden</h3>
      <p class="search-result-empty-description">
        Für Ihren Suchbegriff "unbekannter-begriff" wurden keine Ergebnisse gefunden.
      </p>
      <div class="search-result-empty-suggestions">
        <h4 class="search-result-empty-suggestions-title">Versuchen Sie es mit:</h4>
        <ul class="search-result-empty-suggestions-list">
          <li>Überprüfung der Rechtschreibung</li>
          <li>Verwendung allgemeinerer Suchbegriffe</li>
          <li>Weniger Suchbegriffe verwenden</li>
        </ul>
      </div>
      <button class="search-result-empty-btn">
        Neue Suche starten
      </button>
    </div>
  `,
  name: 'Empty State',
  parameters: {
    docs: {
      description: {
        story: 'Empty state component for when no search results are found, with helpful suggestions for users.',
      },
    },
  },
};

export const MixedResults = {
  render: () => `
    <div class="search-result-list">
      <!-- Regular Result -->
      <div class="search-result-item">
        <div class="search-result-item-header">
          <div class="search-result-item-category">Unternehmen</div>
          <time class="search-result-item-date">15. März 2024</time>
        </div>
        <h3 class="search-result-item-title">
          <a href="#" class="search-result-item-link">
            Netinera Nachhaltigkeitsstrategie: Neue Wege im öffentlichen Verkehr
          </a>
        </h3>
        <div class="search-result-item-url">netinera.de/nachhaltigkeit/strategie</div>
        <p class="search-result-item-snippet">
          Die umfassende Nachhaltigkeitsstrategie der Netinera Gruppe setzt neue Standards für umweltfreundliche Mobilität...
        </p>
        <div class="search-result-item-tags">
          <span class="search-result-tag">Strategie</span>
          <span class="search-result-tag">Nachhaltigkeit</span>
        </div>
      </div>
      
      <div class="search-result-divider"></div>
      
      <!-- Document Result -->
      <div class="search-result-item search-result-item-document">
        <div class="search-result-item-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
        </div>
        <div class="search-result-item-content">
          <div class="search-result-item-header">
            <div class="search-result-item-category">Dokument</div>
            <div class="search-result-item-filesize">1.8 MB</div>
          </div>
          <h3 class="search-result-item-title">
            <a href="#" class="search-result-item-link">
              Umweltbericht_2024_Netinera_Gruppe.pdf
            </a>
          </h3>
          <div class="search-result-item-url">netinera.de/downloads/umweltbericht-2024</div>
          <p class="search-result-item-snippet">
            Detaillierter Umweltbericht mit CO2-Bilanzen, Energieeffizienz-Maßnahmen und Zielen für 2025.
          </p>
          <div class="search-result-item-badges">
            <span class="search-result-badge search-result-badge-pdf">PDF</span>
            <span class="search-result-badge search-result-badge-new">Neu</span>
          </div>
        </div>
      </div>
      
      <div class="search-result-divider"></div>
      
      <!-- Video Result -->
      <div class="search-result-item search-result-item-video">
        <div class="search-result-item-thumbnail">
          <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
               alt="Video Thumbnail" class="search-result-video-thumbnail">
          <div class="search-result-video-duration">3:45</div>
          <div class="search-result-video-play">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="search-result-item-content">
          <div class="search-result-item-header">
            <div class="search-result-item-category">Video</div>
            <time class="search-result-item-date">10. März 2024</time>
          </div>
          <h3 class="search-result-item-title">
            <a href="#" class="search-result-item-link">
              Grüne Technologien bei Netinera: Interview mit dem CTO
            </a>
          </h3>
          <div class="search-result-item-url">netinera.de/videos/gruene-technologien</div>
          <p class="search-result-item-snippet">
            CTO Dr. Schmidt erklärt die neuesten Entwicklungen in der umweltfreundlichen Verkehrstechnologie.
          </p>
          <div class="search-result-item-badges">
            <span class="search-result-badge search-result-badge-video">Video</span>
            <span class="search-result-badge search-result-badge-duration">3:45</span>
          </div>
        </div>
      </div>
    </div>
  `,
  name: 'Mixed Search Results',
  parameters: {
    docs: {
      description: {
        story: 'Mixed search results showing different content types (web pages, documents, videos) in a unified layout.',
      },
    },
  },
};

export const ResponsiveSearchResult = {
  render: () => `
    <div style="max-width: 800px; margin: 0 auto;">
      <div class="search-result-header">
        <div class="search-result-header-info">
          <h3 class="search-result-header-title">Suchergebnisse für "Innovation"</h3>
          <p class="search-result-header-count">89 Ergebnisse in 0,15 Sekunden</p>
        </div>
        <div class="search-result-header-actions">
          <div class="search-result-sort">
            <label for="sort-responsive" class="search-result-sort-label">Sortieren nach:</label>
            <select id="sort-responsive" class="search-result-sort-select">
              <option value="relevance">Relevanz</option>
              <option value="date">Datum</option>
              <option value="title">Titel</option>
            </select>
          </div>
        </div>
      </div>

      <div class="search-result-list">
        <div class="search-result-item">
          <div class="search-result-item-header">
            <div class="search-result-item-category">Innovation</div>
            <time class="search-result-item-date">20. März 2024</time>
          </div>
          <h3 class="search-result-item-title">
            <a href="#" class="search-result-item-link">
              KI-gestützte Verkehrsoptimierung: Netinera führt neue Technologie ein
            </a>
          </h3>
          <div class="search-result-item-url">netinera.de/innovation/ki-verkehrsoptimierung</div>
          <p class="search-result-item-snippet">
            Mit künstlicher Intelligenz optimiert Netinera Fahrpläne und Routen in Echtzeit. Die neue Technologie reduziert Wartezeiten um bis zu 25%.
          </p>
          <div class="search-result-item-tags">
            <span class="search-result-tag">KI</span>
            <span class="search-result-tag">Digitalisierung</span>
            <span class="search-result-tag">Effizienz</span>
          </div>
        </div>
        
        <div class="search-result-divider"></div>
        
        <div class="search-result-item">
          <div class="search-result-item-header">
            <div class="search-result-item-category">Technologie</div>
            <time class="search-result-item-date">18. März 2024</time>
          </div>
          <h3 class="search-result-item-title">
            <a href="#" class="search-result-item-link">
              Smart City Integration: Vernetzung von Verkehrssystemen
            </a>
          </h3>
          <div class="search-result-item-url">netinera.de/technologie/smart-city</div>
          <p class="search-result-item-snippet">
            Die Integration in Smart City Infrastrukturen ermöglicht eine nahtlose Verbindung verschiedener Verkehrsmittel und verbessert die Bürgermobilität.
          </p>
          <div class="search-result-item-actions">
            <button class="search-result-action-btn search-result-save">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
              </svg>
              Speichern
            </button>
            <button class="search-result-action-btn search-result-share">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
              Teilen
            </button>
          </div>
        </div>
      </div>

      <div class="search-result-load-more">
        <div class="search-result-load-more-info">
          <span class="search-result-load-more-count">10 von 89 Ergebnissen angezeigt</span>
        </div>
        <button class="search-result-load-more-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          Weitere Ergebnisse laden
        </button>
      </div>
    </div>
  `,
  name: 'Responsive Search Result',
  parameters: {
    docs: {
      description: {
        story: 'Complete responsive search result example that adapts from mobile to desktop with all components.',
      },
    },
  },
};

export const InteractiveSearchResult = {
  render: () => `
    <div class="search-result-list" id="interactive-search">
      <div class="search-result-item" tabindex="0">
        <div class="search-result-item-header">
          <div class="search-result-item-category">Interaktiv</div>
          <time class="search-result-item-date">Heute</time>
        </div>
        <h3 class="search-result-item-title">
          <a href="#" class="search-result-item-link">
            Interaktive Suchergebnisse mit Hover- und Focus-Effekten
          </a>
        </h3>
        <div class="search-result-item-url">netinera.de/demo/interaktiv</div>
        <p class="search-result-item-snippet">
          Diese Suchergebnisse zeigen interaktive Hover-Effekte, Fokus-Zustände und Accessibility-Features. Bewegen Sie die Maus über dieses Element oder navigieren Sie mit der Tastatur.
        </p>
        <div class="search-result-item-actions">
          <button class="search-result-action-btn search-result-save">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
            Speichern
          </button>
          <button class="search-result-action-btn search-result-share">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
            Teilen
          </button>
        </div>
      </div>
      
      <div class="search-result-divider"></div>
      
      <div class="search-result-item" tabindex="0">
        <div class="search-result-item-header">
          <div class="search-result-item-category">Zugänglich</div>
          <time class="search-result-item-date">Heute</time>
        </div>
        <h3 class="search-result-item-title">
          <a href="#" class="search-result-item-link">
            Barrierefreie Suchergebnisse mit vollständiger Keyboard-Navigation
          </a>
        </h3>
        <div class="search-result-item-url">netinera.de/demo/accessibility</div>
        <p class="search-result-item-snippet">
          Alle Suchergebnisse sind vollständig mit der Tastatur navigierbar und unterstützen Screen Reader. Tab-Navigation und Focus-Management sind implementiert.
        </p>
        <div class="search-result-item-tags">
          <span class="search-result-tag">Accessibility</span>
          <span class="search-result-tag">Keyboard</span>
          <span class="search-result-tag">ARIA</span>
        </div>
      </div>
    </div>

    <script>
      // Add interactive behavior for demonstration
      setTimeout(() => {
        const searchItems = document.querySelectorAll('#interactive-search .search-result-item');
        const saveButtons = document.querySelectorAll('#interactive-search .search-result-save');
        
        searchItems.forEach((item, index) => {
          item.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(221, 5, 43, 0.02)';
            this.style.transform = 'translateX(4px)';
            this.style.borderRadius = '8px';
            this.style.padding = '20px 16px';
            this.style.margin = '-20px -16px';
          });
          
          item.addEventListener('mouseleave', function() {
            this.style.background = '';
            this.style.transform = '';
            this.style.borderRadius = '';
            this.style.padding = '';
            this.style.margin = '';
          });
        });
        
        saveButtons.forEach(btn => {
          btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.background = '#10B981';
            this.style.borderColor = '#10B981';
            this.style.color = 'white';
            this.innerHTML = this.innerHTML.replace('Speichern', 'Gespeichert');
            
            setTimeout(() => {
              this.style.background = '';
              this.style.borderColor = '';
              this.style.color = '';
              this.innerHTML = this.innerHTML.replace('Gespeichert', 'Speichern');
            }, 2000);
          });
        });
      }, 100);
    </script>
  `,
  name: 'Interactive Search Result',
  parameters: {
    docs: {
      description: {
        story: 'Interactive search results with hover effects, focus states, and live JavaScript functionality demonstrations.',
      },
    },
  },
}; 