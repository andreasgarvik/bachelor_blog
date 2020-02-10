import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyBiG95nhKFWry5QYJj41wBlh8TkdPXb4GY',
  authDomain: 'bacheloroppgave-g18.firebaseapp.com',
  databaseURL: 'https://bacheloroppgave-g18.firebaseio.com',
  projectId: 'bacheloroppgave-g18',
  storageBucket: 'bacheloroppgave-g18.appspot.com',
  messagingSenderId: '103912223835'
};

firebase.initializeApp(config);

export default firebase;
