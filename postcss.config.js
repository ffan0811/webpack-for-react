const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
    }),
    require('cssnano')
  ]
};