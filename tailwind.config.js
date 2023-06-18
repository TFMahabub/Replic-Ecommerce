/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#149777',
      secondary: '#FFC800',
      textColor: '#707676',
      white: '#fff',
      gray:'#707676',
      lightGray: '#f1f1f1',
      error: '#EA5252'
    },
    extend: {
      spacing: {
        common: '16px',
        partGap: '25px',
        sectionGap: '45px',
        navbarHeight: '4rem'
      },
      transitionDuration: {
        'common': '200ms',
      }
    },
  },
  plugins: [],
}

