import styled from "styled-components";
import { device } from "../../utils/breakpoint";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    

    @media ${device.mobileS}{
        justify-content:center;
        align-items: center;
    }

    @media ${device.tablet}{
        width:250px
        justify-content:left;
        align-items: flex-start;
    }
    @media ${device.laptop}{
        width:380px;
    }
`
export const containerHeader2 = styled.h2`
    margin: 10px 0;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

