/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDM1JQdLEToP1WNBHsZ7X6v1uRE_kLfLX0",
  authDomain: "friendlychat-04052022.firebaseapp.com",
  databaseURL: "https://friendlychat-04052022-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "friendlychat-04052022",
  storageBucket: "friendlychat-04052022.appspot.com",
  messagingSenderId: "360985078549",
  appId: "1:360985078549:web:99873d6cb33e6e05bf971c"
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM1JQdLEToP1WNBHsZ7X6v1uRE_kLfLX0",
  authDomain: "friendlychat-04052022.firebaseapp.com",
  databaseURL: "https://friendlychat-04052022-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "friendlychat-04052022",
  storageBucket: "friendlychat-04052022.appspot.com",
  messagingSenderId: "360985078549",
  appId: "1:360985078549:web:99873d6cb33e6e05bf971c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

