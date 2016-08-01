const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');
module.exports = validate({
  devtool: 'source-map',

  entry: [
    'babel-polyfill',
    'bootstrap-loader/extractStyles'
  ],

  output: {
    publicPath: 'dist/',
  },

  module: {
    loaders: [{
      test: /\.(scss|css)$/,
      loader: 'style!css!postcss-loader!sass',
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      __DEVELOPMENT__: false,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: 'jquery',
    }),
  ],
});
