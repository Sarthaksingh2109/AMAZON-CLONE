
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const Firebase = firebase.initializeApp({
    apiKey: "AIzaSyDGv5JZDUst1SUdvgeraBA8UtTNG2oSV0E",
  authDomain: "clone-e11c5.firebaseapp.com",
  projectId: "clone-e11c5",
  storageBucket: "clone-e11c5.appspot.com",
  messagingSenderId: "799262527511",
  appId: "1:799262527511:web:ab4622a172f3a35a24cc52",
  measurementId: "G-VKQD17BTLL"
});


const auth = firebase.auth();

export { auth };
