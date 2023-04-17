import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { CreateContainer, CreateInput } from "./create.styles";


const CreateSchedule = () => {
    return(
        <CreateContainer>
        <Calendar/>
        <CreateInput>
            
                <b>Title</b>
                <input placeholder="enter schedule title" style={{ minHeight: 40}}/>
                    
                <b>Description</b>
                <textarea placeholder="description" style={{ minHeight: 120}}/>
                <button type="submit" style={{marginTop: 10, height: 40}}>CREATE SCHEDULE</button>
          
        </CreateInput>
        </CreateContainer>
    )
}
export default CreateSchedule;