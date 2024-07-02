import React, { useEffect, useState } from 'react';
import {listEmployees} from "../Services/EmployeeService";
import Navbar from './Navbar';



 
const EmployeeList = () => {
 const [employees,setEmployees] = useState<EmployeeDTO[]>([])
 useEffect(()=> {
  listEmployees().then((response)=> {
    setEmployees(response.data);  
  
 }).catch(error => {
    console.error(error);

 })

},[])

return (
  <>
  <Navbar/>
  
    <div className='container mx-auto px-4'>
      <h2 className='text-center text-xl font-bold mb-4'>Employees List</h2>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2 border border-red-200'>Employee ID</th>
            <th className='px-4 py-2 border border-red-200'>Employee First Name</th>
            <th className='px-4 py-2 border border-red-200'>Employee Last Name</th>
            <th className='px-4 py-2 border border-red-200'>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className='hover:bg-gray-100'>
              <td className='border border-red-600'>{employee.id}</td>
              <td className='border border-red-600'>{employee.firstName}</td>
              <td className='border border-red-600'>{employee.lastName}</td>
              <td className='border border-red-600'>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};




export default EmployeeList;