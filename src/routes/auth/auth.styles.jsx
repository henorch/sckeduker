import styled from "styled-components";
import { device } from "../../utils/breakpoint";


export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tablet}{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
`