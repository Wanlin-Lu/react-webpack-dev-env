const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_module)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // 如果在class组件中使用属性或者箭头函数之类的语法，必须要引入这个plugin
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'font',
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              // publicPath: './images/',
              outputPath: 'img',
            },
          },
        ],
        // use: 'file-loader'
        // use: ['url-loader?name=fonst/[name].[md5:hash:hex:7].[ext]']
      },
      {
        test: /\.js$/,
        exclude: /[\\/]node_modules[\\/]/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attributes: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
  ],
}
