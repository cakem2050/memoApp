import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VocablistPage } from './vocablist';

@NgModule({
  declarations: [
    VocablistPage,
  ],
  imports: [
    IonicPageModule.forChild(VocablistPage),
  ],
})
export class VocablistPageModule {}
