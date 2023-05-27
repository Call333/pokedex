import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyAn2K2uJQ_eoxmfneiFsLhM_LUFJ2-P7E8",
    authDomain: "pokemon-app-ceab1.firebaseapp.com",
    projectId: "pokemon-app-ceab1",
    storageBucket: "pokemon-app-ceab1.appspot.com",
    messagingSenderId: "508943611535",
    appId: "1:508943611535:web:a7ca0a8420c0c0be8162fa"
  };

export const app = initializeApp(firebaseConfig);   

export const auth = getAuth(app);
