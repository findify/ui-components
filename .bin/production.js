import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { defaultRules, cssHash } from './default';

const rules = {
  ...defaultRules,
  localCss: {
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: `css-loader?localIdentName=${cssHash}&modules&minimize=true&importLoaders=1!postcss-loader`
    })
  },

  globalCss: {
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: 'css-loader?minimize=true&importLoaders=1!postcss-loader'
    })
  },

  ts: {
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['es2015', { modules: false }]
        }
      },
      'ts-loader'
    ]
  }
};

export default {
  rules,
  entry: [
    path.resolve(process.cwd(), 'src/index.ts')
  ]
  output: {
    library: 'FindifyUIComponents',
    libraryTarget: 'umd',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true
    })
  ]
};
