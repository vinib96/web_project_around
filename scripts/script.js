const openFormButton = document.querySelector(".profile__edit-button");
const openAddButton = document.querySelector(".profile__add-button");
const popup = document.querySelector(".popup__profile");
const addCards = document.querySelector(".popup__add-cards");
const closeButton = popup.querySelector(".popup__close-button");
const closeAdd = addCards.querySelector(".popup__close-add");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");
const form = document.querySelector(".popup__form");
const cardsForm = document.querySelector("#cards-form");
const cardsContainer = document.querySelector(".elements__container");
const likeButton = document.querySelector(".elements__like-button");
const trashButton = document.querySelector(".elements__trash");
const fullImage = document.querySelector(".popup__full-image");
const cardImage = document.querySelector(".elements__card-image");
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

openFormButton.addEventListener("click", () => {
  popup.classList.add("popup__opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

openAddButton.addEventListener("click", () => {
  addCards.classList.add("popup__opened");
});

// cardImage.forEach((image) => {
//   image.onclick = () => {
//     fullImage.classList.add("popup__opened");
//   };
// });

closeButton.addEventListener("click", () => {
  popup.classList.remove("popup__opened");
});

closeAdd.addEventListener("click", () => {
  addCards.classList.remove("popup__opened");
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.remove("popup__opened");
}
form.addEventListener("submit", handleFormSubmit);

function addCard(initialCards) {
  const cardTemplate = document.querySelector("#cards").content;
  const cardElement = cardTemplate
    .querySelector(".elements__cards")
    .cloneNode(true);

  cardElement
    .querySelector(".elements__card-image")
    .setAttribute("src", initialCards.link);
  cardElement
    .querySelector(".elements__card-image")
    .setAttribute("alt", initialCards.name);
  cardElement.querySelector(".elements__text").textContent = initialCards.name;
  cardElement.querySelector("#like");

  cardsContainer.prepend(cardElement);
  return cardElement;
}

initialCards.forEach((card) => {
  const cardElement = addCard(card);
  cardsContainer.prepend(cardElement);
});

// likeButton.addEventListener("click", () => {
//   likeButton.classList.remove("elements__like-button");
//   likeButton.classList.add("elements__like-button_click");
// });

function handleCardSubmit(evt) {
  evt.preventDefault();
  const inputTitle = document.querySelector(".popup__input_type_title");
  const inputImage = document.querySelector(".popup__input_type_image");

  initialCards.textContent = inputTitle.value;
  initialCards.textContent = inputImage.value;
  addCard(evt);
  addCards.classList.remove("popup__opened");
}
cardsForm.addEventListener("submit", handleCardSubmit);

trashButton.addEventListener("click", () => {
  const elementRemove = trashButton.closest(".elements__cards");
  elementRemove.remove();
});
