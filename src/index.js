import "./styles/index.css";
import Card from "../src/scripts/Card.js";
import FormValidator from "../src/scripts/FormValidator.js";
import PopupWithImage from "../src/scripts/PopupWithImage.js";
import Popup from "../src/scripts/Popup.js";
import Section from "../src/scripts/Section.js";
import UserInfo from "../src/scripts/UserInfo.js";
import PopupWithForm from "../src/scripts/PopupWithForm.js";
import PopupWithConfirmation from "../src/scripts/PopupWithConfirmation.js";
import Api from "./scripts/API.js";
import {
  popup,
  addCards,
  cardListSelector,
  openAddButton,
  openFormButton,
  fullImage,
  inputAbout,
  inputName,
  erasePopup,
  avatar,
  picButton,
  eraseButton,
} from "../src/scripts/constants.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1//web_ptbr_08",
  headers: {
    authorization: "728f9375-e1ce-42d8-ae33-9e03a1e5fb11",
    "Content-Type": "application/json",
  },
});

const popupWithImage = new PopupWithImage(fullImage);
popupWithImage.setEventListeners();

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

const formAddCard = new PopupWithForm({
  popupSelector: addCards,
  handleFormSubmit: () => {
    api
      .addCard({
        name: document.querySelector(".popup__input_type_title").value,
        link: document.querySelector(".popup__input_type_image").value,
      })
      .then((result) => {
        const cardNew = new Card(result, "#cards", ({ name, link }) => {
          popupWithImage.open(link.link, name.name);
        });
        const cardElement = cardNew.generateCard();
        document.querySelector(".elements__container").prepend(cardElement);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
formAddCard.setEventListeners();
openAddButton.addEventListener("click", () => {
  formAddCard.open();
});

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
  avatarSelector: ".profile__picture",
});

api
  .getUserInfo()
  .then(({ name, about, avatar }) => {
    userInfo.setUserInfo(name, about, avatar);
  })
  .catch((err) => {
    console.log(err);
  });

const formProfile = new PopupWithForm({
  popupSelector: popup,
  handleFormSubmit: ({ name, about }) => {
    api.editUserInfo(name, about);
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

const avatarForm = new PopupWithForm({
  popupSelector: avatar,
  handleFormSubmit: ({ avatar }) => {
    api.editAvatar({
      avatar: document.querySelector(".popup__input_type_picture").value,
    });
    userInfo.setUserInfo(avatar);
  },
});
avatarForm.setEventListeners();

picButton.addEventListener("click", () => {
  const { avatar } = userInfo.getUserInfo();

  avatarForm.open();
});

const formConfirmation = new PopupWithConfirmation(erasePopup);
formConfirmation.setEventListeners();
