import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSS8o9mVrQUlB0tkJmTqksFRf2zNJZaGM",
  authDomain: "netflix-clone-snipercoder.firebaseapp.com",
  projectId: "netflix-clone-snipercoder",
  storageBucket: "netflix-clone-snipercoder.appspot.com",
  messagingSenderId: "838276369677",
  appId: "1:838276369677:web:60f5192f423ae80308f444",
  measurementId: "G-5VHSVXFRGH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
