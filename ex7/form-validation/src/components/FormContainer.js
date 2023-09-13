import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { Button } from 'react-bootstrap';

function FormContainer(){
return(
    <div className='form'>
        <div className='input-fields'>
            <FormGroup className='input-field' controlId='name'>
                <Form.Label htmlFor='inputName'>Name</Form.Label>
                <Form.Control
                    type='text'
                    id='inputName'
                    placeholder='John Doe'>
                
                </Form.Control>
            </FormGroup>

            <FormGroup className='input-field' controlId='email'>
                <Form.Label htmlFor='inputEmail'>Email</Form.Label>
                <Form.Control
                    type='email'
                    id='inputEmail'
                    placeholder='example@email.com'>
                
                </Form.Control>
            </FormGroup>
            
            <FormGroup className='input-field' controlId='password'>
                <Form.Label htmlFor='inputPassword'>Password</Form.Label>
                <Form.Control
                    type='password'
                    id='inputPassword'
                    placeholder=''
                    aria-describedby='passwordHelpBlock'>
                
                </Form.Control>
                <Form.Text id="passwordHelpBock" muted>The password should have 1 lowercase, 1 uppercase, and 1 number.</Form.Text>
            </FormGroup>
        </div>
        <Button type='submit' as='button' variant="warning">Login</Button>
    </div>
)
};

export default FormContainer;