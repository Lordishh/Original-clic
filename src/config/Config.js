import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAqj8teLjJsrqrfCl5LnCUtfnyVj2qF7WQ",
  authDomain: "original-clic.firebaseapp.com",
  projectId: "original-clic",
  storageBucket: "original-clic.appspot.com",
  messagingSenderId: "1041131678422",
  appId: "1:1041131678422:web:485b095f537b4f4aa6f777",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
