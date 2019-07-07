import * as app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDHrBePVAgcStl2PI3m2t4d4tlwwbH1R0I',
  authDomain: 'react-firebase-admin.firebaseapp.com',
  databaseURL: 'https://react-firebase-admin.firebaseio.com',
  projectId: 'react-firebase-admin',
  storageBucket: 'react-firebase-admin.appspot.com',
  messagingSenderId: '288075833360',
  appId: '1:288075833360:web:c3e8467e92b64d8d'
};

class Firebase {
  auth: any;
  firestore: any;
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.firestore = app.firestore();
  }
}

export default new Firebase();
