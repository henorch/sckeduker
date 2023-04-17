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
        flex-direction:row
    }
    @media ${device.laptop}{
        flex-direction:row
    }

    
`

export const NavigationLogo = styled(Link)`
    width: 70px;
    height:100%;
    padding:10px;
    display: flex;
    align-items: center;
`

export const NavigationBody = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media ${device.mobileS}{
        display: flex
    }
    @media ${device.tablet}{
        display:flex;
    }
`

export const MenuIcon = styled.div`
    width: 50%;
    height: 100%;
`
var mobile = styled(NavigationBody)`
    width:50%;
`

export const NavigationLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`
