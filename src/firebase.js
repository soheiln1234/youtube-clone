// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkZ0mktlNk4qEHWadDjdACcrmEyCDeNz0",
  authDomain: "clone-b7db0.firebaseapp.com",
  projectId: "clone-b7db0",
  storageBucket: "clone-b7db0.appspot.com",
  messagingSenderId: "670189093923",
  appId: "1:670189093923:web:002889a37b9adf8e409d96",
  measurementId: "G-4LZX9T1SJK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
