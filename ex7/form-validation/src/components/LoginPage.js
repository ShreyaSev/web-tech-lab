import Display from "./Display"
import FormContainer from "./FormContainer";
import { useState } from "react";

function LoginPage(){
    let[flag,setFlag] = useState(true)

    let displayStyle = {display: flag? "none":"block",
                    flexShrink:0};
    return(
        <div className='login-page'>
            <Display message={"Login"}></Display>
            <FormContainer setFlag = {setFlag}></FormContainer>
            <Display message={'Sorry! Your name and password do not match!'} displayStyle = {displayStyle}></Display>
        </div>
    )
}

export default LoginPage;