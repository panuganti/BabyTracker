import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-babies',
  templateUrl: 'babies.html',
})
export class BabiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openNewBabyDialog() {}
}
