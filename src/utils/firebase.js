// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8U6pDfsXLJHqeCkCunbzSlSpk8CtnEwE",
  authDomain: "botflix-36503.firebaseapp.com",
  projectId: "botflix-36503",
  storageBucket: "botflix-36503.firebasestorage.app",
  messagingSenderId: "519563839731",
  appId: "1:519563839731:web:b90c601bca26e0d917cf86",
  measurementId: "G-80M5GKY6CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export default app;