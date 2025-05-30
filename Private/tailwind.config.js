/* eslint-env node */
const { defineConfig } = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = defineConfig({
  content: [
    "./packages/sitepackage/Resources/Private/ContentElements/**/*.html",
    "./packages/sitepackage/Resources/Private/Extensions/**/*.html",
    "./packages/sitepackage/Resources/Private/Layout/**/*.html",
    "./packages/sitepackage/Resources/Private/Partials/**/*.html",
    "./packages/sitepackage/Resources/Private/Styleguide/**/*.html",
    "./packages/sitepackage/Resources/Private/Templates/**/*.html",
    "./packages/sitepackage/Resources/Private/Styleguide/**/*.css",
    "./packages/sitepackage/Resources/Private/Styleguide/**/*.html",
  ],
  theme: {
    extend: {
      // Custom utility classes for Netinera Design System
      spacing: {
        'netinera-section-xl': 'var(--spacing-section-xl)',
        'netinera-section-lg': 'var(--spacing-section-lg)',
        'netinera-section-md': 'var(--spacing-section-md)',
        'netinera-section-sm': 'var(--spacing-section-sm)',
        'netinera-content-xl': 'var(--spacing-content-xl)',
        'netinera-content-lg': 'var(--spacing-content-lg)',
        'netinera-content-md': 'var(--spacing-content-md)',
        'netinera-content-sm': 'var(--spacing-content-sm)',
        'netinera-element-xl': 'var(--spacing-element-xl)',
        'netinera-element-lg': 'var(--spacing-element-lg)',
        'netinera-element-md': 'var(--spacing-element-md)',
        'netinera-element-sm': 'var(--spacing-element-sm)',
        'netinera-element-xs': 'var(--spacing-element-xs)',
        'netinera-card': 'var(--spacing-card-padding)',
      },
      maxWidth: {
        'netinera-landingpage': 'var(--width-container-landingpage)',
        'netinera-section': 'var(--width-container-section)',
        'netinera-content': 'var(--width-container-content)',
        'netinera-narrow': 'var(--width-container-narrow)',
        'netinera-card-desktop': 'var(--width-card-desktop)',
        'netinera-card-mobile': 'var(--width-card-mobile)',
        'netinera-teaser-xl': 'var(--width-card-teaser-xl)',
        'netinera-teaser-sm': 'var(--width-card-teaser-sm)',
      },
      width: {
        'netinera-landingpage': 'var(--width-container-landingpage)',
        'netinera-section': 'var(--width-container-section)',
        'netinera-content': 'var(--width-container-content)',
        'netinera-narrow': 'var(--width-container-narrow)',
        'netinera-card-desktop': 'var(--width-card-desktop)',
        'netinera-card-mobile': 'var(--width-card-mobile)',
        'netinera-teaser-xl': 'var(--width-card-teaser-xl)',
        'netinera-teaser-sm': 'var(--width-card-teaser-sm)',
      },
      height: {
        'netinera-card': 'var(--height-card-standard)',
        'netinera-teaser': 'var(--height-card-teaser)',
        'netinera-header': 'var(--height-header)',
        'netinera-section-min': 'var(--height-section-min)',
      },
      borderRadius: {
        'netinera-xl': 'var(--radius-netinera-xl)',
        'netinera-lg': 'var(--radius-netinera-lg)',
        'netinera-md': 'var(--radius-netinera-md)',
        'netinera-sm': 'var(--radius-netinera-sm)',
        'netinera-xs': 'var(--radius-netinera-xs)',
        'netinera-card-primary': 'var(--radius-card-primary)',
        'netinera-card-secondary': 'var(--radius-card-secondary)',
        'netinera-button': 'var(--radius-button-primary)',
        'netinera-container': 'var(--radius-container-large)',
      },
      boxShadow: {
        'netinera-card': 'var(--shadow-card)',
        'netinera-card-hover': 'var(--shadow-card-hover)',
        'netinera-section': 'var(--shadow-section)',
      },
      transitionDuration: {
        'netinera-fast': 'var(--transition-fast)',
        'netinera-normal': 'var(--transition-normal)',
        'netinera-slow': 'var(--transition-slow)',
      },
      screens: {
        'netinera-mobile': 'var(--breakpoint-mobile)',
        'netinera-tablet': 'var(--breakpoint-tablet)',
        'netinera-desktop': 'var(--breakpoint-desktop)',
        'netinera-wide': 'var(--breakpoint-wide)',
      },
    },
  },
  plugins: [
    // Custom plugin for Netinera-specific utility classes
    function({ addUtilities }) {
      const newUtilities = {
        // Container utilities with consistent naming
        '.container-netinera-landingpage': {
          maxWidth: 'var(--width-container-landingpage)',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
        '.container-netinera-section': {
          maxWidth: 'var(--width-container-section)',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
        '.container-netinera-content': {
          maxWidth: 'var(--width-container-content)',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
        // Card utilities with Netinera styling
        '.card-netinera-primary': {
          borderRadius: 'var(--radius-card-primary)',
          boxShadow: 'var(--shadow-card)',
          transition: 'all var(--transition-normal)',
          '&:hover': {
            boxShadow: 'var(--shadow-card-hover)',
          },
        },
        '.card-netinera-secondary': {
          borderRadius: 'var(--radius-card-secondary)',
          boxShadow: 'var(--shadow-card)',
          transition: 'all var(--transition-normal)',
          '&:hover': {
            boxShadow: 'var(--shadow-card-hover)',
          },
        },
        // Button utilities with Netinera styling
        '.btn-netinera-primary': {
          borderRadius: 'var(--radius-button-primary)',
          backgroundColor: 'var(--color-netinera-primary)',
          color: 'var(--color-netinera-white)',
          padding: 'var(--spacing-element-sm) var(--spacing-element-lg)',
          fontFamily: 'var(--font-family-display)',
          fontWeight: 'var(--font-weight-semibold)',
          transition: 'all var(--transition-normal)',
          '&:hover': {
            backgroundColor: 'var(--color-teal-700)',
            transform: 'translateY(-2px)',
          },
        },
        '.btn-netinera-secondary': {
          borderRadius: 'var(--radius-button-primary)',
          backgroundColor: 'var(--color-netinera-secondary)',
          color: 'var(--color-netinera-white)',
          padding: 'var(--spacing-element-sm) var(--spacing-element-lg)',
          fontFamily: 'var(--font-family-display)',
          fontWeight: 'var(--font-weight-semibold)',
          transition: 'all var(--transition-normal)',
          '&:hover': {
            backgroundColor: 'var(--color-red-700)',
            transform: 'translateY(-2px)',
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
});
