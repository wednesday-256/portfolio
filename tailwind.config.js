/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      'serif': ['Ribeye', 'serif']
    },
    colors: {
      Hcolor: "#FCD7AD",
      white: "#ffff"
    }
  },
  plugins: [],
};
