import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NormalModePage } from '../normal-mode/normal-mode'
import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-answer-normal-mode',
  templateUrl: 'answer-normal-mode.html',
})
export class AnswerNormalModePage {

  normalCode = "";
  Page: number;
  score: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.normalCode = navParams.get('normalCode');
    this.Page = navParams.get('Page');
    this.score = navParams.get('score');
  }

  n=12;
  answer="";
  result="";

  answerNormal(answer_normal){
    this.answer = answer_normal;
    console.log( this.answer);
    console.log(this.normalCode);
    
    
    //Check answer
  if(this.normalCode == this.answer){
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
                      setTimeout(() => {
                      this.n--;
                      setTimeout(() => {
                       this.n--;
                       this.result = "U";
                        setTimeout(() => {
                        if(this.Page < 10){
                          this.navCtrl.setRoot(NormalModePage,{Page: this.Page, score: this.score});
                          }
                        else{
                          this.navCtrl.setRoot(ResultPage,{Page: this.Page, score: this.score,modeName:"Normal Mode"});
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
  }, 1000);
}, 1000);
  }

}
