/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
      colors: {
        aura: {
          50: '#faf8f5',
          100: '#f4efe8',
          200: '#e8ded2',
          300: '#d7c5b4',
          400: '#c2a591',
          500: '#ab8872',
          600: '#956f5a',
          700: '#7a5746',
          800: '#64473b',
          900: '#533c33',
          950: '#2c1e19',
        }
      }
    },
  },
  plugins: [],
}
