module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      color: {
        'light-blue': '#55a3ff',
      },
      backgroundColor: {
        'light-blue': '#55a3ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
}
