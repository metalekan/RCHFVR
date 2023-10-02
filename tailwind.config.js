/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'header': ['Handjet', 'cursive'],
      'geologica': ['Geologica', 'sans-serif'],
      'roboto': ['Roboto Mono', 'monospace']
    },
    colors: {
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      purple: "#7b52b9",
      cyan: "#14ffec",
      red: "#d6436e",
      green: "#25da72",
      deepurple: "#130e25",
      offWhite: "#e1e1e1"
    },
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      base: "16px"
    }
  },
  plugins: [],
}