import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyvocabPage } from './myvocab';

@NgModule({
  declarations: [
    MyvocabPage,
  ],
  imports: [
    IonicPageModule.forChild(MyvocabPage),
  ],
})
export class MyvocabPageModule {}
