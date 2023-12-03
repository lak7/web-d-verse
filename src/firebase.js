import { getFirestore, collection, addDoc } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATNOGKs_LqnaVFQt40OZK4XkFqETa7bBc",
  authDomain: "vc-fund.firebaseapp.com",
  projectId: "vc-fund",
  storageBucket: "vc-fund.appspot.com",
  messagingSenderId: "266049326300",
  appId: "1:266049326300:web:31d8fff1783f1ec807b819",
  measurementId: "G-6SVEYCBQQL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Use getFirestore to get Firestore database reference

// const userCollectionRef = collection(db, "contact");
//   addDoc(userCollectionRef, {
//     name: "aa",
//     email: "bbb",
//     message: "cc"
//   })
