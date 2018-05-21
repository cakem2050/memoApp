import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {AboutPage} from '../about/about';
import {RegisterPage} from '../register/register';
import {SigninPage} from "../signin/signin";
import {FeedPage} from "../feed/feed";

import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';

import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    aboutPage = AboutPage;
    signup = RegisterPage;
    signIn = SigninPage;
    feedPage = FeedPage;

    items: Observable<any[]>;
    displayName;
    user;

    constructor(public navCtrl: NavController,
                private afAuth: AngularFireAuth,
                private db: AngularFireDatabase,private storage: Storage) {
    }
    signInWithFacebook() {
        this.afAuth.auth
            .signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(res => {
                let email = res.user.email;
                console.log(res.user)
                this.items = this.db.object('/user/'+res.user.G).valueChanges();
                this.items.subscribe(actions => {
                    if(actions === null){
                        const result2 = this.db.object('user/'+res.user.G).set({
                            email: res.user.email
                        });
                    }
                });
                this.storage.set('username',res.user.G);
                //Go to feed
                this.navCtrl.setRoot(this.feedPage);
            }).catch((error)=>{
            console.log(error)
        });

    }

    signOut() {
        this.afAuth.auth.signOut();
    }
}
