import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvSG8bOeflR9zBsW3BlBUrD1RPQJoRI5k",
  authDomain: "docs-clone-0.firebaseapp.com",
  projectId: "docs-clone-0",
  storageBucket: "docs-clone-0.appspot.com",
  messagingSenderId: "733829819940",
  appId: "1:733829819940:web:b5720811b9b7e90ae672b1",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
