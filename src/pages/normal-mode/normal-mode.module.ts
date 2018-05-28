import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NormalModePage } from './normal-mode';

@NgModule({
  declarations: [
    NormalModePage,
  ],
  imports: [
    IonicPageModule.forChild(NormalModePage),
  ],
})
export class NormalModePageModule {}
