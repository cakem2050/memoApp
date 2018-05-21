import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VocablistPage } from '../vocablist/vocablist';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  VocablistPage(){
    this.navCtrl.push(VocablistPage);
  }
  profilePage(){
    this.navCtrl.push(ProfilePage);
  }
}
