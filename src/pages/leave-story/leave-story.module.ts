import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveStoryPage } from './leave-story';

@NgModule({
  declarations: [
    LeaveStoryPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveStoryPage),
  ],
})
export class LeaveStoryPageModule {}
