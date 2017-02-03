export const defaultRules = {
  raw: {
    use: ['raw-loader']
  },

  image: {
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
    ]
  },
};

export const defaultConfig = {
  output: {
    publicPath: '/'
  }
}

export const cssHash = '[path]--[local]';
