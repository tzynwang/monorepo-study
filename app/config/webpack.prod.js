const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common('production'), {
  mode: 'production',
  devtool: 'source-map',
});
