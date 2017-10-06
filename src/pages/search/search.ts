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
  searchbar : "";
  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items,public alertCtrl: AlertController) { }

  /**
   * Perform a service for the proper items.
   */
   isOpenActive:boolean = false;
   isWinActive:boolean = false;
  isLostActive:boolean = false;
  isTitleActive:boolean = false;
  isDateActive:boolean = false;
  isClientActive:boolean = false;

  getItems(ev) {
    this.isClientActive = false;
    this.isWinActive = false;
      this.isOpenActive = false;
      this.isTitleActive = false;
        this.isDateActive = false;
        this.isLostActive = false;
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
    this.isOpenActive = true;

    this.isWinActive = false;
      this.isLostActive = false;
      this.isTitleActive = false;
        this.isDateActive = false;
        this.isClientActive = false;
    // let val = this.searchbar;
    // if (!val || !val.trim()) {
    //   this.currentItems = [];
    //
    //   return;
    // }
    this.currentItems = this.items.query({
      status: "open"
    });

  }
  winsearch(ev) {
    this.isWinActive = true;

    this.isLostActive = false;
      this.isOpenActive = false;
      this.isTitleActive = false;
        this.isDateActive = false;
        this.isClientActive = false;
    // let val = this.searchbar;
    // if (!val || !val.trim()) {
    //   this.currentItems = [];
    //
    //   return;
    // }
    this.currentItems = this.items.query({
      status: "win"
    });

  }
  lostsearch(ev) {
    this.isLostActive = true;

    this.isWinActive = false;
      this.isOpenActive = false;
      this.isTitleActive = false;
        this.isDateActive = false;
        this.isClientActive = false;
    // let val = this.searchbar;
    // if (!val || !val.trim()) {
    //   this.currentItems = [];
    //
    //   return;
    // }
    this.currentItems = this.items.query({
      status: "lost"
    });

  }
  titlesearch(ev) {
    this.isTitleActive = true;

    this.isWinActive = false;
      this.isOpenActive = false;
      this.isLostActive = false;
        this.isDateActive = false;
        this.isClientActive = false;

    let val = this.searchbar;
    if (!val ) {
      this.currentItems = [];

      return;
    }
    this.currentItems = this.items.query({
      title: val
    });

  }
  datesearch(ev) {
    this.isDateActive = true;

    this.isWinActive = false;
      this.isOpenActive = false;
      this.isTitleActive = false;
        this.isLostActive = false;
        this.isClientActive = false;

    let val = this.searchbar;
    if (!val ) {
      this.currentItems = [];

      return;
    }
    this.currentItems = this.items.query({
      date: val
    });

  }
  clientsearch(ev) {
    this.isClientActive = true;

    this.isWinActive = false;
      this.isOpenActive = false;
      this.isTitleActive = false;
        this.isDateActive = false;
        this.isLostActive = false;

    let val = this.searchbar;
    if (!val ) {
      this.currentItems = [];

      return;
    }
    this.currentItems = this.items.query({
      client: val
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
            let val = this.searchbar;
            if (!val ) {
              this.currentItems = [];

              return;
            }
            this.currentItems = this.items.query({
              title: val
            });
          }
        }
      ]
    });
    confirm.present();

  }
}
