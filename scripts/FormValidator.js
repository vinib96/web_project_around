export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add("text-color");
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  }
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        this._formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(this._formElement, inputElement);
    }
  }
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState(inputList, buttonElement) {
    console.log(this._hasInvalidInput(inputList));
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _fieldsetEvent() {
    const buttonElement = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(this._formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _setEventListeners(formList) {
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });

      const fieldsetList = Array.from(
        this._formElement.querySelectorAll(".popup__formset")
      );

      fieldsetList.forEach((fieldset) => {
        this._fieldsetEvent(fieldset);
      });
    });
  }

  enableValidation() {
    const formList = Array.from(
      document.querySelectorAll(this._config.formSelector)
    );
    this._setEventListeners(formList);
  }
}
const addCards = document.querySelector(".popup_add-cards");
const popup = document.querySelector(".popup_profile");

const profileValid = new FormValidator(
  {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
    formClass: ".popup__formset",
  },
  popup
);

const addValid = new FormValidator(
  {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
    formClass: ".popup__formset",
  },
  addCards
);

addValid.enableValidation();
profileValid.enableValidation();
