import { useEffect, useState } from "react";
import { createContext } from "react";
import { deleteSchedule, getMySchedule } from "../utils/firebase/firebase";



export const ScheduleContext =  new createContext({
    schedules: [],

})



export const ScheduleProvider = ({ children }) => {
    const [schedules, setSchedule] = useState([]);


    useEffect(()=> {
        const getAllSchedule = async () => {
            const allSchedule = await getMySchedule();
            setSchedule(allSchedule)
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