var path = require('path');
var pkg = require('./package.json')

var libraryName = pkg.name

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    publicPath: '/dist/',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  node: { fs: 'empty' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
			  test: /\.svg/,
			  use: {
			    loader: 'svg-url-loader',
			    options: {}
			  }
			},
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: ['file-loader'],
      },

      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};
