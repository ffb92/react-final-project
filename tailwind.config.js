/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   screens: {
      mobile: "768px",
      tablet: "1200px",
      desktop: "1500px"
    },
  },
  plugins: [],
}