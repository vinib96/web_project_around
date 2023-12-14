import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    super.open();
    const imageElement = document.querySelector(".popup__image-large");
    imageElement.src = this._link;
    imageElement.alt = this._name;
    const textElement = document.querySelector(".popup__text-sub");
    textElement.textContent = this._name;
  }

  close() {
    super.close();
  }
}
