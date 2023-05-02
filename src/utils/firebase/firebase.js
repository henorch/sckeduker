import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  addDoc,
  query,
  getDocs,
  deleteDoc,
  where
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


  export const getMySchedule =  async () => {
    const schSnapRef = collection(db, "schedule");
    const q = query(schSnapRef)
    const schedules = [];

    const querySnapShot = await getDocs(q);
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

      const { displayName, email } = userAuth;
      const createdAt = new Date();
        try{
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
          });
        } catch(error){
            console.log('error', error.message);
        }
    }
    return userDocRef
  }

 

  export const userLocation = async (currentUser) => {
    const user_location = [];
    const { email, uid } = currentUser;
    navigator.geolocation.getCurrentPosition(position => {
      const { coords } = position;
      const user_position =  [
        coords.latitude,
        coords.longitude,
        
      ]
      user_location.push(user_position)
    });
    

    const locaRef = doc(db, 'userlocations', uid);
    const locSnapShot = await getDoc(locaRef);
    const {lat, long} = user_location;
      try {
        await setDoc(locaRef, {
        email,
         ...user_location,
        })
      } catch (err) {
        console.log(err, err.message);
      }
    }
    

  export const getDocPerUser = async (currentUser) => {
    const path = `schedules/${currentUser}/Post`
    const schSnapRef = collection(db, path);
    const q = query(schSnapRef)
    const schedules = [];
    
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach(doc => {
      
      const { title, description, date } = doc.data();
      const  id  = doc.ref.id;
      const userDoc = {
        title,
        description,
        date,
        id
      }
      schedules.push(userDoc)
    })
   return schedules;
  }
  




  export const onAuthStateChangedListerner = (callback) => 
  onAuthStateChanged(auth, callback);


// create a document as each user post

export const createSchedulePerUser = async (currentUser, scheduleToSave) => {
  const path = `schedules/${currentUser.uid}/Post/`
  const scheduleRef = collection(db, path);
    try {
      const { title, description, date } = scheduleToSave;
      const createdAt = new Date();
      await addDoc(scheduleRef, {
        title,
        description,
        date,
        createdAt,
      });
  } catch (err){
    console.log(err, err.message);
  }
}

 

  export const deleteSchedule = async (currentUser, scheduleToDelete) => {
    const path = `schedules/${currentUser.uid}/Post/${scheduleToDelete}`
    const schedeToDeleteRef = doc(db, path);
    await deleteDoc(schedeToDeleteRef)
    
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