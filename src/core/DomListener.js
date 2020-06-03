export class DomListener {
  constructor($root, Listeners = []) {
    if (!$root) {
      throw new Error('No $root provider for DomListener!')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDom
}

initDomListeners() {
  console.log(this.listeners)

}

removeDomListeners() {

}