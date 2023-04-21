import Button from "../button/button.component";
import { ButtonContainer, ScheduleHolder, SchedulerLink } from "./schedule_component.styles"

const ScheduleComponent = ({schedule}) => {
      const { title, description } = schedule;
    return (
        <ScheduleHolder>
            <SchedulerLink>{title}</SchedulerLink>
            <ButtonContainer>
            <Button buttonType="inverted">&#9998; Edit</Button>
            <Button buttonType="inverted">&#10006; Revome</Button>
            </ButtonContainer>
        </ScheduleHolder>

    )
}
export default ScheduleComponent;