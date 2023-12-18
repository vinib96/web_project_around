export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleClick = handleCardClick;
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
        this._handleClick({
          link: this._link,
          name: this._name,
        });
      });
  }
}
