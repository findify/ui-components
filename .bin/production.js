import ExtractTextPlugin from 'extract-text-webpack-plugin';
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
      module.rules.image,,
      {
        ...module.rules.localCss,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: `css-loader?localIdentName=${cssHash}&modules&minimize=true&importLoaders=1!postcss-loader`
        })
      },

      {
        ...module.rules.globalCss,
        ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?minimize=true&importLoaders=1!postcss-loader'
        }
      },

      {
        ...module.rules.ts,
        use: [
        {
          loader: 'babel-loader',
          options: {
          babelrc: false,
          presets: ['es2015', { modules: false }]
        }
        'ts-loader'
      ]}
    ]
  },
  plugins: [
    ...plugins,
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true
    })
  ]
});
