import path from 'path';
import nodeExternals from 'webpack-node-externals';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import webpack from 'webpack';

const extractGlobal = new ExtractTextPlugin('styles.css');
const extractCustom = new ExtractTextPlugin('custom.css');

export default (env, { module, plugins, output, ...config }) => ({
  ...config,
  entry: [
    path.resolve(process.cwd(), 'src/index.ts')
  ],

  output: {
    ...output,
    library: 'FindifyUIComponents',
    libraryTarget: 'umd',
  },

  externals: env.externals ? [nodeExternals()] : [],

  module: {
    ...module,
    rules: [
      module.rules.font,
      module.rules.image,
      {
        ...module.rules.localCSS,
        use: extractGlobal.extract({
          fallback: "style-loader",
          use: module.rules.localCSS.use.filter((_, i) => !!i)
        })
      },
      {
        ...module.rules.globalCSS,
        use: extractGlobal.extract({
          fallback: "style-loader",
          use: module.rules.globalCSS.use.filter((_, i) => !!i)
        })
      },
      {
        ...module.rules.customCSS,
        use: extractCustom.extract({
          fallback: "style-loader",
          use: module.rules.customCSS.use[1]
        })
      },
      {
        ...module.rules.ts,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: [
                'lodash'
              ],
              presets: [
                ['es2015', { modules: false }],
                'react-optimize',
                'stage-0',
                'react'
              ]
            }
          },
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    ...plugins,
    extractGlobal,
    extractCustom,
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        autoprefixer: false,
        discardDuplicates: true,
        discardUnused: true,
        mergeRules: true,
        mergeLonghand: true,
        minifyFontValues: true,
        minifyGradients: true,
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    })
  ]
});
