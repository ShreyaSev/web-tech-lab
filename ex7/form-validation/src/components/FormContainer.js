import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function FormContainer(){

let defaultFormData = {
    name:'',
    email:'',
    password:''
};

let navigate = useNavigate()

let [formData,setFormData] = useState(defaultFormData);
let [validation,setValidation] = useState('false');

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
            setValidation(true)
            return true;
        } else {
            setValidation(false)
            return false;
        }
}

const handlePasswordChange = (e) =>{
    handleChange(e);
    validatePassword();
}

const handleSubmit = (e) =>{
    if (validation===true){
        if (formData.name!=='' && formData.email!==''){
            navigate('/welcome');
        }
    }
}

let displayStyle = {display: validation? "none":"block",
                    flexShrink:0};

return(
    <div className='form'>
        <div className='input-fields'>
            <Form onSubmit={handleSubmit}>
                <FormGroup className='input-field' controlId='name'>
                    <Form.Label htmlFor='name' style={{ userSelect: 'none' }}>Name</Form.Label>
                    <Form.Control
                        type='text'
                        id='name'
                        placeholder='John Doe'
                        onChange={handleChange} required={"required"}>
                        
                    </Form.Control>
                </FormGroup>
                
                <FormGroup className='input-field' controlId='email'>
                    <Form.Label htmlFor='email' style={{ userSelect: 'none' }}>Email</Form.Label>
                    <Form.Control
                        type='email'
                        id='email'
                        placeholder='example@email.com'
                        onChange={handleChange} required>
                    
                    </Form.Control>
                </FormGroup>
                
                <FormGroup className='input-field' controlId='password'>
                    <Form.Label htmlFor='password' style={{ userSelect: 'none' }}>Password</Form.Label>
                    <Form.Control
                        type='password'
                        id='password'
                        placeholder=''
                        aria-describedby='passwordHelpBlock'
                        onChange={handlePasswordChange}
                        onBlur={validatePassword} 
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