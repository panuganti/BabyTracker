import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabyProfilePage } from './baby-profile';

@NgModule({
  declarations: [
    BabyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(BabyProfilePage),
  ],
})
export class BabyProfilePageModule {}
