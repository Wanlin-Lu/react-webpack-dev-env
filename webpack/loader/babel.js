module.exports = {
  test: /\.m?jsx?$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
  }
};
