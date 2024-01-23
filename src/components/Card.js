export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleAddLike,
    handleRemoveLike
  ) {
    this._link = data.link;
    this._name = data.name;
    this._data = data;
    this.owner = data.owner._id;
    this._cardId = data._id;

    this._likes = data.likes;

    this._cardSelector = cardSelector;
    this._handleClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
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
    this._element.querySelector(".elements__card-image").alt = this._name;
    this._element.querySelector(".elements__text").textContent = this._name;
    this._element.querySelector(".elements__like-counter").textContent =
      this._likes.length;

    const remove = () => {
      const myId = "65f3a68ef65151a656ade171";
      if (this.owner === myId) {
        this._element
          .querySelector(".elements__trash")
          .classList.add("elements__trash_hidden");
        return true;
      }
    };
    remove();
    if (this.isLiked()) {
      const likeBtn = this._element.querySelector(".elements__like-button");
      likeBtn.classList.add("elements__like-button_click");
    }

    return this._element;
  }

  removeElement() {
    this._element.remove();
  }

  isLiked() {
    const myId = "65f3a68ef65151a656ade171";

    return this._likes.find((res) => res._id === myId);
  }

  likeClick() {
    const likeBtn = this._element.querySelector(".elements__like-button");

    const numberOfLikesElement = this._element.querySelector(
      ".elements__like-counter"
    );

    const liked = () => {
      if (!this.isLiked()) {
        this._handleAddLike(this._cardId).then((res) => {
          likeBtn.classList.add("elements__like-button_click");
          const active = this._element.querySelector(
            ".elements__like-button_click"
          );
          localStorage.setItem(active, like);
          numberOfLikesElement.textContent = parseInt(++this._likes.length);
          this._likes = res.likes;
        });
      } else {
        this._handleRemoveLike(this._cardId).then((res) => {
          likeBtn.classList.remove("elements__like-button_click");
          this._likes = res.likes;
          numberOfLikesElement.textContent = this._likes.length;
        });
      }
    };
    likeBtn.addEventListener("click", liked, () => {
      const active = likeBtn.classList.add("elements__like-button_click");
      sessionStorage.getItem(active);
    });
  }

  _remove() {
    const trashButton = this._element.querySelector(".elements__trash");
    trashButton.addEventListener("click", () => {
      this._handleDeleteClick();
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
