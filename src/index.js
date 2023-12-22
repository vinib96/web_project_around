import "../styles/index.css";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import Popup from "../scripts/Popup.js";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
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
} from "../scripts/constants.js";

const popupWithImage = new PopupWithImage(fullImage);
popupWithImage.setEventListeners();

const defaultCardList = new Section(
  {
    items: initialCards,
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
