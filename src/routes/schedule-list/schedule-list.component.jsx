import ScheduleComponent from "../../components/schedule_components/schedule_components";

const SCHEDULES = [
    {
        "id": 1,
        "title": "Engaging the title winner",
        "description": " We plan to engage the title winner for a comprehensive interview and communication on his success"
    },
    {
        "id":2,
        "title": "Rational opinion observation",
        "description": " A collection of 23 randomly selected student a tested don their rartional opinion"
    },
    {
        "id":3,
        "title": "Review the chemistry",
        "description": " An intutive evaluation of the chemistry of lobe is carried out for the programe"
    }
]

const SchdeuleList = () => {
    return(
        <div>
            {SCHEDULES.map((schedule) =>  <ScheduleComponent key={schedule.id} schedule={schedule}/>
            )
        }     
        </div>
    )
}
export default SchdeuleList;