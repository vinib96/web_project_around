import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, title) {
    super.open();
    const imageElement = document.querySelector(".popup__image-large");
    imageElement.src = link;
    imageElement.alt = title;
    const textElement = document.querySelector(".popup__text-sub");
    textElement.textContent = title;
  }

  close() {
    super.close();
  }
}
