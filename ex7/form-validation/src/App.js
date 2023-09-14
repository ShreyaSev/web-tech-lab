import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  let [validation,setValidation] = useState('false');

  return (

    <div className="App">
      <Routes>
        <Route path="/" Component={LoginPage} index={true}></Route>
        <Route path='/welcome' Component={WelcomePage}/>
      </Routes>
    </div>
  );
}

export default App;
