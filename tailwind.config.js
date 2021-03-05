module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '70vh': '70vh',
        '10vh': '10vh',
        '10vw': '10vw',
        '40vh': '40vh',
        '80vh': '80vh',
        '30vh': '30vh',
        '5vh': '5vh',
        '30vw': '30vw',
        '70vw': '70vw',
        '50vw': '50vw',
      },
      inset: {
        '30vh': '30vh',
        '10vh': '10vh',
        '10vw': '10vw',
        '5vh': '5vh',
      },
      maxWidth: {
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
     },
     animation: {
       fadeIn: 'fadeIn 0.1s linear',
       appear: 'fadeIn 0.2s ease-in-out',
     },
     keyframes: {
       fadeIn: {
         '0%': { opacity: '0' },
         '100%': { opacity: '1' },
       },
       appear: {
         '0%': { transform: 'translateX(100px) translateY(100px) scaleX(0) scaleY(0)' },
         '100%': { transform: 'translateX(0px) translateY(0px) scaleX(1) scaleY(1)' },
       }
     },
    },
  },
  variants: {
    extend: {
      margin: ['odd'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
