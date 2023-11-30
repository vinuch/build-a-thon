/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19447B",
        secondary: "#F9C21B"
      }
    },
  },
  plugins: [],
}

