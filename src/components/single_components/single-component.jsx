import Button from "../button/button.component"

const SingleSchedule = () => {
    return (
        <div>
            <h3>{Title}</h3>
            <p>{Description}</p>
            <p>This schedule was created on : ${createdAt}</p>
            <p>{Completion_date}</p>
            <p>{isCompleted}</p>
            <Button>Edit Schedule</Button>
        </div>
    )
}