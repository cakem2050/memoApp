import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';

import { user } from '../../models/user';
import { HomePage } from '../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
    public confirm = false;
    public empty = false;
    user = {} as user;
    fainal_password: string;
    result: string;
    className: string = "class";
    password: string;
    confirmpass: string;
    signupForm: FormGroup;
    constructor(
        private alertCtrl: AlertController,
        private afAuth: AngularFireAuth,
        public navCtrl: NavController,
        public navParams: NavParams,
        private db: AngularFireDatabase,
        private formBuilder: FormBuilder) {
        this.signupForm = this.formBuilder.group({
            username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            password: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            confirm_password: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        });
    }
    checkPassword():boolean{
        if(this.signupForm.controls.password.value == this.signupForm.controls.confirm_password.value ){
            return true;
        }else{
            return false;
        }
    }

    checkPass(): void {
        if(this.signupForm.controls.username.value == '' ||this.signupForm.controls.password.value == '' ||this.signupForm.controls.confirm_password.value == '' ||this.signupForm.controls.email.value == ''  ){
            this.empty=true;
        }else{
            this.empty=false;
            if(!this.checkPassword()){
                this.signupForm.controls.password.setValue("");
                this.signupForm.controls.confirm_password.setValue("");
            }else{
                this.fainal_password = this.signupForm.controls.confirm_password.value;
                const result2 = this.db.object('user/' + this.signupForm.controls.username.value).set({
                    username: this.signupForm.controls.username.value,
                    password: this.fainal_password,
                    email: this.signupForm.controls.email.value
                });
                let alert = this.alertCtrl.create({
                    title: 'สมัครสมาชิกสำเร็จ',
                });
                alert.present();
                setTimeout(()=>{
                    this.navCtrl.setRoot(HomePage);
                },1500);
            }
        }
    }

}