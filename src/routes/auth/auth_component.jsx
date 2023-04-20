import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { AuthContainer } from "./auth.styles";


const AuthComponent = () => {
    return(
        <>
        <h1>Sign in or Register</h1>
        <AuthContainer>
            <SignIn/>
           <SignUp/>
        </AuthContainer>
        </>
    )
}
export default AuthComponent;