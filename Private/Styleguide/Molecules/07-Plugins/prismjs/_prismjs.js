//
// PRISM.JS SYNTAX HIGHLIGHTING PLUGIN
// @https://prismjs.com/

import Prism from '../../../../../../node_modules/prismjs/prism';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

// Enhanced Code Display Functions
function copyCode(codeId) {
  console.log('📋 copyCode called with ID:', codeId);
  const codeElement = document.getElementById(codeId);
  if (!codeElement) {
    console.error('❌ Code element not found:', codeId);
    return;
  }
  
  try {
    const code = codeElement.textContent || codeElement.innerText;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(() => {
        console.log('✅ Code copied to clipboard via Clipboard API');
        showCopyFeedback();
      }).catch(err => {
        console.error('❌ Clipboard API failed:', err);
        fallbackCopyTextToClipboard(code);
      });
    } else {
      fallbackCopyTextToClipboard(code);
    }
  } catch (error) {
    console.error('❌ Error copying code:', error);
  }
}

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      console.log('✅ Code copied to clipboard via fallback');
      showCopyFeedback();
    } else {
      console.error('❌ Fallback copy failed');
    }
  } catch (err) {
    console.error('❌ Fallback copy error:', err);
  }
  
  document.body.removeChild(textArea);
}

function showCopyFeedback() {
  console.log('📢 showCopyFeedback called');
  let feedback = document.getElementById('copyFeedback');
  
  if (!feedback) {
    console.log('🔨 Creating copy feedback element');
    feedback = document.createElement('div');
    feedback.id = 'copyFeedback';
    feedback.className = 'copy-feedback';
    feedback.textContent = '✅ Code kopiert!';
    document.body.appendChild(feedback);
  }
  
  // Show feedback
  feedback.classList.add('show');
  
  // Hide after 2 seconds
  setTimeout(() => {
    feedback.classList.remove('show');
  }, 2000);
}

function toggleLines(codeId) {
  console.log('📏 toggleLines called with ID:', codeId);
  const codeElement = document.getElementById(codeId);
  if (!codeElement) {
    console.error('❌ Code element not found:', codeId);
    return;
  }
  
  try {
    const isLineNumbersActive = codeElement.classList.contains('line-numbers');
    
    if (isLineNumbersActive) {
      console.log('📏 Removing line numbers');
      codeElement.classList.remove('line-numbers');
      
      // Remove line numbers rows if they exist
      const lineNumbersRows = codeElement.querySelector('.line-numbers-rows');
      if (lineNumbersRows) {
        lineNumbersRows.remove();
      }
    } else {
      console.log('📏 Adding line numbers');
      codeElement.classList.add('line-numbers');
      
      // Re-run Prism to add line numbers
      if (window.Prism && window.Prism.plugins && window.Prism.plugins.lineNumbers) {
        window.Prism.plugins.lineNumbers.resize(codeElement);
      } else {
        // Manual line numbers fallback
        addManualLineNumbers(codeElement);
      }
    }
  } catch (error) {
    console.error('❌ Error toggling line numbers:', error);
  }
}

function addManualLineNumbers(preElement) {
  console.log('🔢 Adding manual line numbers');
  
  // Remove existing line numbers
  const existingRows = preElement.querySelector('.line-numbers-rows');
  if (existingRows) {
    existingRows.remove();
  }
  
  const code = preElement.querySelector('code');
  if (!code) return;
  
  const lines = code.textContent.split('\n');
  const lineCount = lines.length;
  
  // Create line numbers container
  const lineNumbersContainer = document.createElement('span');
  lineNumbersContainer.className = 'line-numbers-rows';
  lineNumbersContainer.setAttribute('aria-hidden', 'true');
  
  // Add line number spans
  for (let i = 1; i <= lineCount; i++) {
    const lineSpan = document.createElement('span');
    lineNumbersContainer.appendChild(lineSpan);
  }
  
  // Insert at the beginning of pre element
  preElement.insertBefore(lineNumbersContainer, preElement.firstChild);
}

function prismInit() {
  try {
    console.log('🎨 Initializing Prism.js syntax highlighting...');
    
    // Make Prism available globally
    window.Prism = Prism;
    
    // Make enhanced functions globally available
    window.copyCode = copyCode;
    window.showCopyFeedback = showCopyFeedback;
    window.toggleLines = toggleLines;
    
    // Find all code display blocks
    const allCodeBlocks = document.querySelectorAll('.code-display pre, .code-display code, pre[class*="language-"], code[class*="language-"]');
    console.log(`Found ${allCodeBlocks.length} code blocks to process`);
    
    // Process each code block
    allCodeBlocks.forEach((block, index) => {
      console.log(`Processing code block ${index + 1}:`, block);
      
      if (!block.className.includes('language-')) {
        // Try to detect language from content or add default
        const content = block.textContent.trim();
        let detectedLanguage = 'css'; // Default
        
        if (content.includes('{') && (content.includes('@apply') || content.includes('background:') || content.includes('color:') || content.includes('display:'))) {
          detectedLanguage = 'css';
        } else if (content.includes('function') || content.includes('const') || content.includes('import') || content.includes('=>')) {
          detectedLanguage = 'javascript';
        } else if (content.includes('<?php') || content.includes('$')) {
          detectedLanguage = 'php';
        } else if (content.includes('<html') || content.includes('<div') || content.includes('<span')) {
          detectedLanguage = 'markup';
        }
        
        console.log(`Detected language: ${detectedLanguage} for block ${index + 1}`);
        block.className += ` language-${detectedLanguage}`;
      }
      
      // Force highlight this specific element
      try {
        Prism.highlightElement(block);
        console.log(`✅ Successfully highlighted block ${index + 1}`);
      } catch (error) {
        console.error(`❌ Error highlighting block ${index + 1}:`, error);
      }
    });
    
    // Also run global highlight
    Prism.highlightAll();
    
    // Re-highlight dynamically added code blocks
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const codeBlocks = node.querySelectorAll('pre, code, .code-display pre, .code-display code');
              codeBlocks.forEach(block => {
                // Auto-detect language if not set
                if (!block.className.includes('language-')) {
                  const content = block.textContent.trim();
                  if (content.includes('@apply') || content.includes('background:') || content.includes('display:')) {
                    block.className += ' language-css';
                  } else if (content.includes('function') || content.includes('const')) {
                    block.className += ' language-javascript';
                  } else if (content.includes('<') && content.includes('>')) {
                    block.className += ' language-markup';
                  } else {
                    block.className += ' language-css';
                  }
                }
                Prism.highlightElement(block);
              });
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    console.log('✅ Prism.js initialized successfully');
    console.log('✅ Enhanced Code Display functions available globally');
    
    // Add a delay and try again for safety
    setTimeout(() => {
      const stillUnhighlighted = document.querySelectorAll('.code-display pre:not([class*="language-"]), .code-display code:not([class*="language-"])');
      if (stillUnhighlighted.length > 0) {
        console.log(`🔄 Found ${stillUnhighlighted.length} unhighlighted blocks, retrying...`);
        stillUnhighlighted.forEach(block => {
          block.className += ' language-css';
          Prism.highlightElement(block);
        });
      }
    }, 500);
    
  } catch (error) {
    console.error('❌ Error initializing Prism.js:', error);
  }
}

export default {};

export const PrismInit = prismInit;