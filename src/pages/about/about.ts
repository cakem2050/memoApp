import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl} from '@angular/forms';
@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {
    loginForm: FormGroup;

    constructor(public navCtrl: NavController,
                private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            username:[''],
            password:['']
        });
    }

}
