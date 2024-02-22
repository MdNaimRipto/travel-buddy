/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // our colors theme
    colors: {
      primary: "#F5D508",
      secondary: "#FCBF34",
      white: "#ffffff",
      black: "#1c1c1c",
      gray: "#808080",
      lightGray: "#e2e2e2",
      info: "#2F80ED",
      success: "#219653",
      error: "#EB5757",
    },

    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        // xxl: "1290px",
      },
    },
  },

  plugins: [],
};
