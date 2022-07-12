/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ghost-white": "#F9F9F9",
        "cyan-cobalt-blue": "#2555AD",
        "ue-red": "#B30001",
        "philippine-yellow ": "#FAC904",
      },
      fontFamily: {
        oswald: ["Oswald"],
      },
      screens: {
        tall: { raw: "(max-height:700px)" },
      },
      boxShadow: {
        card: "5px 10px 10px 5px rgba(0, 0, 0, 0.3)",
        custom: "2px 2px 2px 2px rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [],
};
