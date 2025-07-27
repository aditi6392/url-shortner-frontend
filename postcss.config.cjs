// // postcss.config.cjs
// module.exports = {
//   plugins: {
//     '@tailwindcss/postcss': {},
//     autoprefixer: {},
//   },
// };
// postcss.config.cjs
// const tailwind = require('@tailwindcss/postcss');

// // module.exports = {
// //   plugins: [tailwind()],
// // };
// // postcss.config.cjs
// // module.exports = {
// //   plugins: {
// //     tailwindcss: {},
// //     autoprefixer: {},
// //   },
// // };
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer,
  ],
};
