import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddnewlistPage } from '../addnewlist/addnewlist';
/**
 * Generated class for the AddvocabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addvocab',
  templateUrl: 'addvocab.html',
})
export class AddvocabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddvocabPage');
  }
  AddnewlistPage(){
    this.navCtrl.push(AddnewlistPage);
  }

}
