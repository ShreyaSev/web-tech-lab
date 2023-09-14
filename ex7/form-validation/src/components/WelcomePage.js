import Display from "./Display";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function WelcomePage(){

    let navigate=useNavigate();

    const handleClick = (e) =>{
        e.preventDefault();
        navigate("/")
    }
    return(
        <div className="welcome-page">
            <Display message={'Welcome!'}></Display>
            <Button variant="danger" onClick={handleClick}>Logout</Button>

            
        </div>
    )
}

export default WelcomePage;