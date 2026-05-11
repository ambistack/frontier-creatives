/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#244BFF',
          cream: '#e9e5df',
          stone: '#ded9d2',
        },
      },
    },
  },
  plugins: [],
};