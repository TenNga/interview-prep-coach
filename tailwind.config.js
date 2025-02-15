/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // ✅ Include app directory
    "./components/**/*.{js,ts,jsx,tsx}",  // ✅ Include components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
