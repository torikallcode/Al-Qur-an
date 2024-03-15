/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        utama: ["Lateef, serif"],
        kedua: ["Grenze, serif"],
        inter: ["Inter, sans-serif"],
      },
      colors: {
        hitam: "#222831",
        secondary: "#31363F",
        primary: "#488395",
        putih: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
