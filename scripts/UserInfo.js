export default class UserInfo {
  constructor({ name, about }) {
    this._name = name;
    this._about = about;
  }

  getUserInfo() {
    this._name = document.querySelector(".popup__input_type_name");
    this._name = document.querySelector(".popup__input_type_about");
  }
  setUserInfo() {
    document.querySelector(".profile__name").textContent = this._name;
    document.querySelector(".profile__about").textContent = this._about;
  }
}
