/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"General Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Cinnabar — single sharp accent (replaces indigo)
        primary: {
          50:  '#FDF2EE',
          100: '#FCE0D6',
          200: '#F8BBA8',
          300: '#F2937A',
          400: '#E96849',
          500: '#DC2F1A',
          600: '#B5240F',
          700: '#8E1B0B',
          800: '#6B1408',
          900: '#4A0D05',
        },
        // ── Default scale OVERRIDES ─────────────────────────────────
        // Remap Tailwind's neutral + chromatic scales onto the
        // bone / anthracite / cinnabar / plum / lichen / marigold
        // palette so any unmigrated component class auto-aligns.

        // Warm neutrals (replaces both gray & slate)
        slate: {
          50:  '#FBF8F2',
          100: '#F4EFE6',
          200: '#EAE3D5',
          300: '#E0DACB',
          400: '#9CA0AB',
          500: '#6B7180',
          600: '#3A3F4A',
          700: '#2A2D36',
          800: '#1C1E25',
          900: '#131419',
          950: '#0B0C10',
        },
        gray: {
          50:  '#FBF8F2',
          100: '#F4EFE6',
          200: '#EAE3D5',
          300: '#E0DACB',
          400: '#9CA0AB',
          500: '#6B7180',
          600: '#3A3F4A',
          700: '#2A2D36',
          800: '#1C1E25',
          900: '#131419',
          950: '#0B0C10',
        },

        // Cinnabar family — replaces indigo / violet / fuchsia / rose / red
        indigo:  { 50:'#FDF2EE',100:'#FCE0D6',200:'#F8BBA8',300:'#F2937A',400:'#E96849',500:'#DC2F1A',600:'#B5240F',700:'#8E1B0B',800:'#6B1408',900:'#4A0D05',950:'#2A0703' },
        fuchsia: { 50:'#FDF2EE',100:'#FCE0D6',200:'#F8BBA8',300:'#F2937A',400:'#E96849',500:'#DC2F1A',600:'#B5240F',700:'#8E1B0B',800:'#6B1408',900:'#4A0D05',950:'#2A0703' },
        rose:    { 50:'#FDF2EE',100:'#FCE0D6',200:'#F8BBA8',300:'#F2937A',400:'#E96849',500:'#DC2F1A',600:'#B5240F',700:'#8E1B0B',800:'#6B1408',900:'#4A0D05',950:'#2A0703' },
        red:     { 50:'#FDF2EE',100:'#FCE0D6',200:'#F8BBA8',300:'#F2937A',400:'#E96849',500:'#DC2F1A',600:'#B5240F',700:'#8E1B0B',800:'#6B1408',900:'#4A0D05',950:'#2A0703' },

        // Plum family — replaces violet, purple, pink (deeper blooming)
        violet:  { 50:'#F8EFF2',100:'#EFD8E0',200:'#E0B0C0',300:'#CD8298',400:'#B45A75',500:'#8C3953',600:'#6F2A41',700:'#591F33',800:'#4A1F2E',900:'#2C0F1A',950:'#1B080F' },
        purple:  { 50:'#F8EFF2',100:'#EFD8E0',200:'#E0B0C0',300:'#CD8298',400:'#B45A75',500:'#8C3953',600:'#6F2A41',700:'#591F33',800:'#4A1F2E',900:'#2C0F1A',950:'#1B080F' },
        pink:    { 50:'#FBEEF2',100:'#F5D5DF',200:'#EAACBE',300:'#DC819B',400:'#C9607C',500:'#A8425C',600:'#882F47',700:'#6E2538',800:'#561C2C',900:'#3A1220',950:'#220A13' },

        // Lichen family — replaces emerald / green / teal (natural success)
        emerald: { 50:'#F1F4EF',100:'#DFE6DB',200:'#C2CFBC',300:'#A8BFA0',400:'#849978',500:'#6E8266',600:'#566850',700:'#445040',800:'#363F33',900:'#252B23',950:'#141813' },
        green:   { 50:'#F1F4EF',100:'#DFE6DB',200:'#C2CFBC',300:'#A8BFA0',400:'#849978',500:'#6E8266',600:'#566850',700:'#445040',800:'#363F33',900:'#252B23',950:'#141813' },
        teal:    { 50:'#F1F4EF',100:'#DFE6DB',200:'#C2CFBC',300:'#A8BFA0',400:'#849978',500:'#6E8266',600:'#566850',700:'#445040',800:'#363F33',900:'#252B23',950:'#141813' },

        // Marigold family — replaces amber / yellow / orange (warm signal)
        amber:   { 50:'#FBF1DC',100:'#F6E2B5',200:'#F1CB7A',300:'#EAB344',400:'#D89422',500:'#B5781A',600:'#8E5E14',700:'#6E490F',800:'#54380C',900:'#3A2608',950:'#221604' },
        yellow:  { 50:'#FBF1DC',100:'#F6E2B5',200:'#F1CB7A',300:'#EAB344',400:'#D89422',500:'#B5781A',600:'#8E5E14',700:'#6E490F',800:'#54380C',900:'#3A2608',950:'#221604' },
        orange:  { 50:'#FBF1DC',100:'#F6E2B5',200:'#F1CB7A',300:'#EAB344',400:'#D89422',500:'#B5781A',600:'#8E5E14',700:'#6E490F',800:'#54380C',900:'#3A2608',950:'#221604' },

        // Cool blues — softened to slate-blue, kept distinct from cinnabar
        sky:     { 50:'#EEF2F4',100:'#D7DFE5',200:'#B3C2CD',300:'#8AA1B0',400:'#647F92',500:'#475F73',600:'#374C5C',700:'#2B3D49',800:'#212F39',900:'#161F26',950:'#0C1217' },
        blue:    { 50:'#EEF2F4',100:'#D7DFE5',200:'#B3C2CD',300:'#8AA1B0',400:'#647F92',500:'#475F73',600:'#374C5C',700:'#2B3D49',800:'#212F39',900:'#161F26',950:'#0C1217' },
        cyan:    { 50:'#EEF2F4',100:'#D7DFE5',200:'#B3C2CD',300:'#8AA1B0',400:'#647F92',500:'#475F73',600:'#374C5C',700:'#2B3D49',800:'#212F39',900:'#161F26',950:'#0C1217' },
        // Warm paper
        bone: {
          DEFAULT: '#F4EFE6',
          50:  '#FBF8F2',
          100: '#F4EFE6',
          200: '#EAE3D5',
          300: '#E0DACB',
        },
        // Deep ink type
        ink: {
          DEFAULT: '#14171C',
          100: '#C8CBD2',
          300: '#9CA0AB',
          500: '#6B7180',
          700: '#3A3F4A',
          900: '#14171C',
        },
        cinnabar: {
          DEFAULT: '#DC2F1A',
          deep:    '#B5240F',
          soft:    '#FDF2EE',
          glow:    '#FF5037', // dark-mode bright variant
        },
        plum: {
          DEFAULT: '#4A1F2E',
          light:   '#C97294',
        },
        lichen: {
          DEFAULT: '#6E8266',
          light:   '#A8BFA0',
        },
        marigold: {
          DEFAULT: '#D89422',
          light:   '#F6CC6F',
        },
        mist: {
          DEFAULT: '#E0DACB',
          dark:    '#2A2D36',
        },
        anthracite: {
          DEFAULT: '#131419',
          elev:    '#1C1E25',
          deep:    '#0B0C10',
          mist:    '#2A2D36',
        },
      },
      fontSize: {
        'display-sm':  ['clamp(1.85rem, 1.4rem + 1.6vw, 2.65rem)',  { lineHeight: '1.06', letterSpacing: '-0.012em' }],
        'display-md':  ['clamp(2.4rem,  1.8rem + 2.3vw, 3.75rem)',  { lineHeight: '1.04', letterSpacing: '-0.014em' }],
        'display-lg':  ['clamp(3rem,    2rem + 3.2vw, 5.25rem)',    { lineHeight: '1.0',  letterSpacing: '-0.016em' }],
        'display-xl':  ['clamp(3.5rem,  2.2rem + 4.6vw, 6.5rem)',   { lineHeight: '0.98', letterSpacing: '-0.018em' }],
        'display-2xl': ['clamp(4rem,    2.4rem + 5.8vw, 8rem)',     { lineHeight: '0.94', letterSpacing: '-0.02em'  }],
      },
      letterSpacing: {
        'mono-wide':   '0.16em',
        'mono-xwide':  '0.24em',
      },
      animation: {
        'wipe-x':         'wipe-x 700ms cubic-bezier(0.65, 0, 0.35, 1) both',
        'reveal-up':      'reveal-up 900ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'reveal-clip':    'reveal-clip 900ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'swoop-in':       'swoop-in 1100ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in':        'fade-in 700ms ease-out both',
        'rise-soft':      'rise-soft 800ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'caret-blink':    'caret-blink 1.05s step-end infinite',
        'hairline-grow':  'hairline-grow 600ms cubic-bezier(0.65, 0, 0.35, 1) both',
        'marquee-x':      'marquee-x 60s linear infinite',
        'marquee-x-rev':  'marquee-x-rev 60s linear infinite',
        'glow':           'glow 3s ease-in-out infinite alternate',
        'pulse-slow':     'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'wipe-x': {
          '0%':   { 'clip-path': 'inset(0 100% 0 0)' },
          '100%': { 'clip-path': 'inset(0 0 0 0)'    },
        },
        'reveal-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-clip': {
          '0%':   { 'clip-path': 'inset(105% 0 0 0)', transform: 'translateY(8%)' },
          '100%': { 'clip-path': 'inset(-5% 0 -5% 0)', transform: 'translateY(0)' },
        },
        'swoop-in': {
          '0%':   { opacity: '0', transform: 'translateX(-28px) rotate(-2deg)', filter: 'blur(10px)' },
          '60%':  { opacity: '1', filter: 'blur(0)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotate(0)',          filter: 'blur(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'rise-soft': {
          '0%':   { opacity: '0', transform: 'translateY(12px) scale(0.985)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'caret-blink': {
          '0%, 49%':   { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'hairline-grow': {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'marquee-x': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-x-rev': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'glow': {
          '0%':   { opacity: '0.4' },
          '100%': { opacity: '0.7' },
        },
      },
      boxShadow: {
        // Letterpress: pressed-into-paper effect
        'letterpress':       '0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 0 rgba(20,23,28,0.04) inset, 0 14px 40px -18px rgba(20,23,28,0.16), 0 3px 10px -4px rgba(20,23,28,0.08)',
        'letterpress-deep':  '0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 0 rgba(20,23,28,0.05) inset, 0 30px 70px -22px rgba(74,31,46,0.22), 0 8px 24px -10px rgba(20,23,28,0.16)',
        // Editorial cinnabar shadow (was indigo)
        'editorial':         '0 30px 80px -22px rgba(220,47,26,0.22), 0 10px 30px -12px rgba(20,23,28,0.14)',
        'editorial-dark':    '0 30px 80px -20px rgba(255,80,55,0.30), 0 10px 30px -10px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        // halftone dots — for riso/screenprint atmosphere
        'halftone':       'radial-gradient(circle at 1px 1px, rgba(20,23,28,0.18) 1px, transparent 1.6px)',
        'halftone-dark':  'radial-gradient(circle at 1px 1px, rgba(244,239,230,0.10) 1px, transparent 1.6px)',
      },
      backgroundSize: {
        'halftone':  '14px 14px',
        'halftone-lg': '22px 22px',
      },
    },
  },
  plugins: [],
}
