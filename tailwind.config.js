/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-dark': '#121212',
        'apple-surface': '#1E1E20',
        'apple-text': '#F5F5F7',
        'apple-muted': '#A1A1A6',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
