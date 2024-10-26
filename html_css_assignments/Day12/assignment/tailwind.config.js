/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl:'1200px'
    },
    fontFamily: {
      inter:'var(--inter)',
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

