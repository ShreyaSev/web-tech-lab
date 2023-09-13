function Display(props){

  const displayStyle = {
    display: props.display ? 'block' : 'none', // Set display property based on the display prop
  };

    return(
       <div className="result" style={displayStyle}>
         <h1>{props.resultMessage}</h1>
       </div>
    )
}

export default Display;