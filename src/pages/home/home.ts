import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import {RegisterPage} from '../register/register';
import {SigninPage} from "../signin/signin";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage = AboutPage;
  signup = RegisterPage;
  signIn = SigninPage;
  constructor(public navCtrl: NavController) {
  }
}
