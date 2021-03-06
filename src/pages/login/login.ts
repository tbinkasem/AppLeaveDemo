import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginServiceProvider]
})
export class LoginPage {

  model: Array<any>;
  formLogin: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loginservice: LoginServiceProvider,
              private fb: FormBuilder,
              public alertCtrl: AlertController
              ) {
                this.formLogin = this.fb.group({
                  username: ["", Validators.required],
                  password: ["",Validators.required]
                });
  }

  doLogin(){
    let username = this.formLogin.controls['username'].value;
    let password = this.formLogin.controls['password'].value;

    this.model = null;
    this.loginservice.doLogin(username, password).subscribe(
      data => {
        if(data.toString() == 'denied'){
          this.alertCtrl.create({
            title: "Permission",
            message: "Not Permission"
          });
        }else{
          this.navCtrl.push(HomePage);
        }
      },
      error=>{
        let alert = this.alertCtrl.create({
          title: "ERROR!!",
          message: "Network Error!!",
          buttons: ["OK"]
        });
        alert.present();
      }
    )
  }

}
