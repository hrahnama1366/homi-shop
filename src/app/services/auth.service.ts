import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _logined: boolean = false;
  private _loginedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._logined);



  constructor() {
  }

  // @ts-ignore
  tryLogin(username, password) {
    if(username == 'admin' && password == '123') {
      this._logined = true;
      this._loginedSubject.next(this._logined);
    }
  }

  get logined(): boolean {
    return this._logined;
  }

  get loginedSubject(): Observable<boolean> {
    return this._loginedSubject.asObservable();
  }

  log(message : string){
    console.log("message");
  }

  loggedIn : boolean = false;

  login1(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }

 public isAuthenticated(): Promise<boolean> {
    return new Promise((reject , resolve ) =>{
      setTimeout(()=>{
        resolve(this.loggedIn);
      },100)
    })
  }

  checkout(){
    return this.loggedIn;
  }
}
