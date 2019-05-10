const path = require('path')

module.exports = {
  entry: { // 多个js入口
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js', // [name]最终会被替换成entry的key
    path: path.resolve(__dirname, 'dist')
  }
}