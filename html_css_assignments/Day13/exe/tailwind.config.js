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
    colors: {
      'black': 'var(--black)',
      'white': 'var(--white)',
      'orange': 'var(--orange)',
      'gray': 'var(--gray)',
      'whitesmoke': 'var(--whitesmoke)',
      'blue': 'var(--blue)',
      'yellow': 'var(--yellow)'
    },  
    extend: {
      height: {
        'custom': 'calc(100vh - 72px)'
      }
    },
  },
  plugins: [],
}

