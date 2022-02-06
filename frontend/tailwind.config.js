const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
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
      },
    },
  },
  plugins: [],
};
