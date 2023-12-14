import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    // Obtenha todos os elementos dos campos de entrada do formulário
    this._inputList = this._element.querySelectorAll(".popup__input");

    // Crie um objeto vazio
    this._formValues = {};

    // Adicione os valores dos campos a esse objeto
    this._inputList.forEach((input) => {
      this._formValues[input.title] = input.value;
      this._formValues[input.link] = input.value;
    });

    // Retorne o objeto de valores
    return this._formValues;
  }
  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();

      // Adicione uma chamada de função _handleFormSubmit()
      // Passe um objeto que seja o resultado de _getInputValues ​​para ele
      this._handleFormSubmit(this._getInputValues());

      this._element.reset();
    });
  }
}
