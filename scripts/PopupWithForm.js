import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
   
    this._inputList = this._element.querySelectorAll(".popup__input");

  
    this._formValues = {};

  
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

  
    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    const subBut = document.querySelector(".popup__submit-button");

    subBut.addEventListener("submit", (evt) => {
      evt.preventDefault();

      
      this._handleFormSubmit(this._getInputValues());

      this._element.reset();
    });
  }
}
