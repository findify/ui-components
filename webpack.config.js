var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.ts'),
  ],
  output: {
    library: 'FindifyUIComponents',
    libraryTarget: 'umd',
    filename: './lib/index.min.js',
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'babel-loader!ts-loader',
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader!import-glob-loader',
    }],
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
};
