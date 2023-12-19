import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, name) {
    super.open();
    this._popupSelector.querySelector(".popup__image-large").src = link;
    this._popupSelector.querySelector(".popup__image-large").alt = name;
    this._popupSelector.querySelector(".popup__text-sub").textContent = name;
  }

  close() {
    super.close();
  }
}
