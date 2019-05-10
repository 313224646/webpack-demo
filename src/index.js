import _ from 'loadsh'

function component () {
  var element = document.createElement('div')

  // Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
  // 通过npm模块引入，由隐式变为显式，移除dist/index.html对应script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())
