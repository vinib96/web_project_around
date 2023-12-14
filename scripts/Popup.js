export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  open() {
    this._popupSelector.classList.add("popup__opened");
  }
  close() {
    this._popupSelector.classList.remove("popup__opened");
  }
  _handleEscClose() {
    document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        this._popupSelector.remove("popup__opened");
      }
    });
  }

  setEventListeners() {
    const testa = document.querySelector(".popup__close-button");

    testa.addEventListener("click", () => this.close());
    // function onClick(evt) {
    //   evt.target.classList.remove("popup__opened");
    // }
    // this._popupSelector.addEventListener("click", onClick);
  }
}
