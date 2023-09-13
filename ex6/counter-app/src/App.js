import logo from './logo.svg';
import './App.css';
import Display from './components/display';
import ButtonSection from './components/buttonsection';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack'


function App() {
  
  let [count,setCount] = useState(0);

  const incrementCount = () =>{
    setCount(count+1);
  }

  const decrementCount = () =>{
    setCount(count-1);
  }

  return (
    <div className="App">
     <Stack direction='vertical' className='container'>
       <Display className="header" text="Counter App"></Display>
       <Display className="counter" text={count}></Display>
       <ButtonSection className='buttonSection' increment={incrementCount} decrement={decrementCount} c={count}></ButtonSection>
     </Stack>
    </div>
  );
}

export default App;
