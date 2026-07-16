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
        sans: ['Instrument Sans', 'sans-serif'],
        display: ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        cinnabar: {
          300: '#FF8B70',
          500: '#FF3B1F',
          deep: '#C72308',
          glow: '#FF5C3F',
          soft: '#FFE4DD',
        },
        anthracite: {
          DEFAULT: '#0A0A0A',
          elev: '#14140F',
          mist: '#232319',
        },
        bone: {
          DEFAULT: '#F2EDE4',
          50: '#FAF6EC',
        },
        mist: '#D8D0BD',
      },
      boxShadow: {
        editorial: '0 24px 48px -16px rgba(15, 23, 42, 0.28), 0 2px 8px rgba(15, 23, 42, 0.08)',
        'editorial-dark': '0 24px 48px -16px rgba(0, 0, 0, 0.65), 0 2px 8px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
