const openFormButton = document.querySelector(".profile__edit-button");
const openAddButton = document.querySelector(".profile__add-button");
const popup = document.querySelector(".popup_profile");
const addCards = document.querySelector(".popup_add-cards");
const closeButton = popup.querySelector(".popup__close-button");
const closeAdd = addCards.querySelector(".popup__close-add");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");
const form = document.querySelector(".popup__form_profile");
const fullImage = document.querySelector(".popup_full");

openFormButton.addEventListener("click", () => {
  popup.classList.add("popup__opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

openAddButton.addEventListener("click", () => {
  addCards.classList.add("popup__opened");
});

closeButton.addEventListener("click", () => {
  popup.classList.remove("popup__opened");
});

closeAdd.addEventListener("click", () => {
  addCards.classList.remove("popup__opened");
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.remove("popup__opened");
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    popup.classList.remove("popup__opened");
    fullImage.classList.remove("popup__opened");
    addCards.classList.remove("popup__opened");
  }
});

document.querySelector(".popup_profile").addEventListener("click", onClick);
document.querySelector(".popup_full").addEventListener("click", onClick);
document.querySelector(".popup_add-cards").addEventListener("click", onClick);

function onClick(evt) {
  evt.target.classList.remove("popup__opened");
}
