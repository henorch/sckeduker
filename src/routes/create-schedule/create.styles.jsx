import styled from "styled-components";
import { device } from "../../utils/breakpoint";


export const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.tablet}{
        flex-direction: row
    }
`
export const CreateInput = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;

    @media ${device.tablet}{
        margin-left: 10px
    }
    

`