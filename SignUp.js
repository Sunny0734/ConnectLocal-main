import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU8-47Xof4jzLTustckH13Y4klGpk_I-o",
  authDomain: "login-cf378.firebaseapp.com",
  projectId: "login-cf378",
  storageBucket: "login-cf378.appspot.com",
  messagingSenderId: "514341270319",
  appId: "1:514341270319:web:f7ffb8f3333d53baa4a7da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toast trigger
var toastTrigger = document.getElementById('liveToastBtn');
var toastLiveExample = document.getElementById('liveToast');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
}

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if email or password is empty
  if (!email || !password) {
    alert("Please fill in both email and password fields.");
    return; // Exit the function if fields are empty
  }

  // Create user with Firebase Authentication
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // Redirect to login page
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("The Email Entered Is Already Used, Try Another!!");
    });
});
