import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeleteModePage } from './selete-mode';

@NgModule({
  declarations: [
    SeleteModePage,
  ],
  imports: [
    IonicPageModule.forChild(SeleteModePage),
  ],
})
export class SeleteModePageModule {}
