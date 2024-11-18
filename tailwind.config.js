/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: "1rem",
        screens: {
          DEFAULT: "1170px",
        },
      },
      animation: {
        bounceCustom: "bounce 2s infinite ease-in-out",
      },
      keyframes: {
        bounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-20px)" },
          "60%": { transform: "translateY(-10px)" },
        },
      },
      fontFamily: {
        sans: ["Lato", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        Helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        customGray: "#3e3e3e",
        lightblue: "#5ad4fb",
        offWhite: "#f5f5f5",
        darkGray: "#797979",
        Gray: "#4a4a4a",
        gray878: "#878787",
        brightOrange: "#ff7e00",
        neutralGray: "#808080",
        emeraldGreen: "#19d576",
        skyBlue: "#00bff3",
        redAccent: "#ef3139",
      },
    },
  },
  plugins: [],
};
