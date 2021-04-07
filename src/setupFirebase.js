import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcNuCNlcpfRJJ7TomcDT9yuG9VEiYcMUg",
    authDomain: "netflix-clone-ddb6e.firebaseapp.com",
    projectId: "netflix-clone-ddb6e",
    storageBucket: "netflix-clone-ddb6e.appspot.com",
    messagingSenderId: "365085786964",
    appId: "1:365085786964:web:ff963732c86ae442547ec1",
    measurementId: "G-KE9X5ZV3VV"
  };

  firebase.initializeApp(firebaseConfig);