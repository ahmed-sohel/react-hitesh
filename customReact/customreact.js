
function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)
  container.appendChild(domElement)
  */
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if(prop === 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://reactjs.org/',
    target: '_blank',
  },
  children: 'Click here to visit website'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)