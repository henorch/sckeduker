import { Outlet } from 'react-router-dom';
import { NavigationContainer, mobile, NavigationLogo, NavigationBody, NavigationLink } from './navigation.styled'


const Navigation = () => {
   return (
    <>
    <NavigationContainer>
        <NavigationLogo to="/"> <h2>Sckeduler</h2>
        <span>&#232423;</span>
        </NavigationLogo>
        <NavigationBody>
            <NavigationLink to='/schedule'>Schedules</NavigationLink>
            <NavigationLink to='/create'>Create Schedule</NavigationLink>
            <NavigationLink to='/auth'>Sign In</NavigationLink>
        </NavigationBody>
    </NavigationContainer>
    <Outlet/>
    </>
   )

}

export default Navigation;