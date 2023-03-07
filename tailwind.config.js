module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/templates/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'noise': "url('/img/noise.webp')"
      },
      letterSpacing: {
        'widest': '0.5em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
