import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyBr4rgN0lMD9vGmqWtfWc1XBwxGyRVeDBg",
    authDomain: "aief-d.firebaseapp.com",
    databaseURL: "https://aief-d.firebaseio.com",
    projectId: "aief-d",
    storageBucket: "aief-d.appspot.com",
    messagingSenderId: "678605570021",
    appId: "1:678605570021:web:d1b2353fa65004f2cd790c",
    measurementId: "G-NHM2BF5Y2N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;