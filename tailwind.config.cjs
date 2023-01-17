/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
              '5.5/12' : '37.5rem',
      },
      fontFamily : {
          commisioner: ['Courier Prime', 'monospace'],
          terminator: ['Montserrat', 'sans-serif']
      },

      cursor: {
          'not-allowed': 'not-allowed',
        },
        pointerEvents: {
          'none': 'none',
        },
    },
  },
  plugins: [require("daisyui")],
  daisyui : {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
           accent : "#26A69A"
        },
      },
      
      

    ]

  }
  

  
  
}
