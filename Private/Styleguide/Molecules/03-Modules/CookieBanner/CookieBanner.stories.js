import CookieBanner from './CookieBanner.html';

export default {
  title: 'Molecules/03-Modules/CookieBanner',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    // Hier können wir Controls für unsere Story definieren
    primaryButtonText: { control: 'text' },
    essentialButtonText: { control: 'text' },
    settingsButtonText: { control: 'text' },
    titleText: { control: 'text' },
    descriptionText: { control: 'text' },
    noticeText: { control: 'text' },
  },
};

// Basis-Template für alle Varianten
const Template = (args) => {
  // HTML-String mit ersetzten Argumenten erstellen
  const html = CookieBanner
    .replace('{{titleText}}', args.titleText)
    .replace('{{descriptionText}}', args.descriptionText)
    .replace('{{noticeText}}', args.noticeText)
    .replace('{{primaryButtonText}}', args.primaryButtonText)
    .replace('{{essentialButtonText}}', args.essentialButtonText)
    .replace('{{settingsButtonText}}', args.settingsButtonText);

  // JS für die Cookie-Banner-Funktionalität
  setTimeout(() => {
    const banner = document.getElementById('cookie-banner');
    const settingsModal = document.getElementById('cookie-settings-modal');
    const acceptAllButton = document.getElementById('accept-all-cookies');
    const acceptEssentialButton = document.getElementById('accept-essential-cookies');
    const openSettingsButton = document.getElementById('cookie-settings-button');
    const saveSettingsButton = document.getElementById('save-cookie-settings');
    const closeSettingsButton = document.getElementById('close-cookie-settings');

    // Banner einblenden
    if (banner) {
      banner.classList.remove('translate-y-full');
    }

    // Event-Listener für die Buttons
    if (acceptAllButton) {
      acceptAllButton.addEventListener('click', () => {
        console.log('Alle Cookies akzeptiert');
        banner.classList.add('translate-y-full');
      });
    }

    if (acceptEssentialButton) {
      acceptEssentialButton.addEventListener('click', () => {
        console.log('Nur notwendige Cookies akzeptiert');
        banner.classList.add('translate-y-full');
      });
    }

    if (openSettingsButton && settingsModal) {
      openSettingsButton.addEventListener('click', () => {
        settingsModal.classList.remove('hidden');
      });
    }

    if (saveSettingsButton && settingsModal) {
      saveSettingsButton.addEventListener('click', () => {
        console.log('Cookie-Einstellungen gespeichert');
        settingsModal.classList.add('hidden');
        banner.classList.add('translate-y-full');
      });
    }

    if (closeSettingsButton && settingsModal) {
      closeSettingsButton.addEventListener('click', () => {
        settingsModal.classList.add('hidden');
      });
    }
  }, 500);

  return html;
};

// Standard-Variante
export const Default = Template.bind({});
Default.args = {
  titleText: 'Datenschutzeinstellungen',
  descriptionText: 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige davon sind für den Betrieb der Seite notwendig, während andere uns helfen, diese Website und die Nutzererfahrung zu verbessern.',
  noticeText: 'Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. Bitte beachten Sie, dass auf Basis Ihrer Einstellungen möglicherweise nicht alle Funktionen der Website zur Verfügung stehen.',
  primaryButtonText: 'Alle akzeptieren',
  essentialButtonText: 'Nur notwendige',
  settingsButtonText: 'Einstellungen',
};

// Kompakte Variante mit weniger Text
export const Compact = Template.bind({});
Compact.args = {
  titleText: 'Cookie-Einstellungen',
  descriptionText: 'Diese Website verwendet Cookies. Einige sind notwendig, während andere uns helfen, Ihr Nutzererlebnis zu verbessern.',
  noticeText: 'Bitte wählen Sie, welche Cookies Sie akzeptieren möchten.',
  primaryButtonText: 'Alle akzeptieren',
  essentialButtonText: 'Nur notwendige',
  settingsButtonText: 'Einstellungen',
};
