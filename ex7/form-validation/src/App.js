import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={LoginPage}></Route>
        <Route path='/welcome' Component={WelcomePage}/>
      </Routes>
    </div>
  );
}

export default App;
