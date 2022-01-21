const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["'Montserrat'", ...defaultTheme.fontFamily.sans],
        mono: ["'IBM Plex Mono'", ...defaultTheme.fontFamily.mono],
        serif: ["'PT Serif Caption'", ...defaultTheme.fontFamily.serif]
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
