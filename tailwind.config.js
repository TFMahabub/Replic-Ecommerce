/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#0ca659',
      secondary: '',
      white: '#fff',
      gray:'#c1c1c1'
    },
    extend: {
      spacing: {
        common: '16px',
        navbarHeight: '4rem'
      },
      transitionDuration: {
        'common': '200ms',
      }
    },
  },
  plugins: [],
}

