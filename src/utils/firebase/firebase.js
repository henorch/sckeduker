import { initializeApp } from 'firebase/app'


import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    getAuth
} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDJwmLNor4kHXlel4kYQgplTitx93MwvcE",
    authDomain: "sckeduler.firebaseapp.com",
    projectId: "sckeduler",
    storageBucket: "sckeduler.appspot.com",
    messagingSenderId: "971274818467",
    appId: "1:971274818467:web:19befa3f7633c1e0c54016"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signWithGooglePopup = () =>  signInWithPopup(auth, provider)
  