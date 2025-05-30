window.addEventListener('DOMContentLoaded', () => {
  // Check if there are any code blocks that need syntax highlighting
  const codeBlocks = document.querySelectorAll('pre, code, .code-display, .enhanced-code-block, pre[class*="language-"], code[class*="language-"]');
  
  console.log(`🔍 Prism.js Lazy Loading: Found ${codeBlocks.length} potential code blocks`);
  codeBlocks.forEach((block, index) => {
    console.log(`Block ${index + 1}:`, block.className, block.textContent.substring(0, 50) + '...');
  });
  
  if (codeBlocks.length > 0) {
    console.log('🚀 Loading Prism.js plugin...');
    import('./_prismjs.js').then((module) => {
      module.PrismInit();
    }).catch((error) => {
      console.error('❌ Failed to load Prism.js plugin:', error);
    });
  } else {
    console.log('🚫 No code blocks found, skipping Prism.js');
  }
});

export default {};
