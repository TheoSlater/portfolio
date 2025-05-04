/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        foreground: "#e5e5e5",
        accent: "#1e1e1e",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
