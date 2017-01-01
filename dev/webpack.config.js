var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './src/index.tsx'),
  ],
  output: {
    path: path.join(__dirname, '/static'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
};
