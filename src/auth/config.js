// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA37R49HCCl9iavMdNfJhV2AdjW2Nx5zW0",
  authDomain: "water-quality-index-d0896.firebaseapp.com",
  projectId: "water-quality-index-d0896",
  storageBucket: "water-quality-index-d0896.appspot.com",
  messagingSenderId: "723228411205",
  appId: "1:723228411205:web:a2774fe5c8fa04d97b2a2c",
  measurementId: "G-YB06G276XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;