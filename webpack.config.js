const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // Node.js 中，__dirname 总是指向被执行 js 文件的绝对路径
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则：匹配.css结尾的文件。然后使用对应的loader处理
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}