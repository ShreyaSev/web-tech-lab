import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



const EMPLOYEES  = [

  { name: "Tony Stark", department: "IT" },

  { name: "Peter Parker", department: "Pizza Delivery" },

  { name: "Bruce Wayne", department: "IT" },

  { name: "Clark Kent", department: "Editing" },

];

function EmployeeRow({employee}){
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
    </tr>
  );
}

function EmployeeTable({employees, filterDepartment}){
  let rows = [];
  employees.forEach(element => {
    if (element.department===filterDepartment || filterDepartment==="Select..."){
    rows.push(<EmployeeRow employee = {element} key = {element.name}/> )}
  })

  return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table> 
  );

}
function DepartmentFilter({employees, filterDepartment, onFilterDepartmentChange}){
  let departments = []
  employees.forEach(element => {
   if (!departments.includes(element.department)){
    departments.push(element.department)
   }
  }
  )
  let options = [<option selected key="default ">Select...</option>]
  departments.forEach(element => {
    options.push(<option value = {element} key = {element}>{element}</option>)
  }
  )

  return (
    <select value={filterDepartment} onChange={(e)=> onFilterDepartmentChange(e.target.value)}>{options}</select>
  );
}

function FilterableEmployeeTable({employees}){
  const [filterDepartment, setFilterDepartment] = useState('Select...');
  // const [TableData, setTableData] =useState(EMPLOYEES);

  return (
    <div>
      <DepartmentFilter employees={employees} filterDepartment = {filterDepartment} onFilterDepartmentChange = {setFilterDepartment}></DepartmentFilter>
      <EmployeeTable employees = {employees} filterDepartment = {filterDepartment} onFilterDepartmentChange ={setFilterDepartment}></EmployeeTable>
    </div>
  );
}

function App() {
  return (
    <FilterableEmployeeTable employees={EMPLOYEES}></FilterableEmployeeTable>
  );
}
export default App;
