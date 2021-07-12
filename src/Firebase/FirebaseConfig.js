import firebase from "firebase/app"
import 'firebase/firestore'
import "firebase/auth";


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD792-juw2jZw0KiwIvM8SNglKsIhzjRSc",
    authDomain: "linkedin-clone-project-e13c0.firebaseapp.com",
    projectId: "linkedin-clone-project-e13c0",
    storageBucket: "linkedin-clone-project-e13c0.appspot.com",
    messagingSenderId: "795323203429",
    appId: "1:795323203429:web:fa557d910fcdd7efe12b8c"
};

export const FIREBASE = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;