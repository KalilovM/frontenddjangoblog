import { makeAutoObservable } from "mobx";

class Auth {
  isAuth = false;
  constructor() {
    makeAutoObservable(this);
  }

  loggedIn = () => {
    this.isAuth = true;
  };

  logout = () => {
    this.isAuth = false;
  };
}

export default new Auth();
