import { Outlet } from 'react-router-dom';
import { NavigationContainer, 
    NavIcon,
    NavigationLogo, 
    NavigationBody,
    NavigationBodyMobile,
     NavigationLink } from './navigation.styled'
import { useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';
import { SignOutUser } from '../../utils/firebase/firebase';



const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }


    const signoutHandler = async () => {
        const resp = await SignOutUser();
        setCurrentUser(null)
        handleToggle()
    }
   return (
    <>
    <NavigationContainer>
        <div style={{
            display:'flex',
            alignItems:'center',
            flexDirection:'row'
        }}>
        <NavigationLogo to="/"> <h2>Sckeduler</h2></NavigationLogo>
        <NavIcon onClick={handleToggle}>&#9776;</NavIcon>
        </div>
        {isOpen &&
        <NavigationBodyMobile>
            <NavigationLink onClick={handleToggle} to='/schedule'>My Schedules</NavigationLink>
            <NavigationLink onClick={handleToggle} to='/create'>Create new Schedule</NavigationLink>
            
            { currentUser  ? 
                <NavigationLink  as="span" to='/' onClick={signoutHandler}>
                Sign Out
              </NavigationLink >:
                <NavigationLink to='/'>Sign In</NavigationLink> } 
            <NavigationLink onClick={handleToggle} to='/home'>People on scheduler</NavigationLink>
        </NavigationBodyMobile>}

        <NavigationBody>
            <NavigationLink to='/schedule'>My Schedules</NavigationLink>
            <NavigationLink to='/create'>Create new Schedule</NavigationLink>
            { currentUser  ? 
                <NavigationLink  as="span" to='/' onClick={signoutHandler}>
                Sign Out
              </NavigationLink >:
                <NavigationLink to='/'>Sign In</NavigationLink> }
            <NavigationLink to='/home'>People on scheduler</NavigationLink>
        </NavigationBody>
    </NavigationContainer>
    <Outlet/>
    </>
   )

}

export default Navigation;