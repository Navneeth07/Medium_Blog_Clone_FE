/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      "2px":"2px"
    },
    fontSize: {
      "header-value-size": "35px",
      "sub-header-value-size": "18px",
    },
    fontWeight: {
      bold: "700",
      "light-bold": "400",
    },
    extend: {
      colors: {
        "light-grey": "#eee",
      },
    },
  },
  plugins: [],
};
