import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabySleeperPage } from './baby-sleeper';

@NgModule({
  declarations: [
    BabySleeperPage,
  ],
  imports: [
    IonicPageModule.forChild(BabySleeperPage),
  ],
})
export class BabySleeperPageModule {}
