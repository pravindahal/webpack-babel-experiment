const leftPad = require('left-pad-es6')

const join = (l, glue) => {
  return l.reduce((glued, item) => {
    return glued + glue + item;
  }, '');
}

const component = () => {
  var element = document.createElement('pre');

  // Lodash, now imported
  element.innerHTML = join(['Hello', leftPad('webpack', 10)], ' ');

  return element;
}

document.body.appendChild(component());
