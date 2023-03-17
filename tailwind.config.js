const { fontFamily } = require('tailwindcss/defaultTheme');
let colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#475467",
      secondaryWhite: "#f7f9f9"
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '500px',
        md: '868px',
        mdl: '1000px',
        lg: '1200px',
        xl: '1400px',
        xxl: '1780px'
      },
      fontFamily: {
        primary: ['var(--inter-font)', ...fontFamily.sans],
      },
      minHeight: {
      },
      height: {
      },
      boxShadow: {
      },
      width: {
      },
      maxWidth: {
      },
    },
  },
  plugins: [],
}