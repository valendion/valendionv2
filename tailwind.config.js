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
        whiteYoung: "#e2e8f0",
      },
    },
  },
  plugins: [],
};
