import "./styles/index.css";
import Card from "../src/scripts/Card.js";
import FormValidator from "../src/scripts/FormValidator.js";
import PopupWithImage from "../src/scripts/PopupWithImage.js";
import Popup from "../src/scripts/Popup.js";
import Section from "../src/scripts/Section.js";
import UserInfo from "../src/scripts/UserInfo.js";
import PopupWithForm from "../src/scripts/PopupWithForm.js";
import Api from "./scripts/API.js";
import {
  popup,
  addCards,
  cardListSelector,
  openAddButton,
  openFormButton,
  fullImage,
  initialCards,
  inputAbout,
  inputName,
} from "../src/scripts/constants.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1//web_ptbr_08",
  headers: {
    authorization: "728f9375-e1ce-42d8-ae33-9e03a1e5fb11",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((result) => {
    const defaultCardList = new Section(
      {
        items: result,
        renderer: (item) => {
          const card = new Card(item, "#cards", () => {
            popupWithImage.open(item.link, item.name);
          });
          const cardElement = card.generateCard();
          defaultCardList.addItem(cardElement);
        },
      },
      cardListSelector
    );
    defaultCardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const popupWithImage = new PopupWithImage(fullImage);
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
});

const formProfile = new PopupWithForm({
  popupSelector: popup,
  handleFormSubmit: ({ name, about }) => {
    userInfo.setUserInfo(name, about);
  },
});
formProfile.setEventListeners();
openFormButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  formProfile.open();
});

const formAddCard = new PopupWithForm({
  popupSelector: addCards,
  handleFormSubmit: () => {
    const cardData = {
      name: document.querySelector(".popup__input_type_title").value,
      link: document.querySelector(".popup__input_type_image").value,
    };
    const cardNew = new Card(cardData, "#cards", () => {
      popupWithImage.open(cardData.link, cardData.name);
    });
    const cardElement = cardNew.generateCard();
    document.querySelector(".elements__container").prepend(cardElement);
  },
});

formAddCard.setEventListeners();
openAddButton.addEventListener("click", () => {
  formAddCard.open();
});
