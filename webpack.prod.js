const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map', // 控制构建的速度与结果，具体选择参考：https://www.webpackjs.com/configuration/devtool/
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
})
