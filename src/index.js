/**
 * 本小节主要展示通过tree shaking清除无用代码
 * 但是根据demo执行发现，无论是否在package.json使用sideEffects: false，还是在webpack.config.js使用mode: "production"
 * 构建的bundle.js都是一样
 * 也许最新的webpack已经做了一些处理，但是文档没有更新，我也没能弄懂它。
 * 这次commit包含整个tree shaking内容，但它不太可靠。
 */
import { cube } from './math.js'

function component () {
  var element = document.createElement('pre')

  element.innerHTML = [
    'Hello webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')

  return element
}

document.body.appendChild(component())