import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaI0OxfcyCuilSCVv4LYaQv7wIG5oJWsc",
  authDomain: "facebook-messenger-clone-7b5c1.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-7b5c1.firebaseio.com",
  projectId: "facebook-messenger-clone-7b5c1",
  storageBucket: "facebook-messenger-clone-7b5c1.appspot.com",
  messagingSenderId: "371730648436",
  appId: "1:371730648436:web:2707b4ef211ddbe2adf021",
  measurementId: "G-6SM4BQQ2XP"
});

const db = firebaseApp.firestore();
export default db;
