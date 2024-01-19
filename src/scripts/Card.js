import { api } from "../index";
export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._data = data;
    this.owner = data.owner._id;
    this._cardId = data._id;

    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#cards")
      .content.querySelector(".elements__cards")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this.likeClick();

    this._remove();
    this._element.querySelector(".elements__card-image").src = this._link;
    this._element.querySelector(".elements__text").alt = this._name;
    this._element.querySelector(".elements__text").textContent = this._name;
    // this._element.querySelector(".elements__like-counter").textContent =
    //   this._likes.length;
    const remove = () => {
      if (this.owner === "65f3a68ef65151a656ade171") {
        this._element
          .querySelector(".elements__trash")
          .classList.add("elements__trash_hidden");
        return true;
      }
    };
    remove();
    // if (this._isLiked()) {
    //   const likeButton = this._element.querySelector(".elements__like-button");
    //   likeButton.classList.toggle("button_type_liked");
    // }

    return this._element;
  }

  likeClick() {
    const likeBtn = this._element.querySelector(".elements__like-button");
    const numberOfLikesElement = this._element.querySelector(
      ".elements__like-counter"
    );
    let numberOfLikes = numberOfLikesElement.textContent;
    let isLiked = false;
    const likeClick = () => {
      // if the like button hasn't been clicked
      api.addlike(this._cardId).then(() => {
        if (!isLiked) {
          likeBtn.classList.add("elements__like-button_click");
          numberOfLikes++;
          numberOfLikesElement.textContent = numberOfLikes;
          isLiked = !isLiked;
        } else {
          api.removeCard(this._cardId).then(() => {
            likeBtn.classList.remove("elements__like-button_click");
            numberOfLikes--;
            numberOfLikesElement.textContent = numberOfLikes;
            isLiked = !isLiked;
          });
        }
      });

      // if the like button has been clicked
    };
    likeBtn.addEventListener("click", likeClick);
  }

  _remove() {
    const trashButton = this._element.querySelector(".elements__trash");
    trashButton.addEventListener("click", () => {
      const popupRemove = document.querySelector(".popup_erase");
      popupRemove.classList.add("popup__opened");
    });
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__card-image")
      .addEventListener("click", () => {
        this._handleClick({
          link: this._link,
          name: this._name,
        });
      });
  }
}
