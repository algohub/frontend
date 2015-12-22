'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = Object.create(baseConfig);
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  }),
  new CopyWebpackPlugin([
    { from: './www/' }
  ])
];

module.exports = config;
