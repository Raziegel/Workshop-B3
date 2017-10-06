import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController,ToastController,AlertController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@gfi.fr',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,public alertCtrl: AlertController) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      // this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
  var s = this.account.email.toString().search("@gfi.fr");
  if(s !== -1 ){
  
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }else{

    let confirm = this.alertCtrl.create({
      title: 'Identifiants invalides.',
      message: '',
      buttons: [
        {
          text: 'OK',
          handler: () => {

          }
        }

      ]
    });
    confirm.present();

  }

  }



  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
