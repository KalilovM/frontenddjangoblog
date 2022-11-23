import { makeAutoObservable } from "mobx";

class Auth {
  isAuth = false;
  constructor() {
    makeAutoObservable(this);
  }

  loggedIn = () => {
    this.isAuth = true;
    console.log(this.isAuth);
  };

  logout = () => {
    this.isAuth = false;
    console.log(this.isAuth);
  };
}

export default new Auth();
