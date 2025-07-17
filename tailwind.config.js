/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sourcecode: ['"Source Code Pro"', 'monospace'],
      },
    },
  },
  plugins: [],
};
