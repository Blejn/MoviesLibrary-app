// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//Firebase confugiration
const firebaseConfig = {
  apiKey: "AIzaSyDadig9J7Biwh44Yiei6lGxTfV9Xh6FIag",
  authDomain: "movies-app-2d935.firebaseapp.com",
  projectId: "movies-app-2d935",
  storageBucket: "movies-app-2d935.appspot.com",
  messagingSenderId: "336588991133",
  appId: "1:336588991133:web:57013f3c18b8d1dfd30274",
  measurementId: "G-NY0SP46Z8L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;