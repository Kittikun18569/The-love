// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_2r2qcMT3FHdwUzUtV6mqtBA82VQL8Sg",
  authDomain: "ilove-d92d0.firebaseapp.com",
  projectId: "ilove-d92d0",
  storageBucket: "ilove-d92d0.firebasestorage.app",
  messagingSenderId: "140086063670",
  appId: "1:140086063670:web:66d2f732ccd9d6b0dc5e97",
  measurementId: "G-C5V91P55TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);