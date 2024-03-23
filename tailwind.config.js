/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: "Satoshi Variable",
      },
      screens: {
        xl: "1420px",
      },
    },
  },
  plugins: [],
};
