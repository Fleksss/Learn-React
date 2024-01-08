/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      backgroundImage: {
        'japanese': "url('./src/assets/japanese.jpeg')"
      }
    },
  },
  plugins: [],
}