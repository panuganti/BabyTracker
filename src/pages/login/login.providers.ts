import { SMS } from '@ionic-native/sms';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Utils } from '../../library/utils';

// Mocks
import { SMSMock } from '../../mocks/sms.mock';

export class LoginProviders {
    public static getProviders() {
        let providers;
        if(document.URL.includes('https://') || document.URL.includes('http://')){
          // Use browser providers
          providers =   [
            { provide: SMS, useClass: SMSMock},
            FirebaseProvider,
            AngularFireDatabase,
            Utils
            ];  
            } else {
                // Use device providers
          providers = [
            SMS,
            FirebaseProvider,
            AngularFireDatabase,
            Utils
            ];  
        } 
        return providers;
    } 
}
