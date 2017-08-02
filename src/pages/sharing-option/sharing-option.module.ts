import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharingOptionPage } from './sharing-option';

@NgModule({
  declarations: [
    SharingOptionPage,
  ],
  imports: [
    IonicPageModule.forChild(SharingOptionPage),
  ],
})
export class SharingOptionPageModule {}
