// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJCdQej-ynq9JuLgpezb8t72YvDs5GDCU",
  authDomain: "microfinance-ecaa4.firebaseapp.com",
  projectId: "microfinance-ecaa4",
  storageBucket: "microfinance-ecaa4.firebasestorage.app",
  messagingSenderId: "279634944130",
  appId: "1:279634944130:web:2c6784db2c7ec9942f149b",
  measurementId: "G-X7BRD9JBQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
