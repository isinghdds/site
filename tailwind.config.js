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
        themeBg: '#fcfcfc',
        themeMint: '#afe3e2',
        themeBlush: '#f2b7b7',
        mintDark: '#7bc4c2',
        blushDark: '#e38b8b',
        charcoal: '#1e293b'
      }
    },
  },
  plugins: [],
}
