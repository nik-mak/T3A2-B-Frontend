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
        'checkout-blue': '#2B62C2'
      },
      fontFamily: {
        oswald: ["Oswald"],
      },
      screens: {
        tall: { raw: "(max-height:700px)" },
      },
      boxShadow: {
        'custom1': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'custom2': "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      },
    },
  },
  plugins: [],
};
