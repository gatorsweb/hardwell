/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center: true,
      padding: "20px"
    },
    screens:{
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1200px',
        '2xl': '1496px',
    },
    extend: {
      colors:{
        primary: '#EA3D3C',
        secondary: '#333'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'], 
      },
      before: {
        'check': ['url("/check.png")'], 
      },
    },
  },
  plugins: [],
}
