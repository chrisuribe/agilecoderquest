import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4Xc8yP6YZopnPpeaYGjsjUg05oG2GT-Y",
    authDomain: "agile-coder-quest.firebaseapp.com",
    projectId: "agile-coder-quest",
    storageBucket: "agile-coder-quest.appspot.com",
    messagingSenderId: "770833514045",
    appId: "1:770833514045:web:e9c52325e78d9a6c5ef454",
    measurementId: "G-ENRRMBS1S1"
  };

//Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initializes Authentication
export const auth = getAuth(app);
