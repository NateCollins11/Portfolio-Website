/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          200: "#11DF7C",
          300: "#5DF4BD",
          500: "#51FBB8",
        },
        blue: {
          100: "#002E1B",
          300: "#05613C",
          400: "#4BFFB6",
          500: "#28D890",
          6: "#4BffB6",
          7: "#4C9FEC",
          8: "#425894",
        },
        charcoal: {
          100: "#1D2227",
          200: "#010101",
          300: "#1F242A",
          400: "#303030",
          500: "#20262B",
          600: "#2C353D",
          800: "#808081",
          900: "#020202", // give this a more appropriate number/location
        },
        offWhite: {
          100: "#363B3F",
          200: "#DBDBDB",
          300: "#ACACAC",
        },
        fiord: {
          200: "#464873",
        },
        gold: {
          100: "#2B2111",
          300: "#594214",
          8: "#F3CC62",
        },
        marigold: {
          200: "#B24949",
          400: "#D89614",
          500: "#F9B54E",
          700: "#FFB64B",
        },
        blush: {
          500: "#FF90FF",
        },
        violet: {
          200: "#4EBBC2",
          300: "#5F80B3",
          400: "#696CB7",
          500: "#854ECA",
          800: "#3621B2",
        },
        sky: {
          300: "#90DDE4",
        },
        red: {
          100: "#2A1215",
          200: "#E84749",
          500: "#D32029",
        },
        green: {
          5: "#28D890",
          6: "#4BFFB6",
          7: "#68FFC2"
        },
        purple: {
          1: "#E1DBF2",
          2: "#C1B8DC",
          3: "#a39abd",
          4: "#948AAF",
          5: "",
          6: "",
          7: "",
          8: "",
          9: "",
        },
        purplegray: {
          1: '#2c2a2f',
          2: '#3e3c42',
        },
        gray: {
          1: "#141414",
          2: "#1D1D1D",
          3: "#262626",
          4: "#303030",
          5: "#434343",
          6: "#5A5A5A",
          7: "#7D7D7D",
          8: "#ACACAC",
          9: "#DBDBDB",
          10: "#FFFFFF",
          11: "#13171B",
        },
        pink: {
          1: "#FC92FE",
          5: "#FF90FF",
          8: "#DD4877"
        },
        yellow: {
          7: "#FFC063"
        },
        red: {
          5: "#A61D24",
          6: "#FF0000",
          7: "#E84749",
          8: "#F37370",
        },
      },
      fontFamily: {
        lato: "'Lato', sans-serif"
      },
    }
  },
  plugins: [],
}