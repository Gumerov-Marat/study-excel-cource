export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getROoot() {
    const $root = document.createElement('div')
    this.components.forEach(Component => {
      const component = new Component()
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    })

    return $root
  }

  render() {
    this.$el.append(this.getROoot())
  }
}
