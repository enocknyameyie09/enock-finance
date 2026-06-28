// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB-jQtxmJKRJPmr_K8whDsK6H67n_VoL30",

  authDomain: "micro-finance-30943.firebaseapp.com",

  projectId: "micro-finance-30943",

  storageBucket: "micro-finance-30943.firebasestorage.app",

  messagingSenderId: "648455369747",

  appId: "1:648455369747:web:3222ac3ba5f3f4e823bbe6",

  measurementId: "G-Y9C3DSFW51"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
