import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function SearchBox({filterText, onFilterTextChange}){
  return (
    <input class = "search" id = "searchbox" type='text' value={filterText} onChange={(e)=>onFilterTextChange(e.target.value)}></input>
  )
}

function EmployeeTable({employees , filterText}){
  const rows = []

  employees.forEach(element => {
    if (element.department.toLowerCase().indexOf(filterText.toLowerCase())===-1){
      return;
    }
    else{
    rows.push(< EmployeeRow employee={element} key = {element.name}/>)
    }
  });

  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Department</th>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

function EmployeeRow({employee}){
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
    </tr>
  )
}

function FilterableEmployeeTable() {
  
  const [filterText, setFilterText] = useState('');

  return (
    <div className="App">

      <SearchBox value = {filterText} onFilterTextChange={setFilterText} ></SearchBox>
      <EmployeeTable employees={EMPLOYEES} filterText={filterText}></EmployeeTable>
      
    </div>
  );
}

const EMPLOYEES  = [

  { name: "Tony Stark", department: "IT" },

  { name: "Peter Parker", department: "Pizza Delivery" },

  { name: "Bruce Wayne", department: "IT" },

  { name: "Clark Kent", department: "Editing" },

]

export default FilterableEmployeeTable;


/*
pros of dropdown menu:
1. user does not have to enter any data which means errors due to spelling mistakes and such can be avoided.
2. you can only search for existing departments

cons of dropdown menu:
1. in case there is a large number of departments, dropdown menu is a pain to search through

pros of searchable filter:
1. even if there is a large number of deparments it can be easily searched through

cons of searchable filter:
1. in the current implementation, if two departments contain the filter substring they both are shown in the results, eg. if you search for it, IT dept as well as Editing dept show up. 
2. In order to fix this, you need to only search for exact match - which can lead to errors, also we need to implement an event handler to search only on enter key press - increases complexity
*/
