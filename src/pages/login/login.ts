import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SMS } from "@ionic-native/sms";
import { Utils } from '../../library/utils';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams
    , private afAuth: AngularFireAuth, private sms: SMS, private utils: Utils, private afDb: FirebaseProvider
  ) {
  }

  async verify() {
    this.phone = window.localStorage.getItem('phone');
    var secret = window.localStorage.getItem('secret');
    if (this.code != secret) {
      this.setError('Incorrect Code');
      return;
    }
    if (this.phone && secret) {
      await this.createUser();
    }
    this.navCtrl.setRoot('BabiesPage');
  }

  async createUser() {
    try {
      var secret = window.localStorage.getItem('secret');
      let emailFromPhone: string = this.utils.emailFromPhone(this.phone, this.attempt);
      await this.afAuth.auth.createUserWithEmailAndPassword(emailFromPhone, secret);
      window.localStorage.setItem('email', emailFromPhone);
      this.afDb.addUser(this.phone, this.email);
    }
    catch (err) {
      await this.handleAuthErrorAsync(err, 'signup');
    }
  }

  async handleAuthErrorAsync(err: any, method: string) {
    if (method == 'signup' && err.code == 'auth/email-already-in-use') {
      this.attempt++;
      await this.createUser();
    }
    if (err.code == 'auth/network-request-failed') {
      this.error = "Unable to connect to server. Try again after some time";
    }
    else if (method == 'login' && err.code == 'auth/user-not-found') {
      this.error = "No such  user with the email provided. Uncheck \"I'm existing user\" to sign up ";
    }
    else if (method == 'signup' && err.code == 'auth/weak-password') {
      this.error = err.message;
    }
    else if (err.code == 'invalid-email') {
      this.error = "Invalid Email";
    }
    else if (method == 'login' && err.code == 'auth/wrong-password') {
      this.error = "Wrong Password";
    }
    else {
      this.error = err.message;
    }
    this.showError = true;
  }

  async sendSecretCodeSMS() {
    var secret = this.utils.generateSecretCode();
    try {
      var succ = await this.sms.send(this.phone.toString(), 'Your secret code is: ' + secret);
      if (succ != 'OK') {
        this.setError('SMS sending failed');
        return;
      }
      this.switchToVerification();
      window.localStorage.setItem('secret', secret.toString());
      window.localStorage.setItem('phone', this.phone.toString());
    }
    catch (err) {
      console.log(err);
    }
  }

  switchToVerification() {
    this.stage = 'verify code';
  }

  setError(message: string) {
    this.error = message;
    this.showError = true;
  }

  attempt: number = 0;
  code: string;
  phone: string;
  email: string;
  showError: boolean = false;
  error: string;
  stage: string = 'code generation';
}
