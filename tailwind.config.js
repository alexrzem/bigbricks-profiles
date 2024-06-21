/** @type {import('tailwindcss').Config} */
const fdm_colors = require('./src/stores/colours.json');

import _ from 'lodash';
import invert from 'invert-color';

const extended_colors = {};
for (const colour of _.values(fdm_colors)) {
  _.set(extended_colors, `${colour.name}`, _.toUpper(colour.hex));
  _.set(extended_colors, `${colour.name}-inv`, _.toUpper(invert(colour.hex, true)));
}

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fdm: extended_colors,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
