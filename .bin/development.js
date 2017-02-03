import webpack from 'webpack';
import path from 'path';
import DashboardPlugin from 'webpack-dashboard/plugin';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import { defaultRules, cssHash, defaultConfig } from './default';

const rules = {
  ...defaultRules,
  localCss: {
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          camelCase: true,
          localIdentName: cssHash
        }
      },
      'postcss-loader',
      {
        loader: 'typed-css-modules-loader',
        options: {
          camelCase: true
        }
      }
    ]
  },

  globalCss: {
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader'
    ]
  },

  ts: {
    use: ['react-hot-loader/webpack', 'ts-loader?silent=true']
  }
};

export default {
  rules,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(process.cwd(), 'dev/index.tsx')
  ],

  // vscode chrome debugger support just source-map and inline-source-map
  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: path.resolve(process.cwd(), 'dist'),
    port: 3000,
    stats: 'minimal',
    historyApiFallback: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new DashboardPlugin(),
    new webpack.DllReferencePlugin({
      context: path.join(process.cwd()),
      manifest: require(path.join(process.cwd(), 'node_modules/dll/vendor-manifest.json'))
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve(path.join(process.cwd(), 'node_modules/dll/vendor.dll.js'))
    })
  ],
};
