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

      keyframes: {
        autoScroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

        run: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideLeft: "slideLeft 1s ease-out forwards",
        slideLeft: "slideLeft 10s linear infinite",
        run: "run 0.7s linear infinite",
        "auto-scroll": "autoScroll 5s linear",
      },
      fontFamily: {
        english: ["Outfit", "sans-serif"],
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
        customBorder: "rgba(77, 108, 132, 0.69)",
        oceanBlue: "#477294",
        skyBlue2: "#07befa",
        goldenYellow: "#ffcd38",
        rosePink: "#f21860",
        darkBlue: "#0077c0",
        PlumPurple: "#9c5c8f",
        LeafGreen: "#70be45",
        vividaqua: "#1ebdd3",
        DarkRed: "#cc3f45",
        DeepBlue: "#2a5679",
        OliveGreen: "#67b054",
        deepRed: "#d41f30",
        SlateBlue: "#555c90",
      },
    },
  },
  plugins: [],
};
