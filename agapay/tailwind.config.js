/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      primary: "#FC6A03", //orange
      accent:"#d53a00", // orange ng microsoft, mas maganda huhu
      primarydark:"#e35f03", //dark orange
      primaryhover:"#315E26", //hover darker green E55D00 subtle orange to
      secondary: "#065F46", //green 065F46
      tertiary: "#263A29", // dark green
      white: "#FFFFFF", // white
      black: "#000000", // black
      gray: "#e5e7eb ", //gray
      lightgray:"#E5E7EB", //light gray 
      subtlegray:"##f9fafb", // super light na gray, ideal for bg
      blue:"#93C5FD", //blue
      darkblue:"#3B82F6", //dark blue
      red:"#DC2626", //red

    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

