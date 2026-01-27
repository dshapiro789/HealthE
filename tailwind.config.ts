import type { Config } from 'tailwindcss';

/**
 * Health-E Marketplace Tailwind Configuration
 * ==========================================
 * 
 * Brand Colors (from logo):
 * - Primary Green: #4A9B6F (wellness, health)
 * - Primary Blue: #3BACDB (tech, digital)
 * 
 * DEVELOPER NOTES:
 * - To update brand colors, modify the 'brand' section below
 * - Custom animations are defined in 'keyframes' and 'animation'
 * - Font families can be changed in 'fontFamily' section
 */

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /**
       * COLOR PALETTE
       * Update these values to change brand colors across the entire site
       */
      colors: {
        // Brand colors from Health-E logo
        brand: {
          green: {
            50: '#E8F5ED',
            100: '#D1EBD8',
            200: '#A3D7B5',
            300: '#75C391',
            400: '#5BB07A',
            500: '#4A9B6F', // Primary brand green
            600: '#3D8259',
            700: '#306943',
            800: '#23502E',
            900: '#163718',
          },
          blue: {
            50: '#E6F6FC',
            100: '#CCE9F8',
            200: '#99D4F1',
            300: '#66BEEA',
            400: '#4DAEE3',
            500: '#3BACDB', // Primary brand blue
            600: '#2A8BB8',
            700: '#1F6B95',
            800: '#154A72',
            900: '#0A2A4F',
          },
        },
        // Background colors
        background: {
          DEFAULT: '#FAFBFC',
          secondary: '#F3F4F6',
          dark: '#1A1F2C',
        },
        // Text colors
        foreground: {
          DEFAULT: '#1A1F2C',
          muted: '#6B7280',
          light: '#9CA3AF',
        },
        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        // Border colors
        border: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
        },
      },
      
      /**
       * TYPOGRAPHY
       * Primary: Outfit (modern, geometric) - headings
       * Secondary: DM Sans (clean, readable) - body text
       * Mono: JetBrains Mono - technical elements
       */
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      /**
       * ANIMATIONS
       * Custom animations for enhanced UX
       */
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(74, 155, 111, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 172, 219, 0.4)',
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-down': 'fade-down 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 5s ease infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      
      /**
       * SPACING & LAYOUT
       */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      
      /**
       * BORDER RADIUS
       */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      /**
       * BOX SHADOWS
       */
      boxShadow: {
        'brand': '0 4px 20px rgba(74, 155, 111, 0.15)',
        'brand-lg': '0 8px 40px rgba(74, 155, 111, 0.2)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.08), 0 8px 40px rgba(0, 0, 0, 0.1)',
        'glow-green': '0 0 40px rgba(74, 155, 111, 0.3)',
        'glow-blue': '0 0 40px rgba(59, 172, 219, 0.3)',
      },
      
      /**
       * BACKGROUND IMAGES
       */
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #4A9B6F 0%, #3BACDB 100%)',
        'gradient-brand-vertical': 'linear-gradient(180deg, #4A9B6F 0%, #3BACDB 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(135deg, rgba(74, 155, 111, 0.05) 0%, rgba(59, 172, 219, 0.05) 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(74, 155, 111, 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(59, 172, 219, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(74, 155, 111, 0.05) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
};

export default config;
