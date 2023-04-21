import { useEffect, useState } from "react";
import { createContext } from "react";
import { getMySchedule } from "../utils/firebase/firebase";



export const ScheduleContext =  new createContext({
    schedules: [],

})

console.log(`in schedule ${getMySchedule()}`);


export const ScheduleProvider = ({ children }) => {
    const [schedules, setSchedule] = useState([]);

    console.log(schedules);
    useEffect(()=> {
        const getAllSchedule = async () => {
            const allSchedule = await getMySchedule();
            setSchedule(allSchedule)
        }
        getAllSchedule()
    }, [])
    console.log(schedules);

    const value = { schedules, setSchedule};
    return <ScheduleContext.Provider value={value}>{children}</ScheduleContext.Provider>
} 