/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/kerala.jpg')",
        home: "url('../assets/temple.jpg')",
      },
    },
  },
  // plugins: [],
}
