import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAlZyTYK-08Fk0Tgm-3ZfKImOacpElI1PA",
  authDomain: "line-demo-5d969.firebaseapp.com",
  projectId: "line-demo-5d969",
  storageBucket: "line-demo-5d969.appspot.com",
  messagingSenderId: "1082509267345",
  appId: "1:1082509267345:web:2c6b022627bf6338e04a30",
  measurementId: "G-BFDHNTJNH0",
});

const db = firebaseApp.firestore();

// /認証
const auth = firebase.auth();

export { db, auth };
