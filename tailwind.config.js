module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/templates/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'turnpike': ['Turnpike', 'sans-serif'],
        'urban': ['Urban-Starblues', 'sans-serif'],
        'vhs': ['VHS', 'sans-serif'],
        'titlingthin': ['TitlingGothicFBExtThin', 'sans-serif'],
        'titlinglight': ['TitlingGothicFBExtLight', 'sans-serif'],
        'titlingreg': ['TitlingGothicFBExtReg', 'sans-serif'],
        'titlingstand': ['TitlingGothicFBExtStand', 'sans-serif'],
        'titlingmed': ['TitlingGothicFBExtMed', 'sans-serif'],
        'titlingbold': ['TitlingGothicFBExtBold', 'sans-serif'],
        'titlingblack': ['TitlingGothicFBExtBlack', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('/img/noise.webp')",
        'img-gradient': 'linear-gradient(268.74deg, #ff1879 4.37%, #8b57f9 31.6%, #91ffd1 61.36%, #fff500 101.2%);'
      },
      letterSpacing: {
        'widest': '0.5em'
      },
      textStrokeColor: {
        'black': '#000000',
        'white': '#ffffff',
      },
      colors: {
        'gradient': 'linear-gradient(268.74deg, #ff1879 4.37%, #8b57f9 31.6%, #91ffd1 61.36%, #fff500 101.2%);'
      },
    },
  },
  variants: {
    extend: {},
  },
   plugins: [
    function({ addUtilities, theme }) {
      const colors = theme('textStrokeColor');
      const utilities = Object.keys(colors).map(color => ({
        [`.text-stroke-${color}`]: {
          WebkitTextStrokeColor: colors[color],
        },
      }));
      addUtilities(utilities);
    },
  ],
}