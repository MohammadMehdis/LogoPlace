/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      gray: {
        100: "#717171",
        200: "#F1F1F2",
        line: "#D3D4D6",
      },
      black: {
        100: "#0C0C0C",
        200: "rgb(103,105,111,50%)",
        footer: "#202020",
      },
      purple: {
        100: "#6F4FF2",
        200: "#866AFA",
      },
      while: {
        100: "#FFFFFF",
        200: "#F1F1F2",
      },
    },
    fontFamily: {
      Inter: "Inter",
    },
    // extend: {},
  },
  plugins: [],
};
