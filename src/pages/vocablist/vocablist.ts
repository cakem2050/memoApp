import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MinigamePage } from '../minigame/minigame';
import { VocabprofilePage } from '../vocabprofile/vocabprofile';
import { AddvocabPage } from '../addvocab/addvocab';

/**
 * Generated class for the VocablistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vocablist',
  templateUrl: 'vocablist.html',
})
export class VocablistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocablistPage');
  }

  gamaPage(){
    this.navCtrl.push(MinigamePage);
  }

  vocabprofilePage(){
    this.navCtrl.push(VocabprofilePage);
  }

  
}
