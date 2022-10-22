const autoprefixer = require('autoprefixer');
const path = require("path");

module.exports = {
  plugins: [
    autoprefixer,
    ['postcss-mixins', {
        mixinsDir: path.join(__dirname, 'src/shared/styles/mixins'),
    }],
		'postcss-nested'
  ],
};
