import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SeleteModePage} from '../selete-mode/selete-mode';
import {SocialSharing} from '@ionic-native/social-sharing';
import {Screenshot} from '@ionic-native/screenshot';

@IonicPage()
@Component({
    selector: 'page-result',
    templateUrl: 'result.html',
})
export class ResultPage {
    score: number;
    modeName: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, private screenshot: Screenshot) {
        this.score = navParams.get('score');
        this.modeName = navParams.get('modeName');
    }


    playAgain() {
        this.navCtrl.setRoot(SeleteModePage);

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ResultPage');
    }

    shareface() {
        // this.screenshot.URI(80).then(() => {
        //     console.log("pass")
        // }).catch(() => {
        //     // Error!
        // });
        let message = "ระดับความยาก" + this.modeName + "   คะแนนที่ได้ " + this.score;
        this.socialSharing.shareViaFacebook(message, null, "www.google.co.th").then(() => {
            console.log("pass")
        }).catch(() => {
            // Error!
        });
    }

}
