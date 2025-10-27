/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Umelecká farebná paleta - pestré farby na svetlom
        art: {
          coral: '#FF6B6B',
          peach: '#FFB347',
          yellow: '#FFD93D',
          mint: '#6BCB77',
          turquoise: '#4ECDC4',
          sky: '#45B7D1',
          lavender: '#A78BFA',
          pink: '#FF6FB5',
          rose: '#FF8BA7',
          purple: '#9D4EDD',
          violet: '#C77DFF',
          orange: '#FF9F1C',
        },
        cream: {
          50: '#FEFDFB',
          100: '#FDF9F3',
          200: '#FBF5EB',
          300: '#F9F1E3',
          400: '#F7EDDB',
          500: '#F5E9D3',
        }
      },
      fontFamily: {
        artistic: ['Playfair Display', 'serif'],
        modern: ['Poppins', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 16, 240, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 16, 240, 0.8), 0 0 60px rgba(176, 36, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-sunset': 'linear-gradient(135deg, #FF6B6B 0%, #FFB347 50%, #FFD93D 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #4ECDC4 0%, #45B7D1 50%, #A78BFA 100%)',
        'gradient-bloom': 'linear-gradient(135deg, #FF6FB5 0%, #C77DFF 50%, #9D4EDD 100%)',
        'gradient-rainbow': 'linear-gradient(90deg, #FF6B6B, #FFB347, #FFD93D, #6BCB77, #4ECDC4, #45B7D1, #A78BFA, #FF6FB5)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

