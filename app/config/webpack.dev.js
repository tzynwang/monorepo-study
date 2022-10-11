const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
require('dotenv').config();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 55688;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    host,
    hot: true,
    open: true,
    port,
  },
});
