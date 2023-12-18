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
  fullImage,
  form,
  add,
  popupListSelector,
  proInp,
  initialCards,
  imgClick,
} from "./scripts/constants.js";

const popImage = new PopupWithImage(fullImage);
popImage.setEventListeners();

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#cards", ({ name, link }) => {
        fullImage.open(name, link);
      });
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
    },
  },
  cardListSelector
);
defaultCardList.renderItems();

const formProf = new PopupWithForm({
  popupSelector: popup,
  handleFormSubmit: (formData) => {
    const newUser = new UserInfo(formData);

    newUser.setUserInfo();
  },
});
formProf.setEventListeners();
openFormButton.addEventListener("click", () => {
  formProf.open();
});

const formAdd = new PopupWithForm({
  popupSelector: addCards,
  handleFormSubmit: (formData) => {
    const cardNew = new Card(formData, "#cards", ({ name, link }) => {
      fullImage.open(name, link);
    });
    const cardElement = cardNew.generateCard();
    document.querySelector(".elements__container").prepend(cardElement);
    addCards.classList.remove("popup__opened");
  },
});
formAdd.setEventListeners();
openAddButton.addEventListener("click", () => {
  formAdd.open();
});
