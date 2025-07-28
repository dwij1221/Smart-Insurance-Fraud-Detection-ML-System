/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: '#A7C7E7',
        pastelPink: '#F8C8DC',
        pastelGreen: '#B0EACD',
        pastelYellow: '#FFF6BF',
        pastelLavender: '#E6E6FA',
        darkText: '#2B2B2B',
      },
    },
  },
  plugins: [],
}
