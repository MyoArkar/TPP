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
    container: {
      center:true
    },
    fontFamily: {
      roboto: 'var(--roboto)',
      raleway: 'var(--raleway)',
      poppins: 'var(--poppings)'
    },
    colors: {
      'black': 'var(--black)',
      'white': 'var(--white)',
      'white5': 'var(--white5)',
      'blue': 'var(--blue)',
      'lightblue': 'var(--light-blue)',
      'paleblue':'var(--pale-blue)',
      'green': 'var(--green)'
    },  
    extend: {
      backgroundImage: {
        'custom-image': "url('../img/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}

