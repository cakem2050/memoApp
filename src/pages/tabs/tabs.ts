import { Component } from '@angular/core';


import { FeedPage } from '../feed/feed';
import { MyvocabPage } from '../myvocab/myvocab';
import { AddvocabPage } from '../addvocab/addvocab';
import { MinigamePage } from '../minigame/minigame';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = MyvocabPage;
  tab3Root = AddvocabPage;
  tab4Root = MinigamePage;
  constructor() {

  }
}
