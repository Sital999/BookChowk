/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        bgColor: "#111422",
        textColor: "#B2DAD9CC",
        circleColor: "#293465",
        buyButton: "#649AB0",
      },
      fontFamily: {
        inputFont: ["IBM Plex Sans", "sans-serif"],
      },
      backgroundImage: {
        "home-screen": "url('/src/assets/home-screen.png')",
        "select-screen": "url('/src/assets/select-screen.png')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
