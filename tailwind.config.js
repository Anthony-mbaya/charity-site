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
        'bg1': 'url("/images/bg2.avif")',
        'sustainability-icon': 'url("/images/sustainability-icon.png")',
        'support-icon': 'url("/images/support-icon.jpeg")',
        'orphan-icon': 'url("/images/orphan-icon.jpeg")',
        'workshop-icon': 'url("/images/workshop-icon.png")',
      }
    },
  },
  plugins: [],
}

