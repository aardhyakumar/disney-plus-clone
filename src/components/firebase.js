// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBbsznjJXVzKktNgmTqla-n61WQ8ZVAZ1w",
  authDomain: "disney-plus-clone-b1f24.firebaseapp.com",
  projectId: "disney-plus-clone-b1f24",
  storageBucket: "disney-plus-clone-b1f24.appspot.com",
  messagingSenderId: "152047998954",
  appId: "1:152047998954:web:418a1d3a47f663554a4493",
  measurementId: "G-PK9XWJVJ9T",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
