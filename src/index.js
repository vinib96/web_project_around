import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import Popup from "./scripts/Popup.js";
import Section from "./scripts/Section.js";
import UserInfo from "./scripts/UserInfo.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import {
  profileName,
  profileAbout,
  inputName,
  inputAbout,
  popup,
  addCards,
  cardListSelector,
  cardsForm,
  openAddButton,
  openFormButton,
  form,
  add,
  popupListSelector,
  proInp,
} from "./scripts/constants.js";

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

// initialCards.forEach((item) => {
//   const card = new Card(item, "#cards");
//   const cardElement = card.generateCard();

//   document.querySelector(".elements__container").append(cardElement);
// });

// cardsForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const inputTitle = document.querySelector(".popup__input_type_title");
//   const inputImage = document.querySelector(".popup__input_type_image");

//   const cardData = {
//     name: inputTitle.value,
//     link: inputImage.value,
//   };
//   const cardNew = new Card(cardData);
//   const cardElement = cardNew.generateCard();
//   document.querySelector(".elements__container").prepend(cardElement);
//   addCards.classList.remove("popup__opened");

//   document.getElementById("add-card").reset();
// });

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#cards");
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
    },
  },
  cardListSelector
);

// const formProf = new PopupWithForm(".popup_profile", () => {
//   profileName.textContent = inputName.value;
//   profileAbout.textContent = inputAbout.value;
//   formProf._setEventListeners();
// });

// const formAdd = new PopupWithForm();
const formProf = new PopupWithForm({
  popupSelector: ".popup",
  handleFormSubmit: () => {
    // passamos o objeto formData contendo dados do formulário
    // para uma nova instância da classe UserCard
    const newUser = new UserInfo(inputName, inputAbout);

    const userElement = newUser.getUserInfo();

    proInp.setUserInfo(userElement);
  },
});
formProf.setEventListeners();

const formAdd = new PopupWithForm({
  popupSelector: ".popup_add-cards",
  handleFormSubmit: (item) => {
    // passamos o objeto formData contendo dados do formulário
    // para uma nova instância da classe UserCard
    const newCard = new Card(item, "#cards");

    const cardElement = newCard.generateCard();

    defaultCardList.setItem(cardElement);
  },
});
formAdd.setEventListeners();

openFormButton.addEventListener("click", () => {
  const openPop = new Popup(popup);
  openPop.open();
});

openAddButton.addEventListener("click", () => {
  const openAdd = new Popup(addCards);
  openAdd.open();
});
function imageFull(link) {
  document.querySelector(".popup_full").classList.add("popup__opened");
  const imageElement = document.querySelector(".popup__image-large");
  imageElement.src = link;
}

defaultCardList.renderItems();
