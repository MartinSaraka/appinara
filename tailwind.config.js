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
        // ── Monochrome editorial — single ink scale ────────────────
        // No chromatic accent. All "primary" / "indigo" / "rose" etc.
        // map to the ink scale so any legacy class auto-aligns.

        primary: {
          50:  '#F2F2F0',
          100: '#E2E2DE',
          200: '#C1C1BC',
          300: '#9A9A95',
          400: '#6E6E68',
          500: '#1A1A18',  // primary action — near-black
          600: '#101010',
          700: '#0A0A0A',
          800: '#050505',
          900: '#000000',
        },

        // Map all chromatic Tailwind defaults to ink scale
        slate: {
          50:  '#F7F5F0',
          100: '#EFEDE6',
          200: '#E2DFD7',
          300: '#CFCAC0',
          400: '#9C9890',
          500: '#6B6862',
          600: '#3F3D38',
          700: '#2A2825',
          800: '#1A1916',
          900: '#111110',
          950: '#0A0A09',
        },
        gray: {
          50:  '#F7F5F0',
          100: '#EFEDE6',
          200: '#E2DFD7',
          300: '#CFCAC0',
          400: '#9C9890',
          500: '#6B6862',
          600: '#3F3D38',
          700: '#2A2825',
          800: '#1A1916',
          900: '#111110',
          950: '#0A0A09',
        },
        zinc: {
          50:  '#F7F5F0',
          100: '#EFEDE6',
          200: '#E2DFD7',
          300: '#CFCAC0',
          400: '#9C9890',
          500: '#6B6862',
          600: '#3F3D38',
          700: '#2A2825',
          800: '#1A1916',
          900: '#111110',
          950: '#0A0A09',
        },

        // Old chromatic family aliases — all collapsed to ink
        indigo:  { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        fuchsia: { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        rose:    { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        red:     { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        violet:  { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        purple:  { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        pink:    { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        emerald: { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        green:   { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        teal:    { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        amber:   { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        yellow:  { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        orange:  { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        sky:     { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        blue:    { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },
        cyan:    { 50:'#F2F2F0',100:'#E2E2DE',200:'#C1C1BC',300:'#9A9A95',400:'#6E6E68',500:'#1A1A18',600:'#101010',700:'#0A0A0A',800:'#050505',900:'#000000',950:'#000000' },

        // Cream / off-white paper canvas
        bone: {
          DEFAULT: '#F5F2ED',
          50:  '#FAF8F4',
          100: '#F5F2ED',
          200: '#EDEAE3',
          300: '#E2DED5',
        },
        // Deep ink type
        ink: {
          DEFAULT: '#0F0F0E',
          100: '#D6D4CF',
          300: '#9C9890',
          500: '#6B6862',
          700: '#3F3D38',
          900: '#0F0F0E',
        },
        // Single accent — warm champagne / sienna for KPI moments only
        accent: {
          DEFAULT: '#B8946A',
          50:  '#FBF6EE',
          100: '#F2E5CE',
          200: '#E5CCA0',
          300: '#D2AF77',
          400: '#B8946A',
          500: '#9C7A4D',
          600: '#7E613A',
          700: '#5E482A',
          800: '#3F301B',
          900: '#26200E',
        },

        // Signature honey-yellow — geometric lines, highlight underlines, chips
        sun: {
          DEFAULT: '#F4D35E',
          50:  '#FFF8DC',
          100: '#FCEFB4',
          200: '#FAE694',
          300: '#F8E08E',
          400: '#F6D976',
          500: '#F4D35E',
          600: '#E5BE45',
          700: '#D9B23B',
          800: '#A88826',
          900: '#8C6F1E',
        },

        // Aliases retained so old references don't shatter — all neutral
        cinnabar: {
          DEFAULT: '#0F0F0E',
          deep:    '#000000',
          soft:    '#F5F2ED',
          glow:    '#FAF8F4',
        },
        plum:     { DEFAULT: '#1A1916', light: '#9C9890' },
        lichen:   { DEFAULT: '#3F3D38', light: '#9C9890' },
        marigold: { DEFAULT: '#3F3D38', light: '#9C9890' },
        mist: {
          DEFAULT: '#E2DED5',
          dark:    '#1A1916',
        },
        anthracite: {
          DEFAULT: '#0F0F0E',
          elev:    '#1A1916',
          deep:    '#0A0A09',
          mist:    '#2A2825',
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
        'fade-in':        'fade-in 700ms ease-out both',
        'rise-soft':      'rise-soft 800ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'hairline-grow':  'hairline-grow 600ms cubic-bezier(0.65, 0, 0.35, 1) both',
        'marquee-x':      'marquee-x 60s linear infinite',
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
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'rise-soft': {
          '0%':   { opacity: '0', transform: 'translateY(12px) scale(0.985)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'hairline-grow': {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'marquee-x': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        // soft editorial shadow only
        'soft':       '0 1px 0 rgba(255,255,255,0.6) inset, 0 24px 60px -28px rgba(15,15,14,0.18), 0 6px 18px -8px rgba(15,15,14,0.08)',
        'soft-deep':  '0 1px 0 rgba(255,255,255,0.6) inset, 0 40px 90px -32px rgba(15,15,14,0.22), 0 12px 30px -12px rgba(15,15,14,0.12)',
      },
    },
  },
  plugins: [],
}
