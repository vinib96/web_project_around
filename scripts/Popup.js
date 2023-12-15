export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this.close = this.close.bind(this);
  }
  open() {
    this._popupSelector.classList.add("popup__opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popupSelector.classList.remove("popup__opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    const buttonClose = this._popupSelector.querySelector(
      ".popup__close-button"
    );
    buttonClose.addEventListener("click", this.close);
    function onClick(evt) {
      evt.target.classList.remove("popup__opened");
    }
    this._popupSelector.addEventListener("click", onClick);
  }
}
