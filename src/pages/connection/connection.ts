import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Auth, User,UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

let details: UserDetails = {'email': 'hi@ionic.io', 'password': 'puppies123'};

@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html'
})
export class ConnectionPage {

  loading: any;
  loginData = { username:'', password:'' };
  data: any;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {  }
  doLogin() {
      this.showLoader();
      this.authService.login(this.loginData).then((result) => {
        this.loading.dismiss();
        this.data = result;
        localStorage.setItem('token', this.data.access_token);
        // this.navCtrl.setRoot(TabsPage);
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      });
    }
    showLoader(){
   this.loading = this.loadingCtrl.create({
       content: 'Authenticating...'
   });
   this.loading.present();
 }
 presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
