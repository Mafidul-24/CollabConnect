// Grab input fields
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const projectForm = document.getElementById("project-form");

// ✅ Sign Up Function
function signUp() {
  auth.createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then((userCredential) => {
      console.log("✅ Signed up:", userCredential);
      alert("✅ Signed up!");
      projectForm.style.display = "block";
    })
    .catch(error => {
      console.error("❌ Sign-up error:", error);
      alert("❌ " + error.message);
    });
}

// ✅ Login Function
function login() {
  auth.signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(() => {
      alert("✅ Logged in!");
      projectForm.style.display = "block";
    })
    .catch(error => alert("❌ " + error.message));
}

// ✅ Submit Idea to Firestore
function submitIdea() {
  const idea = document.getElementById("projectIdea").value;
  const user = auth.currentUser;

  if (!user) {
    alert("⚠️ You must be logged in to submit an idea.");
    return;
  }

  db.collection("projects").add({
    uid: user.uid,
    idea: idea,
    timestamp: Date.now()
  }).then(() => alert("✅ Project submitted!"));
}

// ✅ Improve Idea using Fallback (No API Key Required)
function improveIdea() {
  const raw = document.getElementById("projectIdea").value;

  // Fake AI improvement response
  const fakeImproved = `🔧 AI-enhanced: "${raw}" now sounds more impactful. Consider turning it into a collaborative research platform with matching and rating systems.`;

  document.getElementById("improvedOutput").innerText = fakeImproved;

  // Optional alert to indicate this is a mock
  alert("⚠️ Gemini API quota exceeded. Showing dummy AI-enhanced output.");
}
