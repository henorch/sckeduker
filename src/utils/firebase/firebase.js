import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDJwmLNor4kHXlel4kYQgplTitx93MwvcE",
    authDomain: "sckeduler.firebaseapp.com",
    projectId: "sckeduler",
    storageBucket: "sckeduler.appspot.com",
    messagingSenderId: "971274818467",
    appId: "1:971274818467:web:19befa3f7633c1e0c54016"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore();


  // below code for adding schedule to firestore
  export const createNewSchedule = async (newSchedule) => {
    const scheduleRef = doc(collection(db, 'schedule'))
    const {title, description, date } = newSchedule;
    await setDoc(scheduleRef, {
      title: title,
      description: description,
      date: date
    })
  }
 

  export const getMySchedule =  async () => {
    const schSnapRef = collection(db, "schedule");
    //const q = query(schSnapRef)
    const schedules = [];

    const querySnapShot = await getDocs(schSnapRef);
    querySnapShot.forEach(doc => {
      schedules.push(doc.data())
    })
   return schedules;
  }



  // Below code for adding user to firestore and creating firebase
  export const createUserDocumentFromAuth = async (userAuth, 
    additionalInformation = {}) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'user', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error){
            console.log('error', error.message);
        }
    }
    return userDocRef
  }

  export const createAuthUSerEmailandPassword = async (email,password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  }


  export const signAuthUserEmailandPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const SignOutUser = async () => await signOut(auth)