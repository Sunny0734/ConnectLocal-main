import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth, onAuthStateChanged
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

onAuthStateChanged(auth, (user) => {
  if (user) {
      const uid = user.uid;
      console.log(user);
      const profilePicture = document.getElementById("userProfilePicture");
      const personName = document.getElementById("personName");
      const email = document.getElementById("email");
      const phoneNumber = document.getElementById("phoneNumber");
      const dateOfBirth = document.getElementById("dateOfBirth");

      // set user Name
      if(user.displayName) {
        personName.innerText = user.displayName;
      } else{
        personName.innerText = 'Harshith Reddy'
      }

      // Set profile picture
      if (user.photoURL) {
          profilePicture.src = user.photoURL;
          
      } else {
          // Set default profile picture
          profilePicture.src = "img/avatar.png"; // Replace with your default image URL
          
      }

      // Set other user details
      personName.innerText = user.displayName;
      email.innerText = user.email;
      phoneNumber.innerText = user.PhoneNumber || 'Not Provided!';
      dateOfBirth.innerText = user.dateOfBirth || 'Not Provided!';
  } else {
      window.location.href = "index.html";
  }
});