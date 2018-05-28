import { Component ,Input, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HardModePage } from '../hard-mode/hard-mode';
import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-answer-hard-mode',
  templateUrl: 'answer-hard-mode.html',
})
export class AnswerHardModePage {

  @ViewChild('input') myInput ;

  hardCode = "";
  Page: number;
  score: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.hardCode = navParams.get('hardCode');
    this.Page = navParams.get('Page');
    this.score = navParams.get('score');
  }


  n=15;
  answer="";
  result="";

  answerHard(answer_hard){
    this.answer = answer_hard;
    console.log( this.answer);
    console.log( this.hardCode);
    //Check answer
  if(this.hardCode == this.answer){
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
    this.myInput.setFocus();
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
                      this.n--;
                      setTimeout(() => {
                      this.n--;
                      setTimeout(() => {
                       this.n--;
                       this.result = "U";
                        setTimeout(() => {
                        if(this.Page < 10){
                          this.navCtrl.setRoot(HardModePage,{Page: this.Page, score: this.score});
                          }
                        else{
                          this.navCtrl.setRoot(ResultPage,{Page: this.Page, score: this.score,modeName:"Hard Mode"});
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
}, 1000);
}, 1000);
}, 1000);
  }

}
