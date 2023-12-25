// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZJowQ1CLgGSX3O3wLBEcV0mkupcs5eSw",
  authDomain: "bistro-boss-5777d.firebaseapp.com",
  projectId: "bistro-boss-5777d",
  storageBucket: "bistro-boss-5777d.appspot.com",
  messagingSenderId: "628175852764",
  appId: "1:628175852764:web:ad592612a6862b16eb5019"
};

console.log('hi');
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;