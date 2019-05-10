import _ from 'loadsh'
import './style.css'
import Icon from './icon.png' // 会被file-loader处理

function component () {
  var element = document.createElement('div')

  // Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
  // 通过npm模块引入，由隐式变为显式，移除dist/index.html对应script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  // 将图像添加到我们现有的 div。
  var myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)

  return element
}

document.body.appendChild(component())
