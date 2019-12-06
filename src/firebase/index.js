import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//Google sign-in with redirect
export const signInWithGoogle = () => auth.signInWithRedirect(googleAuthProvider);
export const signOut = () => auth.signOut();

export default firebase;
