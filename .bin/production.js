// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
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

  module: {
    ...module,
    rules: [
      module.rules.font,
      module.rules.image,
      module.rules.localCSS,
      module.rules.globalCSS,
      {
        ...module.rules.ts,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
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
    ...plugins
  ]
});
