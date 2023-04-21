import { createContext, useState } from "react";


export const UserContext = createContext({
    currentUserLocation: null,
    currentUser: null,
    setCurrentUserLocation: () => null,
    setCurrentUser: () => null,
});


export const UserProvider = ({ children }) => {
    const [currentUser,setCurrentUser] = useState(null);
    const [ currentUserLocation, setCurrentUserLocation] = useState(null)
    const value = { currentUser, 
        setCurrentUser, 
        currentUserLocation, 
        setCurrentUserLocation
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}