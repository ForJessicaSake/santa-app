// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "bipocstartup.firebaseapp.com",
  projectId: "bipocstartup",
  storageBucket: "bipocstartup.appspot.com",
  messagingSenderId: "754717885745",
  appId: "1:754717885745:web:f7fbe43b01b5c38dcddc10",
  measurementId: "G-8CMPW50J8X",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };

export function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function logIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function Logout() {
  return signOut(auth);
}
