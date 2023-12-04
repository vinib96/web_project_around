const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const addCards = document.querySelector(".popup_add-cards");
const cardsForm = document.querySelector("#cards-form");
const imageElement = document.querySelector(".popup__image-large");
const fullImage = document.querySelector(".popup_full");
const closeImage = document.querySelector("#close-image");

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

    this._element.querySelector(".elements__card-image").src = this._link;
    this._element.querySelector(".elements__card-image").alt = this._name;
    this._element.querySelector(".elements__text").textContent = this._name;

    return this._element;
  }

  _handleOpenPopup() {
    imageElement.src = this._link;
    imageElement.alt = this._name;
    const textElement = document.querySelector(".popup__text-sub");
    textElement.textContent = this._name;
    fullImage.classList.add("popup__opened");
  }

  _handleClosePopup() {
    imageElement.src = "";
    imageElement.alt = "";
    fullImage.classList.remove("popup__opened");
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    closeImage.addEventListener("click", () => {
      this._handleClosePopup();
    });
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, ".cards");
  const cardElement = card.generateCard();

  document.querySelector(".elements__container").append(cardElement);
});
