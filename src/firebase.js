import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkwhpeLY-HMtKgi74f8_d0rONxGVLSDfY",
  authDomain: "linkedin-clone-33925.firebaseapp.com",
  projectId: "linkedin-clone-33925",
  storageBucket: "linkedin-clone-33925.appspot.com",
  messagingSenderId: "1049507073150",
  appId: "1:1049507073150:web:cfa85e3c8e81a69e77dc2f",
};

// this line of code connect our code or app to our database
const firebaseApp = firebase.initializeApp(firebaseConfig);
// fetching our database
const db = firebaseApp.firestore();
// For authentication
const auth = firebase.auth();

export { db, auth };
