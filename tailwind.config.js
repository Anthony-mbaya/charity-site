/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': 'url("/images/logo.jpg")',
        'home_bg': 'url("src/assets/images/hands-up.jpg")',
        'bg1': 'url("/images/real-1.jpg")',
        'sustainability-icon': 'url("/images/sustainability-icon.png")',
        'support-icon': 'url("/images/support-icon.jpeg")',
        'orphan-icon': 'url("/images/orphan-icon.jpeg")',
        'workshop-icon': 'url("/images/workshop-icon.png")',
        'real-2-advert': 'url("/images/real-2-advert.jpg")',
        'real-5-front-view': 'url("/images/real-5-front-view.jpg")',
      }
    },
  },
  plugins: [],
}

