const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["'MontserratVariable'", ...defaultTheme.fontFamily.sans],
        sans: ["'Encode SansVariable'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        hyperred: "#c42217",
        hyperblue: "#2b46bd",
        hypertan: "#f2eddb",
      },
    },
  },
  plugins: [],
};
