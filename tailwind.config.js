/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin", "sans"],
      },
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        lightGray: "hsl(0, 0%, 98%)",
        grayBlue: "hsl(236, 9%, 61%)",
        darkGrayBlue: "hsl(235, 19%, 35%)",
        darkBackground: "hsl(235, 21%, 11%)",
        darkListItem: "hsl(235, 24%, 19%)",
        checkBackground:
          "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
      },
      backgroundImage: {
        headerLight: "url('/src/assets/bg-desktop-light.jpg')",
        headerDark: "url('/src/assets/bg-desktop-dark.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
