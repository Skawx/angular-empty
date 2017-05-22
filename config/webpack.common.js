var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helper = require('./helper');

module.exports = {
  entry: {
    'polyfills': './src/js/polyfills.ts',
    'vendor': './src/js/vendor.ts',
    'app': './src/js/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.scss', '.html']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' },
      { test: /\.scss$/, exclude: [/node_modules/, /src\/css/], loaders: ['raw-loader', 'sass-loader'] },
      { test: /\.scss$/, include: /src\/css/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, include: helper.root('src', 'app'), loader: 'raw' },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};