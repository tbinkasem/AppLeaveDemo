import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginServiceProvider]
})
export class LoginPage {

  model: Array<any>;
  formLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginService: LoginServiceProvider,
              public fb: FormBuilder,
              public alertControl: AlertController,
  ) {
    this.formLogin = this.fb.group({
      username: ["",Validators.required],
      password: ["", Validators.required]
    });
  }

  doLogin(){
    let user = this.formLogin.controls['username'].value;
    let pass = this.formLogin.controls['password'].value

    this.model = null;
    this.loginService.login(user, pass).subscribe(
      data => {

      },
      error => {
        let alert = this.alertControl.create({
          title: 'Error!!',
          message: 'DB Connect fail!!',
          buttons: ["OK"]
        });
        alert.present();
      }
    )
  }
}
