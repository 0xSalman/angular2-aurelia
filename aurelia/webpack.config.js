var path = require('path');
var webpack = require('webpack');

// webpack plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var project = require('./package.json');

// basic configurations
var rootDir = path.resolve();
var srcDir = path.resolve('src');
var outDir = path.resolve('dist');
var env = 'development';
var title = 'Aurelia ES6/ES7 + Webpack';
var baseUrl = '/';

/**
 * Main Webpack Configuration
 */
module.exports = {
  entry: {
    'app': [srcDir + '/main'],
    'vendor': Object.keys(project.dependencies).filter(dep => dep.startsWith('aurelia-')),
  },
  output: {
    path: outDir,
    filename: '[name]-bundle.js'
  },
  // devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', {
              loose: true,
              module: false
            }],
            'stage-1'
          ],
          plugins: [
            'syntax-flow',
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-flow-strip-types'
          ]
        }
      },
      {
        test: /\.html$/,
        exclude: /index\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|woff|woff2|ttf)$/,
        use: 'url-loader'
      }
    ],
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(env),
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new webpack.ProvidePlugin({
      regeneratorRuntime: 'regenerator-runtime',
      Promise: 'bluebird',
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new HtmlWebpackPlugin({
      title: title,
      env: env,
      baseUrl: baseUrl,
      template: 'index.html',
      chunksSortMode: 'dependency'
    }),
    new AureliaWebpackPlugin({
      root: rootDir,
      src: srcDir,
      baseUrl: baseUrl
    }),
    new CommonsChunkPlugin({
      name: ['vendor']
    })
  ]
};


