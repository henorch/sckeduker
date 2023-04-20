import { Outlet } from 'react-router-dom';
import { NavigationContainer, mobile, NavigationLogo, NavigationBody, NavigationLink } from './navigation.styled'
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
   return (
    <>
    <NavigationContainer>
        <NavigationLogo to="/"> <h2>Sckeduler</h2>
        </NavigationLogo>
        <NavigationBody>
            <NavigationLink to='/'>My Schedules</NavigationLink>
            <NavigationLink to='/create'>Create new Schedule</NavigationLink>
            { !currentUser  ? 
                <NavigationLink to='/auth'>Sign In</NavigationLink> :
                <NavigationLink to='/auth'>Sign Up</NavigationLink> }
            <NavigationLink to='/home'>People using scheduler</NavigationLink>
        </NavigationBody>
    </NavigationContainer>
    <Outlet/>
    </>
   )

}

export default Navigation;