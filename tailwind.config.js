/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      // eerie black, violet(#523249), moonstone, cerulean
      colors: {
        'eerie': {
          100: '#ADC0C2',
          200: '#95AEB1',
          300: '#7E9CA0',
          400: '#68888D',
          500: '#577275',
          600: '#4E666A',
          700: '#455B5E',
          800: '#3D5052',
          900: '#1A2223',
        },
      },
    },
  },
  plugins: [],
};