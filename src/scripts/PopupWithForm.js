import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popupSelector.querySelector(
      ".popup__submit-button"
    );
  }
  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll(".popup__input");

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  _renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Salvando...";
    } else {
    }
  }
  close() {
    super.close();
    this._popupSelector.querySelector(".popup__form").reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._renderLoading(true);
      this.close();
    });
  }
}
