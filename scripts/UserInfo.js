export default class UserInfo {
  constructor({ nameInfo, aboutInfo }) {
    this._name = nameInfo;
    this._about = aboutInfo;
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
