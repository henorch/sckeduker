import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/breakpoint";

export const NavigationContainer = styled.div`
    width:100%;
    height:80px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-botton:15px;
    
   
    @media ${device.tablet}{
        flex-direction: row;
    }

    
`

export const NavigationLogo = styled(Link)`
    width: 20vh;
    height:100%;
    padding:10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.tablet}{
    width: 70px;
    height:100%;
    padding:10px;
    display: flex;
    align-items: center;
    }
`

export const NavigationBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    z-index:1;
    background: white;

    @media ${device.tablet}{
        flex-direction: row;
        align-items: center;
        text-align: center;
        line-height: 70%;
        height: 100%;
        border: none;
        width: 50%;
    }
    
`


var mobile = styled(NavigationBody)`
    width:50%;
`

export const NavigationLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`
