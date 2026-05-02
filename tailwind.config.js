/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#060c18',   // Deep space
          card: '#0a1628',      // Navy card
          elevated: '#0e1e38',  // Slightly raised
          panel: '#0b1a30',     // Panel surface
        },
        border: {
          DEFAULT: '#162540',
          light: '#1e3254',
          glow: 'rgba(0,229,255,0.4)',
        },
        accent: {
          cyan: '#00e5ff',
          'cyan-dim': '#0099bb',
          'cyan-muted': '#004455',
          amber: '#f59e0b',
          green: '#05ffa1',
          'green-dim': '#037a4d',
          purple: '#c084fc',
          red: '#ff4d6d',
        },
        text: {
          primary: '#c8e0f4',
          secondary: '#5f8fb4',
          muted: '#2e5070',
          bright: '#e8f4ff',
          code: '#00e5ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-xs': '0 0 8px rgba(0,229,255,0.2)',
        'glow-sm': '0 0 15px rgba(0,229,255,0.15), 0 0 30px rgba(0,229,255,0.05)',
        'glow': '0 0 20px rgba(0,229,255,0.2), 0 0 50px rgba(0,229,255,0.07)',
        'glow-lg': '0 0 30px rgba(0,229,255,0.35), 0 0 80px rgba(0,229,255,0.12)',
        'panel': '0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,229,255,0.04)',
        'card-hover': '0 0 0 1px rgba(0,229,255,0.35), 0 8px 40px rgba(0,0,0,0.5)',
        'terminal': '0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,255,0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'glitch': 'glitch 9s ease-in-out infinite',
        'blink': 'blink 1.1s step-end infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'scan': 'scan 6s linear infinite',
        'flicker': 'flicker 0.15s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glitch: {
          '0%, 82%, 100%': { textShadow: 'none', transform: 'translate(0,0)' },
          '84%': { textShadow: '-3px 0 #ff4d6d, 3px 0 #00e5ff', transform: 'translate(-2px,0)' },
          '86%': { textShadow: '3px 0 #ff4d6d, -3px 0 #00e5ff', transform: 'translate(2px,0)' },
          '88%': { textShadow: '-2px 0 #ff4d6d, 2px 0 #00e5ff', transform: 'translate(-1px,0)' },
          '90%': { textShadow: 'none', transform: 'translate(0,0)' },
        },
        blink: {
          '0%,49%': { opacity: '1' },
          '50%,100%': { opacity: '0' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 5px rgba(0,229,255,0.15), 0 0 10px rgba(0,229,255,0.05)' },
          '100%': { boxShadow: '0 0 20px rgba(0,229,255,0.4), 0 0 40px rgba(0,229,255,0.15)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(150vh)' },
        },
        flicker: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.92' },
        },
      },
    },
  },
  plugins: [],
}
