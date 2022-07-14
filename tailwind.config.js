/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        'ghost-white': '#F9F9F9',
        'cyan-cobalt-blue': '#2555AD',
        'ue-red': '#B30001',
        'philippine-yellow ': '#FAC904',
        'checkout-blue': '#2B62C2'
=======
        "ghost-white": "#F9F9F9",
        "cyan-cobalt-blue": "#2555AD",
        "ue-red": "#B30001",
        "philippine-yellow ": "#FAC904",
>>>>>>> a0f893259cd609bd14827eaa152d56ed8ab5b58a
      },
      fontFamily: {
        oswald: ["Oswald"],
      },
      screens: {
        tall: { raw: "(max-height:700px)" },
      },
      boxShadow: {
<<<<<<< HEAD
        'custom': '2px 2px 2px 2px rgba(0, 0, 0, .1)',
        'custom2': '0px 4px 4px rgba(0, 0, 0, .25)'
=======
        card: "5px 10px 10px 5px rgba(0, 0, 0, 0.3)",
        custom: "2px 2px 2px 2px rgba(0, 0, 0, .1)",
>>>>>>> a0f893259cd609bd14827eaa152d56ed8ab5b58a
      },
    },
  },
  plugins: [],
};
