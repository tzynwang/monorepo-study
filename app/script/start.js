// https://webpack.js.org/api/webpack-dev-server/

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./../config/webpack.dev');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(webpackConfig.devServer, compiler);

const runServer = async () => {
  await server.start();
};

runServer();
