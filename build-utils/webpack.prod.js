const commonPaths = require('./common-paths');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: 'static/[name].[hash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css||scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: "sass-loader",
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: true,
                localIdentName: '[name]__[hash:base64:5]',
                includePaths: [
                  `${commonPaths.appEntry}/styles`
                ]
              }
            }
          ]
        })
      }, {
        test: /\.(png|jpg|gif|svg|mp4)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/images/[name].[ext]'
              }
            }
          ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/fonts/[name].[ext]'
              }
            }
          ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/styles.[hash].css',
      allChunks: true
    })
  ]
};
module.exports = config;