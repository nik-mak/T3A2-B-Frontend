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
      },
      boxShadow: {
        'custom': '2px 2px 2px 2px rgba(0, 0, 0, .1)',
        'custom2': '0px 4px 4px rgba(0, 0, 0, .25)'
      },
    },
  },
  plugins: [],
};
