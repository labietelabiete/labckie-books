const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whitePrimary: "#F5F5F5",
        greyPrimary: "#747474",
        redSecondary: "#DC136C",
        salmonSecondary: "#ED6A5A",
        blueSecondary: "#5CA4A9",
      },
      fontFamily: {
        // anton: ["Anton", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      borderRadius: {
        fully: "100000000000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
