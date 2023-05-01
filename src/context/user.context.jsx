import { createContext, useState, useEffect} from "react";
import { createUserDocumentFromAuth,
     onAuthStateChangedListerner, 
     userLocation
    } from "../utils/firebase/firebase";


export const UserContext = createContext({
    currentUserLocation: null,
    currentUser: null,
    setCurrentUserLocation: () => null,
    setCurrentUser: () => null,
    
});


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [ currentUserLocation, setCurrentUserLocation] = useState(null);

    
    

    useEffect(() => {
       const unsubscribe =  onAuthStateChangedListerner((user) => {
         if(user){
            createUserDocumentFromAuth(user);
            userLocation(user)
         }
         setCurrentUser(user)
       })
       return unsubscribe;
    }, [])
    const value = { currentUser, 
        setCurrentUser, 
        currentUserLocation, 
        setCurrentUserLocation
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}