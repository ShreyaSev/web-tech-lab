import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Services from './components/services';
import Home from './components/home';
import Corporate from './components/corporate';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path = "/" element = {<Home></Home>}></Route>
          <Route path = "/corporate" element = {<Corporate></Corporate>}></Route>
          <Route path = "/services" element = {<Services></Services>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
