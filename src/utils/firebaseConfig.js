// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlGLnDHZA8j8Kbtshq9dl8pYS1EXLmyEk",
  authDomain: "funko-land.firebaseapp.com",
  projectId: "funko-land",
  storageBucket: "funko-land.appspot.com",
  messagingSenderId: "169463965094",
  appId: "1:169463965094:web:8fd7a40f2e86699644db67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // To use in extern files