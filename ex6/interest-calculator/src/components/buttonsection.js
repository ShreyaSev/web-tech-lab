import Button from "react-bootstrap/Button";
import DropdownMenu from "./dropdownbutton";
import Stack from "react-bootstrap/Stack";
import React, { useEffect } from "react";

function ButtonSection(props){

    const handleReset = () =>{
        
        props.setDisplayStatus(false);

    }

    return(
        <Stack direction="horizontal" gap={3} className="button-section">
            <DropdownMenu formData = {props.formData} setFormData = {props.setFormData} onSubmit= {props.onSubmit}></DropdownMenu>
            <Button variant="secondary" type="reset" onClick={handleReset}>Reset</Button>
        </Stack>
    )
}

export default ButtonSection;