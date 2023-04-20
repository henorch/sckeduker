import { createContext, useState } from "react";

export const LocationContext = new createContext({
    currentLocation: null,
    setCurrentLocation: () => {}
})

export const LocationProvider = ({ children }) => {
    const [currentLocation, setCurrentLocation ] = useState(null);
    const value = { currentLocation, setCurrentLocation }
    return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}