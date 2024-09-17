/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        html: {
          fontSize: "16px", // default
          "@media (max-width: 1536px)": { fontSize: "15px" }, // max 2xl
          "@media (max-width: 1280px)": { fontSize: "14px" }, // max xl
          "@media (max-width: 1024px)": { fontSize: "12px" }, // max lg
          "@media (max-width: 768px)": { fontSize: "10px" }, // max md
          "@media (max-width: 450px)": { fontSize: "9px" }, // phone screen
        },
        ".container": {
          width: "80%",
          margin: "0 auto",
        },
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      });
    },
  ],
  corePlugins: {
    textOpacity: false,
    ringOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    backdropOpacity: false,
    backgroundOpacity: false,
    placeholderOpacity: false,
  },
};
