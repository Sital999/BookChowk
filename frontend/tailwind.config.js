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
        inputBox: "rgba(57, 98, 136, 0.78)",
      },
      fontFamily: {
        inputFont: ["IBM Plex Sans", "sans-serif"],
      },
      backgroundImage: {
        "home-screen": "url('/src/assets/home-screen.png')",
        "select-screen": "url('/src/assets/select-screen.png')",
        "box-bg-color":
          "linear-gradient(230.23deg, rgba(67, 74, 143, 0.61) 0.87%, rgba(4, 8, 41, 0.61) 58.69%)",
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
