import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabiesPage } from './babies';

@NgModule({
  declarations: [
    BabiesPage,
  ],
  imports: [
    IonicPageModule.forChild(BabiesPage),
  ],
})
export class BabiesPageModule {}
