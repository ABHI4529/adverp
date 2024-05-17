
import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDr_J0AAT5Ld0KKgW-u5Q2VA0VyGdgq1NA",
    authDomain: "advcloud-34451.firebaseapp.com",
    projectId: "advcloud-34451",
    storageBucket: "advcloud-34451.appspot.com",
    messagingSenderId: "1064516871767",
    appId: "1:1064516871767:web:a8aa80f6af32ba22b6e512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);