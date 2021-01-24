const common = require('./webpack.common')
const { merge } = require('webpack-merge') 

const config = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map', //source-map
})

module.exports = config
