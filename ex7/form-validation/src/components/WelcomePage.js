import Display from "./Display";
import { Button } from "react-bootstrap";

function WelcomePage(){
    return(
        <div className="welcome-page">
            <Display message={'Welcome!'}></Display>
            <Button variant="danger">Logout</Button>

            
        </div>
    )
}

export default WelcomePage;