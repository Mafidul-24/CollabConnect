// app.js
import { auth, db } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const projectForm = document.getElementById("project-form");

window.signUp = function () {
  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((userCredential) => {
      alert("✅ Signed up!");
      projectForm.style.display = "block";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
};

window.login = function () {
  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then(() => {
      alert("✅ Logged in!");
      projectForm.style.display = "block";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
};

window.submitIdea = function () {
  const idea = document.getElementById("projectIdea").value;
  const user = auth.currentUser;

  if (!user) {
    alert("Please login first.");
    return;
  }

  addDoc(collection(db, "projects"), {
    uid: user.uid,
    idea: idea,
    timestamp: serverTimestamp()
  }).then(() => {
    alert("✅ Idea submitted!");
  });
};

window.improveIdea = function () {
  const idea = document.getElementById("projectIdea").value;
  const improved = `🔧 Improved: "${idea}" now sounds more compelling and collaborative. Consider research role matching, tagging, or voting systems.`;
  document.getElementById("improvedOutput").innerText = improved;
  alert("⚠️ Gemini API not available — fallback enhancement shown.");
};
