import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeleteModePage } from '../selete-mode/selete-mode';
import { AlertController } from 'ionic-angular';
import { AnswerHardModePage } from '../answer-hard-mode/answer-hard-mode';

@IonicPage()
@Component({
  selector: 'page-hard-mode',
  templateUrl: 'hard-mode.html',
})
export class HardModePage {

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
              '0','1','2','3','4','5','6','7','8','9'
             ];


    h1 = '';
    h2 = '';
    h3 = '';
    h4 = '';
    h5 = '';
    h6 = '';
    h7 = '';
    h8 = '';
    hardCode = '';
    n=12;
    flag = 0;

    generateHardCode(){
      if(this.flag==0){
      this.flag=1;
      this.h1 = this.alphabet[Math.floor(Math.random()*61)+0];
      this.h2 = this.alphabet[Math.floor(Math.random()*61)+0];
      this.h3 = this.alphabet[Math.floor(Math.random()*61)+0];
      this.h4 = this.alphabet[Math.floor(Math.random()*61)+0];
      this.h5 = this.alphabet[Math.floor(Math.random()*61)+0];
      this.h6 = this.alphabet[Math.floor(Math.random()*61)+0];
      this.h7 = this.alphabet[Math.floor(Math.random()*61)+0];
      this.h8 = this.alphabet[Math.floor(Math.random()*61)+0];
           
      this.hardCode = this.h1+this.h2+this.h3+this.h4+this.h5+this.h6+this.h7+this.h8;
              console.log (this.hardCode);
             
             }
      }


    
 


  ionViewDidLoad() {
    this.generateHardCode();
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
                              this.n--;
                              setTimeout(() => {
                              this.n--;
                                setTimeout(() => {
                                  this.navCtrl.setRoot(AnswerHardModePage,{hardCode: this.hardCode, Page: this.Page,score: this.score});
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
          }, 1000);
        }, 1000);
  }

}
