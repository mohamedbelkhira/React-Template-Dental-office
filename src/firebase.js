// src/firebase.js
import { initializeApp } from 'firebase/app'; // Import Firebase core
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'; // Import Auth services
import { getFirestore } from 'firebase/firestore'; // Import Firestore service

const firebaseConfig = {
  apiKey: 'AIzaSyDFkxyqBWt4Pbu9Ot36DBAP0FnwUnNvd7E',
  authDomain: 'react-app-c0159.firebaseapp.com',
  projectId: 'react-app-c0159',
  storageBucket: 'react-app-c0159.appspot.com',
  messagingSenderId: '760974599028',
  appId: '1:760974599028:web:b137f3e199cfc7b2f60221',
  measurementId: 'G-P9XFQ4E56N'
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app); // Correct Firestore initialization
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Export initialized services
export { auth, firestore, googleProvider, facebookProvider };