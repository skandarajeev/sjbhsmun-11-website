/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',  "./node_modules/flowbite/**/*.js"], 
  theme: {
    extend: {

      fontFamily: {
        poppins: "'Poppins', serif",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  colors: {
    'GradientOne' : '#000000',
    'GradientTwo' : '#3a3838',
  }
};
