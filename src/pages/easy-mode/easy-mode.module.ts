import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EasyModePage } from './easy-mode';

@NgModule({
  declarations: [
    EasyModePage,
  ],
  imports: [
    IonicPageModule.forChild(EasyModePage),
  ],
})
export class EasyModePageModule {}
