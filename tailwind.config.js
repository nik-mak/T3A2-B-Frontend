/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'ghost-white': '#F9F9F9',
        'cyan-cobalt-blue': '#2555AD',
        'ue-red': '#B30001',
        'philippine-yellow ': '#FAC904',
      },
      fontFamily: {
        'oswald': ['Oswald'],   
      },
      screens: {
        'tall': { 'raw': '(max-height:700px)'}
      }
    },
  },
  plugins: [],
};
