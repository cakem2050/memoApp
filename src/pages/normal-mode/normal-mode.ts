import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SeleteModePage } from '../selete-mode/selete-mode';
import { AnswerNormalModePage } from '../answer-normal-mode/answer-normal-mode';

@IonicPage()
@Component({
  selector: 'page-normal-mode',
  templateUrl: 'normal-mode.html',
})
export class NormalModePage {

  Page: number;
  score:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.Page = navParams.get('Page');
    this.score = navParams.get('score');
    this.Page++;
  }

  alphabet = [
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
            ];
   n1 = '';
   n2 = '';
   n3 = '';
   n4 = '';
   n5 = '';
   n6 = '';
   n=10;
   flag = 0;
   normalCode = '';

   generateNormalCode(){
    if(this.flag==0){
      this.flag=1;
      this.n1 = this.alphabet[Math.floor(Math.random()*51)+0];
      this.n2 = this.alphabet[Math.floor(Math.random()*51)+0];
      this.n3 = this.alphabet[Math.floor(Math.random()*51)+0];
      this.n4 = this.alphabet[Math.floor(Math.random()*51)+0];
      this.n5 = this.alphabet[Math.floor(Math.random()*51)+0];
      this.n6 = this.alphabet[Math.floor(Math.random()*51)+0];
      
      this.normalCode = this.n1+this.n2+this.n3+this.n4+this.n5+this.n6;
        console.log (this.normalCode);
    }
    }

  ionViewDidLoad() {
    
    this.generateNormalCode();
    //Count down show Question Normal Mode
    setTimeout(() => {
      this.n--;
      setTimeout(() => {
        this.n--;
        setTimeout(() => {
          this.n--;
          setTimeout(() => {
            this.n--;
            setTimeout(() => {
              this.n--;
              setTimeout(() => {
                this.n--;
                setTimeout(() => {
                  this.n--;
                  setTimeout(() => {
                    this.n--;
                      setTimeout(() => {
                       this.n--;
                        setTimeout(() => {
                          this.n--;
                            setTimeout(() => {
                              this.navCtrl.setRoot(AnswerNormalModePage,{normalCode: this.normalCode, Page: this.Page,score: this.score});
                            }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);

  }

}
