import { useContext, useState, useEffect } from "react";
import Button from "../../components/button/button.component";
import ScheduleComponent from "../../components/schedule_components/schedule_components";
import { EmptySchedule } from "./schedule-list.styles";
import { ScheduleContext } from "../../context/schedule.context";
import { useNavigate } from "react-router-dom";
import { getDocPerUser } from "../../utils/firebase/firebase";
import { UserContext } from "../../context/user.context";


const SchdeuleList = () => {
    const { schedules }  = useContext(ScheduleContext);
    const { currentUser } = useContext(UserContext)
    const navigate = useNavigate();
    const goToCreate = () => {
        navigate("/create")
    }


   console.log(schedules);
    return(
        <div>
            {schedules.length != 0 && <h1 style={{marginTop:'15vh'}}>My schedules</h1>}
            {
            schedules.length == 0 ? <EmptySchedule>You do not have any schedule
            <Button onClick={goToCreate} buttonType="inverted">CLICK HERE TO START</Button>
            </EmptySchedule> 
            : 
            Object.keys(schedules).map(( title) => {
                const scheduled = schedules[title];
                // const id = schedules[uid];
                return <ScheduleComponent key={title} title={title} schedule={scheduled}/>
            })           
        }     
        </div>
    )
}
export default SchdeuleList;