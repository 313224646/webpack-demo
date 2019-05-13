const path = require('path')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // Node.js 中，__dirname 总是指向被执行 js 文件的绝对路径
  },
  mode: "production"
}
