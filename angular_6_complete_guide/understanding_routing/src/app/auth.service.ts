import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = false;

  constructor() { }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
          console.log(`After promise logged in is: ${this.loggedIn}`);
        }, 1000);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log(`login called and is: ${this.loggedIn}`);
  }

  logout() {
    this.loggedIn = false;
    console.log(`login called and is: ${this.loggedIn}`);
  }
}
