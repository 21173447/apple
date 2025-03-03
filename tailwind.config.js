/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        hero1: "url('src/Images/hero_iphoe-lgscreen.jpg')", 

      },
    },
  },
  plugins: [],
}