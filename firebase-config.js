import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDb6TAjfQ0N_u-0iYFDEKXOG_hO9ZlV3e0",
    authDomain: "urldetect-406d9.firebaseapp.com",
    projectId: "urldetect-406d9",
    storageBucket: "urldetect-406d9.appspot.com",
    messagingSenderId: "566003000750",
    appId: "1:566003000750:web:fc8524237656bdeb82943f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);