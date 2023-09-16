/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'green-gradient': 'linear-gradient(200deg, rgba(71,122,30,1) 0%, rgba(112,178,55,1) 100%)'
      },
      textColor: {
        'green-gradient': 'linear-gradient(200deg, rgba(71,122,30,1) 0%, rgba(112,178,55,1) 100%)'
      }
    },
  },
  plugins: [],
}

