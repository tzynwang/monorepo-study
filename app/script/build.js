// https://webpack.js.org/api/node/

const webpack = require('webpack');
const webpackConfig = require('./../config/webpack.prod');

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  // https://webpack.js.org/api/stats/#structure
  const info = stats.toJson();
  const buildAtISOArray = new Date(info.builtAt).toISOString().split('T');
  console.info('-----');
  console.info(`Hash: ${info.hash}`);
  console.info(`Webpack version: ${info.version}`);
  console.info(`Compilation time: ${info.time / 1000}s`);
  console.info(`Built at: ${buildAtISOArray[0]} ${buildAtISOArray[1].slice(0, 8)}`);
  console.info('-----');

  if (stats.hasErrors()) {
    info.errors.forEach((error) => {
      console.error(error);
    });
  }

  if (stats.hasWarnings()) {
    info.warnings.forEach((warning) => {
      console.warn(warning);
    });
  }

  compiler.close((closeErr) => {
    if (closeErr) {
      console.error(closeErr.message);
    }
    console.log('Build end');
  });
});
