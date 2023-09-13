import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Display from './components/display';

import FormInput from './components/form';

function App() {
  let [resultMessage,setResultMessage] = useState('');
  let [displayStatus,setDisplayStatus] = useState('true');
  
  return (
    <div className="App">
     <Display display={true} resultMessage = {"Simple and Compound Interest Calculator"}></Display>
    <div className='wrapper'>
       <FormInput className={"form-box"} setResult={setResultMessage} setDisplayStatus = {setDisplayStatus} displayStatus={displayStatus}></FormInput>
  
    </div>     
    <Display display = {displayStatus} resultMessage={resultMessage}></Display>
    </div>
  );
}

export default App;
