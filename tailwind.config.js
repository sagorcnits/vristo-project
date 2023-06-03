/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}", "*.html" ],
  theme: {
    screens: {
     
      // => @media (min-width: 640px) { ... }

      'md': '1000px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {

colors:{
'input':"#E5E7EB",
'text-hover':'#4361EE',
'text-color':'#6b7280'
},

gridTemplateRows: {
  '3': 'repeat(3, minmax(200px, 1fr))'
},

fontFamily:{
  Nunito:'Nunito '
}

    },
  },
  plugins: [],
}

