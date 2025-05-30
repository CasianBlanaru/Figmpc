import mainMenu from './main-menu.html';

export default {
  title: 'Molecules/Menus/MainMenu',
  parameters: {
    layout: 'fullscreen',
  },
};

export const MainMenu = () => {
  const story = () => {
    requestAnimationFrame(() => {
      // Menü
      const mobileMenu = document.getElementById('mobile-menu');
      const searchModal = document.getElementById('search-modal');
      const backdrop = document.getElementById('menu-backdrop');

      // Toggle
      const menuToggle = document.querySelector('[data-menu-toggle]');
      const searchToggles = document.querySelectorAll('[data-search-toggle]');
      const themeToggle = document.querySelector('[data-theme-toggle]');
      const menuClose = document.querySelector('[data-menu-close]');
      const searchClose = document.querySelector('[data-search-close]');

      // Submenü
      const submenuToggles = document.querySelectorAll('.submenu-toggle');
      const submenuBacks = document.querySelectorAll('.submenu-back');

      let activeElement = null;

      // Menü Toggle
      const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('translate-x-full');
        mobileMenu.setAttribute('aria-hidden', isExpanded);
        backdrop.classList.toggle('hidden');
        backdrop.classList.toggle('opacity-0');

        menuToggle.querySelector('.menu-icon')?.classList.toggle('hidden');
        menuToggle.querySelector('.close-icon')?.classList.toggle('hidden');

        document.body.style.overflow = isExpanded ? '' : 'hidden';
        activeElement = isExpanded ? null : 'menu';
      };

      // Search Toggle
      const toggleSearch = () => {
        const isExpanded = searchToggles[0].getAttribute('aria-expanded') === 'true';

        // Update all search toggle buttons
        for (const toggle of searchToggles) {
          toggle.setAttribute('aria-expanded', !isExpanded);
          toggle.querySelector('.search-icon')?.classList.toggle('hidden');
          toggle.querySelector('.close-icon')?.classList.toggle('hidden');
        }

        if (!isExpanded) {
          searchModal.classList.remove('hidden');
          requestAnimationFrame(() => {
            searchModal.setAttribute('aria-hidden', 'false');
            backdrop.classList.remove('hidden', 'opacity-0');
          });
        } else {
          searchModal.setAttribute('aria-hidden', 'true');
          backdrop.classList.add('opacity-0');
          setTimeout(() => {
            searchModal.classList.add('hidden');
            if (activeElement !== 'menu') {
              backdrop.classList.add('hidden');
            }
          }, 400);
        }

        document.body.style.overflow = isExpanded ? '' : 'hidden';
        activeElement = isExpanded ? null : 'search';
      };

      // Theme Toggle
      const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        console.log(`Theme changed to ${newTheme} mode`);
      };

      // Event Listener
      menuToggle?.addEventListener('click', toggleMenu);
      menuClose?.addEventListener('click', toggleMenu);

      for (const toggle of searchToggles) {
        toggle.addEventListener('click', toggleSearch);
      }
      searchClose?.addEventListener('click', toggleSearch);

      themeToggle?.addEventListener('click', toggleTheme);

      // Submenu
      for (const toggle of submenuToggles) {
        toggle.addEventListener('click', () => {
          const submenuId = toggle.getAttribute('aria-controls');
          const submenu = document.getElementById(submenuId);

          if (submenu) {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            toggle.setAttribute('aria-expanded', !isExpanded);

            if (!isExpanded) {
              submenu.classList.remove('hidden');
              requestAnimationFrame(() => {
                submenu.classList.remove('translate-x-full', 'translate-x-[100%]');
              });
            } else {
              submenu.classList.add('translate-x-full', 'translate-x-[100%]');
              setTimeout(() => {
                submenu.classList.add('hidden');
              }, 300);
            }

            submenu.setAttribute('aria-hidden', isExpanded);
            submenu.toggleAttribute('inert');

            // Animate icon
            const icon = toggle.querySelector('.icon-chevron-right');

            if (icon) {
              icon.style.transform = isExpanded ? '' : 'rotate(90deg)';
            }
          }
        });
      }

      // Submenu Back
      for (const back of submenuBacks) {
        back.addEventListener('click', () => {
          const submenu = back.closest('.submenu');
          const toggleButton = document.querySelector(`[aria-controls="${submenu.id}"]`);

          if (submenu && toggleButton) {
            toggleButton.setAttribute('aria-expanded', 'false');
            submenu.classList.add('translate-x-full', 'translate-x-[100%]');

            setTimeout(() => {
              submenu.classList.add('hidden');
            }, 300);

            submenu.setAttribute('aria-hidden', 'true');
            submenu.setAttribute('inert', '');

            // Reset icon
            const icon = toggleButton.querySelector('.icon-chevron-right');

            if (icon) {
              icon.style.transform = '';
            }
          }
        });
      }

      // Backdrop
      backdrop?.addEventListener('click', () => {
        if (activeElement === 'menu' && mobileMenu) {
          toggleMenu();
        } else if (activeElement === 'search' && searchModal) {
          toggleSearch();
        }
      });

      // Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (activeElement === 'menu') {
            toggleMenu();
          } else if (activeElement === 'search') {
            toggleSearch();
          }
        }
      });
    });
  };

  story();
  return mainMenu;
};
