import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SeleteModePage } from '../selete-mode/selete-mode';
import { AnswerEasyModePage } from '../answer-easy-mode/answer-easy-mode';

@IonicPage()
@Component({
  selector: 'page-easy-mode',
  templateUrl: 'easy-mode.html',
})
export class EasyModePage {

  Page: number;
  score:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.Page = navParams.get('Page');
    this.score = navParams.get('score');
    this.Page++;
  }

  alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  e1 = '';
  e2 = '';
  e3 = '';
  e4 = '';

  easyCode = '';
  n=3;
  flag = 0;

  generateEasyCode(){
    if(this.flag==0){
      this.flag=1;
     this.e1 = this.alphabet[Math.floor(Math.random()*25)+0];
      this.e2 = this.alphabet[Math.floor(Math.random()*25)+0];
      this.e3 = this.alphabet[Math.floor(Math.random()*25)+0];
      this.e4 = this.alphabet[Math.floor(Math.random()*25)+0];
      this.easyCode = this.e1+this.e2+this.e3+this.e4;

        console.log ('---------',this.easyCode)
    }
    
    }

  ionViewDidLoad() {
    this.generateEasyCode();
    //Count down show Question Easy Mode
        setTimeout(() => {
          this.n--;
          setTimeout(() => {
            this.n--;
            setTimeout(() => {
              this.n--;
              setTimeout(() => {
                this.navCtrl.setRoot(AnswerEasyModePage,{easyCode: this.easyCode, Page: this.Page,score: this.score});
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
  }

}
