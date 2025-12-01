/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px rgba(137, 210, 220, 0.7), 0 0 20px rgba(137, 210, 220, 0.5), 0 0 30px rgba(137, 210, 220, 0.3)',
        'glow-lg': '0 0 20px rgba(3, 221, 255, 0.6), 0 0 40px rgba(3, 221, 255, 0.4), 0 0 60px rgba(3, 221, 255, 0.2)',
        'glow-sm': '0 0 5px rgba(3, 221, 255, 0.5), 0 0 10px rgba(3, 221, 255, 0.3)',
      },
      colors: {
        non_photo_blue: {
          DEFAULT: '#89d2dc',
          100: '#103237',
          200: '#21656e',
          300: '#9DDBFF',
          400: '#03DDFF',
          500: '#00A8E8',
          600: '#a1dbe3',
          700: '#b8e4ea',
          800: '#d0edf1',
          900: '#e7f6f8',
        },
        slate_blue: {
          DEFAULT: '#6564db',
          100: '#0d0c34',
          200: '#1a1868',
          300: '#27259c',
          400: '#3532cf',
          500: '#6564db',
          600: '#8685e2',
          700: '#a4a3e9',
          800: '#c3c2f1',
          900: '#e1e0f8',
        },
        palatinate_blue: {
          DEFAULT: '#232ed1',
          100: '#07092a',
          200: '#0e1354',
          300: '#151c7e',
          400: '#1c26a7',
          500: '#232ed1',
          600: '#4a54e0',
          700: '#777ee8',
          800: '#a4a9f0',
          900: '#d2d4f7',
        },
        oxford_blue: {
          DEFAULT: '#101d42',
          100: '#03060d',
          200: '#060c1a',
          300: '#0a1227',
          400: '#0d1735',
          500: '#101d42',
          600: '#213c87',
          700: '#315acc',
          800: '#7591de',
          900: '#bac8ee',
        },
        rich_black: {
          DEFAULT: '#00171F',
          100: '#030405',
          200: '#050809',
          300: '#080b0e',
          400: '#0a0f12',
          500: '#0d1317',
          600: '#002636',
          700: '#517790',
          800: '#86a5bb',
          900: '#c2d2dd',
        },
      },
      animation: {
        'slide-in-from-left': 'slideInFromLeft 0.5s ease-out forwards',
        'slide-in-from-right': 'slideInFromRight 0.5s ease-out forwards',
        'slide-in-from-bottom': 'slideInFromBottom 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        bounce: 'bounce 1s infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'text-shimmer': 'textShimmer 2s ease-in-out infinite',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'tilt-in': 'tiltIn 0.6s ease-out forwards',
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-10%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(10%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(3, 221, 255, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(3, 221, 255, 0.8)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        tiltIn: {
          '0%': { transform: 'perspective(1000px) rotateX(-10deg) translateY(20px)', opacity: '0' },
          '100%': { transform: 'perspective(1000px) rotateX(0) translateY(0)', opacity: '1' },
        },
      },
      fontFamily: {
        'source-code': ['"Source Code Pro"', 'monospace'],
        anton: ['Anton', 'sans-serif'],
      },
      perspective: {
        none: 'none',
        500: '500px',
        1000: '1000px',
        2000: '2000px',
      },
      transformStyle: {
        flat: 'flat',
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        visible: 'visible',
        hidden: 'hidden',
      },
      backgroundSize: {
        '200%': '200%',
        '300%': '300%',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.transform-style-flat': {
          'transform-style': 'flat',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.perspective-500': {
          perspective: '500px',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
      });
    },
  ],
};
