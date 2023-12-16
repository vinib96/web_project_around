const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".popup__input_type_name");
const inputAbout = document.querySelector(".popup__input_type_about");

export default class UserInfo {
  constructor({ name, about }) {
    this._name = name;
    this._about = about;
  }

  getUserInfo() {
    inputName = this._name;
    inputAbout = this._about;
  }
  setUserInfo() {
    profileName.textContent = this._name;
    profileAbout.textContent = this._about;
  }
}
