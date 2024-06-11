// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi3_ExBmRs7Bct4BQs7C54aPnsftp5NQc",
  authDomain: "book-management-tool-f3bcd.firebaseapp.com",
  projectId: "book-management-tool-f3bcd",
  storageBucket: "book-management-tool-f3bcd.appspot.com",
  messagingSenderId: "652797139758",
  appId: "1:652797139758:web:c3139667dde23ffeac78bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;