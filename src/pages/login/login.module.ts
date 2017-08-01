import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { SMS } from "@ionic-native/sms";
import { Utils } from '../../library/utils';
import { LoginProviders } from './login.providers';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers: LoginProviders.getProviders()
})
export class LoginPageModule {}
