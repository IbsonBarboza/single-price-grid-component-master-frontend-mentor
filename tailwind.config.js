/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          Cyan: 'hsl(179, 62%, 43%)',
          CyanLight: '#4abebd',
          BrightYellow: 'hsl(71, 73%, 54%)',
          LightGray: 'hsl(204, 43%, 93%)',
          GrayishBlue: 'hsl(218, 22%, 67%)',
      },
    },
  },
  plugins: [],
}