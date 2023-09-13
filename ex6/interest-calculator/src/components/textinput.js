import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function TextInput(props){
    return(
        <FloatingLabel
        controlId={props.id}
        label={props.label}
        className="text-input"
        value = {props.value}
      >
        <Form.Control type="number" onChange={props.onChange}/>
      </FloatingLabel>
    )
}

export default TextInput;