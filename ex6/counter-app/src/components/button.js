import {Button} from "react-bootstrap";

function Buttonboot(props){
    return(
        <Button variant={props.color} onClick={props.onClick} disabled={props.flag}>{props.text}</Button>
    )
}

export default Buttonboot;