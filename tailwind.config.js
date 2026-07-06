/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cardo', 'Georgia', 'serif'],
        roboto: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        // navy: near-black text & dark sections (nucoach #111111 / #020817 / #1F2937 / #2B2B2B)
        navy: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d9e1',
          300: '#aeb8c7',
          400: '#7e8ca3',
          500: '#556070',
          600: '#3d4654',
          700: '#2b2b2b',
          800: '#1f2937',
          900: '#111111',
          950: '#020817',
        },
        // accent: orange primary (nucoach #F98700)
        accent: {
          50: '#fff5e6',
          100: '#ffe7c2',
          200: '#ffd594',
          300: '#ffbf66',
          400: '#fda538',
          500: '#f98700',
          600: '#d96f00',
          700: '#b05700',
          800: '#874200',
          900: '#5e2e00',
        },
        // teal: cyan secondary (nucoach #00B7C7 / #10D1E5)
        teal: {
          50: '#e6fbfd',
          100: '#c2f4f9',
          200: '#8ee9f3',
          300: '#54dbec',
          400: '#10d1e5',
          500: '#00b7c7',
          600: '#00939f',
          700: '#007079',
          800: '#00535a',
          900: '#003b40',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
