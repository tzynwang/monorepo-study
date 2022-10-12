const path = require('path');
const dotenvWebpack = require('dotenv-webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config();

module.exports = function (webpackEnv) {
  const isProduction = webpackEnv === 'production';
  return {
    entry: './src/index.tsx',
    output: {
      clean: true,
      chunkFilename: 'js/[name].[contenthash:8].chunk.js',
      filename: 'js/[name].[contenthash:8].js',
      path: path.resolve(__dirname, '..', '..', 'dist'), // export final bundle to root/dist folder
    },
    plugins: [
      new dotenvWebpack(),
      new htmlWebpackPlugin({
        template: './public/index.html',
      }),
      isProduction &&
        new miniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].chunk.css',
        }),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: require.resolve('ts-loader'),
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-react'),
            ],
          },
        },
        {
          test: /\.module\.css$/,
          use: [
            isProduction
              ? { loader: miniCssExtractPlugin.loader }
              : { loader: require.resolve('style-loader') },
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[path][name]__[local]__[hash:base64:5]',
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [
            isProduction
              ? miniCssExtractPlugin.loader
              : require.resolve('style-loader'),
            require.resolve('css-loader'),
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
  };
};
