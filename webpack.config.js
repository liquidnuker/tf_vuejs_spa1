const path = require('path');
const webpack = require('webpack');
var Promise = require('es6-promise').Promise;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
    vendor: ['jquery', 'lodash']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // extractCSS
      {
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader', 'sass-loader'])
      },
      // // url loader
      // {
      //   test: /\.(png|jpg|otf|ttf)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000
      //     } // Convert images < 10k to base64 strings
      //   }]
      // },
      // babel-loader
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    extractCSS
  ],
  resolve: {
    modules: [
      '../node_modules',
      'D:/WINDOWS/GD2/web/dev/_npm/libs/jquery_3.1.1/node_modules',
      'D:/WINDOWS/GD2/web/dev/_npm/utils/lodash_4.17.4/node_modules'
    ]
  }
};