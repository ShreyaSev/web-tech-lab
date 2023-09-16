function Display(props){
    return(
        <h1 style={{ userSelect: 'none',...(props.displayStyle || {})}} >{props.message}</h1>
    )
}

export default Display;