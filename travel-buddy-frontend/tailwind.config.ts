/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // our colors theme
    colors: {
      // primary: "#F5D508",
      // secondary: "#FCBF34",
      primary: "#F7C532",
      secondary: "#f6ae25",
      white: "#ffffff",
      black: "#1c1c1c",
      gray: "#808080",
      lightGray: "#c5c5c5",
      extraLightGray: "#e7e6e6",
      darkGray: "#25313C",
      info: "#2F80ED",
      success: "#219653",
      error: "#EB5757",
    },

    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },

  plugins: [],
};
