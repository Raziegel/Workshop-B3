import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items,public alertCtrl: AlertController) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    // console.log('coucou');
    if (!val || !val.trim()) {
      this.currentItems = [];

      return;
    }
    this.currentItems = this.items.query({
      title: val
    });
  }
  opensearch(ev) {

    let val = ev.target.value;
    // console.log('coucou');
    if (!val || !val.trim()) {
      this.currentItems = [];

      return;
    }
    this.currentItems = this.items.query({
      title: val,
      status: "open"
    });
  }
  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  deleteItem(item) {

    let confirm = this.alertCtrl.create({
      title: 'Delete this need?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.items.delete(item);
            //recherche avec la valeur de la searchbar
          }
        }
      ]
    });
    confirm.present();

  }
}
