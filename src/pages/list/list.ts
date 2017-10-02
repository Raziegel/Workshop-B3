import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { ConnectionPage } from '../connection/connection';
@Component({
  templateUrl: 'list.html'
})
export class ListPage {
  // this tells the list component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(public navCtrl: NavController) {
    if(!localStorage.getItem("token")) {
      navCtrl.setRoot(LoginPage);
    }
  }
}
