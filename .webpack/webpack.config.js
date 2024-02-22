'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const dev = require('./webpack.development.js');
const prod = require('./webpack.production.js');
const PATHS = require('./paths');

const isProduction = process.env.NODE_ENV === 'production';

const config = (env, argv) =>
  merge(common, isProduction ? prod : dev, {
    devtool: isProduction ? false : 'cheap-module-source-map',
  });

module.exports = config;
