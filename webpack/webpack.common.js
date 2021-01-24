const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const loader = require('./loader/index.js')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: loader,
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, '../src/component/')
    },
  },
}
