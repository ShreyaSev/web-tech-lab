import Buttonboot from "./button";

function Display(props){
    return(
        <div className={props.className}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default Display;