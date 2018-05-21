import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinigamePage } from './minigame';

@NgModule({
  declarations: [
    MinigamePage,
  ],
  imports: [
    IonicPageModule.forChild(MinigamePage),
  ],
})
export class MinigamePageModule {}
