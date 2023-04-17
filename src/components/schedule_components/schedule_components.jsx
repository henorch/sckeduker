import { ScheduleHolder, SchedulerLink } from "./schedule_component.styles"

const ScheduleComponent = ({schedule}) => {
      const { title, description } = schedule;
    return (
        <ScheduleHolder>
            <SchedulerLink>{title}</SchedulerLink>
        </ScheduleHolder>

    )
}
export default ScheduleComponent;