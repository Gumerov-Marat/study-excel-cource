class Dom {
}

export function $() {
  return new Dom()
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classlist.add(classes)
  }
  return el
}
