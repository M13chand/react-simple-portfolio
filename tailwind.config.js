/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
  
    extend: {
        gridTemplateColumns: {
          'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        
        },
      
    },
    screens: {
      '3xl': { 'max': '1950px' },
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
     
    },
  },
  plugins: [],
}

