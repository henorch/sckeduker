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
    position:fixed;
    left:0;
    top:0;
    background:white;
    
   
    @media ${device.tablet}{ 
        flex-direction: row;
    }

    
`

export const NavigationLogo = styled(Link)`
    height:70px;
    padding:10px;
    display: flex;
    flex: 2;
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


export const NavIcon = styled.div`
    color: black;
    padding: 30px 15px;

    @media ${device.tablet}{
        display:none;
    }
`
export const NavigationBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex:2;
    height: 100vh;
    width: 100%;
    z-index:1;
    display:none;

    @media ${device.tablet}{
        display:flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        line-height: 70%;
        height: 100%;
        border: none;
        width: 50%;
    }
    
`
export const NavigationBodyMobile = styled.div`
    display: flex;
    flex-direction: column;
    height:100vh;
    margin-top: -20px;
    justify-content: flex-end;
    align-items: flex-start;
    z-index:10;
    background:green;

    @media ${device.tablet}{
        display:none
    }
    
`


var mobile = styled(NavigationBody)`
    width:50%;
`

export const NavigationLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`
