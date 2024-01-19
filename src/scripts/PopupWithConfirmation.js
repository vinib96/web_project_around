import Popup from "./Popup";
import Card from "./Card";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getId() {
    this._id = cardId;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._id);
    });
  }
}
// trashButton = document.querySelector(".elements__trash");
// const elementRemove = trashButton.closest(".elements__cards");
// elementRemove.remove();
