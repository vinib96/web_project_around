import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const addCards = document.querySelector(".popup_add-cards");

const cardsForm = document.querySelector("#cards-form");

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

initialCards.forEach((item) => {
  const card = new Card(item, "#cards");
  const cardElement = card.generateCard();

  document.querySelector(".elements__container").append(cardElement);
});

cardsForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputTitle = document.querySelector(".popup__input_type_title");
  const inputImage = document.querySelector(".popup__input_type_image");

  const cardData = {
    name: inputTitle.value,
    link: inputImage.value,
  };
  const cardNew = new Card(cardData);
  const cardElement = cardNew.generateCard();
  document.querySelector(".elements__container").prepend(cardElement);
  addCards.classList.remove("popup__opened");

  document.getElementById("add-card").reset();
});
