import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyBs2weVCgjuOHAC5zmMOX7gk30XtRtIT1k",
    authDomain: "babytracker-a03e3.firebaseapp.com",
    databaseURL: "https://babytracker-a03e3.firebaseio.com",
    projectId: "babytracker-a03e3",
    storageBucket: "babytracker-a03e3.appspot.com",
    messagingSenderId: "811005419180"
  };

enableProdMode();

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider
  ]
})
export class AppModule { }
