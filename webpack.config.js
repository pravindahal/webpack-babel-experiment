const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: true,
  }),
];

module.exports = {
  entry: path.resolve("src", "index.js"),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-env']
        }
      }
    ]
  }
};
