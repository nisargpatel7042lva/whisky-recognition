/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF8E9',
          100: '#FCF2D3',
          200: '#F9E6A7',
          300: '#F6DA7C',
          400: '#F3CD50',
          500: '#D4A139', // Primary amber
          600: '#BA8725',
          700: '#996E10',
          800: '#775500',
          900: '#554000',
        },
        secondary: {
          50: '#F0EBE5',
          100: '#E2D8CD',
          200: '#C4B19B',
          300: '#A78A69',
          400: '#896337',
          500: '#6B4C05',
          600: '#573D04',
          700: '#442F03',
          800: '#362617', // Deep wood brown
          900: '#221C12',
        },
        neutral: {
          50: '#F5F5F5',
          100: '#EBEBEB',
          200: '#D6D6D6',
          300: '#C2C2C2',
          400: '#ADADAD',
          500: '#999999',
          600: '#757575',
          700: '#666666',
          800: '#464646',
          900: '#333333', // Charcoal
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'glass': '8px',
      },
      animation: {
        'scan': 'scan 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};