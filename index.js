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

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#cards", () => {
        imgClick.addEventListener("click", (evt) => {
          evt.preventDefault;
          fullImage.classList.add("popup__opened");
        });
      });
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
    },
  },
  cardListSelector
);
defaultCardList.renderItems();

openFormButton.addEventListener("click", () => {
  const openPop = new Popup(popup);
  openPop.open();
  openPop.setEventListeners();
});

openAddButton.addEventListener("click", () => {
  const openAdd = new Popup(addCards);
  openAdd.open();
  openAdd.setEventListeners();
});

const formProf = new PopupWithForm({
  popupSelector: ".popup",
  handleFormSubmit: (name, about) => {
    const newUser = new UserInfo(name, about);

    const userElement = newUser.getUserInfo();

    form.setUserInfo(userElement);
  },
});
const formAdd = new PopupWithForm({
  popupSelector: ".popup_add-cards",
  handleFormSubmit: (formData) => {
    const newCard = new Card(formData, "#cards");

    const cardElement = newCard.generateCard();

    defaultCardList.setItem(cardElement);
  },
});

// const formElement = formAdd;
// const formRenderer = new Section(
//   {
//     items: [], // podemos passar um argumento com um vetor vazio
//   },
//   "#add-card"
// );
// formRenderer.addItem(formElement);
