import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {AboutPage} from '../about/about';
import {RegisterPage} from '../register/register';
import {SigninPage} from "../signin/signin";
import {FeedPage} from "../feed/feed";

import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';

import { Storage } from '@ionic/storage';

import {SeleteModePage} from "../selete-mode/selete-mode";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    aboutPage = AboutPage;
    signup = RegisterPage;
    signIn = SigninPage;

    items: Observable<object[]>;
    // items: any[];
    user;

    constructor(public navCtrl: NavController,
                private afAuth: AngularFireAuth,
                private db: AngularFireDatabase,private storage: Storage) {
    }
    signInWithFacebook() {
        this.afAuth.auth
            .signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(res => {
                console.log(res);
                this.db.object('/user/'+res.user.G).valueChanges().subscribe(actions => {
                    if(actions === null){
                        this.db.object('user/'+res.user.G).set({
                            email: res.user.email
                        });
                    }
                });
                this.storage.set('username',res.user.G);
                this.storage.set('name',res.user.displayName);

                //Go to feed
                this.navCtrl.setRoot(SeleteModePage);
            }).catch((error)=>{
            console.log(error)
        });

    }

    signOut() {
        this.afAuth.auth.signOut();
    }
}
