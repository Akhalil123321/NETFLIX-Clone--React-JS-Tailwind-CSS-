// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDkti9gEnj_BqSu5O12s_Lvcfs0t3_CfG0',
    authDomain:  'netflix-clone-a084f.firebaseapp.com',
    projectId:  'netflix-clone-a084f',
    storageBucket:  'netflix-clone-a084f.appspot.com',
    messagingSenderId:  '125748547357' ,
    appId:  '1:125748547357:web:8f5caa7bf2496788c05bf4'
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
