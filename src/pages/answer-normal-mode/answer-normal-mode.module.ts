import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnswerNormalModePage } from './answer-normal-mode';

@NgModule({
  declarations: [
    AnswerNormalModePage,
  ],
  imports: [
    IonicPageModule.forChild(AnswerNormalModePage),
  ],
})
export class AnswerNormalModePageModule {}
