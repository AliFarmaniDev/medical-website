/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('./src/assets/images/MobileBG.png')",
        'desctop-bg': "url('./src/assets/images/DesctopBG.png')"
      }
    },
  },
  plugins: [],
}