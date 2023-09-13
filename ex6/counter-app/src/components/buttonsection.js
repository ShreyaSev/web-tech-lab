import Buttonboot from "./button";
import {Stack} from "react-bootstrap";


function ButtonSection(props){
    return(
        <div className={props.className}>
            
            <Stack direction="horizontal" gap={3}>
                <Buttonboot color="success" text="Increment" onClick={props.increment} ></Buttonboot>
                <Buttonboot color="danger" text="Decrement" onClick={props.decrement} flag={props.c==0? 1:0}></Buttonboot>
            </Stack>
        </div>
    )
}

export default ButtonSection;