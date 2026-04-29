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
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Mapped to CSS tokens — components prefer var(--color-*) classes;
        // these utilities exist for tailwind compatibility.
        paper: {
          DEFAULT: '#F2EDE4',
          50:  '#FAF6EC',
          100: '#F2EDE4',
          200: '#E8E1D2',
          300: '#D8D0BD',
        },
        ink: {
          50:  '#DCD9D2',
          100: '#B5B2AB',
          300: '#6F6D67',
          500: '#3D3C38',
          700: '#1B1B19',
          900: '#0A0A0A',
          DEFAULT: '#0A0A0A',
        },
        tar: {
          deep: '#050505',
          DEFAULT: '#0A0A0A',
          elev: '#14140F',
          mist: '#232319',
        },
        vermilion: {
          tint: '#FFE4DD',
          300: '#FF8B70',
          500: '#FF3B1F',
          deep: '#C72308',
          glow: '#FF5C3F',
          DEFAULT: '#FF3B1F',
        },
        sage: {
          DEFAULT: '#3F4D2F',
          light:   '#7A8E6B',
        },
        ochre: {
          DEFAULT: '#D4A036',
          light:   '#E5B547',
        },

        // Legacy aliases mapped to new system so older usages don't break.
        bone: {
          DEFAULT: '#F2EDE4',
          50:  '#FAF6EC',
          100: '#F2EDE4',
          200: '#E8E1D2',
          300: '#D8D0BD',
        },
        anthracite: {
          DEFAULT:  '#0A0A0A',
          deep:     '#050505',
          elev:     '#14140F',
          mist:     '#232319',
        },
        cinnabar: {
          soft: '#FFE4DD',
          300: '#FF8B70',
          500: '#FF3B1F',
          deep: '#C72308',
          glow: '#FF5C3F',
        },
        primary: {
          50:  '#FFE4DD',
          100: '#FFD3C8',
          200: '#FFB6A1',
          300: '#FF8B70',
          400: '#FF5C3F',
          500: '#FF3B1F',
          600: '#E22A0F',
          700: '#C72308',
          800: '#971A06',
          900: '#651104',
        },
        mist: '#D8D0BD',
        plum: '#3F4D2F',
        lichen: '#7A8E6B',
        marigold: '#D4A036',
      },
      boxShadow: {
        editorial:      '4px 4px 0 #0A0A0A',
        'editorial-dark':'4px 4px 0 #F2EDE4',
        'inset-rule':   'inset 0 -1px 0 #0A0A0A',
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw + 1rem, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw + 1rem, 5rem)',{ lineHeight: '1.0',  letterSpacing: '-0.028em' }],
        'display-md': ['clamp(1.75rem, 2.5vw + 1rem, 3rem)',{ lineHeight: '1.05', letterSpacing: '-0.022em' }],
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'rise':    'editorial-rise 720ms cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to':   { transform: 'translateX(-50%)' },
        },
        'editorial-rise': {
          'from': { opacity: '0', transform: 'translateY(18px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
