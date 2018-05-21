import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VocablistPage } from '../vocablist/vocablist';
import { AddvocabPage } from '../addvocab/addvocab';
/**
 * Generated class for the MyvocabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myvocab',
  templateUrl: 'myvocab.html',
})
export class MyvocabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyvocabPage');
  }

  vocablistPage(){
    this.navCtrl.push(VocablistPage);
  }

  AddvocabPage(){
    this.navCtrl.push(AddvocabPage);
  }

}
