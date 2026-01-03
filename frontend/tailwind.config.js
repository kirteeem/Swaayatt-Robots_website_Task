/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rethink: ["Rethink Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      /* 🔥 BRAND FEATURED ON ANIMATION */
      animation: {
        "marquee-left": "marquee-left 28s linear infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
