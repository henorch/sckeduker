import { useState } from "react";
import { SignInContainer, ButtonContainer, containerHeader2 } from  './sign-in.styles';

import { signWithGooglePopup,
    signAuthUserEmailandPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.js";

import FormInput from "../Form/form.components";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";

const defaultFieldVale = {
    email:"",
    password:"",
}


const SignIn = ()=>{

    const [ formField, setFormField] = useState(defaultFieldVale);

    const { email, password} = formField;

    const {setCurrentUser} = useContext(UserContext);

    const resetFormField = () => setFormField(defaultFieldVale)
    
    const SignInWithGoogle = async () => {
        const {user} = await signWithGooglePopup();
        await createUserDocumentFromAuth(user)
        console.log(user);
        setCurrentUser(user)
    }
    
    const handleSubmit = async  (e) => {
        e.preventDefault();
        console.log("hello");
        
        try {
            const { user } = await signAuthUserEmailandPassword(email,password);
            setCurrentUser(user)
           resetFormField()
            }  
        catch (error) {
            console.log("error", error);
        }
    }
    const handleOnChange = (e) => {
        const { name, value} = e.target;
        setFormField({...formField,
            [name]: value})
    }

    return(
        <SignInContainer>
            <h2>Sign In</h2>
            <span>Sign in with your email</span>
            <form onSubmit={handleSubmit}>
           

                <FormInput
                        label="email"
                        required
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        value={email}
                         />

                <FormInput
                        label="password"
                        required
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        value={password} />

                        
                <ButtonContainer>
                    <Button type="submit">SIGN IN</Button>
                    <Button buttonType="google" onClick={SignInWithGoogle}>GOOGLE SIGN-IN</Button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    )
}


export default SignIn;