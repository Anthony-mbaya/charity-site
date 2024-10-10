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
        'bg1': 'url("public/images/bg2.avif")',
        'sustainability-icon': 'url("public/images/sustainability-icon.png")',
        'support-icon': 'url("public/images/support-icon.jpeg")',
        'orphan-icon': 'url("public/images/orphan-icon.jpeg")',
        'workshop-icon': 'url("public/images/workshop-icon.png")',
      }
    },
  },
  plugins: [],
}

