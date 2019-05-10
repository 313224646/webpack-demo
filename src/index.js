function component () {
  var element = document.createElement('div')

  // Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
  //目前通过一个 script 脚本引入（在index.html的script标签），是一种隐式依赖关系
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())
