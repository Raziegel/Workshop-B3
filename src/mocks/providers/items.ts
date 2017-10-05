import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "date" : "01/01/17",
        "client" :"La tête dans la toile",
        "contact_name" : "FERRONNIERE Alan",
        "title" : "DeploiementBDDOracle",
        "full_description" : "lorem ipsum visalys komugi",
        "key_success_1" : "Low cost",
        "key_success_2" : "High tech",
        "key_success_3" : "Brand reputation",
        "start_at_the_latest" : "01/06/2017",
        "duration" : "2 mois",
        "frequence" : "2 jours/semaines",
        "location" : "Nantes",
        "rate" : "12000€",
        "consultants_name_1": "GUILLON Benjamin ",
        "consultants_name_2": "MORELLE Olivier",
        "consultants_name_3": "PRUD'HOMME Thibaut",
        "consultants_name_4": "MAZZA Yoann",
        "status" : "win",
      },
      {
        "date" : "01/01/17",
        "client" :"Atool développement",
        "contact_name" : "IMOUCHE Guillaume",
        "title" : "DeploiementInfra",
        "full_description" : "lorem ipsum meruem teu",
        "key_success_1" : "High tech",
        "start_at_the_latest" : "01/03/2017",
        "duration" : "1 mois",
        "frequence" : "1 jours/semaines",
        "location" : "Nantes",
        "rate" : "2400€",
        "consultants_name_1": "GUILLON Benjamin",
        "status" : "win",
      },
      {
        "date" : "05/06/17",
        "client" :"PunCil Case",
        "contact_name" : "JOKEMAN Henry",
        "title" : "DeploiementSiteWeb",
        "full_description" : "lorem ipsum gon tamira",
        "key_success_1" : "Low cost",
        "start_at_the_latest" : "01/06/2017",
        "duration" : "2 mois",
        "frequence" : "3 jours/semaines",
        "location" : "Nantes",
        "rate" : "2400€",
        "consultants_name_1": "PRUD'HOMME Thibaut",
        "status" : "lost",
      },
      {
        "date" : "25/09/17",
        "client" :"EPSI Nantes",
        "contact_name" : "REINOLD Frédéric",
        "title" : "IntiltuléWorkshopEtudiant",
        "full_description" : "lorem ipsum kirua lighty",
        "key_success_1" : "Innovation",
        "key_success_2" : "Brand reputation",
        "start_at_the_latest" : "02/10/2017",
        "duration" : "1 mois",
        "frequence" : "5 jours/semaines",
        "location" : "Nantes",
        "rate" : "9000€",
        "consultants_name_1": "EVERS Steeve",
        "status" : "open",
      },
      {
        "date" : "04/10/17",
        "client" :"SNCF",
        "contact_name" : "TOUPARAIL MArion",
        "title" : "ConfigurationPosteClient",
        "full_description" : "lorem ipsum kurapika omna",
        "key_success_1" : "High tech",
        "key_success_2" : "Brand reputation",
        "start_at_the_latest" : "06/11/2017",
        "duration" : "1 mois",
        "frequence" : "3 jours/semaines",
        "location" : "Nantes",
        "rate" : "15000€",
        "consultants_name_1": "MAZZA Yoann",
        "consultants_name_2": "MORELLE Olivier",
        "status" : "open",
      }
    ];


    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }
update(item: Item, title, description,location,companyName,contactName, ksfactor1, ksfactor2, ksfactor3, rate, duration, frequency ){
  
  item["title"] = title;
  item["full_description"] = description;
  item["location"] = location;
  item["client"] = companyName;
  item["contact_name"] = contactName;
  item["key_success_1"] = ksfactor1;
  item["key_success_2"] = ksfactor2;
  item["key_success_3"] = ksfactor3;
  item["rate"] = rate;
  item["duration"] = duration;
  item["frequency"] = frequency;


}
  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
