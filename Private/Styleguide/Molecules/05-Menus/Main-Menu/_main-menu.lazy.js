// Lazy load main menu functionality
import('./_main-menu.js')
  .then((module) => {
    if (!module.default || typeof module.default.Init !== 'function') {
      throw new Error('MainMenu: Invalid module structure - Init method not found');
    }
    try {
      module.default.Init();
    } catch (error) {
      console.error('MainMenu: Error during initialization:', error);
    }
  })
  .catch(error => {
    console.error('Error loading main menu module:', error);
  });

// Export the module for potential reuse
export default {};
