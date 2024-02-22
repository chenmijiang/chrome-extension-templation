'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = require('./paths');
const path = require('path');

// used in the module rules and in the stats exlude list
const IMAGE_TYPES = /\.(png|jpe?g|gif)$/i;

const common = {
  entry: {
    app: PATHS.src + '/index.tsx',
    background: PATHS.background + '/index.ts',
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    clean: true,
  },
  stats: {
    all: false,
    errors: true,
    builtAt: true,
    assets: true,
    excludeAssets: [IMAGE_TYPES],
  },
  module: {
    rules: [
      // Check for TypeScript files
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: false,
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  name: 'removeAttrs',
                  params: {
                    attrs: 'fill',
                  },
                },
              ],
            },
          },
        ],
      },
      {
        test: IMAGE_TYPES,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    },
  },
  plugins: [
    // Copy static assets from `public` folder to `build` folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: 'public',
        },
      ],
    }),
    // Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = common;
