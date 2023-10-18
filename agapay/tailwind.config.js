/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      primary: "#FC6A03", //orange
      accent:"#fef4ea", // orange ng microsoft, mas maganda huhu
      primarydark:"#e35f03", //dark orange
      primaryhover:"#315E26", //hover darker green E55D00 subtle orange to
      secondary: "#065F46", //green 065F46
      tertiary: "#263A29", // dark green
      white: "#FFFFFF", // white
      variantwhite:"#f9f9f9",//white na may pagkablue slight
      graybg:'#f3f4f6',
      bordergray:'#e5e7eb',
      black: "#000000", // black
      gray: "#455a64", //gray
      lightgray:"#90a4ae", //light gray 
      subtlegray:"#f9fafb", // super light na gray, ideal for bg
      blue:"#93C5FD", //blue
      darkblue:"#3B82F6", //dark blue
      red:"#DC2626", //red
      lightblue:'#f6f9fc',
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

