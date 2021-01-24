const common = require('./webpack.common')
const { merge } = require('webpack-merge') 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map', //source-map
  output: {
    filename: '[name].[contenthash].bundle.js',
    publicPath: './',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  optimization: {
    // minimize: true, // 如果mode是production类型，minimize的默认值是true，执行默认压缩，
    splitChunks: {
      chunks: 'all',
      minSize: 30000, //表示在压缩前的最小模块大小,默认值是30kb
      minChunks: 1, // 表示被引用次数，默认为1；
      maxAsyncRequests: 6, //所有异步请求不得超过5个
      maxInitialRequests: 4, //初始话并行请求不得超过3个
      automaticNameDelimiter: '~', //名称分隔符
      name: false, //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔 // debug
      /* 设置缓存组用来抽取满足不同规则的chunk */
      cacheGroups: {
        utilCommon: {
          // 抽离自定义工具库
          name: 'common',
          minSize: 0, // 将引用模块分离成新代码文件的最小体积
          minChunks: 2, // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
          priority: -20,
        },
        vendors: {
          // 抽离第三方插件
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
        },
      },
    },
  },
})

module.exports = config
