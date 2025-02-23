// module.exports = {
//   plugins: [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ],
// };
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer(),
  ],
};

