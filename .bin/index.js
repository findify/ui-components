import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { getLocalIdent } from './helpers/cssIndent.js';
import pkg from '../package.json';

const environments = ['development', 'production', 'dll'];

const getEnvironment = env =>
  env && environments.find(e => !!env[e]) || process.env.NODE_ENV || 'development';

const defaultConfig = environment => ({
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
    modules: [
      path.resolve(process.cwd(), 'src'),
      'node_modules'
    ]
  },

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  module: {
    noParse: /\.min\.js/,
    rules: {

      globalCSS: {
        test: /\.global\.css/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },

      localCSS: {
        test: /^((?!global).)*\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              camelCase: true,
              getLocalIdent
            }
          },
          'postcss-loader'
        ]
      },

      ts: {
        test: /\.tsx?$/,
        include: [
          path.resolve(process.cwd(), 'src'),
          path.resolve(process.cwd(), 'dev')
        ]
      },

      font: {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
        {
          loader: 'file-loader',
          options: {
            name: '[hash:base64:5].[ext]',
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            progressive: true,
            optimizationLevel: 7,
            interlaced: false,
            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }
      ]},

      image: {
        test: /\.(jpg|png|gif)$/,
        use: [
        {
          loader: 'file-loader',
          options: {
            name: '[hash:base64:5].[ext]',
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            progressive: true,
            optimizationLevel: 7,
            interlaced: false,
            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }
      ]}
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      ...environments
        .reduce((acc, key) => ({ ...acc, [`__${key.toUpperCase()}__`]: environments[key] }), {}),
      'process.env': {
        NODE_ENV: JSON.stringify(environment)
      }
    }),

    new HtmlWebpackPlugin({
      title: pkg.description,
    })
  ]
});

export default (env) => {
  const environment = getEnvironment(env);
  const environmentConfig = require(`./${environment}.js`).default; // eslint-disable-line
  return environmentConfig(env, defaultConfig(environment));
};
