export default class UserInfo {
  constructor({ name, about }) {
    this._name = name;
    this._about = about;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  }
  setUserInfo() {
    document.querySelector(".profile__name").textContent = this._name;
    document.querySelector(".profile__about").textContent = this._about;
  }
}
