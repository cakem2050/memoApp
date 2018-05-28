import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HardModePage } from './hard-mode';

@NgModule({
  declarations: [
    HardModePage,
  ],
  imports: [
    IonicPageModule.forChild(HardModePage),
  ],
})
export class HardModePageModule {}
