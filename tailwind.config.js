/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        secondary: '#121212',
        tertiary: '#1E1E1E',
        surface: '#262626',
        border: '#333333',
        content: '#E2E8F0',
        'content-secondary': '#94A3B8',
        primary: {
          DEFAULT: '#5D3FD3',
          hover: '#6B4FE3',
          light: 'rgba(93, 63, 211, 0.1)',
        },
        accent: {
          DEFAULT: '#008080',
          hover: '#009999',
          light: 'rgba(0, 128, 128, 0.1)',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(93, 63, 211, 0.5)',
        'glow-accent': '0 0 15px rgba(0, 128, 128, 0.5)',
      },
    },
  },
  plugins: [],
};