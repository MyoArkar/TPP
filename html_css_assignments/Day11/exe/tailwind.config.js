/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl:'1140px'
    },
    fontFamily: {
      dancing: 'var(--dancing)',
      lato: 'var(--lato)',
      poppins: 'var(--poppings)'
    },
    container: {
      center: true,
    },
    extend: {
    },
  },
  plugins: [],
}

