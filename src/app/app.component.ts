import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'SettingsPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.rootPage = page.component;
  }

  pages: any = [
    {
      title: 'Home',
      icon: 'ios-home-outline',
      count: 0,
      component: 'TrackerPage'
    },
    {
      title: 'Babies',
      icon: 'ios-happy-outline',
      count: 0,
      component: 'ProfilesPage'
    }
  ];

}

