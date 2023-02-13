// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBtyhDMiAEerP4ddLjss4Vpp_YxZIcFvCM",
    authDomain: "halogate-dbd9e.firebaseapp.com",
    projectId: "halogate-dbd9e",
    storageBucket: "halogate-dbd9e.appspot.com",
    messagingSenderId: "1031225291385",
    appId: "1:1031225291385:web:b019b1e7b31bb8c19c9aa8",
    measurementId: "G-HYZVL96TFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider= new GoogleAuthProvider()