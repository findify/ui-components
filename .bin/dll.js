import path from 'path';
import webpack from 'webpack';
import { defaultConfig } from './default';

const vendor = [
  'react',
  'react-dom',
  'classnames',
  // 'recompose'
  // ... Write here any libs you want to exclude from main bundle
];

export default () => ({
  entry: { vendor },
  devtool: 'inline-source-map',

  output: {
    path: path.join(process.cwd(), 'node_modules/dll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(process.cwd(), 'node_modules/dll', '[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
});
