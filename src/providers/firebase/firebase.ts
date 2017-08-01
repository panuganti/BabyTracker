import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseProvider {
  users: FirebaseListObservable<any>;
  constructor(private afDb: AngularFireDatabase) {
    this.users = this.afDb.list('/UsersV2');
  }

  addUser(phone: string, email: string) {
    this.users.push({phone: phone, email: email});
  }
}
