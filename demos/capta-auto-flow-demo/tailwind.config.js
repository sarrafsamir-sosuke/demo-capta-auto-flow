/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: "#f6f7f7",
          100: "#e8eaeb",
          200: "#cfd4d6",
          300: "#aab3b8",
          400: "#7d878d",
          500: "#5d666c",
          600: "#464d52",
          700: "#34393d",
          800: "#24282b",
          900: "#171a1d",
          950: "#0c0e10",
        },
        steel: "#d5d9dc",
        signal: "#c9953a",
        signalDark: "#7b5a1f",
      },
      boxShadow: {
        panel: "0 1px 2px rgba(12, 14, 16, 0.05), 0 10px 30px rgba(12, 14, 16, 0.04)",
        lift: "0 18px 50px rgba(12, 14, 16, 0.12)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
