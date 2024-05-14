/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { //adding custom colors
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "mypurple": "#8390FA",
        "myneongreen" : "#8390FA",
        "mybabyblue" : "#8390FA",
        "mygray" : "#8390FA",
        "myblueblue" : "#8390FA",

        
      },
      animation:{
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      
    },
    screens: {
      /* xs: "640px",
      sm: "768px",
      md: "768px",
      lg: "1034px" */


      sm: "477px",
      md: "877px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};