// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpXcQnB1fM_H3XUt-oCM1uyYR7QhpCASk",
    authDomain: "bipocstartup.firebaseapp.com",
    projectId: "bipocstartup",
    storageBucket: "bipocstartup.appspot.com",
    messagingSenderId: "754717885745",
    appId: "1:754717885745:web:f7fbe43b01b5c38dcddc10",
    measurementId: "G-8CMPW50J8X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
