import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDIxdz2xbHpikY9IBjpQfIf4djsUkySU1M",
    authDomain: "backend-lima.firebaseapp.com",
    projectId: "backend-lima",
    storageBucket: "backend-lima.appspot.com",
    messagingSenderId: "791009460701",
    appId: "1:791009460701:web:f40a11ef95d84e84e63634"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)