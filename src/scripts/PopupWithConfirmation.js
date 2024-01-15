import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setEventListeners() {
    super.setEventListeners;
    this._popupSelector.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.close();
    });
  }
}
// trashButton = document.querySelector(".elements__trash");
// const elementRemove = trashButton.closest(".elements__cards");
// elementRemove.remove();
