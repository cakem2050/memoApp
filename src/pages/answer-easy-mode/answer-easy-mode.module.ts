import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnswerEasyModePage } from './answer-easy-mode';

@NgModule({
  declarations: [
    AnswerEasyModePage,
  ],
  imports: [
    IonicPageModule.forChild(AnswerEasyModePage),
  ],
})
export class AnswerEasyModePageModule {}
