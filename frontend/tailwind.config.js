/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'eldoria': {
          light: '#3b82f6',
          DEFAULT: '#1d4ed8',
          dark: '#1e40af',
        }
      }
    },
  },
  plugins: [],
}
