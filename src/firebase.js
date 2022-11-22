import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBgNpv8VgOY1cbrXO7I9blVv46d3COjOf0",
	authDomain: "react-portfolio-dashboar-44cd5.firebaseapp.com",
	projectId: "react-portfolio-dashboar-44cd5",
	storageBucket: "react-portfolio-dashboar-44cd5.appspot.com",
	messagingSenderId: "648983033797",
	appId: "1:648983033797:web:05e1f565a86db0d8b3bdac"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);