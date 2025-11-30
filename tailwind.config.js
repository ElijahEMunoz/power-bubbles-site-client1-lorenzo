/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pb-blue-dark": "#0E4A78",
        "pb-blue": "#1E80C9",
        "pb-blue-light": "#4BB3FD",
        "pb-blue-accent": "#4FC6E0",
        "pb-gray": "#D9D9D9",
        "pb-text": "#4A4A4A",
      },
    },
  },
  plugins: [],
};
