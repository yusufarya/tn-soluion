/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'text-xs': '1px 1px 2px rgba(0, 0, 0, 0.25)',
        'text-sm': '2px 2px 4px rgba(0, 0, 0, 0.25)',
        'text-md': '3px 3px 6px rgba(0, 0, 0, 0.3)',
        'text-lg': '4px 4px 8px rgba(0, 0, 0, 0.35)',
        'text-xl': '5px 5px 10px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
});
