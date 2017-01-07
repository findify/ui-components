'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var env = process.env.NODE_ENV;
var config = {
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'babel-loader!ts-loader',
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader!import-glob-loader',
    }],
  },
  output: {
    library: 'FindifyUIComponents',
    libraryTarget: 'umd',
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env),
      },
    }),
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.scss'],
  },
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
