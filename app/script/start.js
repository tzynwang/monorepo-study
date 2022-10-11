// https://webpack.js.org/api/webpack-dev-server/

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./../config/webpack.dev');

const compiler = webpack(webpackConfig);
const server = new webpackDevServer(webpackConfig.devServer, compiler);
const runServer = async () => await server.start();
runServer();
