const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: { // 多个js入口
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(), // new CleanWebpackPlugin(['dist']) 官方例子是报错的。Error: clean-webpack-plugin only accepts an options object
    new HtmlWebpackPlugin({
      title: '管理输出'
    })
  ],
  output: {
    filename: '[name].bundle.js', // [name]最终会被替换成entry的key
    path: path.resolve(__dirname, 'dist')
  }
}
