import TextInput from './textinput';
import Stack from 'react-bootstrap/Stack';

function InputFields(props) {
    const handleInputChange = (e) =>{
        // e.preventDefault();
        let id = e.target.id;
        let value = e.target.value;
        props.setFormData({...props.formData,[id]:value});
    }

    var {principal,rate,years} = props.formData
   
    return(
        <Stack className='inputFields' gap={3}>
            <TextInput label="Principal amount" value={principal} id={"principal"} onChange={handleInputChange}></TextInput>
            <TextInput label="Rate of interest (p.a)" id={"rate"} value = {props.formData.rate} onChange={handleInputChange}></TextInput>
            <TextInput label="Time period(Yr)" id={"years"}  onChange={handleInputChange} value={props.formData.years}></TextInput>
        </Stack>
    )
}

export default InputFields;