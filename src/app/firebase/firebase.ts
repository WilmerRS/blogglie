import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCc0JN0ZPyNtL0VynbSejYci96CvP1tv1Q",
  authDomain: "blogglie.firebaseapp.com",
  projectId: "blogglie",
  storageBucket: "blogglie.appspot.com",
  messagingSenderId: "629504772282",
  appId: "1:629504772282:web:5110615650a91b7bb31a83",
  measurementId: "G-N9T9SKCLTZ",
};

const fb = firebase.initializeApp(firebaseConfig);

export const firestore = fb.firestore();
