import Button from "../button/button.component";
import { ButtonContainer, ScheduleHolder, SchedulerLink } from "./schedule_component.styles"
import { deleteSchedule } from "../../utils/firebase/firebase";
const ScheduleComponent = ({schedule}) => {
      const { id, title, description } = schedule;
      const handleDelete =  async () => {
            await deleteSchedule(id)
            console.log("hello");
      }
    return (
        <ScheduleHolder>
            <SchedulerLink>{title}</SchedulerLink>
            <ButtonContainer>
            <Button buttonType="inverted">&#9998; Edit</Button>
            <Button onClick={() => handleDelete()} buttonType="inverted">&#10006; Revome</Button>
            </ButtonContainer>
        </ScheduleHolder>

    )
}
export default ScheduleComponent;