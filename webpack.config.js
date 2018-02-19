const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./assets/js/app.js', './assets/sass/style.scss'],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {

    rules: [
      { // sass / scss loader for webpack
          test: /\.(sass|scss)$/,
          loader: ExtractTextPlugin.extract(['css-loader?' + JSON.stringify({ url: false }), "postcss-loader", 'sass-loader' ])
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'css/main.css',
      allChunks: true
    })
  ]
};