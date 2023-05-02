import Button from "../button/button.component";
import { ButtonContainer, ScheduleHolder, SchedulerLink } from "./schedule_component.styles"
import { deleteSchedule } from "../../utils/firebase/firebase";
import { UserContext} from '../../context/user.context'
import { useContext } from "react";


const ScheduleComponent = ({schedule}) => {
      const { currentUser } = useContext(UserContext);
      const { id, title, description } = schedule;
      const handleDelete =  async () => {
            await deleteSchedule(currentUser, id)
            
      }
    return (
        <ScheduleHolder>
            <SchedulerLink>{title}</SchedulerLink>
            <p>{description}</p>
            <ButtonContainer>
            <Button buttonType="inverted">&#9998; Edit</Button>
            <Button onClick={() => handleDelete()} buttonType="inverted">&#10006; Revome</Button>
            </ButtonContainer>
        </ScheduleHolder>

    )
}
export default ScheduleComponent;