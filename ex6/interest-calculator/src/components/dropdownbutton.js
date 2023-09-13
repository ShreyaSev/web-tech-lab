import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownMenu(props) {

    const setSimpleInterest = (e) =>{ 
        e.preventDefault();
        props.setFormData({...props.formData,interestFunction:1});
        console.log(props.formData.interestFunction)
    }

    function setCompoundInterest(e){
        e.preventDefault();
        props.setFormData({...props.formData,interestFunction:2});
        console.log(props.formData.interestFunction)
    }


    return(
        <Dropdown as={ButtonGroup}>
            <Button type='submit' variant='primary' onClick={props.onSubmit}>Calculate</Button>

            <Dropdown.Toggle split variant='primary' id='dropdown-split-basic'></Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item as="button" onClick={setSimpleInterest}>Simple Interest</Dropdown.Item>
                <Dropdown.Item as = "button" onClick={setCompoundInterest}>Compound Interest</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}


export default DropdownMenu;