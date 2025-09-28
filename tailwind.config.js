/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // all your app files
    "./components/ui/**/*.{js,ts,jsx,tsx}", // include shadcn/ui components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
