// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBNCzCxTyNA91jRW0x1MbtvqND9xoAxA6I",
  authDomain: "teeth-wizward.firebaseapp.com",
  projectId: "teeth-wizward",
  storageBucket: "teeth-wizward.firebasestorage.app",
  messagingSenderId: "519066890860",
  appId: "1:519066890860:web:d056579b0fd67fdd611e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth ;