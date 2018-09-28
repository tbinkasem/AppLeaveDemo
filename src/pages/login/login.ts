import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginServiceProvider]
})
export class LoginPage {

  username = "";
  password= "";
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginService: LoginServiceProvider,
              public alertControl: AlertController,
  ) {
    
  }

  disMiss(){
    this.navCtrl.setRoot(HomePage);
  }

  doLogin(event, username, password){
    this.loginService.doLogin(username,password).subscribe(
      data =>{
        this.item = data.message;
        console.log("item", + this.item);
      }
    )
  }
}
