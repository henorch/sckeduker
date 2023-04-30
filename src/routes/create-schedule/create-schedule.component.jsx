import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { CreateContainer, CreateInput } from "./create.styles";
import { useContext, useState } from "react";
import { createUserDocumentFromAuth, createSchedulePerUser, createUserDocBaseOnCurrentUser} from "../../utils/firebase/firebase";
import { UserContext } from "../../context/user.context";

const DefaultSchedule = {
    title: "",
    description: ""
}


const CreateSchedule = () => {
    const { currentUser } = useContext(UserContext);
    const [ newSchedule, setNewSchedule] = useState(DefaultSchedule);
    const [ date, setDate ] = useState( new Date());

    const { title, description} = newSchedule;
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setNewSchedule({
            ...newSchedule,
            [name]: value
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        const scheduleToSave = {
            title: title,
            description: description,
            date: date
        }
        console.log(scheduleToSave);
        await createSchedulePerUser(currentUser, scheduleToSave);
    }

    return(
        <form onSubmit={handleOnSubmit}>
        <h1>Create a Schedule</h1>
        <CreateContainer>
        <Calendar
            value={date}
            onChange={setDate}
        />
            <CreateInput>
            
                <b>Title</b>
                <input placeholder="enter schedule title"
                    type="text"
                    name="title"
                    onChange={handleOnChange}
                    value={title}
                style={{ minHeight: 40}}/>
                    
                <b>Description</b>
                <textarea placeholder="description" 
                    type="text"
                    name="description"
                    onChange={handleOnChange}
                    value={description}
                style={{ minHeight: 120}}/>
                <button type="submit" style={{marginTop: 10, height: 40}}>CREATE SCHEDULE</button>
          
            </CreateInput>
        </CreateContainer>
        </form>
    )
}
export default CreateSchedule;