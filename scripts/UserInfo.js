export default class UserInfo {
  constructor({ name, about }) {
    this._name = name;
    this._about = about;
  }

  getUserInfo() {
    return {
      name: document.querySelector(".profile__name"),
      about: document.querySelector(".profile__about"),
    };
  }
  setUserInfo() {
    document.querySelector(".profile__name").textContent = this._name;
    document.querySelector(".profile__about").textContent = this._about;
  }
}
