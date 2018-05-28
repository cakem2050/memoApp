 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EasyModePage } from '../easy-mode/easy-mode';
import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-answer-easy-mode',
  templateUrl: 'answer-easy-mode.html',
})
export class AnswerEasyModePage {

  easyCode = "";
  Page: number;
  score: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.easyCode = navParams.get('easyCode');
    this.Page = navParams.get('Page');
    this.score = navParams.get('score');
  }

  n=10;
  answer="";
  result="";
  
  answerEasy(answer_easy){
    this.answer = answer_easy;
    console.log( this.answer);

    //Check answer
  if(this.easyCode == this.answer){
   this.result = "T";
    setTimeout(() => {
      if(this.Page < 10){
        this.score++;
        //this.navCtrl.setRoot(EasyModePage,{Page: this.Page, score: this.score});
      }
      else{
        //this.navCtrl.setRoot(ResultPage);
      }
    }, 2000);
    
  }else{
    this.result = "F";
  }

  }

  
  ionViewDidLoad() {
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
                       this.result = "U";
                        setTimeout(() => {
                        if(this.Page < 10){
                          this.navCtrl.setRoot(EasyModePage,{Page: this.Page, score: this.score});
                          }
                        else{
                          this.navCtrl.setRoot(ResultPage,{Page: this.Page, score: this.score,modeName:"Easy Mode"});
                          }
                        }, 2000);
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
