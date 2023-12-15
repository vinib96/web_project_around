export default class UserInfo {
  constructor({ formData }) {
    this._name = formData.name;
    this._about = formData.about;
  }

  getUserInfo(name, about) {
    name = this._name.textContent;
    about = this._about.textContent;
  }
  setUserInfo(name, about) {
    this._name.textContent = name;
    this._about.textContent = about;
  }
}
