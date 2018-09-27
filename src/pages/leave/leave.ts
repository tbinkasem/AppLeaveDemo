import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-leave',
  templateUrl: 'leave.html',
})
export class LeavePage {

  leave: any;

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Please Login!!',
      subTitle: 'You not Login System',
      buttons: [{
        text: 'OK',
        handler: data => {
          this.navCtrl.setRoot(LoginPage);
        }
      }]
    });
    alert.present();
  }

}
