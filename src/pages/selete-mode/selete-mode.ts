import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {AlertController} from 'ionic-angular';

import {EasyModePage} from '../easy-mode/easy-mode';
import {NormalModePage} from '../normal-mode/normal-mode';
import {HardModePage} from '../hard-mode/hard-mode';
import {Storage} from "@ionic/storage";
import {HomePage} from "../home/home";

import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';


@IonicPage()
@Component({
    selector: 'page-selete-mode',
    templateUrl: 'selete-mode.html',
})
export class SeleteModePage {
    gamemode: string;
    name: string;

    constructor(
        private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public storage: Storage) {
        this.storage.get('name').then((val) => {
            if (name === null) {
                this.navCtrl.setRoot(HomePage);
            } else {
                this.name = val;
            }
        });
    }

    easyAlert() {
        let alert = this.alertCtrl.create({
            title: 'Easy Mode !',
            message: `
      <p> เป็นการจดคำตัวอักษร 4 ตัว </p>
      <p>(ตัวพิมพ์ใหญ่)</p>
      <p>กติกา</p>
      <ul>
        <li>มีเวลาในการจดจำ 3 วินาที</li>
        <li>มีเวลาในการตอบ 10 วินาที</li>
      </ul>
    `,
            buttons: [{
                text: 'PLAY',
                handler: () => {
                    this.navCtrl.push(EasyModePage, {Page: 0, score: 0});
                }
            }]
        });
        alert.present();
    }

    normalAlert() {
        let alert = this.alertCtrl.create({
            title: 'Normal Mode !',
            message: `
      <p> เป็นการจดคำตัวอักษร 6 ตัว </p>
      <p>(ตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก)</p>
      <p>กติกา</p>
      <ul>
        <li>มีเวลาในการจดจำ 10 วินาที</li>
        <li>มีเวลาในการตอบ 12 วินาที</li>
      </ul>
    `,
            buttons: [{
                text: 'PLAY',
                handler: () => {
                    this.navCtrl.push(NormalModePage, {Page: 0, score: 0});
                }
            }]
        });
        alert.present();
    }

    hardAlert() {
        let alert = this.alertCtrl.create({
            title: 'Hard Mode !',
            message: `
      <p> เป็นการจดคำตัวอักษร 8 ตัว </p>
      <p>(ตัวพิมพ์ใหญ่ ตัวพิมพ์เล็กและตัวเลข)</p>
      <p>กติกา</p>
      <ul>
        <li>มีเวลาในการจดจำ 12 วินาที</li>
        <li>มีเวลาในการตอบ 15 วินาที</li>
      </ul>
    `,
            buttons: [{
                text: 'PLAY',
                handler: () => {
                    this.navCtrl.push(HardModePage, {Page: 0, score: 0});
                }
            }]
        });
        alert.present();
    }

    easyMode() {
        this.easyAlert();
    }

    normolMode() {
        this.normalAlert();
    }


    hardMode() {
        this.hardAlert();
    }


    gameMode() {
        console.log(this.gamemode)

        // if(gameMode == 'hard'){
        //   this.navCtrl.push(HardModePage);
        // }

        // if(gameMode == 'normal'){
        //   this.navCtrl.push(NormalModePage);
        // }

        // if(gameMode == 'easy'){
        //   this.navCtrl.push(EasyModePage);
        // }

    }

    signOut() {
        this.afAuth.auth.signOut();
        this.navCtrl.setRoot(HomePage)
    }


}
