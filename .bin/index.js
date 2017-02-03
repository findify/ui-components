import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import pkg from '../package.json';

const environments = ['development', 'production', 'dll'];

const getEnvironment = env =>
  env && environments.find(e => !!env[e]) || process.env.NODE_ENV || 'development';

export default (env) => {
  const environment = getEnvironment(env);
  const environmentConfig = require(`./${environment}.js`).default; // eslint-disable-line
  
  if (typeof environmentConfig === 'function') return environmentConfig(env);
  const { rules, ...config } = environmentConfig;

  return {
    ...config,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css'],
      modules: [
        path.resolve(process.cwd(), 'src'),
        'node_modules'
      ]
    },

    entry: [
      ...config.entry
    ],

    output: {
      ...config.output,
      path: path.resolve(process.cwd(), 'dist'),
      filename: '[name].js',
    },

    module: {
      noParse: /\.min\.js/,
      rules: [
        {
          ...rules.localCss,
          test: /^((?!global).)*\.css/
        },
        {
          ...rules.globalCss,
          test: /\.global\.css/
        },
        {
          ...rules.ts,
          test: /\.tsx?$/,
          include: [
            path.resolve(process.cwd(), 'src'),
            path.resolve(process.cwd(), 'dev')
          ]
        },
        {
          ...rules.font,
          test: /\.(eot|svg|ttf|woff|woff2)$/
        },
        {
          ...rules.image,
          test: /\.(jpg|png|gif)$/
        }
      ]
    },

    plugins: [
     ...config.plugins,
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
  };
};
