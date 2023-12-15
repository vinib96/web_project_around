export const openFormButton = document.querySelector(".profile__edit-button");
export const openAddButton = document.querySelector(".profile__add-button");
export const popup = document.querySelector(".popup_profile");
export const addCards = document.querySelector(".popup_add-cards");
export const closeButton = popup.querySelector(".popup__close-button");
export const closeAdd = addCards.querySelector(".popup__close-add");
export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__about");
export const inputName = document.querySelector(".popup__input_type_name");
export const inputAbout = document.querySelector(".popup__input_type_about");
export const form = document.querySelector(".popup__form_profile");
export const fullImage = document.querySelector(".popup_full");
export const cardListSelector = document.querySelector(".elements__container");
export const popupListSelector = document.querySelector(".popup__container");
export const cardsForm = document.querySelector("#cards-form");
export const add = document.querySelector("#add-card");
export const proInp = document.querySelector(".profile__input");
export const initialCards = [
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
// document.querySelector(".popup_profile").addEventListener("click", onClick);
// document.querySelector(".popup_full").addEventListener("click", onClick);
// document.querySelector(".popup_add-cards").addEventListener("click", onClick);

// openFormButton.addEventListener("click", () => {
//   popup.classList.add("popup__opened");
//   inputName.value = profileName.textContent;
//   inputAbout.value = profileAbout.textContent;
// });

// openAddButton.addEventListener("click", () => {
//   addCards.classList.add("popup__opened");
// });

// closeButton.addEventListener("click", () => {
//   popup.classList.remove("popup__opened");
// });

// closeAdd.addEventListener("click", () => {
//   addCards.classList.remove("popup__opened");
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   profileName.textContent = inputName.value;
//   profileAbout.textContent = inputAbout.value;
//   popup.classList.remove("popup__opened");
// });

// document.addEventListener("keydown", function (evt) {
//   if (evt.key === "Escape") {
//     popup.classList.remove("popup__opened");
//     fullImage.classList.remove("popup__opened");
//     addCards.classList.remove("popup__opened");
//   }
// });

// function onClick(evt) {
//   evt.target.classList.remove("popup__opened");
// }
