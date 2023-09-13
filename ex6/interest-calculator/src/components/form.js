import InputFields from "./inputfields";
import ButtonSection from "./buttonsection";
import { useState,useEffect } from "react";

import Form from 'react-bootstrap/Form';

function FormInput(props){
    let [formData, setFormData] = useState({
        // Initialize form fields with default values
        principal: '',
        rate: '',
        years:'',
        interestFunction:1
      });

    const calculateSimpleInterest = (p,r,n) =>{
        let result = (p*n*r)/100;
        console.log(result)
        props.setResult("The simple interest is: "+result);
    }

    const calculateCompoundInterest = (p,r,n) =>{
        r = r/100;
        let result = p*((1+r)**n);
        console.log(p,r,n)
        console.log(result)
        props.setResult("The compound interest is: "+result);
    }

    const calculate = (e) => {
        e.preventDefault();
        console.log('calculate');
        console.log(formData)
        let {principal,rate,years} = {...formData}
        if (formData.interestFunction===1){
            calculateSimpleInterest(principal,rate,years)
        }
        else if (formData.interestFunction===2){
            calculateCompoundInterest(principal,rate,years)
        }

        props.setDisplayStatus('true')
    }

    return (
        <Form className={props.className}>
            <InputFields formData = {formData} setFormData = {setFormData}></InputFields>
            <ButtonSection formData = {formData} setFormData = {setFormData}  onSubmit={calculate} setDisplayStatus = {props.setDisplayStatus}></ButtonSection>
        </Form>
    )
}

export default FormInput;