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
} from "./scripts/constants.js";

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
  handleFormSubmit: (formData) => {
    // passamos o objeto formData contendo dados do formulário
    // para uma nova instância da classe UserCard
    const newUser = new UserInfo(formData);

    const userElement = newUser.getUserInfo();

    form.setUserInfo(userElement);
  },
});

const formAdd = new PopupWithForm({
  popupSelector: ".popup_add-cards",
  handleFormSubmit: (formData) => {
    // passamos o objeto formData contendo dados do formulário
    // para uma nova instância da classe UserCard
    const newCard = new Card(formData, "#cards");

    const cardElement = newCard.generateCard();

    defaultCardList.setItem(cardElement);
  },
});

const popFull = new Popup();
