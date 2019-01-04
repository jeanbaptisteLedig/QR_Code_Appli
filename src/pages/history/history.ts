import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryProvider } from '../../providers/history/history';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  qrcodes: any[] = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public history: HistoryProvider) {
  }

  ionViewDidLoad() {
    this.history.change.subscribe((qrcodes: any[]) => {
      this.qrcodes = qrcodes;
    }, console.error);
    this.history.load();
    //this.keys = Object.keys(this.qrcodes);
  }

}
