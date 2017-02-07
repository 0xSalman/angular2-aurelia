var path = require('path');
var webpack = require('webpack');

// webpack plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

// basic configurations
var srcDir = path.resolve('src');
var outDir = path.resolve('dist');
var env = 'development';
var title = 'Angular2 ES6/ES7 + Webpack';
var baseUrl = '/';

/**
 * Main Webpack Configuration
 */
module.exports = {
  entry: {
    'app': [srcDir + '/main'],
    'vendor': [srcDir + '/vendor.js'],
  },
  output: {
    path: outDir,
    filename: '[name]-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'angular2'],
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
    // Workaround needed for angular 2 angular/angular#11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      srcDir
    ),
    new HtmlWebpackPlugin({
      title: title,
      env: env,
      baseUrl: baseUrl,
      template: 'index.html',
      chunksSortMode: 'dependency'
    }),
    new CommonsChunkPlugin({
      name: ['vendor']
    })
  ]
};