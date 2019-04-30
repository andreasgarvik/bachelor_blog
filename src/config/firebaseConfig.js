import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var config = {
	apiKey: 'AIzaSyBn_PEfCKoKlp-3nl6teyW0Q-D9ouvK-ks',
	authDomain: 'siamawandersblog.firebaseapp.com',
	databaseURL: 'https://siamawandersblog.firebaseio.com',
	projectId: 'siamawandersblog',
	storageBucket: 'siamawandersblog.appspot.com',
	messagingSenderId: '1081176341485'
}

firebase.initializeApp(config)

export default firebase
