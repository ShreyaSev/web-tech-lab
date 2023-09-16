import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function FormContainer(props){

const USERS = {"Shreya": '1Password',
                'user2':'notPassword2'}

let defaultFormData = {
    name:'',
    email:'',
    password:''
};

let navigate = useNavigate()

let [formData,setFormData] = useState(defaultFormData);
let [passwordValidation,setPasswordValidation] = useState('false');
let validation= false;
const checkDatabase = (name,password) =>{
    if (USERS[name]==password){
        validation = true;
    }
    else{
        validation = false;
    }
}

const handleChange=(e)=>{
    e.preventDefault();
    let id=e.target.id;
    let value = e.target.value;
    setFormData({...formData,[id]:value})
};

const validatePassword = () =>{
        let password = formData.password;
        let lowerCase = new RegExp("(?=.*[a-z])");
        let upperCase = new RegExp("(?=.*[A-Z])");
        let numeric = new RegExp("(?=.*[0-9])");
        if (lowerCase.test(password) && upperCase.test(password) && numeric.test(password)) {
            setPasswordValidation(true)
            return true;
        } else {
            setPasswordValidation(false)
            return false;
        }
}

const handlePasswordChange = (e) =>{
    handleChange(e);
    validatePassword();
}

const handleSubmit = (e) =>{
    if (passwordValidation===true){
        if (formData.name!=='' && formData.email!==''){
            checkDatabase(formData.name,formData.password);
            if (validation===true){
                navigate('/welcome');
            }

            else{
                e.preventDefault();
                setFormData(defaultFormData);
                props.setFlag(false)
            }
        }
    }
}

let displayStyle = {display: passwordValidation? "none":"block",
                    flexShrink:0};

return(
    <div className='form'>
        <div className='input-fields'>
            <Form onSubmit={handleSubmit}>
                <FormGroup className='input-field' >
                    <Form.Label htmlFor='name' style={{ userSelect: 'none' }}>Name</Form.Label>
                    <Form.Control
                        type='text'
                        id='name'
                        placeholder='John Doe'
                        onChange={handleChange} required={"required"}
                        value={formData.name}>
                        
                    </Form.Control>
                </FormGroup>
                
                <FormGroup className='input-field' >
                    <Form.Label htmlFor='email' style={{ userSelect: 'none' }}>Email</Form.Label>
                    <Form.Control
                        type='email'
                        id='email'
                        placeholder='example@email.com'
                        onChange={handleChange}
                        value={formData.email} required>
                    
                    </Form.Control>
                </FormGroup>
                
                <FormGroup className='input-field' >
                    <Form.Label htmlFor='password' style={{ userSelect: 'none' }}>Password</Form.Label>
                    <Form.Control
                        type='password'
                        id='password'
                        placeholder=''
                        aria-describedby='passwordHelpBlock'
                        onChange={handlePasswordChange}
                        onBlur={validatePassword} 
                        value={formData.password}
                        required>
                    
                    </Form.Control>
                    <Form.Text id="passwordHelpBock" muted style={displayStyle}>The password should have 1 lowercase, 1 uppercase, and 1 number.</Form.Text>
                </FormGroup>
                
                <Button className='button' type='submit' as='button' variant="warning" >Login</Button>
            </Form>
        </div>
    </div>
    )
}


export default FormContainer;