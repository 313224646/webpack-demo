import _ from 'loadsh'
import printMe from './print.js'

function component () {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./print.js', function () { // 应该是个侦听器
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}