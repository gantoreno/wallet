/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [{ pattern: /bg-/, variants: ["hover"] }],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui"],
    },
    extend: {},
    container: {
      screens: {
        DEFAULT: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "600px",
        "2xl": "600px",
      },
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        md: "20px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
