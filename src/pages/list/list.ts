import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  // this tells the list component which Pages
  // should be each tab's root Page

  constructor(public navCtrl: NavController) {

  }
}
