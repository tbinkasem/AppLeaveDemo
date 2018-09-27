import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  login(user, password){
    let url = "http://localhost/ionic/dologin.php";
    let formLogin = new FormData();
    formLogin.append('username', user);
    formLogin.append('password', password);

    let response = this.http.post(url, formLogin);
    return response;
  }

}
