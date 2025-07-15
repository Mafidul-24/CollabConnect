// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpyHyFb32RUr6mIStj-Qh394S318RrrGU",
  authDomain: "collab-connect-38d23.firebaseapp.com",
  projectId: "collab-connect-38d23",
  storageBucket: "collab-connect-38d23.appspot.com",
  messagingSenderId: "571010064125",
  appId: "1:571010064125:web:91b54adff1cae48547a894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
