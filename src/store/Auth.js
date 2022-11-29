import { makeAutoObservable } from "mobx";

class AuthState {
  authState = false;

  constructor() {
    makeAutoObservable(this);
  }

  SetLoggedIn() {
    this.authState = true;
  }

  SetLogOut() {
    this.authState = false;
  }
}

export const Auth = new AuthState();
