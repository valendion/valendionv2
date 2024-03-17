/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00dc82",
        black: "#0f172a",
        secondary: "#059f67",
        whiteYoung: "#e2e8f0",
      },
      listStyleType: {
        square: "square",
      },
      listStyleImage: {
        check: 'url("/icon/ic_check.png")',
        check2: 'url("/icon/ic_check2.svg")',
        triangle: 'url("/icon/ic_triangle.svg")',
      },
    },
  },
  plugins: [],
};
