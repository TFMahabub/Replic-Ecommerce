/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: '#0ca659',
      secondary: '',
      white: '#fff',
    },
    extend: {
      spacing: {
        common: '16px'
      },
      transitionDuration: {
        'common': '200ms',
      }
    },
  },
  plugins: [],
}

