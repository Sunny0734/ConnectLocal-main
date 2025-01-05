import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
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
//submit button

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // alert("Logging In...");
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      alert("Entered Credentials Are Invalid, Try Again!!");
      // ..
    });
});

//reset
const reset = document.getElementById("reset");
reset.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Email Sent!");
    })
    .catch((error) => {
      alert("Enter your email to go ahead!!");
    });
});

// Google Login

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("go-btn");
googleLogin.addEventListener("click", function (event) {
  event.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

// Facebook Login

const provider2 = new FacebookAuthProvider();

document.addEventListener("DOMContentLoaded", function () {
  const FacebookLogin = document.getElementById("fb-btn");
  FacebookLogin.addEventListener("click", function (event) {
    event.preventDefault();
    signInWithPopup(auth, provider2)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        console.log(user);
        window.location.href = "index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  });
});
