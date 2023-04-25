// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkgtdRmunappMfbkAU-LfV4tmgvp-RbEU",
  authDomain: "the-news-dragon-b531b.firebaseapp.com",
  projectId: "the-news-dragon-b531b",
  storageBucket: "the-news-dragon-b531b.appspot.com",
  messagingSenderId: "710656270081",
  appId: "1:710656270081:web:08238ba3269169226a4500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;