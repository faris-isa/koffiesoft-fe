/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {}
    },
    fontSize: {
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'res-try': '3.800rem',
      'res-def': '4.010rem',
      'result': '6.104rem'
    }
  },
  plugins: [],
}