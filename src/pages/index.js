import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Popup from "../components/Popup.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from "../components/API.js";
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
} from "../components/constants.js";

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_08",
  headers: {
    authorization: "728f9375-e1ce-42d8-ae33-9e03a1e5fb11",
    "Content-Type": "application/json",
  },
});

const popupWithImage = new PopupWithImage(fullImage);
popupWithImage.setEventListeners();

const formConfirmation = new PopupWithConfirmation({
  popupSelector: erasePopup,
  handleFormSubmit: (card) => {
    return api
      .removeCard(card._cardId)
      .then(() => {
        card.removeElement();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
formConfirmation.setEventListeners();

const renderNewCard = (item) => {
  const card = new Card(
    item,
    "#cards",
    () => {
      popupWithImage.open(item.link, item.name);
    },
    () => {
      formConfirmation.open(card);
    },
    api.addLikes.bind(api),
    api.removeLikes.bind(api)
  );
  return card.generateCard();
};

api
  .getInitialCards()
  .then((result) => {
    const defaultCardList = new Section(
      {
        items: result,
        renderer: (item) => {
          defaultCardList.addItem(renderNewCard(item));
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
        document
          .querySelector(".elements__container")
          .prepend(renderNewCard(result));
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
    const { avatar } = userInfo.getUserInfo();
    userInfo.setUserInfo(name, about, avatar);
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
  handleFormSubmit: ({ image }) => {
    api.editAvatar({
      avatar: document.querySelector(".popup__input_type_picture").value,
    });
    const { name, about } = userInfo.getUserInfo();
    userInfo.setUserInfo(name, about, image);
  },
});
avatarForm.setEventListeners();

picButton.addEventListener("click", () => {
  avatarForm.open();
});
