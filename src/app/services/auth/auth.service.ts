import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: boolean;

  constructor() {
    this.token = false;

  }

  signIn(username, password): Promise<any> {

    const cb = (res, rej) => {
      if (username === 'admin' && password === 'azerty'){
        this.token = true;
        res();
      }
      else{
        rej('les identifiants sont incorrect');
      }
    };
    return new Promise<any>(cb);

  }
}
