import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddvocabPage } from './addvocab';

@NgModule({
  declarations: [
    AddvocabPage,
  ],
  imports: [
    IonicPageModule.forChild(AddvocabPage),
  ],
})
export class AddvocabPageModule {}
