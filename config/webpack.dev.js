const path = require('path')
const common = require('./webpack.common') 
const { merge } = require('webpack-merge') 

const config = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', //inline-source-map
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 8000,
    compress: true,
    writeToDisk: false,
  },
})

module.exports = config