// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH5iky3WGqibap5y_D-4nffjMucuYL7Yk",
  authDomain: "insta-e4e74.firebaseapp.com",
  projectId: "insta-e4e74",
  storageBucket: "insta-e4e74.appspot.com",
  messagingSenderId: "869821415766",
  appId: "1:869821415766:web:c3e2eef0089cc71b9f16f7",
  measurementId: "G-RDSCY8TVLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();