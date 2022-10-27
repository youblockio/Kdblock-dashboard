/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { inter: "Inter" } },
    colors: {
      black: "#000",
      white: "#fff",
      green: "#17a40b",
      gray: {
        "100": "#7ca0a9",
        "200": "#878787",
        "300": "#24414a",
        "400": "rgba(255, 255, 255, 0.5)",
        "500": "rgba(255, 255, 255, 0.54)",
        "600": "rgba(255, 255, 255, 0.58)",
      },
      yellow: "#acdf46",
    },
    fontSize: {
      "8xs": "7px",
      "7xs": "10px",
      "6xs": "12px",
      "5xs": "14px",
      "4xs": "15px",
      "3xs": "16px",
      "2xs": "18px",
      xs: "20px",
      sm: "22px",
      base: "24px",
      lg: "42px",
      xl: "48px",
    },
  },
  corePlugins: { preflight: false },
};
