const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const development = require('./dev.config.js');
const production = require('./prod.config.js');
const rucksack = require('rucksack-css');
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../dist'),
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: [
    PATHS.app,
  ],

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', PATHS.app],
  },

  module: {
    loaders: [{
      test: /bootstrap\/dist\/js\/umd\//,
      loader: 'imports?jQuery=jquery',
    }, {
      test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
      loader: 'imports?define=>false&this=>window'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff2',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream',
    }, {
      test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-otf',
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
    }, {
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.(png|jpg|jpeg)$/,
      loader: 'file?name=[name].[ext]',
    }],
  },

  postcss: (webpack) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
      rucksack(),
      precss(),
      postcssImport({
        addDependencyTo: webpack,
      }),
    ];
  },
};

if (TARGET === 'start' || !TARGET) {
  module.exports = validate(merge(development, common));
}

if (TARGET === 'build' || !TARGET) {
  module.exports = validate(merge(production, common));
}
