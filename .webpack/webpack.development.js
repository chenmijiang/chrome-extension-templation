'use strict';

const ExtReloader = require('webpack-ext-reloader');

const development = {
  plugins: [
    new ExtReloader({
      port: 9090,
      reloadPage: true,
      entries: {
        background: 'background',
      },
    }),
  ],
};

module.exports = development;
