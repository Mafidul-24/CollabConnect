

  const firebaseConfig = {
    apiKey: "AIzaSyCpyHyFb32RUr6mIStj-Qh394S318RrrGU",
    authDomain: "collab-connect-38d23.firebaseapp.com",
    projectId: "collab-connect-38d23",
    storageBucket: "collab-connect-38d23.firebasestorage.app",
    messagingSenderId: "571010064125",
    appId: "1:571010064125:web:91b54adff1cae48547a894"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();