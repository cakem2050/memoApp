import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {RegisterPage} from '../pages/register/register';
import {SigninPage} from "../pages/signin/signin";
import {FeedPage} from "../pages/feed/feed";
import {ProfilePage} from "../pages/profile/profile";
import {VocablistPage} from "../pages/vocablist/vocablist";
import {ListPage} from "../pages/list/list";
import {MinigamePage} from "../pages/minigame/minigame";
import {VocabprofilePage} from "../pages/vocabprofile/vocabprofile";
import {AddvocabPage} from "../pages/addvocab/addvocab";
import {AddnewlistPage} from "../pages/addnewlist/addnewlist";
import {MyvocabPage} from "../pages/myvocab/myvocab";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FirebaseProvider} from '../providers/firebase/firebase';

// FireBase
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { IonicStorageModule } from '@ionic/storage';



import { SeleteModePage } from '../pages/selete-mode/selete-mode';
import { HardModePage } from '../pages/hard-mode/hard-mode';
import { NormalModePage } from '../pages/normal-mode/normal-mode';
import { EasyModePage } from '../pages/easy-mode/easy-mode';
import { AnswerEasyModePage } from '../pages/answer-easy-mode/answer-easy-mode';
import { AnswerNormalModePage } from '../pages/answer-normal-mode/answer-normal-mode';
import { AnswerHardModePage } from '../pages/answer-hard-mode/answer-hard-mode';


import { ResultPage } from '../pages/result/result';

import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';



const firebaseConfig = {
    apiKey: "AIzaSyBTgLAvViEXdpt1_SA4-J0J9v8CjuOlIOs",
    authDomain: "memovocab-16b35.firebaseapp.com",
    databaseURL: "https://memovocab-16b35.firebaseio.com",
    projectId: "memovocab-16b35",
    storageBucket: "memovocab-16b35.appspot.com",
    messagingSenderId: "744524112868"
};

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        RegisterPage,
        SigninPage,
        FeedPage,
        ProfilePage,
        VocablistPage,
        ListPage,
        MinigamePage,
        VocabprofilePage,
        AddvocabPage,
        AddnewlistPage,
        TabsPage,
        MyvocabPage,
        SeleteModePage,
        HardModePage,
        NormalModePage,
        EasyModePage,
        AnswerEasyModePage,
        AnswerNormalModePage,
        AnswerHardModePage,
        ResultPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        RegisterPage,
        SigninPage,
        FeedPage,
        ProfilePage,
        VocablistPage,
        ListPage,
        MinigamePage,
        VocabprofilePage,
        AddvocabPage,
        AddnewlistPage,
        TabsPage,
        MyvocabPage,
        SeleteModePage,
        HardModePage,
        NormalModePage,
        EasyModePage,
        AnswerEasyModePage,
        AnswerNormalModePage,
        AnswerHardModePage,
        ResultPage
    ],
    providers: [
        SocialSharing,
        StatusBar,
        SplashScreen,
        Screenshot,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        FirebaseProvider
    ]
})
export class AppModule {
    rootPage: string = 'page-home';
}
