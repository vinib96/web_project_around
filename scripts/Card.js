export default class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#cards")
      .content.querySelector(".elements__cards")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._like();
    this._remove();
    this._element.querySelector(".elements__card-image").src = this._link;
    this._element.querySelector(".elements__text").alt = this._name;
    this._element.querySelector(".elements__text").textContent = this._name;

    return this._element;
  }

  _handleOpenPopup() {
    document.querySelector(".popup_full").classList.add("popup__opened");
    const imageElement = document.querySelector(".popup__image-large");
    imageElement.src = this._link;
    imageElement.alt = this._name;
    const textElement = document.querySelector(".popup__text-sub");
    textElement.textContent = this._name;
  }

  _handleClosePopup() {
    document.querySelector(".popup_full").classList.remove("popup__opened");
  }

  _like() {
    const likeButton = this._element.querySelector(".elements__like-button");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("elements__like-button_click");
    });
  }

  _remove() {
    const trashButton = this._element.querySelector(".elements__trash");
    trashButton.addEventListener("click", () => {
      const elementRemove = trashButton.closest(".elements__cards");
      elementRemove.remove();
    });
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__card-image")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });

    document.querySelector("#close-image").addEventListener("click", () => {
      this._handleClosePopup();
    });
  }
}

// function _handleClosePopup() {
//   document.querySelector(".popup_full").classList.remove("popup__opened");
// }

// function _handleOpenPopup() {
//   document.querySelector(".popup_full").classList.add("popup__opened");
//   const imageElement = document.querySelector(".popup__image-large");
//   imageElement.src = document.querySelector(".elements__card-image");
//   imageElement.alt = document.querySelector(".elements__text");
//   const textElement = document.querySelector(".popup__text-sub");
//   textElement.textContent = document.querySelector(".elements__text");
// }
