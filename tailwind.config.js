module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: {
      "main": "#E5E5E5",
      "black": "#000000",
      "white": "#ffffff",
      "purple": "#E5DBEE",
      "grey": "#8A8A8A",
      "form": '#F3F3F3',
      "activeGreen": '#00693D33'
    },
    extend: {
      colors: {
        transparent: "transparent",
        grey: "#8A8A8A",
        tableHeader: "#636380",
        purple: '#883BE9',
        lightGrey: "#41415D",
        active: '#00693D',
        expired: '#2E2E2E'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}