/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#4389FF',
          500: '#297EFF',
          600: '#1F6FEB', // Primary brand color
          700: '#1A5FCB',
          800: '#1550AC',
          900: '#0D3B8B',
        },
        // Neutral colors
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        // Accent colors
        accent: {
          purple: {
            light: '#8B5CF6',
            DEFAULT: '#7C3AED',
            dark: '#6D28D9',
          },
          blue: {
            light: '#60A5FA',
            DEFAULT: '#3B82F6',
            dark: '#2563EB',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        'electrolize': [
          'Electrolize',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
        ],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          to: {
            'background-position': '200% center',
          },
        },
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};