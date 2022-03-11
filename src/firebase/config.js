import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4Ha81qjstfZs0oYo7miT8ZG6ZXfYiFJ4",
    authDomain: "olx-project-a0999.firebaseapp.com",
    projectId: "olx-project-a0999",
    storageBucket: "olx-project-a0999.appspot.com",
    messagingSenderId: "190699934619",
    appId: "1:190699934619:web:9f794898c58914fde1873e",
    measurementId: "G-2RD2V3KFS9"
  };

export default firebase.initializeApp(firebaseConfig)