import { useContext, useState, useEffect } from "react";
import Button from "../../components/button/button.component";
import ScheduleComponent from "../../components/schedule_components/schedule_components";
import { EmptySchedule } from "./schedule-list.styles";
import { ScheduleContext } from "../../context/schedule.context";
import { getMySchedule } from "../../utils/firebase/firebase";



const SchdeuleList = () => {
    const { schedules }  = useContext(ScheduleContext);

    

    return(
        <div>
            {schedules.length != 0 && <h1>My schedules</h1>}
            {
            schedules.length == 0 ? <EmptySchedule>You do not have any schedule
            <Button buttonType="inverted">CLICK HERE TO START</Button>
            </EmptySchedule> 
            : 
            Object.keys(schedules).map((title) => {
                const scheduled = schedules[title];
                const id = scheduled["id"]
               
                return <ScheduleComponent key={id} title={title} schedule={scheduled}/>
            })           
        }     
        </div>
    )
}
export default SchdeuleList;