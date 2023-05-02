import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/breakpoint";


export const ScheduleHolder = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    padding:10px;
    font-size: 1.3em;
    justify-content: space-between;
    box-shadow: 2px 2px 2px grey;
    margin-bottom: 2px;
    align-items:center;

    @media ${device.tablet}{
        flex-direction: column;
    }
`

export const SchedulerLink = styled(Link)`
    font-size: 1.1em;
    display:flex;
    text-style:bold;
    algin-items: center;
    width: 100%;
`
export const ButtonContainer = styled.div`
    display:flex;
    width: 40%;
    padding: 5px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    
    @media ${device.tablet} {
        flex-direction: row;
        height: 60px;
    }
`