export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._class = cardSelector;
  }

  addItem(element) {
    this._class.append(element);
  }

  clear() {
    this._class.innerHTML = "";
  }

  renderItems() {
    this.clear();

    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
