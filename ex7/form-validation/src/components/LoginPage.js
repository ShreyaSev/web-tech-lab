import Display from "./Display"
import FormContainer from "./FormContainer";

function LoginPage(){

    return(
        <div className='login-page'>
            <Display message={"Login"}></Display>
            <FormContainer></FormContainer>
        </div>
    )
}

export default LoginPage;