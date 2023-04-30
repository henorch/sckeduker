import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { auth, deleteSchedule, getDocPerUser, getMySchedule } from "../utils/firebase/firebase";
import { UserContext } from "./user.context";
import { current } from "@reduxjs/toolkit";




export const ScheduleContext =  new createContext({
    schedules: [],

})



export const ScheduleProvider = ({ children }) => {
    const [schedules, setSchedule] = useState([]);
    const { currentUser } = useContext(UserContext)
     
    useEffect(()=> {
        const getAllSchedule = async () => {
            const allSchedule = await getMySchedule();
            const myDocs = await getDocPerUser(auth.currentUser?.uid);
            setSchedule(myDocs)
            console.log(schedules);
        }
        getAllSchedule()
    }, [schedules])


    useEffect(() => {
        const remainSchedule = async () => {
            const remainSc = await deleteSchedule(schedules["id"]);
            setSchedule(remainSc)
        }
    }, [])

    const value = { schedules, setSchedule};
    return <ScheduleContext.Provider value={value}>{children}</ScheduleContext.Provider>
} 