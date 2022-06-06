import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRWILsszNWhgBNHE8-fu4vIHDD35gLVQ0",
  authDomain: "clone-108ee.firebaseapp.com",
  projectId: "clone-108ee",
  storageBucket: "clone-108ee.appspot.com",
  messagingSenderId: "124506924454",
  appId: "1:124506924454:web:a99652928440456342db67",
  measurementId: "G-HRDLR41DR8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
