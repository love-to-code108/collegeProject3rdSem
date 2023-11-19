// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {apiKey: "AIzaSyBey_7bVvzbwI91t2voDjebRyjQCx6NBSA",
authDomain: "college-connect-108.firebaseapp.com",
projectId: "college-connect-108",
storageBucket: "college-connect-108.appspot.com",
messagingSenderId: "874641883084",
appId: "1:874641883084:web:64f4b0923fa2524ab96769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
