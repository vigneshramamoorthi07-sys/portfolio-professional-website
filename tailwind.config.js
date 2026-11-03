/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#08080a',
          850: '#0d0d11',
          800: '#121217',
          700: '#1b1b23',
          600: '#262633',
        },
        brand: {
          red: '#ff3344',
          crimson: '#e50914',
          purple: '#8b5cf6',
          violet: '#6366f1',
          accent: '#ff4d5a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        signature: ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        widest: '.2em',
      }
    },
  },
  plugins: [],
}

