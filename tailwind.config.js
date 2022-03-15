const defaultTheme = require("tailwindcss/defaultTheme");
const withAnimations = require("animated-tailwindcss");

module.exports = withAnimations({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'MontserratVariable'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        hyperred: "#c42217",
        hyperblue: "#2b46bd",
        hypertan: "#f2eddb",
        neutral: {
          100: "#fafafa",
          200: "#f6f6f6",
          300: "#f1f1f1",
          400: "#ededed",
          500: "#e8e8e8",
          600: "#bababa",
          700: "#8b8b8b",
          800: "#5d5d5d",
          900: "#2e2e2e",
        },
        red: {
          100: "#fcdddd",
          200: "#f9bbbb",
          300: "#f69898",
          400: "#f37676",
          500: "#f05454",
          600: "#c04343",
          700: "#903232",
          800: "#602222",
          900: "#301111",
        },
        indigo: {
          100: "#d6dadf",
          200: "#acb5bf",
          300: "#83919e",
          400: "#596c7e",
          500: "#30475e",
          600: "#26394b",
          700: "#1d2b38",
          800: "#131c26",
          900: "#0a0e13",
        },
        black: {
          100: "#d3d4d6",
          200: "#a7a9ad",
          300: "#7a7e83",
          400: "#4e535a",
          500: "#222831",
          600: "#1b2027",
          700: "#14181d",
          800: "#0e1014",
          900: "#07080a",
        },
      },
    },
  },
  plugins: [],
});
