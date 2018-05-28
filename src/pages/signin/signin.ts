import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl} from '@angular/forms';
import { Storage } from '@ionic/storage';

import {SeleteModePage} from "../selete-mode/selete-mode";

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {FeedPage} from "../feed/feed";

@IonicPage()
@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html',
})
export class SigninPage {
    empty:boolean = false;
    emptyinput:boolean = false;
    loginForm: FormGroup;
    items: Observable<any>;
    user:any;
    feedPage = FeedPage;

    constructor(public navCtrl: NavController,
                private formBuilder: FormBuilder,
                private db: AngularFireDatabase,
                private storage: Storage) {
        this.loginForm = this.formBuilder.group({
            username: [''],
            password: ['']
        });
        //How to get localStorage
        this.storage.get('username').then((val) => {
            console.log('Your username is', val);
        });
    }

    checkLogin(){
        if(this.loginForm.controls.username.value !== '' && this.loginForm.controls.password.value !== ''){
            this.items = this.db.object('/user/'+this.loginForm.controls.username.value).valueChanges();
            this.items.subscribe(actions => {
                if(actions === null){
                    this.empty = true;
                }else{
                    if(this.loginForm.controls.password.value === actions.password){
                        this.storage.set('username',actions.username);
                        this.storage.set('name',actions.username);
                        //Got TO Feed
                        this.navCtrl.setRoot(SeleteModePage);
                    }else{
                        this.empty = true;
                    }
                }
            });
        }else{
            this.emptyinput = true;
            setTimeout(()=>{
                this.emptyinput =false;
            },3000);
        }
    }

}
