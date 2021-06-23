//webpack.config.js
const HtmlWebpackPlugins = require('html-web-plugins')
module.exports = {
  mode: 'none',
  stats: 'none',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugins()
  ]
}