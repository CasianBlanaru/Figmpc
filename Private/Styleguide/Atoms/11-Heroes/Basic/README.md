# Hero Topic Component - Atoms

## Beschreibung
Hero Topic Component ohne Hintergrundbild des Netinera Design Systems basierend auf pixelgenauen Figma-Spezifikationen. Bietet responsive Verhalten mit automatischer Anpassung zwischen Mobile (48px) und Desktop (144px) sowie verschiedene Farbvarianten.

## Figma Node
- **Hero Topic No Image**: 2632:17633
- **Layout IDs**: MU07Z8 (Main), BEX3JN (Placeholder), QQYVBB (Content), REQZMV (Text Group)
- **Typography**: style_OB9818 (Headline)
- **Link**: [Figma Design System](https://figma.com/netinera-design-system)

## Komponenten-Hierarchie

### 1. Container (`.hero-topic-no-image`)
- **Zweck**: Hauptcontainer für die Hero Topic Komponente
- **Verhalten**: Responsive 48px (Mobile) → 144px (Desktop)
- **Border Radius**: 48px (Mobile) → 96px (Desktop) mit asymmetrischem Muster

### 2. Placeholder (`.hero-topic-placeholder`)
- **Zweck**: Farbiger Platzhalter oben
- **Höhe**: 48px (Mobile) → 144px (Desktop)
- **Standard**: Netinera Primary Color (#00685E)

### 3. Content Container (`.hero-topic-content`)
- **Zweck**: Weißer Inhaltsbereich
- **Padding**: 44px×16px (Mobile) → 80px×0px (Desktop)
- **Hintergrund**: Weiß (#FFFFFF)

### 4. Text Group (`.hero-topic-text-group`)
- **Zweck**: Textcontainer mit Overline und Headline
- **Breite**: 100% (Mobile) → 968px (Desktop)
- **Gap**: 16px (Mobile) → 20px (Desktop)

## Verwendung

### HTML

#### Basic Hero Topic
```html
<div class="hero-topic-no-image">
    <div class="hero-topic-placeholder"></div>
    <div class="hero-topic-content">
        <div class="hero-topic-text-group">
            <div class="hero-topic-overline-wrapper">
                <div class="hero-topic-overline">Aktuell</div>
            </div>
            <h2 class="hero-topic-headline">Pressemitteilungen</h2>
        </div>
    </div>
</div>
```

#### Mit Farbvarianten
```html
<!-- Secondary (Rot) -->
<div class="hero-topic-no-image hero-topic-variant-secondary">
    <!-- content -->
</div>

<!-- Dark -->
<div class="hero-topic-no-image hero-topic-variant-dark">
    <!-- content -->
</div>

<!-- White Inverted -->
<div class="hero-topic-no-image hero-topic-variant-white">
    <!-- content -->
</div>
```

#### Mit Größenvarianten
```html
<!-- Fixed Small -->
<div class="hero-topic-no-image hero-topic-size-sm">
    <!-- content -->
</div>

<!-- Fixed Extra Large -->
<div class="hero-topic-no-image hero-topic-size-xl">
    <!-- content -->
</div>
```

### CSS Classes

#### Base Classes
- `.hero-topic-no-image` - Hauptcontainer (responsive)
- `.hero-topic-placeholder` - Farbiger Platzhalter
- `.hero-topic-content` - Weißer Inhaltsbereich
- `.hero-topic-text-group` - Textcontainer
- `.hero-topic-overline-wrapper` - Overline Container
- `.hero-topic-overline` - Kategorie/Sektion
- `.hero-topic-headline` - Hauptüberschrift

#### Color Variants
- `.hero-topic-variant-secondary` - Netinera Secondary (Rot)
- `.hero-topic-variant-dark` - Netinera Dark
- `.hero-topic-variant-white` - White mit Primary Background

#### Size Variants
- `.hero-topic-size-sm` - Fixed Small (48px)
- `.hero-topic-size-xl` - Fixed Extra Large (144px)
- Standard: Responsive (ohne Modifier)

### JavaScript

#### Automatic Initialization
```javascript
// Auto-initialisiert sich beim DOM Ready
// Keine manuelle Initialisierung notwendig
```

#### Manual Initialization
```javascript
import { HeroTopicComponent } from './hero.js';

// Einzelne Komponente
const hero = new HeroTopicComponent(document.querySelector('.hero-topic-no-image'));

// Alle Komponenten
import { initializeHeroComponents } from './hero.js';
initializeHeroComponents();
```

#### Event Handling
```javascript
// Hero Click Events
document.addEventListener('netinera:hero:click', (event) => {
    console.log('Hero clicked:', event.detail);
    // { overline: 'Aktuell', headline: 'Pressemitteilungen', variant: 'primary', size: 'responsive' }
});

// Content Update Events
document.addEventListener('netinera:hero:updated', (event) => {
    console.log('Hero updated:', event.detail);
});
```

#### Programmatic Control
```javascript
const heroComponent = document.querySelector('.hero-topic-no-image').netineraHeroComponent;

// Content aktualisieren
heroComponent.updateContent('Innovation', 'Neue Technologie');

// Variante ändern
heroComponent.setVariant('secondary');

// Größe ändern
heroComponent.setSize('small');
```

## Responsive Verhalten

### Mobile (< 1024px)
- **Container**: 48px Border Radius
- **Placeholder**: 48px Höhe
- **Content**: 44px×16px Padding
- **Text Width**: 100%
- **Gap**: 16px
- **Typography**: 32px Headline, 12px Overline

### Desktop (≥ 1024px)
- **Container**: 96px Border Radius (asymmetrisch)
- **Placeholder**: 144px Höhe
- **Content**: 80px×0px Padding
- **Text Width**: 968px (exakt Figma)
- **Gap**: 20px
- **Typography**: 60px Headline, 14px Overline

## Figma Spezifikationen

### Exakte Maße (Desktop XL)
```css
/* Container (layout_MU07Z8) */
.hero-topic-no-image {
  border-radius: 96px 0px 96px 0px; /* exact Figma */
}

/* Placeholder (layout_BEX3JN) */
.hero-topic-placeholder {
  height: 144px; /* exact Figma height */
  background: #00685E; /* fill_AJML3A */
  border-radius: 96px 0px 0px 0px;
}

/* Content (layout_QQYVBB) */
.hero-topic-content {
  background: #FFFFFF; /* fill_KVAV69 */
  padding: 80px 0px; /* exact Figma padding */
}

/* Text Group (layout_REQZMV) */
.hero-topic-text-group {
  width: 968px; /* exact Figma width */
  gap: 20px; /* exact Figma gap */
}
```

### Typography (style_OB9818)
```css
/* Headline */
.hero-topic-headline {
  font-family: 'Titillium Web'; /* fontFamily */
  font-weight: 400; /* fontWeight */
  font-size: 60px; /* fontSize */
  line-height: 1.0666666666666667; /* lineHeight */
  letter-spacing: 0.6666666766007742%; /* letterSpacing */
  text-transform: uppercase; /* textCase: UPPER */
  text-align: left; /* textAlignHorizontal: LEFT */
  color: #1E2939; /* fill_UO0V6P */
}

/* Overline */
.hero-topic-overline {
  font-family: 'Titillium Web';
  font-weight: 600;
  font-style: italic;
  font-size: 14px;
  line-height: 1.1428571428571428;
  letter-spacing: 11.428571598870414%;
  text-transform: uppercase;
}
```

## Color Variants

### Primary (Standard)
- **Placeholder**: Netinera Primary (#00685E)
- **Content**: White (#FFFFFF)
- **Text**: Netinera Dark (#1E2939)

### Secondary
- **Placeholder**: Netinera Secondary (#DD052B)
- **Content**: White (#FFFFFF)
- **Text**: Netinera Dark (#1E2939)

### Dark
- **Placeholder**: Netinera Dark (#1E2939)
- **Content**: White (#FFFFFF)
- **Text**: Netinera Dark (#1E2939)

### White Inverted
- **Placeholder**: White (#FFFFFF)
- **Content**: Netinera Primary (#00685E)
- **Text**: White (#FFFFFF)

## Accessibility Features

### ARIA Support
- `role="button"` für klickbare Hero Topics
- `tabindex="0"` für Keyboard Navigation
- `aria-label` mit Overline und Headline Text
- `aria-describedby` für zusätzliche Beschreibung

### Keyboard Navigation
- **Tab** - Navigation zu Hero Topic
- **Enter/Space** - Hero Topic aktivieren

### Screen Reader Support
- Semantische HTML-Struktur
- Aussagekräftige ARIA Labels
- Logische Tab-Reihenfolge

### Focus Management
- Sichtbare Focus-Indikatoren
- Outline mit Netinera Primary Color
- Smooth Scroll zu fokussierten Elementen

## Animationen

### Scroll Animations
- **Fade In**: Hero Topic beim Scrollen ins Sichtfeld
- **Stagger**: Gestaffelte Animation für Placeholder und Content
- **Duration**: 0.6s für Container, 0.4s für Placeholder, 0.5s für Content

### Interaction Animations
- **Ripple Effect**: Beim Klicken
- **Press State**: Scale-down bei Touch (0.98)
- **Hover**: Subtile Elevation (falls gewünscht)

### Performance
- Hardware-beschleunigte Animationen
- Respect for `prefers-reduced-motion`
- Optimierte CSS Transforms

## Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **CSS Features**: CSS Grid, Custom Properties, Border Radius
- **JavaScript**: ES6 Modules, Intersection Observer, Resize Observer

## Performance

### CSS
- Optimierte Selektoren
- Hardware-beschleunigte Transforms
- Effiziente Media Queries

### JavaScript
- Lazy Loading mit Intersection Observer
- Event Delegation
- Memory Leak Prevention
- Observer Cleanup

## Migration von bestehenden Hero Components

### Von hero-topic-component.html
```html
<!-- Alt -->
<div class="hero-topic-no-image-responsive">
    <div class="hero-topic-no-image-placeholder"></div>
    <div class="hero-topic-content">
        <!-- content -->
    </div>
</div>

<!-- Neu -->
<div class="hero-topic-no-image">
    <div class="hero-topic-placeholder"></div>
    <div class="hero-topic-content">
        <!-- content -->
    </div>
</div>
```

### CSS-Klassen Mapping
- `hero-topic-no-image-responsive` → `hero-topic-no-image`
- `hero-topic-no-image-placeholder` → `hero-topic-placeholder`
- `hero-topic-variant-secondary` → `hero-topic-variant-secondary` (unverändert)
- `hero-topic-no-image-sm` → `hero-topic-no-image hero-topic-size-sm`

## Testing

### Visual Regression Tests
- Alle Farbvarianten
- Responsive Breakpoints (Mobile → Desktop)
- Content-Variationen

### Interaction Tests
- Click Events
- Keyboard Navigation
- Touch Interactions
- Content Updates

### Accessibility Tests
- Screen Reader Compatibility
- Keyboard-Only Navigation
- Focus Management
- ARIA Attributes

## Maintenance

### CSS Updates
- Änderungen in `Resources/Private/CSS/components/atoms/hero.css`
- Build mit `npm run build`

### JavaScript Updates
- Änderungen in `Resources/Private/JavaScript/components/atoms/hero.js`
- ES6 Module Standard

### Content Updates
- Overline und Headline via JavaScript API
- Event-basierte Kommunikation
- Accessibility Auto-Update

---

**Version**: 1.0.0  
**Letzte Aktualisierung**: 2024  
**Atomic Design Layer**: Atoms  
**Dependencies**: Netinera Theme CSS Variables, TitilliumWeb Font 