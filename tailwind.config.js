/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home_bg': 'url("src/assets/images/hands-up.jpg")',
      }
    },
  },
  plugins: [],
}

