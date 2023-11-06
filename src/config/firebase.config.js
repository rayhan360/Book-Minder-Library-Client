// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsTaYhOJSt2CcJd9r-PEcR7xix69JcdiM",
  authDomain: "book-minder-library.firebaseapp.com",
  projectId: "book-minder-library",
  storageBucket: "book-minder-library.appspot.com",
  messagingSenderId: "723460935937",
  appId: "1:723460935937:web:29e923dd9f1b6859e80b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
