import styled from "styled-components";
import { device } from "../../utils/breakpoint";


export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media ${device.tablet}{
        width:250px
    }
    @media ${device.laptop}{
        width:380px;
    }
`

export const h2 = styled.h2`
    margin: 10px 0;
`


