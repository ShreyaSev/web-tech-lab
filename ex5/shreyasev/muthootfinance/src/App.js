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


// Muthoot Finance does not have any AI roles. However, they do have a Data Science and Analtics Department.
// Data analysts are responsible for analyzing data using statistical techniques, implementing and maintaining databases, gathering data from primary and secondary sources, identifying, analyzing and interpreting trends from the data.


// Interpreting data, analyzing results using statistical techniques.


// Developing and implementing data analyses, data collection systems and other strategies that optimize statistical efficiency and quality.


// they are a finance based company focusing on gold loans. they might have to shift to other areas as youngsters do not see gold as their primary investment.
// AI and DS is unlikely to disrupt this sector. They are already using AI chatbots as customer service tools.