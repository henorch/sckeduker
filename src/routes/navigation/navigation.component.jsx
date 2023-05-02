import { Outlet, useNavigate } from 'react-router-dom';
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
    const  navigate  = useNavigate();

    const goToAuth = () => {
        navigate('/auth')
    }

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

   

    const signoutHandler = async () => {
        const resp = await SignOutUser();
        setCurrentUser(null)
        handleToggle()
        goToAuth()
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
            {currentUser ? <>
            <NavigationLink onClick={handleToggle} to='/'>My Schedules</NavigationLink>
            <NavigationLink onClick={handleToggle} to='/create'>Create new Schedule</NavigationLink>
            <NavigationLink onClick={handleToggle} to='/home'>People on scheduler</NavigationLink>
            <NavigationLink  as="span" to="/auth" onClick={signoutHandler}> 
                Sign Out
              </NavigationLink >
        </>
        :
        <>
                <NavigationLink to='/auth'>Sign In</NavigationLink> 
               </> 
                }
           </NavigationBodyMobile>}

        <NavigationBody>
        { currentUser  ? <>
            <NavigationLink to='/'>My Schedules</NavigationLink>
            <NavigationLink to='/create'>Create new Schedule</NavigationLink>
            <NavigationLink to='/home'>People on scheduler</NavigationLink>
            
                <NavigationLink  as="span" to="/auth"  onClick={signoutHandler}>
                Sign Out
              </NavigationLink > </>:
                <NavigationLink to='/auth'>Sign In</NavigationLink> }
        </NavigationBody>
    </NavigationContainer>
    <Outlet/>
    </>
   )

}

export default Navigation;